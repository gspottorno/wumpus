import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html'
})

export class JuegoComponent implements OnInit {

  imgCazador1:string = './assets/img/hunt-cazador-der.png';//Apunta derecha
  imgCazador2:string = './assets/img/hunt-cazador-abajo.png';//Apunta abajo
  imgCazador3:string = './assets/img/hunt-cazador-izq.png';//Apunta izquierda
  imgCazador4:string = './assets/img/hunt-cazador-arriba.png';//Apunta arriba
  imgCazador:string = this.imgCazador1;

  casillaInicial:string; //Casilla en la que se está
  casillaFinal:any; //Casilla a la que se accede si se avanza
  posicionGiro:number; // 1-Derecha, 2-Abajo, 3-Izquieda, 4-Arriba.
  mensajeCasilla:string; // Descripción de la casilla en la que se está
  mensajeDireccion:string; // Descripción de la casilla en la que se irá
  colorCasillaLlegada:string;
  colorCasilla:string;
  direccionFlecha:number; //A qué casilla irá la flecha si se dispara
  numFlechas:number;

  constructor( ) {
    this.casillaInicial = '41';
    this.casillaFinal = '42';
    this.posicionGiro = 1;
    this.direccionFlecha = 412;
    this.numFlechas = 3;
    this.mensajeCasilla = "¡EMPEZAMOS! Gira al cazador y/o avanza. ¡A ver qué encontramos!";
    this.mensajeDireccion = "Hacia la derecha noto la brisa de un pozo...";
    this.colorCasillaLlegada = '#bddee5';
    this.colorCasilla = '#bddee5';

  }


  ngOnInit(casilla:string = this.casillaInicial) {
  let recipiente:Element = document.getElementById(casilla);
  recipiente.innerHTML = `<img src=" ${this.imgCazador1} " />`;
  }

  /***************************************************
   GIRAMOS AL CAZADOR
   **************************************************/
  girando(casilla:string,posicionGiro:number, direccion:string = '+') {

    if(direccion == '+') {
        if (posicionGiro<=3) {
          this.posicionGiro = posicionGiro+1;
            } else {
              this.posicionGiro = 1; }
    } else {
          if (posicionGiro>1) {
            this.posicionGiro = posicionGiro-1;
              } else {
                this.posicionGiro = 4; }

    }

    this.seleccionoCazador(this.posicionGiro);


    if (this.posicionGiro==1) {
        this.casillaFinal = Number(casilla)+1;
      } else if (this.posicionGiro==2) {
          this.casillaFinal = Number(casilla)+10;
        } else if (this.posicionGiro==3) {
            this.casillaFinal = Number(casilla)-1;
          } else if (this.posicionGiro==4) {
              this.casillaFinal = Number(casilla)-10;
            }

  this.direccionFlecha = Number(casilla+(this.posicionGiro));
  this.mensajeGiro(this.direccionFlecha);
  document.getElementById("mensajeDireccion").style.backgroundColor = this.colorCasilla;

    this.casillaFinal = this.casillaFinal.toString();

    let recipiente:Element = document.getElementById( casilla );
    recipiente.innerHTML = `<img src=" ${ this.imgCazador } " />`;



  }


/***************************************************
 MOVEMOS AL CAZADOR DE CASILLA
 **************************************************/
 moving( casillaInicial:string, casillaFinal:string, posicionGiro:number) {

   this.posicionGiro = posicionGiro;
   this.seleccionoCazador ( this.posicionGiro );
   this.casillaInicial = casillaFinal;

   this.direccionFlecha = Number(casillaFinal+(this.posicionGiro));
   this.mensajeGiro(this.direccionFlecha);
   document.getElementById("mensajeDireccion").style.backgroundColor = this.colorCasilla;


   //Generamos la siquiente casilla según la dirección que lleva el cazador
   if(posicionGiro == 1) {
      this.casillaFinal = ( Number( casillaFinal ) + 1 ).toString();
    } else if (posicionGiro == 2){
      this.casillaFinal = ( Number( casillaFinal ) + 10 ).toString();
    } else if (posicionGiro == 3){
      this.casillaFinal = ( Number( casillaFinal ) - 1 ).toString();
    }  else if (posicionGiro == 4){
      this.casillaFinal = ( Number( casillaFinal ) - 10 ).toString();
    }

   if(casillaFinal=='51') {
      this.mensajeDireccion='HAS GANADO!! YUHOOO!!';
   } else if (
        casillaFinal<='10'
        || casillaFinal=='15'
        || casillaFinal=='20'
        || casillaFinal=='25'
        || casillaFinal=='30'
        || casillaFinal=='35'
        || casillaFinal=='40'
        || casillaFinal>='45'
   ) {
     this.mensajeDireccion='Te has tragado el Muroooo! Dale a START';
   } else {
   let recipienteNuevo : Element = document.getElementById( casillaFinal );
   recipienteNuevo.innerHTML = `<img src=" ${ this.imgCazador } " />`;
  }

    let recipienteViejo : Element = document.getElementById( casillaInicial );
    recipienteViejo.innerHTML = ``;

    this.mensajeLlegada( casillaFinal );

}


/***************************************************
 DISPARA EL CAZADOR
 **************************************************/
 dispara( casillaFinal:string) {
   if(casillaFinal=='21') {
     this.mensajeDireccion='HAS MATADO EL WUMPU!!!!!';
     this.numFlechas = 3;
   } else {
     this.mensajeDireccion='Ooooh, has perdido una flecha';
     this.numFlechas = this.numFlechas-1;
   }
 }

