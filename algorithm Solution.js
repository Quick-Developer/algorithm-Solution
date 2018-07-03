//Loop over the array, showing each element, and ask the user if he wants to continue.
//Continue looping until the user stops you! Loop the array again and again if needed.
let arrNunbers = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
let _continue = true;
let i = 0

// Loop over your code
// while (_continue) {
//   console.log(arrNunbers[i]);

//   //increase i variable and allow loop over the array to continue showing each element
//   i = (i + 1) % arrNunbers.length;

//   //confirm() returns false if the user hits cancel
//   _continue = confirm("Press OK to continue");
// }

//Swap Two Number Variables Without Using a Temp Variable.

let x = 50, y = 60;

x ^= y;
y ^= x;
x ^= y;

console.log("x = " + x + ", y = " + y); // x = 60, y = 50

//Swap Two String Variables Without Using a Temp Variable.

let a = "hello"
let b = "world"
a = b + a // worldhello
b = a.slice(b.length); //  hello
a = a.slice(0, a.length - b.length);
console.log(a); //world
console.log(b); //hello



//function that build and print out a sequence of N lines, each line consisting of a string of "*"'s according to the line number.
function createTowerOfStars(num, pyramid) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      array.push('*');
    }
    array.push('\n');
  }
  if (pyramid === "yes") {
    console.log(array.join(' '));
  }
  else {
    console.log(reverseString(array.join(' ')));
  }
}

createTowerOfStars(5, "yes");
//Now do it the other way around.
createTowerOfStars(5, "no");

//function that takes a string and reverses it.

function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));

//function that checks if a string is a palindrome. return true if it is, false otherwise.

function palindrome(str) {
  const arr = [];
  //adds elements reversedto the beginning of an array use Spread syntax 
  [...str].forEach((e) => arr.unshift(e));
  //checking given string with reversed string
  if (str === arr.join('')) {
    return true;
  }
  else {
    return false;
  }
}
console.log(palindrome('ytty'));
console.log(palindrome('gregferg'));

//function that encrypt a string.

function caesarShift(plaintext, shiftAmount) {
  let encrypt = [];
  for (let i = 0; i < plaintext.length; i++) {
    if (plaintext.charCodeAt(i) + shiftAmount > 122) {
      let a = String.fromCharCode(plaintext.charCodeAt(i));
      let b = String.fromCharCode(96 + a.charCodeAt(0));
      let c = String.fromCharCode(b.charCodeAt(0) - 122);
      let d = String.fromCharCode(c.charCodeAt(0) + shiftAmount)
      encrypt.push(String.fromCharCode(96 + plaintext.charCodeAt(i) - 122 + shiftAmount));
    }
    else {
      encrypt.push(String.fromCharCode(plaintext.charCodeAt(i) + shiftAmount));
    }
  }
  return encrypt.join('');
}

console.log(caesarShift("bar", 2));
console.log(caesarShift("avichi", 5));

//function that decrypts what you've encrypted.

function caesarUnShift(plaintext, shiftAmount) {
  let decryption = [];
  for (let i = 0; i < plaintext.length; i++) {
    if (plaintext.charCodeAt(i) + shiftAmount > 122) {
      decryption.push(String.fromCharCode(96 + plaintext.charCodeAt(i) - 122 - shiftAmount));
    }
    else {
      decryption.push(String.fromCharCode(plaintext.charCodeAt(i) - shiftAmount));
    }
  }
  return decryption.join('');
}

console.log(caesarUnShift(caesarShift("yehuda", 2), 2));
console.log(caesarUnShift(caesarShift("jafo", 5), 5));

//Given an array, return a new array that removes any duplicates.

function removeDuplicateUsingFilter(arr) {
  let unique_array = arr.filter(function (elem, index, self) {
    return index == self.indexOf(elem);
  });
  return unique_array
}

console.log(removeDuplicateUsingFilter(["dog", "cat", "camel", "bee", "dog", "elephant", "dolphin"]));


function removeDuplicateUsingSet(arr) {
  let unique_array = Array.from(new Set(arr))
  return unique_array
}

console.log(removeDuplicateUsingSet(["dog", "cat", "camel", "bee", "dog", "elephant", "dolphin"]));

//shuffle two arrays, into one array in a randomized order.

let colors = ["red", "indigo", "white", "teal", "yellow"];
let foods = ["bread", "cheese", "cucumber"];
let mixed = [];

function mix() {
  //Math.random() always returns a number lower than 1.
  let randColorInt = Math.floor(Math.random() * colors.length)
  let randFoodInt = Math.floor(Math.random() * foods.length)

  let addColor = Math.round(Math.random())

  if (addColor && colors.length) {
    mixed.push(colors[randColorInt])
    colors.splice(randColorInt, 1)
  }
  else {
    if (foods.length) {
      mixed.push(foods[randFoodInt])
      foods.splice(randFoodInt, 1)
    }
  }

  while (colors.length || foods.length) {
    mix()
  }
}
mix();
console.log(mixed);

//

let mergeSort = (arr) => {
  let len = arr.length;
  if(len < 2) {
     return arr;
  }  
// get the middle item of the array rounded down
let middle = Math.floor(len/2);
//returns a portion items on the left side of an array into a new array  
let left = arr.slice(0, middle);
//returns a portion items on the right side of an array into a new array  
let right = arr.slice(middle);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left), mergeSort(right));
}
       

let merge = (left, right) =>{
 let result = [],
     indexLeft  = 0,
     indexRight = 0;
 while(indexLeft  < left.length && indexRight < right.length){
    if(left[indexLeft ] < right[indexRight]){
      result.push(left[indexLeft ++]);
    }
    else{
      result.push(right[indexRight++]);
   }
 }  
 //remaining part needs to be addred to the result
 return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(mergeSort([10,2,1,4,8]));
