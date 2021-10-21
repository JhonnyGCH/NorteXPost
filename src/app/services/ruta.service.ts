import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'


@Injectable({
  providedIn: 'root'
})
export class RutaService {
  
  uri =`${global.url}/ruta/`;
  constructor(private http: HttpClient) { }

  public listarRuta():Observable<any>{
    return this.http.get<any>(this.uri)
  }

  public post(ruta:any):Observable<any>{
    return this.http.post<any>(this.uri, ruta)
  }

}
