import {AirlinesPage} from "./pages/airlines/index.js";

const airlineAppRoot = document.getElementById("airline-app");
const airlinesPage = new AirlinesPage(airlineAppRoot);
airlinesPage.render();

document.getElementById("airline-home-button").addEventListener("click", () => {
    const airlinesPage = new AirlinesPage(airlineAppRoot);
    airlinesPage.render();
});
