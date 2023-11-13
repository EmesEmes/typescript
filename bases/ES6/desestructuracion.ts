(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123456
    }

    const {poder, vision} = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({vision, ...resto}: Avengers ) => {
        console.log(vision, resto)
    }
    printAvenger(avengers)

    const avengersArr: string[] = ['capitan america', 'ironman', 'hulk'];

    // const ironman = avengersArr[1];
    // console.log(ironman)

    const [capitan, ironman,] = avengersArr;
    console.log({capitan,ironman})
})();