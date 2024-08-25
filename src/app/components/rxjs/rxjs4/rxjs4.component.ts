import { AsyncPipe } from '@angular/common'
import { Component } from '@angular/core'
import { of } from 'rxjs'

@Component({
  selector: 'app-rxjs4',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rxjs4.component.html',
  styleUrl: './rxjs4.component.scss'
})
export class Rxjs4Component {

  // zamień of na właściwe rozwiązanie
  votes$ = of(null)
}
