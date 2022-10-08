import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

import { DataService } from '../services/data.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.dataService.isLogged) this.router.navigate([''])
    return this.dataService.isLogged
  }
}
