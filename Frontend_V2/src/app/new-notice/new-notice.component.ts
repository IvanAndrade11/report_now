import { Component } from '@angular/core'
import { UsersServiceService } from '../services/users-service.service'
import { DataService } from '../services/data.service'
import { notice } from '../models/notice-model'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-new-notice',
  templateUrl: './new-notice.component.html',
  styleUrls: ['./new-notice.component.css']
})
export class NewNoticeComponent {
  title: string = ''
  description: string = ''
  likes: string = '0'

  constructor(
    private userService: UsersServiceService,
    private dataService: DataService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit(): void {
    const data: any = this.dataService.user
    const newNotice = new notice(
      this.title,
      this.description,
      this.likes,
      data.user._id
    )
    this.validateForm(newNotice)
  }

  validateForm(notice: notice): void {
    if (notice.title === '') {
      this.toastr.error('', 'El titulo es obligatorio', {
        timeOut: 5000
      })
    } else if (notice.description === '') {
      this.toastr.error('', 'La descripción es obligatorio', {
        timeOut: 5000
      })
    } else {
      this.createNotice(notice)
    }
  }

  createNotice(notice: notice): void {
    this.userService.createNotice(notice).subscribe(
      (data) => {
        this.toastr.success('Noticia Creada', 'Exito', {
          timeOut: 3000
        })
        this.router.navigate(['/user-home'])
      },
      (error) => {
        this.toastr.error('Error al crear el registro', 'Error', {
          timeOut: 3000
        })
      }
    )
  }
}
