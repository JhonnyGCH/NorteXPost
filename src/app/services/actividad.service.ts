import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  uri =`${global.url}/actividad/`;
  constructor(private http: HttpClient) { }

  public listarActividad():Observable<any>{
    return this.http.get<any>(this.uri)
  }

  public post(actividad:any):Observable<any>{
    return this.http.post<any>(this.uri, actividad)
  }
}
