"use strict";
(() => {
    const client = {
        name: 'Emilio',
        age: 30,
        address: {
            id: 125,
            zip: '123456',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Mimi',
        age: 59,
        address: {
            id: 126,
            zip: '123456',
            city: "Quito"
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    client.age = 40;
    console.log(client.getFullAddress);
})();
