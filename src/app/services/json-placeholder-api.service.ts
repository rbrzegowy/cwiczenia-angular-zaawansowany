import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'

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
}
