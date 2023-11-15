"use strict";
(() => {
    const client = {
        name: 'Emilio',
        age: 30,
        address: {
            id: 125,
            zip: '123456',
            city: 'Ottawa'
        }
    };
    const client2 = {
        name: 'Mimi',
        age: 59,
        address: {
            id: 126,
            zip: '123456',
            city: "Quito"
        }
    };
    client.age = 40;
    console.log(client);
})();
