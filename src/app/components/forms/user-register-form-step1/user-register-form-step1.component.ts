import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { userRegisterFormStep1 } from '../forms2/user-register-forms'

@Component({
  selector: 'app-user-register-form-step1',
  imports: [ReactiveFormsModule],
  templateUrl: './user-register-form-step1.component.html',
  styleUrl: './user-register-form-step1.component.scss'
})
export class UserRegisterFormStep1Component {
  form = userRegisterFormStep1
}
