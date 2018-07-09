//Loop over the array, showing each element, and ask the user if he wants to continue.
//Continue looping until the user stops you! Loop the array again and again if needed.
let looping = (arr, continueState) => {
  let i = 0;
  while (continueState) {
    console.log(arrNunbers[i]);

    //increase i variable and allow loop over the array to continue showing each element
    i = (i + 1) % arrNunbers.length;

    //confirm() returns false if the user hits cancel
    _continue = confirm("Press OK to continue");
  }
}
let arrNunbers = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
let _continue = true;
//looping(arrNunbers, _continue);

//A function that replaces two variables with a numeric value, without using a temp variable.
let swappingTwoNumbers = (varObj) => {
  varObj.firstNum ^= varObj.secondNum;
  varObj.secondNum ^= varObj.firstNum;
  varObj.firstNum ^= varObj.secondNum;
}
let numbersObj = {
  firstNum: 50,
  secondNum: 60
};
//Expect for log first number = 50 second number = 60
console.log("The original values are: first number = " + numbersObj.firstNum + ", end second number = " + numbersObj.secondNum);
swappingTwoNumbers(numbersObj);
//Expect for log first number = 60 second number = 50
console.log("The replaced values are: first number = " + numbersObj.firstNum + ", end second number = " + numbersObj.secondNum);

//A function that replaces two variables with a string value, without using a temp variable.
let swappingTwoString = (varObj) => {
  varObj.secondStr += varObj.firstStr; // worldhello
  // returns a shallow copy of a portion of an array into a new array
  varObj.firstStr = varObj.secondStr.slice(0, varObj.secondStr.length - varObj.firstStr.length); //= world
  varObj.secondStr = varObj.secondStr.slice(varObj.firstStr.length); // = hello
}
let stringsObj = {
  firstStr: "hello",
  secondStr: "world"
};
//Expect for log first string = hello second string = world
console.log("The original values are: first string = " + stringsObj.firstStr + ", end second string = " + stringsObj.secondStr);
swappingTwoString(stringsObj);
//Expect for log first string = world second string = hello
console.log("The replaced values are: first string = " + stringsObj.firstStr + ", end second string = " + stringsObj.secondStr);

//A function that build and print out a sequence of N lines,
//each line Contain a sequence of "*"'s,
//the number of stars is according to the line value number.
let createTowerOfStars = (numOfLine, upside) => {
  let array = [];
  for (let i = 1; i <= numOfLine; i++) {
    for (let j = 0; j < i; j++) {
      array.push('*');
    }
    array.push('\n');
  }
  if (upside === false) {
    console.log(array.join(' '));
  }
  else {
    console.log(reverseString(array.join(' ')));
  }
}

createTowerOfStars(5, false);
//Now do it the other way around.
createTowerOfStars(5, true);

//A function that get a string and return it reversed
//this action has been done with recursion.
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
//Expect for log = hello 
console.log("The original value is: hello");
swappingTwoString(stringsObj);
//Expect for log olleh
console.log("The reversed value is: " + reverseString("hello"));

//A function that checks if a string is a palindrome. return true if it is, false otherwise.
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
//Expect for log = true
//The longest palindromic word in the Oxford English Dictionary is the onomatopoeic tattarrattat,
//coined by James Joyce in Ulysses (1922) for a knock on the door.
console.log("The string is: tattarrattat. and the result is " + palindrome('tattarrattat'));
//Expect for log false
console.log("The string is: tattarjgrattat. and the result is " + palindrome('tattarjgrattat'));

let asciiValue = {
  firstCapitalLetters: 65,
  lastCapitalLetters: 90,
  firstSmallLetters: 97,
  lastSmallLetters: 122,
};

