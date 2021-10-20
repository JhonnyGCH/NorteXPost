import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {
  
  public cargos:any = [];
  public personas:any = [];
  public empleados:any = [];
  public form!: FormGroup;

  constructor(
    private cargoService:CargoService,
    private empleadoService:EmpleadoService,
    private personaService:PersonaService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.agregarCargos();
    this.agregarPersonas();
    this.form=this.formBuilder.group({
      fechaContratacion: ['', Validators.required],
      urlImagen: ['', Validators.required],
      cargo: ['', Validators.required],
      persona: ['', Validators.required]
      
    });
  }
  public agregarCargos(){
    this.cargoService.listarCargo().subscribe(cargos=>{
      this.cargos = cargos; 
    })
  }
  public agregarPersonas(){
    this.personaService.listarPersona().subscribe(personas=>{
      this.personas = personas; 
    })
  }
  public enviarData(){
    console.log(this.form.value);
    this.empleadoService.post(this.form.value).subscribe()
  }
  
}
