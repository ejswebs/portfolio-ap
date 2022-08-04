import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('/api/get/proys');
  }

  getMock(): Observable<any> {
    return this.http.get('../../assets/mocks/proyecto.json');
  }
}
