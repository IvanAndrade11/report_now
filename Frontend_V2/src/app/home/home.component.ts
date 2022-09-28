import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

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
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.initForm()
  }

  onSubmit(): void {
    if (
      this.contactForm.value.email === '' ||
      this.contactForm.value.password === ''
    ) {
      this.toastr.error('', 'Complete todos los campos', {
        timeOut: 5000
      })
    } else {
      this.toastr.success('', 'Bienvenido', {
        timeOut: 5000
      })
      this.router.navigate(['user-home'])
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
