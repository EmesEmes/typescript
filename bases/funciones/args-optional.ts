(() => {
    const fullName = (firstName: string, lastName?: string ): string => {
        return `${firstName} ${lastName || 'no last name'}`;
    }

    const nombre = fullName('Emilio');
    console.log({nombre})
})();