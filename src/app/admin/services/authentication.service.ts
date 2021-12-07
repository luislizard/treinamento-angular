import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Admin } from '../models/admin.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Admin | null>;
  public currentUser: Observable<Admin | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Admin | null>(
      JSON.parse(localStorage.getItem('currentUser') as string)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue()  {
    return this.currentUserSubject.value || null;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.backendApi}/authenticate`, {
      username,
      password,
    }).pipe(map((user)=>{
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }))
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
