import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'
@Injectable({
  providedIn: 'root'
})

export class AlojamientoService {
  
  uri =`${global.url}/alojamiento/`;
  constructor(private http: HttpClient) { }

   public listarAlojamiento():Observable<any>{
    return this.http.get<any>(this.uri)
  }
}
