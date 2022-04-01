import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestdataService {

  baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http:HttpClient){}
  getData(offset = 0, limit = 20, type = 'pokemon'):Observable<any>{
    const url = `${this.baseUrl}/${type}?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(url);
  }
}
