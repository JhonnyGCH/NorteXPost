import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { TipoDocService } from 'src/app/services/tipo-doc.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

  public personas:any = [];
  public tipos:any = [];
  public form!: FormGroup;

  constructor(
    private personaService:PersonaService,
    private tipodocService:TipoDocService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
   
    this.agregarPersonas();
    this.agregarTipo();
    this.form=this.formBuilder.group({
      idPersona: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      fechaNac: ['', Validators.required],
      cel: ['', Validators.required],
      correo: ['', Validators.required],
      idTipo: ['', Validators.required]
    });
  }
  
  public agregarPersonas(){
    this.personaService.listarPersona().subscribe(personas=>{
      this.personas = personas; 
    })
  }

  public agregarTipo(){
    this.tipodocService.listarTipo().subscribe(tipos=>{
      this.tipos = tipos; 
    })
  }

  public enviarData(){
    console.log(this.form.value);
    this.personaService.post(this.form.value).subscribe()
  }
}
