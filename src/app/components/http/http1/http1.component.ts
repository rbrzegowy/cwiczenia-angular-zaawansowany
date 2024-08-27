import { Component, inject } from '@angular/core'
import { JsonPlaceholderApiService } from '../../../services/json-placeholder-api.service'
import { Observable } from 'rxjs'
import { AsyncPipe, JsonPipe } from '@angular/common'

@Component({
  selector: 'app-http1',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './http1.component.html',
  styleUrl: './http1.component.scss'
})
export class Http1Component {

  private api = inject(JsonPlaceholderApiService)

  protected post!: Observable<any>
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  onGetPostClick() {
    const randomPostNumber = Math.floor(Math.random() * 10)
    this.post = this.api.getPost(randomPostNumber)
  }
}
