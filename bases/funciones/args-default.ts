(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false ): string => {
        if(upper) {
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || 'no last name'}`;
        }

    }

    const nombre = fullName('Emilio', 'del Hierro', true);
    console.log({nombre})
})();