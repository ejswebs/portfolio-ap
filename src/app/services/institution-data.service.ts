import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstitutionDataService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('/api/get/insts');
  }
  getMock(): Observable<any> {
    return this.http.get('../../assets/mocks/institucion.json');
  }
}
