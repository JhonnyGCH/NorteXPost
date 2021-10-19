import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaqueteService } from 'src/app/services/paquete.service';
import { RutaService } from 'src/app/services/ruta.service';
import { SeguroService } from 'src/app/services/seguro.service';

@Component({
  selector: 'app-form-tour',
  templateUrl: './form-tour.component.html',
  styleUrls: ['./form-tour.component.css']
})
export class FormTourComponent implements OnInit {

  public paquetes:any = [];
  public seguros:any = [];
  public rutas:any = [];

  constructor(
    private paqueteService:PaqueteService,
    private seguroService:SeguroService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private rutaService: RutaService
  ) { }

  ngOnInit(): void {
    this.agregarPaquetes();
    this.agregarSeguros();
    this.agregarRutas();
  }

  public agregarPaquetes(){
    this.paqueteService.listar().subscribe(paquetes=>{
      this.paquetes = paquetes; 
    })
  }

  public agregarSeguros(){
    this.seguroService.listarSeguro().subscribe(seguros=>{
     this.seguros = seguros; 
    })
  }
  public agregarRutas(){
    this.rutaService.listarRuta().subscribe(rutas=>{
      this.rutas = rutas; 
    })
  }
}

