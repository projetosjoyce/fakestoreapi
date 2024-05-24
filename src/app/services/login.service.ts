import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('https://fakestoreapi.com/auth/login', { username, password });
  }

  createUser(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

}
