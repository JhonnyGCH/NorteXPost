import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MunicipioService } from 'src/app/services/municipio.service';
import { TransporteService } from 'src/app/services/transporte.service';
import { RutaService } from 'src/app/services/ruta.service';

@Component({
  selector: 'app-form-ruta',
  templateUrl: './form-ruta.component.html',
  styleUrls: ['./form-ruta.component.css']
})
export class FormRutaComponent implements OnInit {

  public municipios:any = [];
  public transportes:any = [];
  public form !: FormGroup;
  

  constructor(
    private RutaService:RutaService,
    private MunicipioService:MunicipioService,
    private TransporteService:TransporteService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.agregarMunicipio();
    this.agregarTrasnporte();
    this.form=this.formBuilder.group({ 
      idMun: ['', Validators.required],
      transporte: ['', Validators.required]
    });
  }

  public agregarMunicipio(){
    this.MunicipioService.listarMunicipio().subscribe(municipios=>{
      this.municipios = municipios; 
    })
  }
  public agregarTrasnporte(){
    this.TransporteService.listarTransporte().subscribe(transportes=>{
      this.transportes = transportes; 
    })
  }

  public enviarData(){
    this.RutaService.post(this.form.value).subscribe()
      
  }

}