 /***************************************************
  SELECCIONAMOS CAZADOR
  **************************************************/
  seleccionoCazador (val:number) {
    switch (val) {
      case 1:
        this.imgCazador = this.imgCazador1;
        break;
      case 2:
        this.imgCazador = this.imgCazador2;
        break;
      case 3:
        this.imgCazador = this.imgCazador3;
        break;
      case 4:
        this.imgCazador = this.imgCazador4;
        break;
        default:
        this.imgCazador = this.imgCazador2;
      }
    }

  /***************************************************
   MENSAJE DE LA CASILLA DE LLEGADA
   **************************************************/
    mensajeLlegada (valorCasilla:string = null) {

      let valorCasilla2 = Number(valorCasilla);


        switch (valorCasilla2) {
          case 11:
            this.mensajeCasilla = "Aquí huele a... ¡Wumpus!"
            this.colorCasillaLlegada = "#ffffff";
            break;
          case 12:
            this.mensajeCasilla = "Me gusta. Esta casilla es muy tranquila.";
            this.colorCasillaLlegada = "#ffffff";
            break;
          case 13:
            this.mensajeCasilla = "Noto la brisa de un pozo";
            this.colorCasillaLlegada = "#ffffff";
            break;
          case 14:
            this.mensajeCasilla = "¡Me caigo al pozoooooo!";
            this.colorCasillaLlegada = "#ff0000";
            break;

          case 21:
            this.mensajeCasilla = "¡Nooo, el Wumpus me ha cogido!"
            this.colorCasillaLlegada = "#ff0000";
            break;
          case 22:
            this.mensajeCasilla = "¡Oro! ¡Soy rico!";
            this.colorCasillaLlegada = "#ffff33";
            break;
          case 23:
            this.mensajeCasilla = "¡Me caigo al pozoooooo!";
            this.colorCasillaLlegada = "#ff0000";
            break;
          case 24:
            this.mensajeCasilla = "Noto la brisa de un pozo";
            this.colorCasillaLlegada = "#ffffff";
            break;


          case 31:
            this.mensajeCasilla = "Aquí huele a... ¡Wumpus!"
            this.colorCasillaLlegada = "#ffffff";
            break;
          case 32:
            this.mensajeCasilla = "Me gusta. Esta casilla es muy tranquila.";
            this.colorCasillaLlegada = "#ffffff";
            break;
          case 33:
            this.mensajeCasilla = "Noto la brisa de un pozo";
            this.colorCasillaLlegada = "#ffffff";
            break;
          case 34:
            this.mensajeCasilla = "Me gusta. Esta casilla es muy tranquila.";
            this.colorCasillaLlegada = "#ffffff";
            break;

            case 41:
              this.mensajeCasilla = "Me gusta. Esta casilla es muy tranquila.";
              this.colorCasillaLlegada = "#ffffff";
              break;
            case 42:
              this.mensajeCasilla = "Noto la brisa de un pozo";
              this.colorCasillaLlegada = "#ffffff";
              break;
            case 43:
              this.mensajeCasilla = "¡Me caigo al pozoooooo!";
              this.colorCasillaLlegada = "#ff0000";
              break;
            case 44:
              this.mensajeCasilla = "Noto la brisa de un pozo";
              this.colorCasillaLlegada = "#ffffff";
              break;

              case 51:
              this.mensajeCasilla = "HAS GANADO!! YUHOOO!!";
              this.colorCasillaLlegada = "#63a54e";
              break;

            default:
            this.mensajeCasilla = "Te has tragado el Muroooo!!";
            this.colorCasillaLlegada = "#999999";
          }
    }

