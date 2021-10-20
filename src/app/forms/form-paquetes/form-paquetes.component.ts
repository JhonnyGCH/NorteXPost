import { Component, OnInit } from '@angular/core';
import { AlojamientoService } from 'src/app/services/alojamiento.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { PaqueteService } from '../../services/paquete.service';

@Component({
  selector: 'app-form-paquetes',
  templateUrl: './form-paquetes.component.html',
  styleUrls: ['./form-paquetes.component.css']
})

export class FormPaquetesComponent implements OnInit {

  public alojamientos: any = [];
  public form!: FormGroup;

  constructor(
    private alojamientoservice: AlojamientoService,
    private paqueteService: PaqueteService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.agregarAlojamiento();
    this.form=this.formBuilder.group({
      precio:['', Validators.required],
      estado:['', Validators.required],
      urlImagen:['', Validators.required],
      descripcion:['', Validators.required],
      recomendacion:['', Validators.required],
      nombre:['', Validators.required],
      alojamiento:['', Validators.required]
    });
  }

  public agregarAlojamiento() {
    this.alojamientoservice.listarAlojamiento().subscribe(alojamientos => {
      this.alojamientos = alojamientos;
    })
  }

  public enviarData() {
    this.paqueteService.post(this.form.value).subscribe()
  }


}
