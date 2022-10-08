import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isLogged: boolean = false
  idUser: number = 0
  rolUser: boolean = false
  nombreUser: string | undefined
  constructor() {}
}
