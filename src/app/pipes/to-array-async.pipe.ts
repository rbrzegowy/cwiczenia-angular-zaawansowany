import { Pipe, PipeTransform } from '@angular/core'
import { map, Observable, scan } from 'rxjs'

@Pipe({
  name: 'toArray',
  standalone: true
})
export class ToArrayPipe implements PipeTransform {

  transform(value: Observable<unknown>, showOnlyLatest = 0): Observable<unknown> {
    const accumulated = value.pipe(
      scan((acc, curr) => [...acc, curr], [] as unknown[]),
      map(arr => {
        if (showOnlyLatest === 0 || arr.length <= showOnlyLatest) {
          return arr
        } else {
          const onlyLatest = arr.slice(-showOnlyLatest)
          const hiddenCount = arr.length - showOnlyLatest
          onlyLatest.unshift(`[+${hiddenCount} wcześniej]`)
          return onlyLatest
        }
      }))
    return accumulated
  }
}
