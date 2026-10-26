export class AirlineDetails {
    constructor(airlinePageRoot) {
        this.airlinePageRoot = airlinePageRoot;
    }

    getHTML(airline) {
        let flightRows = "";
        airline.flights.forEach(flight => {
            flightRows += `
                <tr>
                    <td>${flight.number}</td>
                    <td>${flight.departure}</td>
                    <td>${flight.destination}</td>
                </tr>
            `;
        });
        return `
            <article class="card mb-4 airline-details">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img class="img-fluid detail-image" src="${airline.image}"
                            alt="Пассажирский самолёт">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title h3">${airline.name}</h1>
                            <p class="card-text">${airline.description}</p>
                        </div>
                    </div>
                </div>
            </article>
            <h2 class="h4">Авиарейсы</h2>
            <div class="table-responsive airline-details">
                <table class="table table-bordered bg-white">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Рейс</th>
                            <th scope="col">Пункт отправления</th>
                            <th scope="col">Пункт назначения</th>
                        </tr>
                    </thead>
                    <tbody>${flightRows}</tbody>
                </table>
            </div>
        `;
    }

    render(airline) {
        this.airlinePageRoot.insertAdjacentHTML("beforeend", this.getHTML(airline));
    }
}
