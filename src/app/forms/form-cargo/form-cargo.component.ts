import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-form-cargo',
  templateUrl: './form-cargo.component.html',
  styleUrls: ['./form-cargo.component.css']
})
export class FormCargoComponent implements OnInit {

  public form !: FormGroup;
  
  constructor(
    private cargoService: CargoService,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit(): void {
    this.form=this.formBuilder.group({ 
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      sueldo: ['', Validators.required],
    });
  }

  public enviarData(){
    this.cargoService.post(this.form.value).subscribe()
      
  }

}
