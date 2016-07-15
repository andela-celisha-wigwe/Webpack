var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Ruby",
  "last_name": "Ryan",
  "email": "rryan0@auda.org.au",
  "gender": "Female",
  "ip_address": "48.169.18.46"
}, {
  "id": 2,
  "first_name": "Shirley",
  "last_name": "Lewis",
  "email": "slewis1@w3.org",
  "gender": "Female",
  "ip_address": "44.223.9.116"
}, {
  "id": 3,
  "first_name": "Earl",
  "last_name": "Brooks",
  "email": "ebrooks2@yellowbook.com",
  "gender": "Male",
  "ip_address": "62.140.75.8"
}, {
  "id": 4,
  "first_name": "Cheryl",
  "last_name": "Phillips",
  "email": "cphillips3@engadget.com",
  "gender": "Female",
  "ip_address": "84.2.160.142"
}, {
  "id": 5,
  "first_name": "Ruth",
  "last_name": "Duncan",
  "email": "rduncan4@discovery.com",
  "gender": "Female",
  "ip_address": "34.78.181.249"
}, {
  "id": 6,
  "first_name": "Jose",
  "last_name": "Hernandez",
  "email": "jhernandez5@cbslocal.com",
  "gender": "Male",
  "ip_address": "164.33.106.210"
}, {
  "id": 7,
  "first_name": "Barbara",
  "last_name": "Spencer",
  "email": "bspencer6@nymag.com",
  "gender": "Female",
  "ip_address": "19.96.118.217"
}, {
  "id": 8,
  "first_name": "Emily",
  "last_name": "Washington",
  "email": "ewashington7@yahoo.co.jp",
  "gender": "Female",
  "ip_address": "180.97.189.64"
}, {
  "id": 9,
  "first_name": "Lisa",
  "last_name": "Hunt",
  "email": "lhunt8@ted.com",
  "gender": "Female",
  "ip_address": "134.101.128.92"
}, {
  "id": 10,
  "first_name": "Nicole",
  "last_name": "Morris",
  "email": "nmorris9@slate.com",
  "gender": "Female",
  "ip_address": "127.52.57.32"
}];

var femaleCount = _.filter(people, {gender:"Female"}).length;

alert(femaleCount + " females!");