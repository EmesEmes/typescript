function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleCondicional = (print: boolean = false): Function => {
    if(print) {
        return printToConsole
    } else {
        return () => {}
    }
}

const bloqueaePrototipo = (constructor:Function) => {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor:PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if( id< 1 || id > 800) {
                return console.error('el id del pokemos debe ser entre 1 y 800')
            } else {
                return originalMethod(id);
            }
        }
    }
}



@bloqueaePrototipo
@printToConsoleCondicional(true)

export class Pokemon {
    public publicApi: string = 'https/pokeapi.co';
    constructor(public name: string) {

    }
    @CheckValidPokemonId()
    savePokemosToDB(id: number) {
        console.log(`Pokemon guardado en la base de datos ${id}`);
    }
}