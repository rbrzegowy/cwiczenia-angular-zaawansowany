import { Component } from '@angular/core'
import { filter, find, map, of, range, take } from 'rxjs'
import { ToArrayPipe } from "../../../pipes/to-array-async.pipe"
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-rxjs1',
  imports: [ToArrayPipe, AsyncPipe],
  templateUrl: './rxjs1.component.html',
  styleUrl: './rxjs1.component.scss'
})
export class Rxjs1Component {
  private source$ = range(1, 20)

  // uzupełnij pipes
  onlyEven$ = this.source$.pipe(filter(val => val % 2 === 0))
  onlyValue8$ = this.source$.pipe(find(val => val === 8))
  firstFive$ = this.source$.pipe(take(5))
  mappedToStringX$ = this.source$.pipe(map(val => `Liczba ${val}`))

}