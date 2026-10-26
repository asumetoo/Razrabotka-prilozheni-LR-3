import {airlines} from "../../airlines.js";
import {AirlineDetails} from "../../components/airline-details/index.js";
import {AirlineBackButton} from "../../components/airline-back-button/index.js";
import {AirlinesPage} from "../airlines/index.js";

export class AirlinePage {
    constructor(airlineAppRoot, airlineId) {
        this.airlineAppRoot = airlineAppRoot;
        this.airlineId = Number(airlineId);
    }

    returnToAirlines() {
        const airlinesPage = new AirlinesPage(this.airlineAppRoot);
        airlinesPage.render();
    }

    render() {
        this.airlineAppRoot.innerHTML = "";
        this.airlineAppRoot.insertAdjacentHTML("beforeend", '<div id="airline-page"></div>');
        const airlinePageRoot = document.getElementById("airline-page");
        const airlineBackButton = new AirlineBackButton(airlinePageRoot);
        airlineBackButton.render(this.returnToAirlines.bind(this));
        const airline = airlines.find(airline => airline.id === this.airlineId);
        const airlineDetails = new AirlineDetails(airlinePageRoot);
        airlineDetails.render(airline);
    }
}
