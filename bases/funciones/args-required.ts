(() => {
    const fullName = (firstName, lastName): string => {
        return `${firstName} ${lastName}`;
    }

    const nombre = fullName('Emilio', 'del Hierro');
    console.log({nombre})
})();