import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  //definimos como tuta raiz (primera vista visible al renderizar la pagina)a inicio component.
  {
    path:"", component: InicioComponent
  },
  /**
   * las cargas perezosas renderizan(cargan) un moulo completo unicamente cuando queremos acceder a 
* ellos, provocando que nuestra pagina se mas rapida porque sol carga los componentes de ESE mudulo 
* en especifico
   */
  {
    path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/informacion/informacion.module').then(m=>m.InformacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
