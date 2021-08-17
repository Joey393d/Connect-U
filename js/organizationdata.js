'use strict';
console.log('organizationdata.js is now connected');

function Organization(orgName, phoneNumber, address, category){
this.orgName = orgName;
this.phoneNumber = phoneNumber;
this.address = address;
this.category = category;
}

let category = ['housing', 'food', 'youth/children', 'animals'];
