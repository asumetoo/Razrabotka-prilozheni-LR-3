export class AirlineBackButton {
    constructor(airlinePageRoot) {
        this.airlinePageRoot = airlinePageRoot;
    }

    render(returnToAirlines) {
        this.airlinePageRoot.insertAdjacentHTML("beforeend", `
            <button id="back-to-airlines" type="button" class="btn btn-primary mb-4">Назад</button>
        `);
        document.getElementById("back-to-airlines").addEventListener("click", returnToAirlines);
    }
}
