////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++){
    console.log(i);
}


////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i++){
    if (i % 2 === 0){
    console.log(i);
    }
}


////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }


/////////////////////////////////
//Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++; 
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.splice(0, 1, "Gameboy");

console.log(wolfy);
console.log(sharky);
console.log(plantee);
console.log(porgee);
console.log(dart);


///////////////////////////////////////////////////////////////
//Yell at the Ninja Turtles
//////////////////////////////////////////////////////////////
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
let turtlesUpperCase = [];
for (let i = 0, j = 0; i < turtles.length; i++, j++){
turtlesUpperCase[j] = turtles[i].toUpperCase();
}
console.log(turtlesUpperCase);



/////////////////////////////////////////////////////////////////////
//Methods, Revisited
///////////////////////////////////////////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic')); 

favMovies.sort(); //Sort array in alphabetical order. It permanently altered the array by rearranging its elements.

favMovies.pop();

favMovies.push('Guardians of the Galaxy');

favMovies.reverse();

favMovies.shift();

favMovies.unshift();  //The unshift() method in JavaScript returns the new length of the modified array. It represents the updated number of elements in the array after adding elements to the beginning.

// Splice "Django Unchained" and add "Avatar".    It permanently altered the array.
const djangoIndex = favMovies.indexOf('Django Unchained');
favMovies.splice(djangoIndex, 1, 'Avatar');

// Slice the last half of the array. Method sliced the array from the middle index to the end, creating a new array containing the second half of the original array.
//No, the slice() method in JavaScript does not permanently alter the array. 
//The slice() method returns a new array that contains a shallow copy of a portion of the original array based on the specified start and end indices. The original array remains unchanged.
const middleIndex = Math.floor(favMovies.length / 2);
const slicedArray = favMovies.slice(middleIndex);

// Store the value of the slice in a variable and console.log it
console.log('Sliced array:', slicedArray);

// Console.log the final results
console.log('Final results:', favMovies);

// Console.log the index of "Fast and Furious"
console.log('Index of "Fast and Furious":', favMovies.indexOf('Fast and Furious'));

//The index of "Fast and Furious" is logged, and since it was removed from the array, the index is -1.
//Even though the favMovies array was declared with const, we were able to modify the array itself because const only guarantees 
//that the binding (the variable) does not change. However, the content of the array can be altered.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////
//Where is Waldo
/////////////////////////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1, 1);  //Remove Eggbert
console.log(whereIsWaldo);  
whereIsWaldo[1][2] = "No One"; // Change "Neff" to "No One"
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);  //Access and console.log "Waldo"


//////////////////////////////////////////////////////////////////////
//Excited Kitten
///////////////////////////////////////////////////////////////////////
for (let i = 1; i <= 20; i++){
  if (i % 2 === 0){
    const randomIndex = Math.floor(Math.random() * 3);
    const randomMessages = [
    "...human... why you taking pictures of me...?", 
    "...the catnip made me do it...",
    "...why does the red dot always get away...?"
  ]
    console.log(randomMessages[randomIndex]);
  }
  else{
    console.log("Love me, pet me! HSSSSSS!");
  }
}




////////////////////////////////////////////////////////////
//Find the Median
///////////////////////////////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//Sort the array in ascending order
const sortedNums = nums.sort((a, b) => a - b);
//Determine the middle index
const middleIndexx = Math.floor(sortedNums.length / 2);
//Find the median
let median;
if (sortedNums.length % 2 === 1) {
  median = sortedNums[middleIndexx];
} else {
  median = (sortedNums[middleIndexx - 1] + sortedNums[middleIndexx]) / 2;
}
// Log the median number
console.log(median);



//////////////////////////////////////////////////////////////////////////
//Hungry for More?
/////////////////////////////////////////////////////////////////////////
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//////////Alien Attire/////////////////////
//Remove Kristyn's shoe from the array and save it to the variable kristynsShoe.
//Use that variable to add Kristyn's lost shoe to Thom's accessories array.
const kristynsShoe = kristynsCloset.shift(); // Remove the first element (left shoe) and save it

thomsCloset[2].push(kristynsShoe); // Add Kristyn's shoe to Thom's accessories array

console.log(kristynsCloset); // Remaining items in Kristyn's closet
console.log(thomsCloset); // Updated Thom's closet with Kristyn's shoe added


////////Dress Us Up//////////////////////////////////////////////////////////
// Function to randomly select an item from an array
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const kristynsOutfits = [];
for (let i = 0; i < 3; i++) {
  const outfit = {
    shoe: getRandomItem(kristynsCloset),
    top: getRandomItem(kristynsCloset),
    bottom: getRandomItem(kristynsCloset),
    accessory: getRandomItem(kristynsCloset)
  };
  kristynsOutfits.push(outfit);
}

const thomsOutfits = [];
for (let i = 0; i < 3; i++) {
  const outfit = {
    shirt: getRandomItem(thomsCloset[0]),
    pants: getRandomItem(thomsCloset[1]),
    accessory: getRandomItem(thomsCloset[2])
  };
  thomsOutfits.push(outfit);
}

console.log("Kristyn will be wearing:");
kristynsOutfits.forEach((outfit, index) => {
  console.log(`Outfit ${index + 1}: ${outfit.shoe}, ${outfit.top}, ${outfit.bottom}, ${outfit.accessory}`);
});

console.log("Thom will be wearing:");
thomsOutfits.forEach((outfit, index) => {
  console.log(`Outfit ${index + 1}: ${outfit.shirt}, ${outfit.pants}, ${outfit.accessory}`);
});

////////Dirty Laundry//////////////////////////////////////////////////////////////////////////////////////
//Time to do laundry. Loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

for (let i = 0; i <kristynsCloset.length; i++ ){
  console.log("WHIRR: Now washing " + kristynsCloset[i]);
}