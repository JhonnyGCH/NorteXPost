import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { FormPagosComponent } from './forms/form-pagos/form-pagos.component';
import { LoginComponent } from './forms/login/login.component';
import { RegistroComponent } from './forms/registro/registro.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { ListarPaquetesComponent } from './listar-paquetes/listar-paquetes.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { PayuComponent } from './payu/payu/payu.component';
import { PruebaComponent } from './prueba/prueba/prueba.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FormTourComponent } from './forms/form-tour/form-tour.component';
import { FormEmpleadoComponent } from './forms/form-empleado/form-empleado.component';
import { FormPaquetesComponent } from './forms/form-paquetes/form-paquetes.component';
import { FormCargoComponent } from './forms/form-cargo/form-cargo.component';
import { FormPersonaComponent } from './forms/form-persona/form-persona.component';

const routes: Routes = [
  {path: 'paquetes',component: PaqueteComponent},
  {path: 'inicio', component: InicioComponent },
  {path: 'pagos/:idPaq',component: FormPagosComponent},
  {path: 'pagos',component: FormPagosComponent},
  {path: '',component: InicioComponent},
  {path: 'misPaquetes',component: ListarPaquetesComponent},
  {path:'reservas',component:ReservasComponent},
  {path:'payu',component:PayuComponent},
  {path: 'tabla', component:PruebaComponent},
  {path:'login', component:AuthLoginComponent },
  {path:'registro', component:RegistroComponent},
  {path:'prueba', component:PruebaComponent},
  {path:'tour', component:FormTourComponent},
  {path: 'empleado',component: FormEmpleadoComponent},
  {path: 'paquete',component: FormPaquetesComponent},
  {path: 'cargo',component: FormCargoComponent},
  {path: 'persona',component: FormPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
