import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { SeguroService } from 'src/app/services/seguro.service';

@Component({
  selector: 'app-form-seguro',
  templateUrl: './form-seguro.component.html',
  styleUrls: ['./form-seguro.component.css']
})
export class FormSeguroComponent implements OnInit {

  public empresas:any = [];
  public form!: FormGroup;

  constructor(
    
    private empresaService:EmpresaService,
    private seguroService:SeguroService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.agregarEmpresa();
    this.form=this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      idSeguro: ['', Validators.required],
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
    this.seguroService.post(this.form.value).subscribe()
  }

}
