'use strict';
console.log('app.js is now connected');




function displayRadioValue(event) {
  event.preventDefault();
  console.log('this is the event',event);
  let PH1result = event.target.Food.checked;
  let PH2result = event.target.Youth.checked;
  let PH3result = event.target.Animals.checked;
  let HousingYN = event.target.Housing.checked;

  console.log(PH1result, PH2result, PH3result, HousingYN);
  let results = [PH1result, PH2result, PH3result, HousingYN];

  // let form = getElementById('Selection');
  // form.reset();

  localStorage.setItem('results', results);
}





let formElement = document.getElementById('Selection');
formElement.addEventListener('submit', displayRadioValue);

