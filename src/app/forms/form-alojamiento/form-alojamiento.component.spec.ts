import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlojamientoComponent } from './form-alojamiento.component';

describe('FormAlojamientoComponent', () => {
  let component: FormAlojamientoComponent;
  let fixture: ComponentFixture<FormAlojamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlojamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
