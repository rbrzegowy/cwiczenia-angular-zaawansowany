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
  tenDaysFromNow$ = new Observable((sub: Subscriber<string>) => {
    const d = new Date()
    for (let day = 1; day <= 10; day++) {
      d.setDate(d.getDate() + 1)
      sub.next(d.toLocaleDateString())
    }
    sub.complete()
  })

  // tenDaysFromNow$ = new Observable((sub: Subscriber<string>) => {
  //   const d = new Date()
  //   let licznik = 0
  //   const interval = setInterval(() => {
  //     d.setDate(d.getDate() + 1)
  //     sub.next(d.toLocaleDateString())
  //     licznik++
  //     if (licznik >= 10) {
  //       clearInterval(interval)
  //       sub.complete()
  //     }
  //   }, 1000)
  // })

  // tenDaysFromNow$ = new Observable((sub: Subscriber<string>) => {
  //   const d = new Date()
  //   interval(1000).pipe(
  //     take(10),
  //     finalize(() => sub.complete())
  //   ).subscribe(() => {
  //     d.setDate(d.getDate() + 1)
  //     sub.next(d.toLocaleDateString())
  //   })
  // })
}
