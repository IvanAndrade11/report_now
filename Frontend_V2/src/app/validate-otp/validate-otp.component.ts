import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.css']
})
export class ValidateOtpComponent implements OnInit {
  contactForm!: FormGroup

  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.initForm()
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      alert(this.contactForm.errors)
    } else {
      this.toastr.success('Usuario creado', 'Exito', {
        timeOut: 5000
      })
      this.router.navigate([''])
    }
  }

  initForm(): FormGroup {
    //Declarar las propiedades que tendrá el formulario
    return this.fb.group({
      number1: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1),
          Validators.max(9)
        ]
      ],
      number2: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1),
          Validators.max(9)
        ]
      ],
      number3: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1),
          Validators.max(9)
        ]
      ],
      number4: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1),
          Validators.max(9)
        ]
      ]
    })
  }
}
