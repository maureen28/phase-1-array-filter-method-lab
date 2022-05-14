function findMatching(listOfDrivers, searchedDriver){
  return listOfDrivers.filter( driverName => {  
      return driverName.toLowerCase() === searchedDriver.toLowerCase() 
    });
}


function fuzzyMatch(listOfDrivers, matchingLetters){
  return listOfDrivers.filter( driverName => {
      return driverName.substring(0, 2) === matchingLetters 
    });
}

function matchName(listOfDrivers, searchedDriver){
  return listOfDrivers.filter( driverName => { 
    return driverName.name === searchedDriver 
  })
}
