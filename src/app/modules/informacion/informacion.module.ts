import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//VISTA
import { InformacionRoutingModule } from './informacion-routing.module';

//COMPONENTE
import { CardComponent } from './components/card/card.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

//COMPONENTE DE LA WEB -> MATERIAL
import {MatButtonModule} from  '@angular/material/button' ;
import {MatCardModule} from  '@angular/material/card' ;



@NgModule({
  declarations: [
    CardComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
  InformacionComponent,
  CardComponent,
  MatButtonModule,
  MatCardModule
  ]
})
export class InformacionModule { }
