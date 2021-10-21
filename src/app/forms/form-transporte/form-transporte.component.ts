import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { TransporteService } from 'src/app/services/transporte.service';

@Component({
  selector: 'app-form-transporte',
  templateUrl: './form-transporte.component.html',
  styleUrls: ['./form-transporte.component.css']
})
export class FormTransporteComponent implements OnInit {

  public empresas:any = [];
  public form!: FormGroup;

  constructor(
    
    private empresaService:EmpresaService,
    private transporteService:TransporteService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.agregarEmpresa();
    this.form=this.formBuilder.group({
      puestos: ['', Validators.required],
      modelo: ['', Validators.required],
      color: ['', Validators.required],
      precio: ['', Validators.required],
      idTransporte: ['', Validators.required],
      empresa: ['', Validators.required]
      
    });
  }
  public agregarEmpresa(){
    this.empresaService.listarEmpresa().subscribe(empresas=>{
      this.empresas = empresas; 
    })
  }
 
  public enviarData(){
    console.log(this.form.value);
    this.transporteService.post(this.form.value).subscribe()
  }
}
