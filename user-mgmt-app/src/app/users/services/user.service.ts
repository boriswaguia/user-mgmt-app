import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../domain/user.domain';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static readonly USERS_URL = `${environment.backendUrl}/users`;

  constructor(private httpClient: HttpClient) { }


  get(): Observable<User[]> {
    return this.httpClient.get<User[]>(UserService.USERS_URL);
  }
}
