import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTES LOCALES
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//importamos para ACCEDER a todas las rutas de la pagina
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  //componentes LOCALES del modulo -> CREADOS POR NOSOTROS
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
    //Archivos, componentes de la web o de otros modulo de los que queremos  tener acceso.
/*Archiovo de rutas(para el navegador), componentes de material que vienen desde internet, 
componentes que vienen de otro modulo (ej: una card)
*/
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  
/* EXPONE los componentes locales para que puedan ser mostrados en el resto de la pagina.
EZPONE componentes de la web para poder tener acceso a ellos al propio modulo
*/
  exports:[ 
    NavbarComponent,
    FooterComponent
  ] 
  
})
export class SharedModule { }
