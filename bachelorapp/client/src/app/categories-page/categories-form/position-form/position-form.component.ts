import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {PositionsService} from '../../../shared/services/position.service'
import {Position} from '../../../shared/interfaces'
import {MaterialInstance, MaterialService} from '../../../shared/classes/material.service'
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.scss']
})
export class PositionFormComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('categoryId') categoryId!: string
  @ViewChild('modal') modalRef!: ElementRef
  positions: Position[] = []
  loading = false
  positionId = null
  modal!: MaterialInstance
  form!: FormGroup

  constructor(private positionsService: PositionsService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      cost: new FormControl(1, [Validators.required, Validators.min(1)])
    })
    this.loading = true

    this.positionsService.fetch(this.categoryId).subscribe(positions => {
      this.positions = positions
      this.loading = false
    })
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }
  ngOnDestroy() {
    this.modal.destroy()
  }
  onAddPosition() {
    this.positionId = null
    this.form.reset({name: null, cost: 1})
    this.modal.open()
    MaterialService.updateTextInputs()
  }
  onCancel() {
    this.modal.close()
  }

  onSubmit() {
    this.form.disable()

    const newPosition: Position = {
      name: this.form.value.name,
      cost: this.form.value.cost,
      category: this.categoryId
    }

    const completed = () => {
      this.modal.close()
      this.form.reset({name: '', cost: 1})
      this.form.enable()
    }

    if (this.positionId) {
      newPosition._id = this.positionId
      this.positionsService.update(newPosition).subscribe(
        position => {
          const idx = this.positions.findIndex(p => p._id === position._id)
          this.positions[idx] = position
          MaterialService.toast('Changes are saved')
        },
        error => MaterialService.toast(error.error.message),
        completed
      )
    } else {
      this.positionsService.create(newPosition).subscribe(
        position => {
          MaterialService.toast('Position is created')
          this.positions.push(position)
        },
        error => MaterialService.toast(error.error.message),
        completed
      )
    }
  }

  onSelectPosition(position: Position) {
    //@ts-ignore
    this.positionId = position._id
    this.form.patchValue({
      name: position.name,
      cost: position.cost
    })
    this.modal.open()
    MaterialService.updateTextInputs()
  }

  onDeletePosition(event: Event, position: Position) {
    event.stopPropagation()
    const decision = window.confirm(`Delete position "${position.name}"?`)

    if (decision) {
      this.positionsService.delete(position).subscribe(
        response => {
          const idx = this.positions.findIndex(p => p._id === position._id)
          this.positions.splice(idx, 1)
          MaterialService.toast(response.message)
        },
        error => MaterialService.toast(error.error.message)
      )
    }
  }

}
