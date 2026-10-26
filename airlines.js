export const airlines = [
    {
        id: 1,
        name: "Аэрофлот",
        description: "Авиакомпания. Пассажирские перевозки между городами России.",
        image: "images/plane.svg",
        flights: [
            {number: "SU 1001", departure: "Москва", destination: "Санкт-Петербург"},
            {number: "SU 1002", departure: "Москва", destination: "Казань"}
        ]
    },
    {
        id: 2,
        name: "S7 Airlines",
        description: "Авиакомпания. Рейсы в города Сибири и другие регионы.",
        image: "images/plane.svg",
        flights: [
            {number: "S7 2001", departure: "Новосибирск", destination: "Москва"},
            {number: "S7 2002", departure: "Новосибирск", destination: "Иркутск"}
        ]
    },
    {
        id: 3,
        name: "Победа",
        description: "Авиакомпания. Авиаперелёты по внутренним направлениям.",
        image: "images/plane.svg",
        flights: [
            {number: "DP 3001", departure: "Москва", destination: "Сочи"},
            {number: "DP 3002", departure: "Санкт-Петербург", destination: "Калининград"}
        ]
    }
];

export const airlineTemplate = airlines[0];
