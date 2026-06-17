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


  generateRandomVote = pipe(
    map(() => Math.random() >= 0.5 ? 'za' : 'przeciw'),
    tap(() => console.log('kolejny głos został wygenerowany'))
  )

  generateRandomVote2 = (obs: Observable<any>) => {
    const retObs = new Subject()
    obs.subscribe({
      next: () => {
        console.log('kolejny głos został wygenerowany')
        retObs.next(Math.random() >= 0.5 ? 'za' : 'przeciw')
      },
      error: (err) => retObs.error(err),
      complete: () => retObs.complete()
    })
    return retObs.asObservable()
  }

  vote1$ = timer(1000).pipe(
    this.generateRandomVote,
  )
  vote2$ = timer(3000).pipe(
    this.generateRandomVote,
  )
  vote3$ = timer(2000).pipe(
    this.generateRandomVote,
  )
  // zamień of na właściwe rozwiązanie
  // votes$ = forkJoin([this.vote1$, this.vote2$, this.vote3$])



  // BONUS2:
  // wyświetl najpierw: "Trwa głosowanie", następnie wyniki, 
  // następnie(po 2s),"Głosowanie zakończone"
  // concat(obs1$, obs2$, obs3$)
  votingInProgress$ = of('Trwa głosowanie')
  votingEnd$ = timer(3000).pipe(map(() => 'Głosowanie zakończone!'))

  votes$ = forkJoin([this.vote1$, this.vote2$, this.vote3$])

  result = toSignal(concat(
    this.votingInProgress$,
    this.votes$.pipe(map(d => `Wyniki głosowania: ${d}`)),
    this.votingEnd$
  ).pipe(tap(console.log)))

  // BONUS: Zamień głosy na losowe
}
