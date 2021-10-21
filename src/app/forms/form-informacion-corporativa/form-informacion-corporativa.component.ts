import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-form-informacion-corporativa',
  templateUrl: './form-informacion-corporativa.component.html',
  styleUrls: ['./form-informacion-corporativa.component.css']
})
export class FormInformacionCorporativaComponent implements OnInit {

  public form !: FormGroup;
  
  constructor(
    private empresaService: EmpresaService,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit(): void {
    this.form=this.formBuilder.group({ 
      nombre: ['', Validators.required],
      dir: ['', Validators.required],
      mision: ['', Validators.required],
      vision: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      descripcion: ['', Validators.required],
      url_imagen: ['', Validators.required],
      idEmpresa: ['', Validators.required],
    });
  }

  public enviarData(){
    this.empresaService.post(this.form.value).subscribe()
      
  }


}
