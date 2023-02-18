// getInputFieldById 
function getInputFieldById(inputFieldId){
   const inputField = document.getElementById(inputFieldId);
   const inputFieldValueString = inputField.value;
   const inputFieldValue = parseFloat(inputFieldValueString);
   return inputFieldValue;
}
// randomColor 
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 

// areaCalculation 
let serial = 0;
function areaCalculation(element,area){
  const areaCalculationField = document.getElementById("area-calculation")
  const tr = document.createElement("tr")
  tr.innerHTML =`
  <td>${serial}.</td>
  <td>${element}:</td>
  <td>${area}cm<sup>2</sup></td>
  <td><button style="font-size: 12px; background-color: crimson; color: white;">Convert to m<sup>2</sup></button></td>
  `
  areaCalculationField.appendChild(tr)
}