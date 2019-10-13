// Write your JavaScript code here!

window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(
    function(response) {
      response.json().then(function(json) {
        const missionData = document.getElementById("missionTarget");
        let i = Math.floor(Math.random() * 6);
        missionData.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
            <li>Name: ${json[i].name}</li>
            <li>Diameter: ${json[i].diameter}</li>
            <li>Star: ${json[i].star}</li>
            <li>Distance from Earth: ${json[i].distance}</li>
            <li>Number of Moon: ${json[i].moons}</li>
            </ol>
            <img src="${json[i].image}">
        `;
      });
    }
  );
  let form = document.querySelector("form");

  form.addEventListener("submit", function() {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]").value;
    let copilotInput = document.querySelector("input[name=copilotName]").value;
    let fuelInput = document.querySelector("input[name=fuelLevel]").value;
    let cargoInput = document.querySelector("input[name=cargoMass]").value;
    let checkOne;
    let checkTwo;

    if (pilotInput == "") {
      alert("Pilot name cannot be blank");
      event.preventDefault();
    } else if (copilotInput == "") {
      alert("Copilot name cannot be blank");
      event.preventDefault();
    } else if (isNaN(fuelInput) || fuelInput == "") {
      alert("Fuel must be a number");
      event.preventDefault();
    } else if (isNaN(cargoInput) || cargoInput == "") {
      alert("Cargo value must be a number");
      event.preventDefault();
    } else {
      document.getElementById(
        "pilotStatus"
      ).innerHTML = `Pilot ${pilotInput} is ready for launch`;
      document.getElementById(
        "copilotStatus"
      ).innerHTML = `Copilot ${copilotInput} is ready for launch`;
      if (Number(fuelInput) < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById(
          "launchStatus"
        ).innerHTML = `Shuttle Not Ready for Launch`;
        document.getElementById(
          "fuelStatus"
        ).innerHTML = `Fuel level is too low for launch`;
      } else {
        document.getElementById("fuelStatus").innerHTML = `Fuel level is good`;
        checkOne = true;
      }
      if (Number(cargoInput) > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById(
          "launchStatus"
        ).innerHTML = `Shuttle Not Ready for Launch`;
        document.getElementById(
          "cargoStatus"
        ).innerHTML = `Cargo mass too high for launch`;
      } else {
        document.getElementById(
          "cargoStatus"
        ).innerHTML = `Cargo mass low enough for launch`;
        checkTwo = true;
      }
    }
    if (checkOne == true && checkTwo == true) {
      document.getElementById("faultyItems").style.visibility = "hidden";
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById(
        "launchStatus"
      ).innerHTML = `Shuttle Ready for Launch`;
    }
  });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
