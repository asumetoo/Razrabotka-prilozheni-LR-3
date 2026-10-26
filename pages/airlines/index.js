import {airlines, airlineTemplate} from "../../airlines.js";
import {AirlineCard} from "../../components/airline-card/index.js";
import {AirlinePage} from "../airline/index.js";

export class AirlinesPage {
    constructor(airlineAppRoot) {
        this.airlineAppRoot = airlineAppRoot;
        this.airlineNameFilter = "";
    }

    getHTML() {
        return `
            <h1 class="h2">Авиакомпании</h1>
            <p class="text-secondary">Выберите авиакомпанию, чтобы посмотреть её рейсы.</p>
            <div class="row g-3 align-items-end mb-4">
                <div class="col-md-7">
                    <label for="airline-name-filter" class="form-label">Фильтр по названию</label>
                    <input id="airline-name-filter" type="search" class="form-control"
                        placeholder="Например, S7 Airlines">
                </div>
                <div class="col-md-5">
                    <button id="add-airline-button" type="button" class="btn btn-primary">
                        Добавить авиакомпанию
                    </button>
                </div>
            </div>
            <div id="airline-cards" class="d-flex flex-wrap gap-4"></div>
        `;
    }

    openAirline(event) {
        const airlineId = event.currentTarget.dataset.airlineId;
        const airlinePage = new AirlinePage(this.airlineAppRoot, airlineId);
        airlinePage.render();
    }

    deleteAirline(event) {
        const airlineId = Number(event.currentTarget.dataset.airlineId);
        const airlineIndex = airlines.findIndex(airline => airline.id === airlineId);
        if (airlineIndex !== -1) airlines.splice(airlineIndex, 1);
        this.renderAirlineCards();
    }

    addAirline() {
        const firstAirline = airlines[0] || airlineTemplate;
        const nextAirlineId = Math.max(0, ...airlines.map(airline => airline.id)) + 1;
        const newAirline = {
            ...firstAirline,
            id: nextAirlineId,
            flights: firstAirline.flights.map(flight => ({...flight}))
        };
        airlines.push(newAirline);
        this.airlineNameFilter = "";
        document.getElementById("airline-name-filter").value = "";
        this.renderAirlineCards();
    }

    renderAirlineCards() {
        const airlineCardsRoot = document.getElementById("airline-cards");
        airlineCardsRoot.innerHTML = "";
        const filteredAirlines = airlines.filter(airline =>
            airline.name.toLowerCase().includes(this.airlineNameFilter.trim().toLowerCase())
        );
        filteredAirlines.forEach(airline => {
            const airlineCard = new AirlineCard(airlineCardsRoot);
            airlineCard.render(airline, this.openAirline.bind(this), this.deleteAirline.bind(this));
        });
        if (filteredAirlines.length === 0) {
            airlineCardsRoot.insertAdjacentHTML("beforeend", "<p>Авиакомпании не найдены.</p>");
        }
    }

    render() {
        this.airlineAppRoot.innerHTML = "";
        this.airlineAppRoot.insertAdjacentHTML("beforeend", this.getHTML());
        document.getElementById("airline-name-filter").addEventListener("input", event => {
            this.airlineNameFilter = event.currentTarget.value;
            this.renderAirlineCards();
        });
        document.getElementById("add-airline-button")
            .addEventListener("click", this.addAirline.bind(this));
        this.renderAirlineCards();
    }
}
