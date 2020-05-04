import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  
  apiUrl = 'https://randomuser.me/api/?results=100';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * This function returns data from randomuser.me api
   */
  getDriversList(): Observable<HttpResponse<any[]>>{
    return this.http.get<any[]>(
      this.apiUrl, { observe: 'response' });
  }
}
