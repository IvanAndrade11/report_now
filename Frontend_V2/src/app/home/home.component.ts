import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { UsersServiceService } from '../services/users-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    if (this.contactForm.value.email === '') {
      this.toastr.error('', 'El email es obligatorio', {
        timeOut: 5000
      })
    } else if (this.contactForm.value.password === '') {
      this.toastr.error('', 'La contraseña es obligatoria', {
        timeOut: 5000
      })
    } else {
      this.userService
        .validateUser(
          this.contactForm.value.email,
          this.contactForm.value.password
        )
        .subscribe(
          (data) => {
            this.toastr.success('', 'Bienvenido', {
              timeOut: 5000
            })
            this.router.navigate(['user-home'])
          },
          (error) => {
            console.log(error)
            this.toastr.error(error.error.error, 'Error', {
              timeOut: 3000
            })
            return
          }
        )
    }
  }

  initForm(): FormGroup {
    //Declarar las propiedades que tendrá el formulario
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }
}
