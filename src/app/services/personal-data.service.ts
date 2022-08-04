import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('/api/get/persons');
  }

  getMock(): Observable<any> {
    console.log(this.http.get<any>('../../assets/mocks/persona.json'));
    return this.http.get('../../assets/mocks/persona.json');
  }
}
