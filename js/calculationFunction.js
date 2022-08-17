function getNewValue(submitButtonIdName){
   const inputValueBox = document.getElementById(submitButtonIdName);
   const newValueString = inputValueBox.value;
   inputValueBox.value = '';
   const newValue = parseFloat(newValueString);
   return newValue;
   
}
function getValuePreviousAmount(previousVAlueId){
    const previousVAlueBox = document.getElementById(previousVAlueId);
    const previousVAlueString = previousVAlueBox.innerText;
    const previousValue = parseFloat(previousVAlueString);
    return previousValue;
}

function setTotalAmount(elemnyId, newTotalValue){
    const previousVAlueBox = document.getElementById(elemnyId);
    previousVAlueBox.innerText = newTotalValue;
}