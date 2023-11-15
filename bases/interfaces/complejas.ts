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
        getFullAddress: (id: string) => string;
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
        },
        getFullAddress(id: string) {
            return this.address.city;
        },
    }

    const client2: Client = {
        name: 'Mimi',
        age: 59,
        address: {
            id: 126,
            zip: '123456',
            city: "Quito"
        },
        getFullAddress(id: string) {
            return this.address.city;
        },
    }

    client.age = 40;
    console.log(client.getFullAddress);
})();