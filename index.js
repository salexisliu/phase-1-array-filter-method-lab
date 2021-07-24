
// const drivers = ["Betty", 'Bethany', "Beatrice", "Bea", "Bobby", "Charlie"];


//  const drivers = [{name: "Betty", hometown: "LA"}, {name: "Sam", hometown: "NY"}, {name: "Blue", hometown: "TX"}]

function findMatching(drivers, driverName) {
  return drivers.filter((driver) => driver.toLowerCase() === driverName.toLowerCase())

}

function fuzzyMatch(drivers, driverName){
  return drivers.filter(driver => driver.substr(0, driverName.length) === driverName)
}                               

// function fuzzyMatch(drivers, driverName){
//   return drivers.filter(driver => driver.includes(driverName))
// }                               


// console.log(fuzzyMatch(drivers, 'be'))
// const array = ["Betty", 'Bethany', "Beatrice", "Bea", "Bobby", "Charlie"];
// console.log(array[0])

function matchName(drivers, driverName){
  return drivers.filter(driver => driver.name === driverName)
}

