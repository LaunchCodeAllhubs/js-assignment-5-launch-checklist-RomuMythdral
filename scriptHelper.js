// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionDiv = document.getElementById("missionTarget");

        missionDiv.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `
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
    if ((validateInput(pilot) == "Empty") || (validateInput(copilot) == "Empty") || (validateInput(fuelLevel) == "Empty") || (validateInput(cargoLevel) == "Empty")) {
        alert("Please make sure all fields are filled out.")
    } else if (validateInput(pilot) == "Is a Number" || validateInput(copilot) == "Is a Number"){
        alert("Make sure you're typing the pilot and copilot's name instead of a number.")
    } else if (validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number"){
        alert("That is not a number in your fuel level and(or) cargo level. Please fix.")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = "visible";
        let launchStatus = document.getElementById("launchStatus");
        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = `Not enough fuel for the journey`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        } else {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }
        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.style.color = "#C7254E";
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        } else {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }
        if (cargoLevel <= 10000 && fuelLevel >= 10000) {
            launchStatus.style.color = "#419F6A";
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        }
    }
    return false;
}

    


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()    
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNum = Math.floor(Math.random() * planets.length);
    let chosenPlanet = planets[randomNum];
    return chosenPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