  /***************************************************
   MENSAJE DE LA CASILLA DE DESTINO
   **************************************************/

    mensajeGiro (valorCasilla:number) {
      switch (valorCasilla) {
        case 111:
          this.mensajeDireccion = "Por ahí vas bien.";
          this.colorCasilla = "#ffffff";
          break;
        case 112:
          this.mensajeDireccion = "¡El Wumpus! ¡Peligro de muerte!";
          this.colorCasilla = "#ff0000";
          break;
        case 113:
          this.mensajeDireccion = "¡Ojo que te das contra el muro!";
          this.colorCasilla = "#999999";
          break;
        case 114:
          this.mensajeDireccion = "¡Ojo que te das contra el muro!";
          this.colorCasilla = "#999999";
          break;


        case 121:
          this.mensajeDireccion = "Noto la brisa de un pozo";
          this.colorCasilla = "#ffffff";
          break;
        case 122:
          this.mensajeDireccion = "¡Qué brilla ahí!";
          this.colorCasilla = "#ffff33";
          break;
        case 123:
          this.mensajeDireccion = "¡Qué hedor viene por ahí!";
          this.colorCasilla = "#ffffff";
          break;
        case 124:
          this.mensajeDireccion = "¡Ojo que te das contra el muro!";
          this.colorCasilla = "#999999";
          break;


        case 131:
          this.mensajeDireccion = "¡Cuidado, hay un pozo!";
          this.colorCasilla = "#b59c24";
          break;
        case 132:
          this.mensajeDireccion = "¡Cuidado, hay un pozo!";
          this.colorCasilla = "#b59c24";
          break;
        case 133:
          this.mensajeDireccion = "Por ahí vas bien.";
          this.colorCasilla = "#ffffff";
          break;
        case 134:
          this.mensajeDireccion = "¡Ojo que te das contra el muro!";
          this.colorCasilla = "#999999";
          break;


        case 141:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 142:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 143:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 144:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;


        case 211:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 212:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 213:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 214:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;


        case 221:
          this.mensajeDireccion = "¡Cuidado, hay un pozo!";
          this.colorCasilla = "#b59c24";
          break;
        case 222:
          this.mensajeDireccion = "Por ahí vas bien.";
          this.colorCasilla = "#ffffff";
          break;
        case 223:
          this.mensajeDireccion = "¡El Wumpus! ¡Peligro de muerte!";
          this.colorCasilla = "#ff0000";
          break;
        case 224:
          this.mensajeDireccion = "Por ahí vas bien.";
          this.colorCasilla = "#ffffff";
          break;


        case 231:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 232:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 233:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 234:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;


        case 241:
          this.mensajeDireccion = "¡Ojo que te das contra el muro!";
          this.colorCasilla = "#999999";
          break;
        case 242:
          this.mensajeDireccion = "Por ahí vas bien.";
          this.colorCasilla = "#ffffff";
          break;
        case 243:
          this.mensajeDireccion = "¡Cuidado, hay un pozo!";
          this.colorCasilla = "#b59c24";
          break;
        case 244:
          this.mensajeDireccion = "¡Cuidado, hay un pozo!";
          this.colorCasilla = "#b59c24";
          break;


        case 311:
          this.mensajeDireccion = "Por ahí vas bien.";
          this.colorCasilla = "#ffffff";
          break;
        case 312:
          this.mensajeDireccion = "¡Te acercas a la salida!";
          this.colorCasilla = "#ffffff";
          break;
        case 313:
          this.mensajeDireccion = "¡Ojo que te das contra el muro!";
          this.colorCasilla = "#999999";
          break;
        case 314:
          this.mensajeDireccion = "¡El Wumpus! ¡Peligro de muerte!";
          this.colorCasilla = "#ff0000";
          break;


        case 321:
          this.mensajeDireccion = "Noto la brisa de un pozo";
          this.colorCasilla = "#ffffff";
          break;
        case 322:
          this.mensajeDireccion = "Noto la brisa de un pozo";
          this.colorCasilla = "#ffffff";
          break;
        case 323:
          this.mensajeDireccion = "¡Qué hedor viene por ahí!";
          this.colorCasilla = "#ffffff";
          break;
        case 324:
          this.mensajeDireccion = "¡Qué brilla ahí!";
          this.colorCasilla = "#ffff33";
          break;


        case 331:
          this.mensajeDireccion = "Por ahí vas bien.";
          this.colorCasilla = "#ffffff";
          break;
        case 332:
          this.mensajeDireccion = "¡Cuidado, hay un pozo!";
          this.colorCasilla = "#b59c24";
          break;
        case 333:
          this.mensajeDireccion = "Por ahí vas bien.";
          this.colorCasilla = "#ffffff";
          break;
        case 334:
          this.mensajeDireccion = "¡Cuidado, hay un pozo!";
          this.colorCasilla = "#b59c24";
          break;



        case 341:
          this.mensajeDireccion = "¡Ojo que te das contra el muro!";
          this.colorCasilla = "#999999";
          break;
        case 342:
          this.mensajeDireccion = "Noto la brisa de un pozo";
          this.colorCasilla = "#ffffff";
          break;
        case 343:
          this.mensajeDireccion = "Noto la brisa de un pozo";
          this.colorCasilla = "#ffffff";
          break;
        case 344:
          this.mensajeDireccion = "Noto la brisa de un pozo";
          this.colorCasilla = "#ffffff";
          break;



        case 411:
          this.mensajeDireccion = "Noto la brisa de un pozo";
          this.colorCasilla = "#ffffff";
          break;
        case 412:
          this.mensajeDireccion = "¡HAS ENCONTRADO LA SALIDA! Sólo tienes que avanzar para salir del juego.";
          this.colorCasilla = "#63a54e";
          break;
        case 413:
          this.mensajeDireccion = "¡Ojo que te das contra el muro!";
          this.colorCasilla = "#999999";
          break;
        case 414:
          this.mensajeDireccion = "¡Qué hedor viene por ahí!";
          this.colorCasilla = "#ffffff";
          break;


        case 421:
          this.mensajeDireccion = "¡Cuidado, hay un pozo!";
          this.colorCasilla = "#b59c24";
          break;
        case 422:
          this.mensajeDireccion = "¡Ojo que te das contra el muro!";
          this.colorCasilla = "#999999";
          break;
        case 423:
          this.mensajeDireccion = "¡Te acercas a la salida!";
          this.colorCasilla = "#ffffff";
          break;
        case 424:
          this.mensajeDireccion = "Por ahí vas bien.";
          this.colorCasilla = "#ffffff";
          break;


        case 431:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 432:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 433:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;
        case 434:
          this.mensajeDireccion = "Estoy muerto...";
          this.colorCasilla = "#999999";
          break;

      case 441:
        this.mensajeDireccion = "¡Ojo que te das contra el muro!";
        this.colorCasilla = "#999999";
        break;
      case 442:
        this.mensajeDireccion = "¡Ojo que te das contra el muro!";
        this.colorCasilla = "#999999";
        break;
      case 443:
        this.mensajeDireccion = "¡Cuidado, hay un pozo!";
        this.colorCasilla = "#b59c24";
        break;
      case 444:
        this.mensajeDireccion = "Por ahí vas bien.";
        this.colorCasilla = "#ffffff";
        break;


          default:
          this.mensajeDireccion = "¡Gira al cazador y a ver qué encontramos!";
          this.colorCasilla = "#bddee5";
        }
      }

}
