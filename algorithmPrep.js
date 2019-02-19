/* -=-=-=-=-=-  -=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/
// fizz buzz. multiples of 3, print fizz. multiples of 5, print buzz. multiples of both 3 and 5, print fizzBuzz

function fizzBuzz(num) {
  for(var i=1 ; i<=num ; i++) {
    if(i % 15 === 0) console.log('FizzBuzz')
    else if(i % 3 === 0) console.log('Fizz')
    else if(i % 5 === 0) console.log('Buzz')
    else console.log(i)
  }
}

/* -=-=-=- tests -=-=-=- */
fizzBuzz(30)
fizzBuzz(100)
fizzBuzz(45)

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/
// harmless ransom note. practice with hash tables. create a harmless ransom note from the words contained in the magazineText string.

function harmlessRansomNote(noteText, magazineText) {
  // set all words to lowercase in the note and magazine strings
  noteText = noteText.toLowerCase()
  magazineText = magazineText.toLowerCase()
  // remove any punctuation from both the note and the magazine
  let regEx =/[!@#$%^&*()-=+:;"'<>,.?/]/g
  magazineText = magazineText.replace(regEx, '')
  noteText = noteText.replace(regEx,'')

  // turn the strings into arrays to allow for iteration
  let noteArr = noteText.split(' ')
  let magArr = magazineText.split(' ')
  let magObj = {}

  // create the magazineObject with keys as each word and the values as the count of each word in the magazine
  magArr.forEach(word => {
    if(!magObj[word]) magObj[word] = 0
    magObj[word]++
  })

  // this will be the boolean returned to tell us whether or not the note can be created from the given magazine.
  let noteIsPossible = true

  // iterate over each word in the note text and see if enough of those words exist in the magazineObject. each time a word exists in the magazineObject, decrement that word's value. if the word's value is less than 0, then the note is not possible and the noteIsPossible variable is set to false. if the word doesn't exist in the magazineObject, then the noteIsPossible variable is also set to false. if each word in the note exists in the necessary quantities in the magazineObject, then noteIsPossible variable stays true. at the end, return the noteIsPossible variable.
  noteArr.forEach(word => {
    if(magObj[word]) {
      magObj[word]--
      if(magObj[word] < 0) noteIsPossible = false
    } else noteIsPossible = false
  })

  return noteIsPossible
}

/* -=-=-=- tests -=-=-=- */
harmlessRansomNote(`this is a secret note for you from a secret admirer`,`Puerto Rico is a place of great wonder and excitement! It has many secret waterfall locations that I'm an admirer of. You must hike quite a distance to fin the secret places as they are far from populated areas; but it is worth the effort. A tip I have for you is to go early in the mornning when it is not so hot out. Also, a note that you must wear hiking boots. This is one of the best places I have ever visited!!!`) // true

harmlessRansomNote('I hate cats!!!', `Let me tell you?, i hate It whEn I can't find my CatS!!!`) // true

harmlessRansomNote('I hate cats, you jerk!!!', `Let me tell you?, i hate It whEn I can't find my paNtS!!!`) // false

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/
// is it a palindrome? compare a string and return true if the string is the same backwards as forwards, and false if it is not the same backwards and forwards.

// first solution:
function isPalindrome(string) {
  let regex = /[a-z]/gi
  let inputStr = string.toLowerCase().match(regex)
  let str = inputStr.join('')
  let rev = inputStr.reverse().join('')

  if(str === rev)return true
  else return false
}

/* -=-=-=- tests -=-=-=- */
isPalindrome('rAcEcAr') // true, testing toLowerCase
isPalindrome(`Madam, I'm Adam`) // true, testing special chars and uppercase
isPalindrome('frAnzeN') // false, testing toLowerCase & false
isPalindrome('R@c3C2r') // true, testing special chars in regex

/* -=-=-=-=-=-=-=-=-=-=- */
// is palindrome solution 2 - not using regex.
function isPalindrom(string) {
  string = string.toLowerCase()
  let charactersArr = string.split('')
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let lettersArr = []
  charactersArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char)
  })

  if(lettersArr.join('') === lettersArr.reverse().join('')) return true
  else return false
}

/* -=-=-=- tests -=-=-=- */
isPalindrome('rAcEcAr') // true, testing toLowerCase
isPalindrome(`Madam, I'm Adam`) // true, testing special chars and uppercase
isPalindrome('frAnzeN') // false, testing toLowerCase & false
isPalindrome('R@c3C2r') // true, testing special chars

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/
// caesar cipher: passing in 2 parameters string and a number, shift every letter in our given string by the given number. example: zoo keeper, 2 --> bqq mggrgt. z loops around to the beginning of the alphabet to become b, o shifts 2 letters to become q, and so on.

