import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { notice } from '../models/notice-model'
import { DataService } from '../services/data.service'
import { UsersServiceService } from '../services/users-service.service'
import { DataValidate } from '../models/user-model'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  userData: any
  noticias: notice[] = []

  constructor(
    private toastr: ToastrService,
    private userService: UsersServiceService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getNotices()
    this.getUser()
  }

  getUser(): void {
    this.userData = this.dataService.user
    this.userService.getUser(this.userData.user._id).subscribe(
      (data) => {
        this.dataService.user = {
          msj: 'Usuario Validado Correctamente',
          valid: true,
          user: data
        }
      },
      (error) => {
        console.log(error)
        this.toastr.error(error.error.error, 'Error', {
          timeOut: 3000
        })
      }
    )
  }

  getNotices(): void {
    this.userService.getNotices().subscribe(
      (data: notice[]) => {
        this.noticias = data
      },
      (error) => {
        console.log(error)
        this.toastr.error(error.error.error, 'Error', {
          timeOut: 3000
        })
      }
    )
  }
}
