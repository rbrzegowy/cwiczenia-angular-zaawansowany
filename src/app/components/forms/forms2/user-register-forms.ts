import { FormGroup, FormControl, Validators } from "@angular/forms"

export const userRegisterFormStep1 = new FormGroup({
  firstName: new FormControl('', [Validators.required]),
  lastName: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
})

export const userRegisterFormStep2 = new FormGroup({
  street: new FormControl('', [Validators.required]),
  city: new FormControl('', [Validators.required]),
  postalCode: new FormControl('', [Validators.required]),
})