import { Pipe, PipeTransform } from '@angular/core'
import { Observable, scan } from 'rxjs'

@Pipe({
  name: 'toArray',
  standalone: true
})
export class ToArrayPipe implements PipeTransform {

  transform(value: Observable<unknown>): Observable<unknown> {
    const accumulated = value.pipe(scan((acc, curr) => [...acc, curr], [] as unknown[]))
    return accumulated
  }

}
