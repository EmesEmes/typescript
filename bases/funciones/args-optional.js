"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const nombre = fullName('Emilio');
    console.log({ nombre });
})();
