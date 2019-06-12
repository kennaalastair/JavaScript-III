/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding - when logging 'this' in the global scope, it will return the global variables/functions for JavaScript.
* 2. Implicit binding - when a function is called with a dot in front of it, the object that is before the dot is refered to as 'this'.
* 3. New binding - when a constructor function is used, 'this' refers to where the object was made and returned by the constructor function.
* 4. Explicit binding - when .call or .apply method is used, this is clearly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName(name) {
    console.log(this);
    return name;
}
myName("Ken");

// Principle 2

// code example for Implicit Binding
const introduce = {
    greeting: 'My name is',
    nameIntro: function (name) {
        console.log(`${this.greeting} ${name}`);
        console.log(this);
    }
};
introduce.nameIntro('Ken');


// Principle 3

// code example for New Binding
function FavoriteAnimal (animal) {
    this.intro = 'My favorite animal is a ',
    this.animal = animal,
    this.sentence = function() {
        console.log(this.intro + this.animal);
        console.log(this);
    };
}

const animalShark = new FavoriteAnimal('shark');
const animalRhino = new FavoriteAnimal('rhino');

animalShark.sentence();
animalRhino.sentence();

// Principle 4

// code example for Explicit Binding
// animalShark.sentence.call(shark);
// animalRhino.sentence.apply(rhino);