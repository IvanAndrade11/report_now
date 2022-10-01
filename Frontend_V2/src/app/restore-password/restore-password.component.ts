import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-restore-password",
  templateUrl: "./restore-password.component.html",
  styleUrls: ["./restore-password.component.css"],
})
export class RestorePasswordComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    this.toastr.success("Mensaje enviado", "Exito", {
      timeOut: 5000,
    });
    this.router.navigate([""]);
  }

  initForm(): FormGroup {
    //Declarar las propiedades que tendrá el formulario
    return this.fb.group({
      email: ["", [Validators.email, Validators.required]],
    });
  }
}
