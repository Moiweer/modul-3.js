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

const inputName = "color1234566";
const inputValue = "tomato";

const colorPickerData = {
    [inputName]: inputValue,
};
console.log(colorPickerData);