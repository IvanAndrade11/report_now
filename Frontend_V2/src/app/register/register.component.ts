import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UsersServiceService } from "../services/users-service.service";
import { User } from "../models/user-model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  contactForm!: FormGroup;

  user: string = "";
  name: string = "";
  email: string = "";
  phone: string = "";
  password: string = "";

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UsersServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    this.validateForm();
    this.createUser();
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

  validateForm(): void {
    if (this.contactForm.value.user === "") {
      this.toastr.error("", "El usuario es obligatorio", {
        timeOut: 5000,
      });
    } else if (this.contactForm.value.name === "") {
      this.toastr.error("", "El nombre es obligatorio", {
        timeOut: 5000,
      });
    } else if (this.contactForm.value.email === "") {
      this.toastr.error("", "El email es obligatorio", {
        timeOut: 5000,
      });
    } else if (this.contactForm.value.phone === "") {
      this.toastr.error("", "El teléfono es obligatorio", {
        timeOut: 5000,
      });
    } else if (this.contactForm.value.password === "") {
      this.toastr.error("", "La contraseña es obligatoria", {
        timeOut: 5000,
      });
    }
  }

  createUser(): void {
    const user = new User(
      this.user,
      this.name,
      this.email,
      this.phone,
      this.password
    );
    this.userService.createUser(user).subscribe(
      (data) => {
        this.toastr.success("Registro Exitoso", "Exito", {
          timeOut: 3000,
        });
        this.router.navigate(["/"]);
      },
      (error) => {
        this.toastr.error("Error al crear el registro", "Error", {
          timeOut: 3000,
        });
      }
    );
  }
}
