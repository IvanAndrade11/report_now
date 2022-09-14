import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent implements OnInit {
  contactForm!: FormGroup

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm()
  }

  onSubmit(): void {}

  initForm(): FormGroup {
    //Declarar las propiedades que tendrá el formulario
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    })
  }
}
