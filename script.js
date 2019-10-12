// Write your JavaScript code here!

window.addEventListener("load",function() {
   let form = document.querySelector("form");
   form.addEventListener("submit",function() {
      
      let pilotInput = document.querySelector("input[name=pilotName]").value;
      let copilotInput = document.querySelector("input[name=copilotName]").value;
      let fuelInput = document.querySelector("input[name=fuelLevel]").value;
      let cargoInput = document.querySelector("input[name=cargoMass]").value;
      console.log(pilotInput);
      if (pilotInput == "") {
         alert("Pilot name cannot be blank");
         event.preventDefault();
      }
         else if (copilotInput == "") {
            alert("Copilot name cannot be blank");
            event.preventDefault();
         }
            else if (isNaN(fuelInput) || fuelInput == "") {
               alert("Fuel must be a number");
               event.preventDefault();
            }
               else if (isNaN(cargoInput) || cargoInput == "") {
                  alert("Cargo value must be a number");
                  event.preventDefault();
               }
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput} is ready for launch`;
   })
})
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
