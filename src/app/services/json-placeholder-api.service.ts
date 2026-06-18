import { HttpClient, httpResource } from '@angular/common/http'
import { inject, Injectable, Signal } from '@angular/core'
import { JSONPlaceholderAlbum } from '../models/json-placeholder.models'

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com'
  private httpClient = inject(HttpClient)

  getPost(id: number) {
    return this.httpClient.get(`${this.apiUrl}/posts/${id}`)
  }
  getComments(postId: number) {
    return this.httpClient.get(`${this.apiUrl}/posts/${postId}/comments`)
  }
  getAlbumPhotosResource(id: Signal<number | undefined>) {
    return httpResource<JSONPlaceholderAlbum[]>(() => id() ? `${this.apiUrl}/albums/${id()}/photos` : undefined)
  }
}
