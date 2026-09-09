import { Component, inject } from '@angular/core'
import { delay, Observable } from 'rxjs'
import { JsonPlaceholderApiService } from '../../services/json-placeholder-api.service'
import { AsyncPipe, JsonPipe } from '@angular/common'

@Component({
  selector: 'app-directives',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  private api = inject(JsonPlaceholderApiService)

  protected post!: Observable<any>

  onGetPostClick() {
    const randomPostNumber = Math.floor(Math.random() * 9) + 1
    this.post = this.api.getPost(randomPostNumber).pipe(delay(5000))
  }
}
