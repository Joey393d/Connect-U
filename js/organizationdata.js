'use strict';
console.log('organizationdata.js is now connected');

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

let housing = [cedarValley, familyPromise];
let food = [feedIowa, foodBank];
let youth = [ronaldMcdonald, dreamFactory];
let animals = [lastHope, aniMeals];

console.log(housing);
console.log(food);
console.log(youth);
console.log(animals);
