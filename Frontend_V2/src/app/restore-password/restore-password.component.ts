import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { UsersServiceService } from '../services/users-service.service'

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent implements OnInit {
  contactForm!: FormGroup

  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private readonly userService: UsersServiceService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.initForm()
  }

  onSubmit(): void {
    const email = this.contactForm.value.email
    console.log(email)
    if (email === '') {
      this.toastr.error('Ingrese un correo', 'Error', {
        timeOut: 3000
      })
      return
    }
    if (
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)
    ) {
      this.userService.sendMail(email).subscribe(
        (data) => {
          this.toastr.success('Mensaje enviado', 'Exito', {
            timeOut: 5000
          })
          console.log(data)
        },
        (error) => {
          console.log(error)
          this.toastr.error(error.error.error, 'Error', {
            timeOut: 3000
          })
          return
        }
      )
    } else {
      this.toastr.error('Ingrese un correo válido', 'Error', {
        timeOut: 3000
      })
    }

    // this.router.navigate([""]);
  }

  initForm(): FormGroup {
    //Declarar las propiedades que tendrá el formulario
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    })
  }
}
