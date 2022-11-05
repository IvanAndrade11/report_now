import { Component, OnInit } from '@angular/core'
import { DataService } from '../services/data.service'
import { User } from '../models/user-model'
import { ToastrService } from 'ngx-toastr'
import { UsersServiceService } from '../services/users-service.service'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: any
  id: number = 0
  username: string = ''
  name: string = ''
  email: string = ''
  phone: string = ''
  password: string = ''
  constructor(
    private dataService: DataService,
    private userService: UsersServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.user = this.dataService.user
  }

  onSubmit(): void {
    const user = new User(
      this.id,
      this.user,
      this.username,
      this.email,
      this.phone,
      this.password
    )
    this.userService.updateUser(user).subscribe(
      (data) => {
        this.toastr.success('Usuario actualizado', 'Exito', {
          timeOut: 3000
        })
      },
      (error) => {
        this.toastr.error('Error al actualizar el registro', 'Error', {
          timeOut: 3000
        })
      }
    )
  }
}
