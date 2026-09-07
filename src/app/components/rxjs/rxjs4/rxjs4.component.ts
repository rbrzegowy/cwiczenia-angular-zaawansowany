import { AsyncPipe } from '@angular/common'
import { Component, signal } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { concat, delay, forkJoin, map, Observable, of, pipe, Subject, tap, timer } from 'rxjs'

@Component({
  selector: 'app-rxjs4',
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
