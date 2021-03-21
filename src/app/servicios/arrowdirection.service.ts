import { Injectable } from '@angular/core';

@Injectable()
export class ArrowdirectionService {

  private links: AlertaDireccion[] = [
    {
      id: 111,
      texto: "¡Ojo que te das contra el muro!",
      color: '#999999'
    },
    {
      id: 112,
      texto: 'Por ahora vas bien',
      color: '#ffffff'
    },
    {
      id: 113,
      texto: '¡El Wumpus! ¡Peligro de muerte!',
      color: '#cc3333'
    },
    {
      id: 114,
      texto: '¡Ojo que te das contra el muro!',
      color: '#999999'
    },
    {
      id: 121,
      texto: "¡Ojo que te das contra el muro!",
      color: '#999999'
    },
    {
      id: 122,
      texto: 'Noto la brisa de un pozo',
      color: '#ffffff'
    },
    {
      id: 123,
      texto: 'Qué brilla ahí!',
      color: '#ffff33'
    },
    {
      id: 124,
      texto: '¡Qué hedor viene por ahí!',
      color: '#ffffff'
    }
  ];


  constructor() {}

   getAlerta():AlertaDireccion[]  {
     return this.links;
   }

}

export interface AlertaDireccion {
  id: number,
  texto: string,
  color: string
}
