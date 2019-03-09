/* -=-=-=-=-=-  -=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/algorithms
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
//  --> https://repl.it/@bfranzen19/algorithms
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
// repl.it --> https://repl.it/@bfranzen19/algorithms
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
// repl.it --> https://repl.it/@bfranzen19/algorithms
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
// repl.it --> https://repl.it/@bfranzen19/algorithms
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

// repl.it --> https://repl.it/@bfranzen19/algorithms
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
// repl.it --> https://repl.it/@bfranzen19/algorithms
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
// https://repl.it/@bfranzen19/algorithms
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
// jsFiddle--> https://jsfiddle.net/bfranzen19/cx725Lfo/223/
/* Please write a JavaScript function that takes an array of objects and returns a unique-ified version of the same array.

To be clear, the goal is just to remove any duplicate objects that reference the same object in memory. The result can have multiple objects with the same properties as long as they are different objects in memory.

There are multiple ways to solve this, but the goal is to create an algorithm that is as fast as possible. You may use whatever resources you want without directly consuming a third party library. */

/* change the properties or values of any of these objects to test or just hit the 'Run' button in the top left */

/* change the properties or values of any of these objects to test or just hit the 'Run' button in the top left*/
let Obj = {
	name:'bt'
};

let Obj1 = new Object();
Obj1.name = 'bt';

let Obj2 = Object.create(null);
Obj2.name = 'bt';

let Obj3 = Obj1;
let Obj4 = Obj2;

let testArr = [Obj, Obj, Obj1, Obj1, Obj2, Obj2, Obj3, Obj4, Obj3, Obj4];

function uniqueRefs(arr) {
	let resultSet = new Set();
	let returnArr = [];

	arr.forEach(element => {
		resultSet.add(element)
	});

	/* set to array */
	resultSet.forEach(el => returnArr.push(el));
	JSON.stringify(returnArr);

 	for(let i=0 ; i<returnArr.length ; i++) {
		let element = document.getElementById('arr');
		let nextOne = document.createElement('p');
		element.append(`  { ${Object.keys(returnArr[i])} : ${Object.values(returnArr[i])} }  `);
	}


	/* display on the HTML page */
    document.getElementById('results').innerHTML = `There are ${returnArr.length} uniquely referenced objects out of ${testArr.length} original objects in the test array.`;

	/* logs the resultSet and total number of unique objects in the console */
	console.log('unique references result	-->	', returnArr, '.  total # of unique elements: ', returnArr.length, '\ntotal # of testArr elements: ', testArr.length);

	/* retuns the result */
	return returnArr;
}

uniqueRefs(testArr);

/* EXPECTED OUTCOME: in the current example, Obj3 and Obj4 should be referencing the same place in memory as Obj1 and Obj2, respectively. the expected outcome of this function should be that Obj, Obj1, and Obj2 should be included in resultSet for a total of 3 entries within the set. these are the unique reference objects.
the outcome should be visible both in the console and on the HTML page. */

/*
// HTML
<!DOCTYPE html>
<html>
<head>
	<body>
		<div>
			<p id="results">
			</p>
			<p id="arr">
				The following objects from the test array are unique:
			</p>
		</div>
	</body>
</head>
</html>

// CSS
p {
	text-align: center;
	margin-top: 3rem;
}
*/

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/algorithms
// two sum: returns a pair of numbers from numArray that adds up to the sum. result should be an array of arrays. any number in numArray can be used in multiple pairs.

function twoSum(numArray, sum) {
  let pairs = [];
  let hashtable = [];

  for(let i=0 ; i<numArray.length ; i++) {
    let currNum = numArray[i];
    let counterpart = sum - currNum;

    if(hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashtable.push(currNum);
  }
  return pairs;
}

/* -=-=-=- tests -=-=-=- */
twoSum([1,6,4,5,3,3], 7);	// [[6,1], [3,4], [3,4]]

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/algorithms
// binary search: searches through the array for a given key. if the key is present in the array, return true. If the key is not present in the array, return false.

function binarySearch(numArr, key){
  let midIndex = Math.floor(numArr.length / 2);
  let midElem = numArr[midIndex];

  if(midElem === key) return true;
  else if(midElem < key && numArr.length > 1) {
    return binarySearch(numArr.splice(midIndex, numArr.length), key);
  } else if(midElem > key && numArr.length > 1) {
    return binarySearch(numArr.splice(0, midIndex), key);
  }
  else return false;
}

/* -=-=-=- tests -=-=-=- */
binarySearch([5,7,12,16,36,39,42,56,71], 56); 	// true
binarySearch([5,7,12,16,36,39,42,56,71], 24); 	// false

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/algorithms
// fibonacci sequence --> inefficient over ~30. exponential runtime.

function fibonacci(position) {
  if(position < 3) return 1;
  else return fibonacci(position-1) + fibonacci(position-2);
}

/* -=-=-=- tests -=-=-=- */
fibonacci(4);	// returns 3
fibonacci(2); 	// returns 1
fibonacci(12); 	// returns 144
fibonacci(9);	// returns 34

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/algorithms
// efficient fibonacci sequence using memoization

function fibMemo(index, cache) {
  cache = cache || [];

  if(cache[index]) return cache[index];
  else {
    if(index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

/* -=-=-=- tests -=-=-=- */
fibMemo(20);	// 6765
fibMemo(4);	  // 3
fibMemo(2);	  // 1
fibMemo(12);	// 144
fibMemo(50);	// 12586269025

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/algorithms
// sieve of eratosthenes --> find all prime numbers up to a given number. returns an array of all primes up to the given number.

function sieveOfEratosthenes(n) {
  let primes = [];
  let result = [];

  for(let i=0 ; i<=n ; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for(let i=2 ; i<=Math.sqrt(n) ; i++) {
    for(let j=2; i*j <=n ; j++) {
      primes[i*j] = false;
    }
  }

  for(let i=0 ; i<primes.length ; i++) {
    if(primes[i]) result.push(i);
  }
  return result;
}

/* -=-=-=- tests -=-=-=- */
sieveOfEratosthenes(10); // [2,3,5,7]
sieveOfEratosthenes(20); // [2,3,5,7,11,13,17,19]
sieveOfEratosthenes(1);  // []

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/algorithms
// bubble sort

function bubbleSort(array) {
  for(let i=array.length ; i>0 ; i--) {
    for(let j=0 ; j<i ; j++) {
      if(array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

/* -=-=-=- tests -=-=-=- */
bubbleSort([5, 3, 8, 2, 1, 4]);  // [ 1, 2, 3, 4, 5, 8 ]
bubbleSort([15, 3, 28, 32, 1, 44]);  // [ 1, 3, 15, 28, 32, 44 ]
bubbleSort([20, 20, 31, 56, 1, 12, 12]);  // [ 1, 12, 12, 20, 20, 31, 56 ]
bubbleSort([3, -9, -1, 8]);  // [ -9, -1, 3, 8 ]

/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/algorithms
// merge sort

function mergeSort(arr) {
  if(arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0,middleIndex);
  let secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
  let result = [];
  while(array1.length && array2.length) {
    let minElem;
    if(array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }

  if(array1.length) result = result.concat(array1);
  else result = result.concat(array2);

  return result;
}

/* -=-=-=- tests -=-=-=- */
mergeSort([11,4,7,8,5,3,2,4]);
mergeSort([1,4,54,5,6,8,4,19,24]);
mergeSort([12,24,224,25,6,8,4,9,4]);











/* -=-=-=-=-=- template -=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/algorithms
//



/* -=-=-=- tests -=-=-=- */
