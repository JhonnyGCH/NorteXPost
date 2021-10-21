import { Component, OnInit } from '@angular/core';
import { AlojamientoService } from 'src/app/services/alojamiento.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-alojamiento',
  templateUrl: './form-alojamiento.component.html',
  styleUrls: ['./form-alojamiento.component.css']
})
export class FormAlojamientoComponent implements OnInit {
  public form!: FormGroup;


  constructor(
    private alojamientoservice: AlojamientoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.form=this.formBuilder.group({
      nombre:['', Validators.required],
      dir:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required]
    });
  }

  public enviarData() {
    this.alojamientoservice.post(this.form.value).subscribe()
  }
}
