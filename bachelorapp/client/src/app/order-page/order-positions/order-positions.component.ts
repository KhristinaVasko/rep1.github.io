import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import { Observable, switchMap, map } from 'rxjs'
import { PositionsService } from 'src/app/shared/services/position.service'
import {Position} from '../../shared/interfaces'
import { OrderService } from '../order.service'


@Component({
  selector: 'app-order-positions',
  templateUrl: './order-positions.component.html',
  styleUrls: ['./order-positions.component.scss']
})
export class OrderPositionsComponent implements OnInit {

  positions$!: Observable<Position[]>

  constructor(
    private route: ActivatedRoute,
    private positionsService: PositionsService,
    private order: OrderService
  ) { }

  ngOnInit(): void {
    this.positions$ = this.route.params
    .pipe(
      switchMap(
        (params: Params) => {
          return this.positionsService.fetch(params['id'])
        }
      ),
      map(
        (positions: Position[]) => {
          return positions.map(position => {
            position.quantity = 1
            return position
          })
        }
      )
    )
  }

  addToOrder(position: Position) {
   this.order.add(position)
  }

}
