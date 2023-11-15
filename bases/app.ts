// Crear interfaces
// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {

}
const conducirBatimovil = ( auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGotica {
  (ciudadanos:string[]):number;
}
const ciudadGotica: CiudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Propiedades {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio():void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Propiedades {
  constructor(public nombre: string, public edad: number, public sexo: string, public estadoCivil: string) {

  }
  imprimirBio(): void {
    console.log("hola");
  }
}