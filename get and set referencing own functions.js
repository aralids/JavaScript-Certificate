const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  }
  this.getLastName = function () {
    return fullName.split(" ")[1];
  }
  this.getFullName = function() {
    return fullName;
  }
  this.setFirstName = function (first) {
    fullName = first + " " + this.getLastName();
  }
  this.setLastName = function (second) {
    fullName = this.getFirstName() + " " + second;
  }
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  }

};

const bob = new Person('Bob Ross');
bob.getFullName();