/* -=-=-=-=-=-  -=-=-=-=-=- */
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

harmlessRansomNote('I hate YOU!!!', `Let me tell you?, i hate It whEn I can't find my paNtS!!!`) // true

harmlessRansomNote('I hate YOU, you jerk!!!', `Let me tell you?, i hate It whEn I can't find my paNtS!!!`) // false




















/* -=-=-=-=-=- template -=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=- */
//



/* -=-=-=- tests -=-=-=- */
