import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:8080/';
  auth: Boolean = false;
  currenUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    this.currenUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  login(param: any): void {
    this.auth = param;
  }
}
