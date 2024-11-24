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
  result$ = of(null)

  // BONUS: Zamien głosy na losowe

  // BONUS2:
  // wyświetl najpierw: "Trwa głosowanie", następnie wyniki,
  // następnie(po 2s),"Głosowanie zakończone"
  // concat(obs1$, obs2$, obs3$)
}
