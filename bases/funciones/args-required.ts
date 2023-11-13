(() => {
    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }

    const nombre = fullName('Emilio', 'del Hierro');
    console.log({nombre})
})();