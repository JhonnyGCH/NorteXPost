import { Component, OnInit } from '@angular/core';
import { PaqueteService } from '../services/paquete.service';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
})
export class PaqueteComponent implements OnInit {

  constructor(private paqueteService:PaqueteService) { }

  paquetes:any =[];

  ngOnInit(): void {
    this.listarPaquetes();
  }

  public listarPaquetes(){
    this.paqueteService.listar().subscribe(listaPaquetes=>{
      this.paquetes = listaPaquetes;
    })
  }

}
