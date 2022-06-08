import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {Router, NavigationEnd} from '@angular/router'
import {MaterialInstance, MaterialService} from '../shared/classes/material.service'
import { OrderPosition, Order } from '../shared/interfaces'
import {OrderService} from './order.service'
import { OrdersService } from '../shared/services/orders.service'

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  providers: [OrderService]
})
export class OrderPageComponent implements OnInit, OnDestroy, AfterViewInit {

  isRoot!: boolean
  modal!: MaterialInstance
  @ViewChild('modal') modalRef!: ElementRef
  pending = false

  constructor(private router: Router,
              public order: OrderService,
              private ordersService: OrdersService
              ) {
  }

  ngOnInit(): void {
    this.isRoot = this.router.url === '/order'
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRoot = this.router.url === '/order'
      }
    })
  }

  ngOnDestroy() {
    this.modal.destroy()
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }

  open() {
    this.modal.open()
  }
  removePosition(orderPosition: OrderPosition) {
    this.order.remove(orderPosition)
  }

  cancel() {
    this.modal.close()
  }

  submit() {
    this.modal.close()
    // this.pending = true

    const order: Order = {
      list: this.order.list.map(item => {
        delete item._id
        return item
      })
    }

    this.ordersService.create(order).subscribe(
      newOrder => {
        MaterialService.toast(`Заказ №${newOrder.order} был добавлен.`)
        this.order.clear()
      },
      error => MaterialService.toast(error.error.message),
      () => {
            this.modal.close()
            this.pending = false
          }

    )
  }



}
