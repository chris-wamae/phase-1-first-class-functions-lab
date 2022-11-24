// Code your solution in this file!
let driverNames = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers)
{let driverNamesSlice = [...drivers]
 return driverNamesSlice.slice(0,2)}

const returnLastTwoDrivers = function(lastDrivers)
{let driverNamesSliceEnd = [...lastDrivers]
return driverNamesSliceEnd.slice(2,4)}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(interger)
{return function multiplier()
{return interger * 5}}

const fareDoubler = function(fare)
{return fare * 2}

function fareTripler(tripleFare)
{return tripleFare * 3}

function selectDifferentDrivers(arrayOfDrivers,driversSelector)
{if(driversSelector === returnFirstTwoDrivers)
{let arrayAssignment = arrayOfDrivers.slice(0,2)
 return arrayAssignment}

 else if(driversSelector === returnLastTwoDrivers)
 {let arrayAssign = arrayOfDrivers.slice(2,4)
 return arrayAssign}
}
