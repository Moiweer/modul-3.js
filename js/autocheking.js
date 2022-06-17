
// 6

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// // Change code below this line
// console.log(apartment.tags);

// 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
//   }


// 8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
//   // Change code below this line
//   // Change code above this line
// };


// 9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
  
// };


// 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
    

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);


//     console.log(key);
//     console.log(apartment[key]);
// }


// 11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }

// 

// 11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
 
// if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//   values.push(apartment[key]);
//   }
  

//   // Change code above this line
// }

// 12
// function countProps(object) {
//   let propCount = 0;
// for (const prop in object)
// if (object.hasOwnProperty(prop)){
//   propCount +=1;
// }
//   return propCount;
// }



// 13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys (apartment);
// for (const key of keys){
//   values.push(apartment[key]);
//  console.log(apartment[key]);
//   console.log(keys);
  
// }

// 14

// function countProps(object) {
 
//   let propCount = [];

//   const keys = Object.keys(object);

//   for (const key of keys) {
//       propCount.push(object[keys]);
//   }

//   return propCount.length;

// }


// 15


// 17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];

// const rgbColors = [];

// for (const color of colors){
//   const values = Object.values(color);
//  hexColors.push(values[0]);
//  rgbColors.push(values[1]);

// }



// 18


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const key of products) {
//     if (productName === key.name) {
//     return key.price;
//     }
  
//   }return null;
//   }

// 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//  const propValues = [];
 
//  for ( const product of products){

//      if (product[propName]) {
//          propValues.push(product[propName]);
// }
//  } return propValues;

 
// }
// console.log(getAllPropValues("name"));


// 20


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
// for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.quantity * product.price;
    
//     }
// }return totalPrice;
// }


// // 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday, today, tomorrow} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// // 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;


// 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
 
// };
// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;


// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const  { hex, rgb }  of colors) {
    
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(rgbColors)


// 25


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const { today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" }, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

// 26

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {today: {low:todayLow, high: todayHigh}, tomorrow:{low: tomorrowLow, high:tomorrowHigh}} = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(Math.max(...scores));
// console.log(Math.min(...scores));

// 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// 29

// const defaultSettings = {
//    theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// 30

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return { category: "General", priority: "Normal", ...data, completed: false }
// }


// console.log(makeTask({ category: "Finance", text: "Take interest" }));

// 31


// function add(...args) {
//   // Change code above this line
//   let total = 0;
//   for (let argument of arguments){
//     total += argument;
    
//   }return total;
// }

// 32

// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {

//     total += arg;
//   }
//   }
//   return total;
//   }

// 33


// Change code below this line
// function findMatches(aray, ...args) {
//   const matches = []; 

//   for (let arg of args){
//     if (aray.includes(arg)) {
//       matches.push(arg);
//     }

//   }
//   return matches;
// }

// 34

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`

//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`
//   }
// };

// 35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };

// 36

// const atTheOldToad = {
// potions: [],

// };

// console.log(atTheOldToad.potions);

// 37

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions(){
//   return this.potions
//   },
 
// };
// console.log(atTheOldToad.getPotions);


// 38

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     return this.potions.push(potionName);



//     // Change code above this line
//   },
// };

// 39

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const potitionIndex = this.potions.indexOf(potionName);
//   return this.potions.splice(potitionIndex, 1)



//     // Change code above this line
//   },
// };

// 40

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//   const potionIndex = this.potions.indexOf(oldName);
//   this.potions.splice(potionIndex, 1, newName);


//     // Change code above this line
//   },
// };



// 41


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//         for (let potion of this.potions) {
//           if (potion.name === newPotion.name){
    
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//   }
//      this.potions.push(newPotion);
   
//   },
//   removePotion(potionName) { 
//       for (let potion of this.potions) {
//  const potionIndex = this.potions.indexOf(potion);
//           if (potion.name === potionName) {
//               this.potions.splice(potionIndex, 1);
//           }
      
//       }
//   return `Potion ${potionName} is not in inventory!`;
//   },
//       updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {

//             if (potion.name === oldName) {
//                 potion.name = newName;
     
//             }
//         }
//          return `Potion ${oldName} is not in inventory!`;
    
//   },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

