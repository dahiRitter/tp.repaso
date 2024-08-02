import { Component } from '@angular/core';
//importamos interfaz de card
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  //definimos propiedad publica como INFO del  tipo ARRAY
  public info: Card[];

  constructor(){
    this.info = [
      {
        idCard:"1",
        titulo:"Mandarinas",
        descripcion:"son naranjas y de otoño",
        imagen:"",
        alt:"foto  de la mandarina"
      },
      {
        idCard:"2",
        titulo:"manzana",
        descripcion:"son rojas o verdes",
        imagen:"https://elegifruta.com.ar/wp-content/uploads/2017/07/manzana_roja.jpg",
        alt:"foto  de manzanas"
      },
      {
        idCard:"3",
        titulo:"melon",
        descripcion:"ricas y redondas",
        imagen:"https://elpoderdelconsumidor.org/wp-content/uploads/2023/02/melon.jpg",
        alt:"foto  del melon"
      }]
  }
    
  }


