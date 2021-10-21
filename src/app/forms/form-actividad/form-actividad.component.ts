import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActividadService } from 'src/app/services/actividad.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-form-actividad',
  templateUrl: './form-actividad.component.html',
  styleUrls: ['./form-actividad.component.css']
})
export class FormActividadComponent implements OnInit {

  public tours:any = [];
  public form !: FormGroup;
  
 
  constructor(
    private actividadService:ActividadService,
    private tourService:TourService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.agregarTours();
    this.form=this.formBuilder.group({ 
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tour: ['', Validators.required],
      urlImg: ['', Validators.required],
    });
  }

  public agregarTours(){
    this.tourService.listarTour().subscribe(tours=>{
      this.tours = tours; 
    })
  }

  public enviarData(){
    this.actividadService.post(this.form.value).subscribe()
      
  }

}
