"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        Fuerza[Fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        Fuerza[Fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        Fuerza[Fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.fuerzaFlash;
    const fuerzaSuperman = Fuerza.fuerzaSuperman;
    const fuerzaBatman = Fuerza.fuerzaBatman;
    const fuerzaAcuaman = Fuerza.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
