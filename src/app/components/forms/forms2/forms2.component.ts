import { AsyncPipe, JsonPipe } from '@angular/common'
import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-forms2',
  imports: [RouterLink, RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './forms2.component.html',
  styleUrl: './forms2.component.scss'
})
export class Forms2Component {
  userForm = new FormGroup({})
}
