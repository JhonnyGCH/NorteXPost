import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  uri =`${global.url}/seguro/`;
  constructor(private http: HttpClient) { }

  public listarSeguro():Observable<any>{
    return this.http.get<any>(this.uri)
  }
}
