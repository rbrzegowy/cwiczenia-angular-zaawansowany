import { Component } from '@angular/core'
import { of } from 'rxjs'
import { ToArrayPipe } from "../../../pipes/to-array-async.pipe"
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-rxjs2',
  standalone: true,
  imports: [ToArrayPipe, AsyncPipe],
  templateUrl: './rxjs2.component.html',
  styleUrl: './rxjs2.component.scss'
})
export class Rxjs2Component {

  // usuń of i utwórz cold observable
  tenDaysFromNow$ = of(new Date())
}
