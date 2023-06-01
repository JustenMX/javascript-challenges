// Define a constructor function

// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

// Here is an example of a constructor:

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

// This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

// Use a Constructor to Create Objects
let hound = new Dog();

// Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Terror", "white");

// Verify an Object's Constructor with instanceof
// Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

let Bird = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // true

// Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

// Use Prototype Properties to Reduce Duplicate Code
Bird.prototype.numLegs = 2;

// Iterate Over All Properties
// You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps2 = [];
let prototypeProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps2);
console.log(prototypeProps);
