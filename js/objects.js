// const playlist = {} літерал об'єкту
// const playlist = {

//     name: "my playlist",
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     trackCount: 3,

// } 
// console.log(playlist);



// три способи передачі об'єктів`;

// 1) const x = {};
// 2) console.log({});

// 3) const x = function () {
//     return {};
// }


// const playlist = {

//     name: "my playlist",
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     trackCount: 3,

// } 
// console.log(playlist.tracks);



// const propertyName = "tracks";





// console.log(playlist.propertyName);
// //  все равно что 
// console.log(playlist[propertyName]);


// console.log(playlist.rating);
// //  все равно что 
// console.log(playlist["rating"]);



// ---------------------------------

// const username = "Mango";
// const email = "mango@mail.com";

// const signupData = {
   
//     username, 

//     // username, = username: username, - сокращенная запись
//    email,
// //    все равно что:
// //     email: email,

// }


// const inputName = "color1234566";
// const inputValue = "tomato";

// const colorPickerData = {
//     [inputName]: 5,
// };
    // якщо треба записати ім'я змінної
    //  в ключ об'єкту, то пишемо [] змінну в
    // квадратних дужках, тобто те що в дужках
    // - це значення змінної

// const inputName = "color1234566";
// const inputValue = "tomato";

// const colorPickerData = {
//     [inputName]: inputValue,
// };
// console.log(colorPickerData);




// деструктуризация
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// Патерн

// ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// 1)
// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }


// або 2)
// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }




// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };


// const hobbies = user.hobbies;
// console.log(hobbies); // ["swiming", "music", "sci-fi"]



// перебір через for масиву

// const feedback = {
//         good: 5,
//         neutral: 10,
//         bad: 3,
// };
    
// const keys = Object.keys(feedback);
// console.log(keys);
// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);
// }



// Деструктуризация масиву

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;



// keys values entries
// values - знаходить серед значень
// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));

// keys - знаходить серед ключів

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const ratings = Object.keys(authors);
// for (const key of keys) {
//     console.log(key);
//     console.log(authors[key]);
// }



// entries - знаходить і ключі і значення/
// повертає масив масивів (Репета модуль3 2 відео 1:00)
// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const ratings = Object.entries(authors);
// for (const entry of entries) {
//     console.log(entry);
//     const name = entry[0];
//     const rating = entry[1];
//     console.log(name, rating);
// }

// або можна записати так:

// for (const entry of entries) {
//     const [name, raiting] = entry;
//     console.log(name, rating);
// }

// або самий сучасний запис:
// for (const [name, raiting] of entries) {
//     
//     console.log(name, rating);
// }





приклад додавання фруктів в кошик (Репета, модуль 3, друге відео ~ 1:33)