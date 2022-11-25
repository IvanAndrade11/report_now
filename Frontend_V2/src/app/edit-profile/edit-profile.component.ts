import { Component, OnInit } from '@angular/core'
import { DataService } from '../services/data.service'
import { UserUpdate } from '../models/user-model'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { UsersServiceService } from '../services/users-service.service'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userData: any
  id: string = ''
  username: string = ''
  name: string = ''
  email: string = ''
  phone: string = ''
  password: string = ''
  constructor(
    private dataService: DataService,
    private userService: UsersServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.userData = this.dataService.user
  }

  onSubmit(): void {
    const user = new UserUpdate(
      this.username,
      this.name,
      this.email,
      this.phone
    )
    this.validateForm(user)
  }

  validateForm(user: UserUpdate): void {
    if (user.user === '') {
      this.toastr.error('', 'El usuario es obligatorio', {
        timeOut: 5000
      })
    } else if (user.name === '') {
      this.toastr.error('', 'El nombre es obligatorio', {
        timeOut: 5000
      })
    } else if (user.email === '') {
      this.toastr.error('', 'El email es obligatorio', {
        timeOut: 5000
      })
    } else if (user.phone === '') {
      this.toastr.error('', 'El teléfono es obligatorio', {
        timeOut: 5000
      })
    } else if (user.password === '') {
      this.toastr.error('', 'La contraseña es obligatoria', {
        timeOut: 5000
      })
    } else {
      this.updateUser(user)
    }
  }

  updateUser(user: UserUpdate): void {
    this.userService.updateUser(user, this.userData.user._id).subscribe(
      (data) => {
        this.toastr.success('Actualización Exitosa', 'Exito', {
          timeOut: 3000
        })
        this.router.navigate(['/user-profile'])
      },
      (error) => {
        this.toastr.error('Error al actualizar el usuario', 'Error', {
          timeOut: 3000
        })
      }
    )
  }
}
