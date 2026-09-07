import { Component } from '@angular/core'
import { finalize, interval, Observable, of, Subscriber, take } from 'rxjs'
import { ToArrayPipe } from "../../../pipes/to-array-async.pipe"
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-rxjs2',
  imports: [ToArrayPipe, AsyncPipe],
  templateUrl: './rxjs2.component.html',
  styleUrl: './rxjs2.component.scss'
})
export class Rxjs2Component {

  // usuń of i utwórz cold observable
  // daty - 10 dni
  tenDaysFromNow$ = of(new Date())
}
