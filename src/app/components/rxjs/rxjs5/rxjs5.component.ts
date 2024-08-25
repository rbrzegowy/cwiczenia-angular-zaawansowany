import { Component, ElementRef, ViewChild, viewChild } from '@angular/core'
import { ToArrayPipe } from '../../../pipes/to-array-async.pipe'
import { AsyncPipe } from '@angular/common'
import { of } from 'rxjs'

@Component({
  selector: 'app-rxjs5',
  standalone: true,
  imports: [ToArrayPipe, AsyncPipe],
  templateUrl: './rxjs5.component.html',
  styleUrl: './rxjs5.component.scss'
})
export class Rxjs5Component {
  @ViewChild('searchBox', { read: ElementRef }) private searchBox: ElementRef<HTMLInputElement> | undefined

  // ty wiesz co tu trzeba zrobić;)
  searchData$ = of(null)

  onSearchBoxChange(val: string) {
    console.log(val)
  }
}
