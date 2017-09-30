// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeLastDriver() {
  return drivers.slice(drivers.length - 1);
}


//
//   describe('removeLastDriver()', function () {
//     it('removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged', function () {
//       expect(removeLastDriver()).to.have.ordered.members(["Milo", "Otis"]);
//
//       expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//     });
//   });
//
//   describe('removeFirstDriver()', function () {
//     it('removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged', function () {
//       expect(removeFirstDriver()).to.have.ordered.members(["Otis", "Garfield"]);
//
//       expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//     });
//   });
// });
