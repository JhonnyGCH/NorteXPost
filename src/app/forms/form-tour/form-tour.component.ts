import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PaqueteService } from 'src/app/services/paquete.service';
import { RutaService } from 'src/app/services/ruta.service';
import { SeguroService } from 'src/app/services/seguro.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-form-tour',
  templateUrl: './form-tour.component.html',
  styleUrls: ['./form-tour.component.css']
})
export class FormTourComponent implements OnInit {

  public paquetes:any = [];
  public seguros:any = [];
  public rutas:any = [];
  public empleados:any = [];
  public form !: FormGroup;
  
 
  constructor(
    private paqueteService:PaqueteService,
    private seguroService:SeguroService,
    private rutaService:RutaService,
    private empleadoService:EmpleadoService,
    private tourService:TourService ,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.agregarPaquetes();
    this.agregarSeguros();
    this.agregarRutas();
    this.agregarEmpleados();
    this.form=this.formBuilder.group({ 
      minCupos: ['', Validators.required],
      maxCupos: ['', Validators.required],
      fechaLlegada: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      precio: ['', Validators.required],
      cantCupos: ['', Validators.required],
      empleado: ['', Validators.required],
      paquete: ['', Validators.required],
      ruta: ['', Validators.required],
      seguro: ['', Validators.required],
    });
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

  public agregarEmpleados(){
    this.empleadoService.listarEmpleado().subscribe(empleados=>{
     this.empleados = empleados; 
    })
  }

  public enviarData(){
    this.tourService.post(this.form.value).subscribe()
      
  }
}

