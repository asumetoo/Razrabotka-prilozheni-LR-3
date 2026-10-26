export class AirlineCard {
    constructor(airlineCardsRoot) {
        this.airlineCardsRoot = airlineCardsRoot;
    }

    getHTML(airline) {
        return `
            <article class="card airline-card">
                <img class="card-img-top" src="${airline.image}" alt="Пассажирский самолёт">
                <div class="card-body d-flex flex-column">
                    <h2 class="card-title h5">${airline.name}</h2>
                    <p class="card-text">${airline.description}</p>
                    <div class="d-flex flex-wrap gap-2 mt-auto">
                        <button type="button" class="btn btn-primary"
                            id="open-airline-${airline.id}" data-airline-id="${airline.id}">
                            Подробнее
                        </button>
                        <button type="button" class="btn btn-outline-danger"
                            id="delete-airline-${airline.id}" data-airline-id="${airline.id}">
                            Удалить
                        </button>
                    </div>
                </div>
            </article>
        `;
    }

    render(airline, openAirline, deleteAirline) {
        this.airlineCardsRoot.insertAdjacentHTML("beforeend", this.getHTML(airline));
        document.getElementById(`open-airline-${airline.id}`).addEventListener("click", openAirline);
        document.getElementById(`delete-airline-${airline.id}`).addEventListener("click", deleteAirline);
    }
}
