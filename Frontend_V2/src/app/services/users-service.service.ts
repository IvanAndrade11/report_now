import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../models/user-model'

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  studentURL = 'https://reportnow-production.up.railway.app/api/users/'

  constructor(private httpClient: HttpClient) {}

  //create student
  public createUser(student: User): Observable<any> {
    return this.httpClient.post<any>(this.studentURL + 'create', student)
  }
}
