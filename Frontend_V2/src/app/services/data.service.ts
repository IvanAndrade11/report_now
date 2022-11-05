import { Injectable } from '@angular/core'
import { DataValidate } from '../models/user-model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isLogged: boolean = false
  rolUser: boolean = false
  user: DataValidate | undefined
  constructor() {}
}
