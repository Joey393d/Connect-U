'use strict';
console.log('app.js is now connected');

let volunteerResults = document.getElementById('volunteerResults');

let resultSpot = document.getElementById('resultSpot');

function displayName(event) {
  // event.preventDefault();
  console.log('this is the name submit ', event);
  let nameAnswer = document.getElementById('name').value;
  localStorage.setItem('name', nameAnswer);
}

let nameElement = document.getElementById('nameform');
nameElement.addEventListener('submit', displayName);

//name display
let NameVar = localStorage.getItem('name');
document.getElementById('namedisplay').innerHTML = 'Hello ' + NameVar + '!';

function displayRadioValue(event) {
  event.preventDefault();
  console.log('this is the event',event);
  let PH1result = event.target.Food.checked;
  let PH2result = event.target.Youth.checked;
  let PH3result = event.target.Animals.checked;
  let PH4result = event.target.Housing.checked;

  console.log(PH1result, PH2result, PH3result, PH4result);
  //let results = [PH1result, PH2result, PH3result, PH4result];

  if(event.target.Food.checked){
    localStorage.setItem('results', 'Hunger');
    for(let i =0; i < foodOrgs.length; i++){
      // creates the ul and sets id to volunteerResults
      let orgList = document.createElement('ul');
      orgList.setAttribute('id', 'volunteerResults');

  localStorage.setItem('results', results);

  if(event.target.Food.checked){
    for(let i =0; i < foodOrgs.length; i++){
      document.getElementById('volunteerResults').innerHTML += `${foodOrgs[i].orgName} `;
      document.createElement('li').innerHTML += `${foodOrgs[i].orgName} `;
      document.getElementById('volunteerResults').innerHTML += `${foodOrgs[i].website} `;
      document.createElement('li').innerHTML += `${foodOrgs[i].website} `;
      document.getElementById('volunteerResults').innerHTML += `${foodOrgs[i].phoneNumber} `;
      document.createElement('li').innerHTML += `${foodOrgs[i].phoneNumber} `;
      document.getElementById('volunteerResults').innerHTML += `${foodOrgs[i].address} `;
      document.createElement('li').innerHTML += `${foodOrgs[i].address} `;
      let lineBreak = document.createElement('br');
      volunteerResults.appendChild(lineBreak);
    }
  }

  if(event.target.Youth.checked){
    for(let i =0; i < youthOrgs.length; i++){
      document.getElementById('volunteerResults').innerHTML += `${youthOrgs[i].orgName} `;
      document.createElement('li').innerHTML += `${youthOrgs[i].orgName} `;
      document.getElementById('volunteerResults').innerHTML += `${youthOrgs[i].website} `;
      document.createElement('li').innerHTML += `${youthOrgs[i].website} `;
      document.getElementById('volunteerResults').innerHTML += `${youthOrgs[i].phoneNumber} `;
      document.createElement('li').innerHTML += `${youthOrgs[i].phoneNumber} `;
      document.getElementById('volunteerResults').innerHTML += `${youthOrgs[i].address} `;
      document.createElement('li').innerHTML += `${youthOrgs[i].address} `;
    }
  }

  if(event.target.Animals.checked){
    for(let i =0; i < animalsOrgs.length; i++){
      document.getElementById('volunteerResults').innerHTML += `${animalsOrgs[i].orgName} `;
      document.createElement('li').innerHTML += `${animalsOrgs[i].orgName} `;
      document.getElementById('volunteerResults').innerHTML += `${animalsOrgs[i].website} `;
      document.createElement('li').innerHTML += `${animalsOrgs[i].website} `;
      document.getElementById('volunteerResults').innerHTML += `${animalsOrgs[i].phoneNumber} `;
      document.createElement('li').innerHTML += `${animalsOrgs[i].phoneNumber} `;
      document.getElementById('volunteerResults').innerHTML += `${animalsOrgs[i].address} `;
      document.createElement('li').innerHTML += `${animalsOrgs[i].address} `;
    }
  }

  if(event.target.Housing.checked){
    for(let i =0; i < housingOrgs.length; i++){
      document.getElementById('volunteerResults').innerHTML += `${housingOrgs[i].orgName} `;
      document.createElement('li').innerHTML += `${housingOrgs[i].orgName} `;
      document.getElementById('volunteerResults').innerHTML += `${housingOrgs[i].website} `;
      document.createElement('li').innerHTML += `${housingOrgs[i].website} `;
      document.getElementById('volunteerResults').innerHTML += `${housingOrgs[i].phoneNumber} `;
      document.createElement('li').innerHTML += `${housingOrgs[i].phoneNumber} `;
      document.getElementById('volunteerResults').innerHTML += `${housingOrgs[i].address} `;
      document.createElement('li').innerHTML += `${housingOrgs[i].address} `;
    }
  }
  //add remove event listener on submit
}

function resetPage(){
  window.location.reload();
}

console.log(resetPage);

      // creates an li for the org name, sets the text content to the orgName of the object at position i, and then appends the li to the ul
      let orgName = document.createElement('li');
      orgName.textContent = foodOrgs[i].orgName;
      orgList.appendChild(orgName);

      let orgSite = document.createElement('li');
      orgSite.textContent = foodOrgs[i].website;
      orgList.appendChild(orgSite);

      let orgPhone = document.createElement('li');
      orgPhone.textContent = foodOrgs[i].phoneNumber;
      orgList.appendChild(orgPhone);

      resultSpot.appendChild(orgList);
    }
  }

  if(event.target.Youth.checked){
    localStorage.setItem('results', 'Youth');
    for(let i =0; i < youthOrgs.length; i++){
      // creates the ul and sets id to volunteerResults
      let orgList = document.createElement('ul');
      orgList.setAttribute('id', 'volunteerResults');

      // creates an li for the org name, sets the text content to the orgName of the object at position i, and then appends the li to the ul
      let orgName = document.createElement('li');
      orgName.textContent = youthOrgs[i].orgName;
      orgList.appendChild(orgName);

      let orgSite = document.createElement('li');
      orgSite.textContent = youthOrgs[i].website;
      orgList.appendChild(orgSite);

      let orgPhone = document.createElement('li');
      orgPhone.textContent = youthOrgs[i].phoneNumber;
      orgList.appendChild(orgPhone);

      resultSpot.appendChild(orgList);
    }
  }

  if(event.target.Animals.checked){
    localStorage.setItem('results', 'Animals');
    for(let i =0; i < animalsOrgs.length; i++){
      // creates the ul and sets id to volunteerResults
      let orgList = document.createElement('ul');
      orgList.setAttribute('id', 'volunteerResults');

      // creates an li for the org name, sets the text content to the orgName of the object at position i, and then appends the li to the ul
      let orgName = document.createElement('li');
      orgName.textContent = animalsOrgs[i].orgName;
      orgList.appendChild(orgName);

      let orgSite = document.createElement('li');
      orgSite.textContent = animalsOrgs[i].website;
      orgList.appendChild(orgSite);

      let orgPhone = document.createElement('li');
      orgPhone.textContent = animalsOrgs[i].phoneNumber;
      orgList.appendChild(orgPhone);

      resultSpot.appendChild(orgList);
    }
  }

  if(event.target.Housing.checked){
    localStorage.setItem('results', 'Housing');
    for(let i =0; i < housingOrgs.length; i++){
      // creates the ul and sets id to volunteerResults
      let orgList = document.createElement('ul');
      orgList.setAttribute('id', 'volunteerResults');

      // creates an li for the org name, sets the text content to the orgName of the object at position i, and then appends the li to the ul
      let orgName = document.createElement('li');
      orgName.textContent = housingOrgs[i].orgName;
      orgList.appendChild(orgName);

      let orgSite = document.createElement('li');
      orgSite.textContent = housingOrgs[i].website;
      orgList.appendChild(orgSite);

      let orgPhone = document.createElement('li');
      orgPhone.textContent = housingOrgs[i].phoneNumber;
      orgList.appendChild(orgPhone);

      resultSpot.appendChild(orgList);
    }
  }
  resetForm();
}

// TODO: if condition to check whether orgList exists, if yes then clear out resultSpot first before running displayRadioValue, else if not then go ahead and just run displayRadioValue


let formElement = document.getElementById('Selection');
formElement.addEventListener('submit', displayRadioValue);

function resetForm(){
  formElement.reset();
}

function resetPage(){
  window.location.reload();
}

console.log(resetPage);

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

let foodBank = new Organization('Linn County Food Bank', 'http://www.linncommunityfoodbank.org/Linn_Community_Food_Bank/Welcome.html', '319-364-3543', '310 5th St. SE Cedar Rapids, IA, 52401', 'food');

let foodBank = new Organization('Linn County Food Bank', 'http://www.linncommunityfoodbank.org/', '319-364-3543', '310 5th St. SE Cedar Rapids, IA, 52401', 'food');

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
