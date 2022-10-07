import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { UsersServiceService } from '../services/users-service.service'
import { ToastrService } from 'ngx-toastr'
import { User } from '../models/user-model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dataUsers: any
  currentUser: User | undefined

  @ViewChild('closeModal', { static: false }) closeModal: ElementRef | undefined
  @ViewChild('closeModalDelete', { static: false }) closeModalDelete:
    | ElementRef
    | undefined

  constructor(
    private readonly userService: UsersServiceService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.loadUsers()
  }

  actionUser(option: string, user?: any) {
    switch (option) {
      case 'changePassword':
        this.toastr.info('Opción en desarrollo', 'Lo sentimos', {
          timeOut: 3000
        })
        break
      case 'edit':
        this.userService.updateUser(user).subscribe(
          () => {
            this.toastr.success(
              `El usuario ${user?.user} ha sido actualizado.`,
              '',
              {
                timeOut: 3000
              }
            )
            this.loadUsers()
            this.closeModal?.nativeElement.click()
          },
          (error) => {
            this.toastr.error(
              error.error.error,
              'Error al actualizar el usuario',
              {
                timeOut: 3000
              }
            )
          }
        )
        break
      case 'delete':
        this.userService.deleteUser(this.currentUser?.id).subscribe(
          () => {
            this.toastr.success(
              `El usuario ${this.currentUser?.user} ha sido eliminado.`,
              '',
              {
                timeOut: 3000
              }
            )
            this.loadUsers()
            this.closeModalDelete?.nativeElement.click()
          },
          (error) => {
            this.toastr.error('Error al eliminar el usuario', error, {
              timeOut: 3000
            })
          }
        )
        break
      default:
        this.toastr.error('Opción no váilda', 'Error', {
          timeOut: 3000
        })
        break
    }
  }

  setCurrentUser(user: User) {
    this.currentUser = user
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.toastr.success('Usuarios obtenidos', '', {
          timeOut: 1000
        })
        console.log(data)
        this.dataUsers = data
      },
      (error) => {
        this.toastr.error('Error al cargar la lista de usuarios', error, {
          timeOut: 3000
        })
      }
    )
  }
}
