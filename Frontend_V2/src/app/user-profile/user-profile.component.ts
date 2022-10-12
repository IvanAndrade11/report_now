import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.user = this.dataService.user;
  }
}