let CaesarCipher = (renge, char, key)=> {
  return String.fromCharCode((char - renge + key) % (26 * Math.sign(key)) + renge);
}
//A function that get a string and return it encrypt,
//also get key indicates how many characters each character 
let caesarEncryption = (plaintext, key) => {
  let ciphertext = "";
  for (let i = 0; i < plaintext.length; i++) {
    let plainCharacter = plaintext.charCodeAt(i);
    if (plainCharacter >= asciiValue.firstSmallLetters && plainCharacter <= asciiValue.lastSmallLetters) {
      ciphertext +=  CaesarCipher (asciiValue.firstSmallLetters, plainCharacter, key);
    } else if (plainCharacter >= asciiValue.firstCapitalLetters && plainCharacter <= asciiValue.lastCapitalLetters) {
      ciphertext +=  CaesarCipher (asciiValue.firstCapitalLetters, plainCharacter, key);
    } else {
      ciphertext += String.fromCharCode(plainCharacter);
    }
  }
  return ciphertext;
}
//A function that decrypts what you've encrypted.
let CaesarDecryption = (plaintext, key) => {
  let unCiphertext = "";
  for (let i = 0; i < plaintext.length; i++) {
    var plainCharacter = plaintext.charCodeAt(i);
    if (plainCharacter >= asciiValue.firstSmallLetters && plainCharacter <= asciiValue.lastSmallLetters) {
      unCiphertext +=  CaesarCipher (asciiValue.lastSmallLetters, plainCharacter, -key);
    } else if (plainCharacter >= asciiValue.firstCapitalLetters && plainCharacter <= asciiValue.lastCapitalLetters) {
      unCiphertext +=  CaesarCipher (asciiValue.lastCapitalLetters, plainCharacter, -key);
    } else {
      unCiphertext += String.fromCharCode(plainCharacter);
    }
  }
  return unCiphertext;
}
console.log(CaesarDecryption(caesarEncryption("New Hampshire", 32),32));
console.log(CaesarDecryption(caesarEncryption("New Jersey", 6),6));
console.log(CaesarDecryption(caesarEncryption("Idaho", 62),62));
console.log(CaesarDecryption(caesarEncryption("Hawaii", 10),10));
console.log(CaesarDecryption(caesarEncryption("Georgia", 1442),1442));
console.log(CaesarDecryption(caesarEncryption("Florida", 12),12));
console.log(CaesarDecryption(caesarEncryption("Delaware", 82),82));
console.log(CaesarDecryption(caesarEncryption("Connecticut", 4),4));
console.log(CaesarDecryption(caesarEncryption("Colorado", 75),75));
console.log(CaesarDecryption(caesarEncryption("California", 23),23));
console.log(CaesarDecryption(caesarEncryption("Arkansas", 92),92));
console.log(CaesarDecryption(caesarEncryption("Arizona", 2),2));
console.log(CaesarDecryption(caesarEncryption("Alaska", 5), 5));

 ///A function that get an array, and return a new array that removes any duplicates.
let removeDuplicateUsingFilter = (arr) => {
  // method creates a new array with all elements that pass the test implemented by the provided function.
  return arr.filter(function (elem, index, self) {
    return index == self.indexOf(elem);
  });
}
let arr = ["dog", "cat", "camel", "bee", "dog", "elephant", "dolphin"];
console.log("The original array is: " + arr);
removeDuplicateUsingFilter(arr);
console.log("The arrey with uniqוe value is: " + arr);


let removeDuplicateUsingSet = (arr) => {
  //The Set object lets you store unique values of any type, whether primitive values or object references.
  //The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
  let unique_array = Array.from(new Set(arr));
  return unique_array;
}
let arrAnimels = ["dog", "cat", "camel", "bee", "dog", "elephant", "dolphin", "camel"];
console.log("The original array is: " + arrAnimels);
removeDuplicateUsingSet(arrAnimels);
console.log(removeDuplicateUsingSet(arrAnimels));

//A function that halp to move element between array.
let conductorItem = (arrTosplice, arrToPush) => {
  let randInt = Math.floor(Math.random() * arrTosplice.length)
  arrToPush.push(arrTosplice[randInt])
  arrTosplice.splice(randInt, 1)
}

//A function that shuffle two arrays, into one array in a randomized order.
let mix = (firstArr, secondArr, mixed) => {
  if (mixed === undefined) {
    mixed = [];
  }
  //Math.random() always returns a number lower than 1.
  let add = Math.round(Math.random())

  if (add && firstArr.length) {
    conductorItem(firstArr, mixed);
  }
  else {
    if (secondArr.length) {
      conductorItem(secondArr, mixed);
    }
  }
  while (firstArr.length || secondArr.length) {
    mix(firstArr, secondArr, mixed)
  }
  return mixed
}
let colors = ["red", "indigo", "white", "teal", "yellow"];
let foods = ["bread", "cheese", "cucumber"];

console.log(mix(colors, foods));

let mergeSort = (arr) => {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  // get the middle item of the array rounded down
  let middle = Math.floor(len / 2);
  //returns a portion items on the left side of an array into a new array  
  let left = arr.slice(0, middle);
  //returns a portion items on the right side of an array into a new array  
  let right = arr.slice(middle);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left), mergeSort(right));
}

//A function to implementaion a merge sort
let merge = (left, right) => {
  let result = [],
    indexLeft = 0,
    indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft++]);
    }
    else {
      result.push(right[indexRight++]);
    }
  }
  //remaining part needs to be addred to the result
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(mergeSort([10, 2, 1, 4, 8]));
