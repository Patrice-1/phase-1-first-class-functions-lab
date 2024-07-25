// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers){
    return drivers.slice(0,2);
};

console.log(returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(2);
};

console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[0](["Antonia", "Nuru", "Amari", "Mo"]));

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

const fareDoubler= createFareMultiplier(2);


console.log(fareDoubler(10));

const fareTripler= createFareMultiplier(3);

console.log(fareTripler(10));

function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
}
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));