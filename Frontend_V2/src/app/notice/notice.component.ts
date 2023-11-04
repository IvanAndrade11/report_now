import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UsersServiceService } from '../services/users-service.service'
import { notice } from '../models/notice-model'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  notice: any
  authon: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UsersServiceService
  ) {}

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.userService.getNotice(id).subscribe(
      (data) => {
        this.notice = data
        this.getAuthor(data.id_user)
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

  getAuthor(id: number): void {
    this.userService.getUser(id).subscribe(
      (data) => {
        this.authon = data
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

  saveLike(): void {
    console.log('xdxdxd')
    const noticeUpdate = {
      likes: 1 + parseInt(this.notice.likes)
    }
    this.userService.updateLikes(noticeUpdate, this.notice._id).subscribe(
      (data) => {
        console.log(data)
        this.getData()
      },
      (error) => {}
    )
  }
}
