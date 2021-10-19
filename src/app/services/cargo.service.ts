import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  
  uri =`${global.url}/cargo/`;
  constructor(private http: HttpClient) { }
  
  public listarCargo():Observable<any>{
    return this.http.get<any>(this.uri)
  }
}
