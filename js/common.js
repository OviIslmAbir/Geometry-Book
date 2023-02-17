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
  