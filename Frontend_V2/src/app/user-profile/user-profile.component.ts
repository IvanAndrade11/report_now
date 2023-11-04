import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.user = this.dataService.user
  }

  editProfile(): void {
    this.router.navigateByUrl('/edit-profile')
  }
}
