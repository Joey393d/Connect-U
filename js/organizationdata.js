'use strict';
console.log('organizationdata.js is now connected');

function Organization(orgName, website, phoneNumber, address, category){
this.orgName = orgName;
this.website = website;
this.phoneNumber = phoneNumber;
this.address = address;
this.category = category;
}

let cedarValley = new Organization('Cedar Valley Habitat for Humanity', 'https://www.cvhabitat.org/', '319-366-4485', '350 6th Ave SE Cedar Rapids, IA 52401', 'housing');

let familyPromise = new Organization('Family Promise', 'https://familypromiseoflinncounty.org/', '319-540-6494', '610 31st Street SE Cedar Rapids, IA 52403', 'housing');

let feedIowa = new Organization('Feed Iowa First', 'https://www.feediowa1st.com/', '319-775-0149', 'PO Box 1190 Cedar Rapids, IA 52406-1190', 'food');

let foodBank = new Organization('Linn County Food Bank', 'http://www.linncommunityfoodbank.org/Linn_Community_Food_Bank/Welcome.html', '319-364-3543', 'First Presbyterian Church 310 5th St. SE Cedar Rapids, IA, 52401', 'food');

let housing = [cedarValley, familyPromise];
let food = [feedIowa, foodBank];
let youth = ['Ronald McDonald House of Eastern Iowa', 'Dream Factory'];
let animals = ['Last Hope Animal Rescue Inc', 'Cedar Rapids AniMeals'];

console.log(housing);
console.log(food);
console.log(youth);
console.log(animals);




