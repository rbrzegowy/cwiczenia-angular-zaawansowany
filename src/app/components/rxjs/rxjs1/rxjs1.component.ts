import { Component } from '@angular/core'
import { of, range } from 'rxjs'
import { ToArrayPipe } from "../../../pipes/to-array-async.pipe"
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-rxjs1',
  standalone: true,
  imports: [ToArrayPipe, AsyncPipe],
  templateUrl: './rxjs1.component.html',
  styleUrl: './rxjs1.component.scss'
})
export class Rxjs1Component {
  private source$ = range(1, 20)

  // uzupełnij pipes
  onlyEven$ = this.source$.pipe()
  onlyValue8$ = this.source$.pipe()
  firstFive$ = this.source$.pipe()
  mappedToStringX$ = this.source$.pipe()

}
