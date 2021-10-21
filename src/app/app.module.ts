// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Componentes
import { PayuComponent } from './payu/payu/payu.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { FormPagosComponent } from './forms/form-pagos/form-pagos.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegistroComponent } from './forms/registro/registro.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { LoginComponent } from './forms/login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { ListarPaquetesComponent } from './listar-paquetes/listar-paquetes.component';
import { ReservasComponent } from './reservas/reservas.component';
import { AuthRegistroComponent } from './auth/auth-registro/auth-registro.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { FormTourComponent } from './forms/form-tour/form-tour.component';
// Servicios
import { PaqueteService } from './services/paquete.service';
import { RutaService } from './services/ruta.service';
import { UsuarioService } from './services/usuario.service';
import { PersonaService } from './services/persona.service';
import { TransaccionService } from './services/transaccion.service';
import { PruebaComponent } from './prueba/prueba/prueba.component';
import { PaqInterceptorService } from './interceptors/paq-interceptor.service';
import { interceptorProvider } from './interceptors/paq-interceptor.service';
import { SeguroService } from './services/seguro.service';
import { FormEmpleadoComponent } from './forms/form-empleado/form-empleado.component';
import { CargoService } from './services/cargo.service';
import { TourService } from './services/tour.service';
import { FormPaquetesComponent } from './forms/form-paquetes/form-paquetes.component';
import { AlojamientoService } from './services/alojamiento.service';
import { FormCargoComponent } from './forms/form-cargo/form-cargo.component';
import { FormPersonaComponent } from './forms/form-persona/form-persona.component';
import { FormAlojamientoComponent } from './forms/form-alojamiento/form-alojamiento.component';
import { FormActividadComponent } from './forms/form-actividad/form-actividad.component';
import { ActividadService } from './services/actividad.service';
import { FormTransporteComponent } from './forms/form-transporte/form-transporte.component';
import { TransporteService } from './services/transporte.service';
import { FormSeguroComponent } from './forms/form-seguro/form-seguro.component';
import { FormRutaComponent } from './forms/form-ruta/form-ruta.component';

@NgModule({
  declarations: [
    AppComponent, 
    PayuComponent, 
    PaqueteComponent,
    FormPagosComponent,
    LoginComponent,
    FooterComponent,
    RegistroComponent,
    InicioComponent,
    HeaderComponent,
    ListarPaquetesComponent,
    ReservasComponent,
    PruebaComponent,
    AuthRegistroComponent,
    AuthLoginComponent,
    FormTourComponent,
    FormEmpleadoComponent,
    FormPaquetesComponent,
    FormCargoComponent,
    FormPersonaComponent,
    FormAlojamientoComponent,
    FormActividadComponent,
    FormTransporteComponent,
    FormSeguroComponent,
    FormRutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormPagosComponent,
    PaqueteService,
    UsuarioService,
    PersonaService,
    TransaccionService,
    PaqInterceptorService,
    interceptorProvider,
    SeguroService,
    RutaService,
    CargoService,
    TourService,
    AlojamientoService,
    ActividadService,
    TransporteService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
