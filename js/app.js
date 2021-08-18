'use strict';
console.log('app.js is now connected');

function displayName(event) {
  event.preventDefault();
  console.log('this is the name submit ', event);
  let nameAnswer = document.getElementById('name').value;
  localStorage.setItem('name', nameAnswer);
}

let nameElement = document.getElementById('nameform');
nameElement.addEventListener('submit', displayName);


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

  if(event.target.Food.checked){
    for(let i =0; i < foodOrgs.length; i++){
      document.getElementById('volunteerResults').innerHTML += `${foodOrgs[i].orgName} `;
      document.createElement('li').innerHTML += `${foodOrgs[i].orgName} `;
      document.getElementById('volunteerResults').innerHTML += `${foodOrgs[i].website} `;
      document.createElement('a').innerHTML += `${foodOrgs[i].website} `;
      document.getElementById('volunteerResults').innerHTML += `${foodOrgs[i].phoneNumber} `;
      document.createElement('a').innerHTML += `${foodOrgs[i].phoneNumber} `;
      document.getElementById('volunteerResults').innerHTML += `${foodOrgs[i].address} `;
      document.createElement('a').innerHTML += `${foodOrgs[i].address} `;
    }
  }

  if(event.target.Youth.checked){
    for(let i =0; i < youthOrgs.length; i++){
      document.getElementById('volunteerResults').innerHTML += `${youthOrgs[i].orgName} `;
      document.createElement('li').innerHTML += `${youthOrgs[i].orgName} `;
      document.getElementById('volunteerResults').innerHTML += `${youthOrgs[i].website} `;
      document.createElement('a').innerHTML += `${youthOrgs[i].website} `;
      document.getElementById('volunteerResults').innerHTML += `${youthOrgs[i].phoneNumber} `;
      document.createElement('a').innerHTML += `${youthOrgs[i].phoneNumber} `;
      document.getElementById('volunteerResults').innerHTML += `${youthOrgs[i].address} `;
      document.createElement('a').innerHTML += `${youthOrgs[i].address} `;
    }
  }

  if(event.target.Animals.checked){
    for(let i =0; i < animalsOrgs.length; i++){
      document.getElementById('volunteerResults').innerHTML += `${animalsOrgs[i].orgName} `;
      document.createElement('li').innerHTML += `${animalsOrgs[i].orgName} `;
      document.getElementById('volunteerResults').innerHTML += `${animalsOrgs[i].website} `;
      document.createElement('a').innerHTML += `${animalsOrgs[i].website} `;
      document.getElementById('volunteerResults').innerHTML += `${animalsOrgs[i].phoneNumber} `;
      document.createElement('a').innerHTML += `${animalsOrgs[i].phoneNumber} `;
      document.getElementById('volunteerResults').innerHTML += `${animalsOrgs[i].address} `;
      document.createElement('a').innerHTML += `${animalsOrgs[i].address} `;
    }
  }

  if(event.target.Housing.checked){
    for(let i =0; i < housingOrgs.length; i++){
      document.getElementById('volunteerResults').innerHTML += `${housingOrgs[i].orgName} `;
      document.createElement('li').innerHTML += `${housingOrgs[i].orgName} `;
      document.getElementById('volunteerResults').innerHTML += `${housingOrgs[i].website} `;
      document.createElement('a').innerHTML += `${housingOrgs[i].website} `;
      document.getElementById('volunteerResults').innerHTML += `${housingOrgs[i].phoneNumber} `;
      document.createElement('a').innerHTML += `${housingOrgs[i].phoneNumber} `;
      document.getElementById('volunteerResults').innerHTML += `${housingOrgs[i].address} `;
      document.createElement('a').innerHTML += `${housingOrgs[i].address} `;
    }
  }

}

function resetPage(){
  window.location.reload();
}

console.log(resetPage);

let formElement = document.getElementById('Selection');
formElement.addEventListener('submit', displayRadioValue);

function Organization(orgName, website, phoneNumber, address, category){
  this.orgName = orgName;
  this.website = website;
  this.phoneNumber = phoneNumber;
  this.address = address;
  this.category = category;
}

let cedarValley = new Organization('Cedar Valley Habitat for Humanity', 'https://www.cvhabitat.org/', '319-366-4485', '350 6th Ave SE Cedar Rapids, IA, 52401', 'housing');

let familyPromise = new Organization('Family Promise', 'https://familypromiseoflinncounty.org/', '319-540-6494', '610 31st Street SE Cedar Rapids, IA, 52403', 'housing');

let feedIowa = new Organization('Feed Iowa First', 'https://www.feediowa1st.com/', '319-775-0149', 'PO Box 1190 Cedar Rapids, IA, 52406', 'food');

let foodBank = new Organization('Linn County Food Bank', 'http://www.linncommunityfoodbank.org/Linn_Community_Food_Bank/Welcome.html', '319-364-3543', 'First Presbyterian Church 310 5th St. SE Cedar Rapids, IA, 52401', 'food');

let ronaldMcdonald = new Organization('Ronald McDonald House of Eastern Iowa', 'https://rmhc-eiwi.org/', '319-369-5192', '150 11th St NE Cedar Rapids, IA, 52402', 'youth');

let dreamFactory = new Organization('Dream Factory Inc', 'https://www.dreamfactoryinc.org/iowa/', '319-775-0794', 'PO Box 1133 Cedar Rapids, IA, 52401', 'youth');

let lastHope = new Organization('Last Hope Animal Rescue Inc', 'https://adopthope.org/', '319-200-4880', 'PO Box 11195 Cedar Rapids, IA, 52410', 'animals');

let aniMeals = new Organization('Cedar Rapids AniMeals', 'https://cranimeals.com/', '319-365-6201', 'PO Box 11195 Cedar Rapids, IA, 52410', 'animals');

let housingOrgs = [cedarValley, familyPromise];
let foodOrgs = [feedIowa, foodBank];
let youthOrgs = [ronaldMcdonald, dreamFactory];
let animalsOrgs = [lastHope, aniMeals];

console.log(housingOrgs);
console.log(foodOrgs);
console.log(youthOrgs);
console.log(animalsOrgs);
