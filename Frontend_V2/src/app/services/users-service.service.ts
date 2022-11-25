import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../models/user-model'
import { notice } from '../models/notice-model'

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  userURL = 'https://report-now.herokuapp.com/api/users/'
  utilsURL = 'https://report-now.herokuapp.com/api/utils/'
  newsURL = 'https://report-now.herokuapp.com/api/news/'

  constructor(private httpClient: HttpClient) {}

  public validateUser(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.userURL}validate`, {
      email,
      password
    })
  }
  public createUser(user: User): Observable<any> {
    return this.httpClient.post<any>(this.userURL + 'create', user)
  }
  public getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.userURL)
  }
  public getUser(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.userURL}${id}`)
  }
  public updateUser(user: User, id: string): Observable<any> {
    return this.httpClient.put<any>(`${this.userURL}${id}`, user)
  }
  public deleteUser(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(`${this.userURL}${id}`)
  }
  public sendMail(email: string | undefined): Observable<any> {
    return this.httpClient.post<any>(`${this.utilsURL}sendMail`, email)
  }
  public getNotices(): Observable<any> {
    return this.httpClient.get<any>(this.newsURL)
  }
  public getNotice(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.newsURL}${id}`)
  }
  public updateLikes(notice: any, id: string): Observable<any> {
    return this.httpClient.put<any>(`${this.newsURL}${id}`, notice)
  }
  public createNotice(user: notice): Observable<any> {
    return this.httpClient.post<any>(this.newsURL + 'create', user)
  }
}
