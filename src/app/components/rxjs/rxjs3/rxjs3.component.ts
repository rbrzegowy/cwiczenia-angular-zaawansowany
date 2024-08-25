import { AsyncPipe } from '@angular/common'
import { Component } from '@angular/core'
import { ToArrayPipe } from '../../../pipes/to-array-async.pipe'
import { of } from 'rxjs'

@Component({
  selector: 'app-rxjs3',
  standalone: true,
  imports: [ToArrayPipe, AsyncPipe],
  templateUrl: './rxjs3.component.html',
  styleUrl: './rxjs3.component.scss'
})
export class Rxjs3Component {
  // zamień of na fromEvent
  pointerCoords$ = of(null)
}
