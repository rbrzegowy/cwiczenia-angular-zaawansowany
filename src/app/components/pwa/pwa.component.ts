import { Component, inject, model, signal } from '@angular/core'
import { JsonPlaceholderApiService } from '../../services/json-placeholder-api.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-pwa',
  imports: [FormsModule],
  templateUrl: './pwa.component.html',
  styleUrl: './pwa.component.scss',
})
export class PwaComponent {

  private jsonPlaceholderService = inject(JsonPlaceholderApiService)

  id = signal<number | undefined>(undefined)
  albumRes = this.jsonPlaceholderService.getAlbumPhotosResource(this.id.asReadonly())

  getAlbum(id: number) {
    this.id.set(id)
  }
}
