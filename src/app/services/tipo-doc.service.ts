import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class TipoDocService {

  uri =`${global.url}/tipoIdentificacion/`;
  constructor(private http: HttpClient) { }
  
  public listarTipo():Observable<any>{
    return this.http.get<any>(this.uri)
  }

  public post(tipo:any):Observable<any>{
    return this.http.post<any>(this.uri, tipo)
  }
}
