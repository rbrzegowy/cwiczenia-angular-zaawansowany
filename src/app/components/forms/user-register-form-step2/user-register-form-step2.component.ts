import { ReactiveFormsModule } from '@angular/forms'
import { Component } from '@angular/core'
import { userRegisterFormStep2 } from '../forms2/user-register-forms'

@Component({
  selector: 'app-user-register-form-step2',
  imports: [ReactiveFormsModule],
  templateUrl: './user-register-form-step2.component.html',
  styleUrl: './user-register-form-step2.component.scss'
})
export class UserRegisterFormStep2Component {
  form = userRegisterFormStep2
}
