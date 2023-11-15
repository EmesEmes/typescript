(() => {

    // interface Client {
    //     name: string;
    //     age:number;
    //     address: {
    //         id: number;
    //         zip: string;
    //         city: string;
    //     }
    // }
    interface Client {
        name: string;
        age:number;
        address: Address;
    }
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Emilio',
        age: 30,
        address: {
            id: 125,
            zip: '123456',
            city: 'Ottawa'
        }
    }

    const client2: Client = {
        name: 'Mimi',
        age: 59,
        address: {
            id: 126,
            zip: '123456',
            city: "Quito"
        }
    }

    client.age = 40;
    console.log(client);
})();