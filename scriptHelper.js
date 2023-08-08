// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput == ""){
        return "Empty"
    }
    else if (isNaN(testInput)){
        return "Not a Number"
    }
    else {
        return "Is a Number"
    }
    

   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    pilotStatus.innerHTML(`Pilot ${pilot} Ready`);
    copilotStatus.innerHTML(`Co-Pilot ${copilot} Ready`);
    let launchStatus = document.getElementById("launchStatus");
    if (fuelStatus < 10000) {
        document.getElementById("faultyItems").style.visibilty = "visible";
        fuelStatus.innerHTML(`Not enough fuel for the journey`);
        launchStatus.style.color = "red";
        launchStatus.innerHTML(`Shuttle not ready for launch`);
    } else {

    }
    if (cargoStatus > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        launchStatus.style.color = "#C7254E";
    } else {
        launchStatus.style.color = "#419F6A";
        launchStatus.innerHTML(`Shuttle ready for launch`);
    }
}

    


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
