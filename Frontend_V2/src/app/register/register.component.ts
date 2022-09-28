import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    this.router.navigate(["validate-otp"]);
  }

  initForm(): FormGroup {
    //Declarar las propiedades que tendrá el formulario
    return this.fb.group({
      user: ["", [Validators.required, Validators.minLength(8)]],
      name: ["", [Validators.required, Validators.minLength(20)]],
      email: ["", [Validators.email, Validators.required]],
      phone: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
}