function caesarCipher(str, num) {
  num = num % 26
  let lowerCaseString = str.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let newString = ''

  for(var i=0 ; i<lowerCaseString.length ; i++) {
    let currentLetter = lowerCaseString[i]

    if(currentLetter === ' ') {
      newString += currentLetter
      continue
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num

    if(newIndex > 25) newIndex = newIndex - 26
    if(newIndex < 0) newIndex = 26 + newIndex

    if(str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    }
    else newString += alphabet[newIndex]
  }
  return newString
}

/* -=-=-=- tests -=-=-=- */
caesarCipher('Zoo Keeper', 2)
caesarCipher('homer', -2)
caesarCipher('homer BACON', 24)

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/
// reverse words. given a string, reverse the letters in the words but not the order of the words in the string.
// 'this is a string of words' --> siht  si  a  gnirts  fo  sdrow

function reverseWords(string) {
  let wordsArr = string.split(' ')
  let reversedWordsArr = []

  wordsArr.forEach(word => {
    let reversedWord = ' '

    for(var i=word.length-1 ; i>=0 ; i--) {
      reversedWord += word[i]
    }
    reversedWordsArr.push(reversedWord)
  })
  return reversedWordsArr.join(' ')
}

/* -=-=-=- tests -=-=-=- */
reverseWords('cat')
reverseWords('homer bacon')
reverseWords('this is a string of words')

/* -=-=-=-=-=-=-=-=-=-=- */

// repl.it --> https://repl.it/@bfranzen19
// reverse array in place: take an array as a parameter, reverse that array, and return the reversed array. manipulate and reverse the original array, not a new array. must be the original array. not the reverse() method either.

function reverseArrayInPlace(arr) {
  for(let i=0 ; i<arr.length/2 ; i++) {
    let tempVar = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = tempVar
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 -i] = tempVar
  }
  return arr
}

/* -=-=-=- tests -=-=-=- */
reverseArrayInPlace([1,2,3,4])
reverseArrayInPlace([5,4,3,2,1])
reverseArrayInPlace([6,5,4,3,2,1])

/* -=-=-=- tests -=-=-=- */
// repl.it --> https://repl.it/@bfranzen19
// mean median mode: takes a number array and returns an object with 3 properties: mean, median, mode. This will use 4 different functions, the final one calling the other 3 and returning the object.

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array) {
  let sum = array.reduce((a,b) => a+ b)
  let mean = sum / array.length
  return mean
}

function getMedian(array) {
  array.sort((a,b) => a-b)
  let median

  if(array.length % 2 !== 0) {
    median = array[Math.floor(array.length/2)]
  } else {
    let mid1 = array[array.length / 2 - 1]
    let mid2 = array[array.length / 2]
    median = (mid1 + mid2) / 2
  }
  return median
}

function getMode(array) {
  let modeObj = {}

  array.forEach(num => {
    if(!modeObj[num]) modeObj[num] = 0
    modeObj[num]++
  })
  let maxFreq = 0
  let mode = []

  for(let num in modeObj) {
    if(modeObj[num] > maxFreq) {
      modes = [num]
      console.log('modes ' + modes)
      maxFreq = modeObj[num]
    }
    else if(modeObj[num] === maxFreq) modes.push(num)
  }
  if(modes.length === Object.keys(modeObj).length) modes = []
  return modes
}

/* -=-=-=- tests -=-=-=- */
meanMedianMode([1,2,3,4])
meanMedianMode([12,2,33,4])
meanMedianMode([5,6,7,8,9,9,8])
meanMedianMode([1,1,1])

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19
// two sum: returns a pair of numbers from numArray that adds up to the sum

function twoSum(numArray, sum) {

}

/* -=-=-=- tests -=-=-=- */
















/* -=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes an array of numbers and returns the greatest difference you can get by subtracting any two of those numbers.

function greatestDiff(arr) {
    // ok solution
    // let sorted =arr.sort((a,b) => a-b);
  	// let max = sorted[sorted.length-1];
  	// let min = sorted[0];
    //
  	// return max - min;

    // best solution
  	let max = arr[0]
    let min = arr[0]

    for(num of arr) {
    	if(num > max) max = num;
      	if(num < min) min = num;
    }
  	return max - min;
}

/* -=-=-=- tests -=-=-=- */
greatestDiff([1,2,3,44,5,666,7,8,8,9]);
greatestDiff([1,2,3,3,3333,3,4,56,77,8,8]);
greatestDiff([2,33,4,444,56,6,7]);

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/
//



/* -=-=-=- tests -=-=-=- */

















/* -=-=-=-=-=- template -=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/
//



/* -=-=-=- tests -=-=-=- */
