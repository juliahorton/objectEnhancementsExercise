// In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

// Same keys and values

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// Same keys and values ES2015




// Computed property names

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

// Computed property names ES2015




// Object methods

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

// Object methods ES2015





// createAnimal function: Write a function which generates an animal object. The function should accept 3 arguments: species (the species of animal, e.g. "cat", "dog"), verb (a string used to name a function, e.g. "bark", "bleat"), and noise (a string to be printed when the above function is called, e.g. "woof", "baaaa"). Use one or more of the object enhancements we've covered. 

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"
