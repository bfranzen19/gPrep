/* -=-=-=-=-=-  -=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/fizzBuzz
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
// repl.it --> https://repl.it/@bfranzen19/harmlessRansomNote
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
// repl.it --> https://repl.it/@bfranzen19/isPalindrome
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
//  repl.it --> https://repl.it/@bfranzen19/caesarCipher
// caesar cipher: passing in 2 parameters string and a number, shift every letter in our given string by the given number. example: zoo keeper, 2 --> bqq mggrgt. z loops around to the beginning of the alphabet to become b, o shifts 2 letters to become q, and so on.



/* -=-=-=- tests -=-=-=- */











/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it --> https://repl.it/@bfranzen19/reverseWords
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



















/* -=-=-=-=-=- template -=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=- */
// repl.it -->
//



/* -=-=-=- tests -=-=-=- */
