import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get('http://200.121.226.123:8080/crumbIssuer/api/json', {headers: new HttpHeaders({'Authorization': 'Basic YWRtaW46YWRtaW4='})});
  }
}