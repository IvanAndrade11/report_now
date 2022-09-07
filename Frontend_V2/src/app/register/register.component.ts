import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  contactForm!: FormGroup

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm()
  }

  onSubmit(): void {}

  initForm(): FormGroup {
    //Declarar las propiedades que tendrá el formulario
    return this.fb.group({
      user: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.email, Validators.required]],
      phone:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
}
