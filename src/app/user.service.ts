import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from './transaction/User';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = "http://localhost:8082/users";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
        
  constructor(private http: HttpClient) {}



  private log(message: string) {
    console.log(message);
  }
  saveUser(user: UserDTO): Observable<UserDTO> {
    return this.http
      .post<UserDTO>(this.baseURL, user, this.httpOptions)
      .pipe(
        tap((newUser: UserDTO) =>
          this.log(`add hero ${newUser}`)
        )
      );
  }
}
