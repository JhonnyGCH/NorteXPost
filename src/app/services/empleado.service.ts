import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  uri =`${global.url}/empleado/`;
  constructor(private http: HttpClient) { }
  
  public listarEmpleado():Observable<any>{
    return this.http.get<any>(this.uri)
  }

  public post(empleado:any):Observable<any>{
    return this.http.post<any>(this.uri, empleado)
  }
}
