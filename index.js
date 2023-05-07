/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
 function createEmployeeRecord(eArray){    
  const employee = {}
    employee.firstName = eArray[0];
    employee.familyName = eArray[1];
    employee.title = eArray[2];
    employee.payPerHour = eArray[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    return employee;
}
function createEmployeeRecords(arrs){
const employeeArray = [];
    for (let i = 0; i < arrs.length; i++){
        employeeArray[i] = createEmployeeRecord(arrs[i])
    }
    return employeeArray;
} 
function createTimeInEvent(timeString){
       this.timeInEvents[this.timeInEvents.length] = {
        type : "TimeIn",
        hour : parseInt(timeString.split(' ')[1]),
        date : timeString.split(' ')[0]
    }
    return this;
}
function createTimeOutEvent(timeString){
    const punch = {};
    punch.type = "TimeOut";
    punch.hour = parseInt(timeString.split(' ')[1]);
    punch.date = timeString.split(' ')[0];
    this.timeOutEvents.push(punch)
    return this;
}

function hoursWorkedOnDate(date){
    const startTime = this.timeInEvents.find(time =>time.date===date).hour/100;
    const endTime = this.timeOutEvents.find(time =>time.date===date).hour/100;    return endTime - startTime;
}

function wagesEarnedOnDate(date){
    let wages = (hoursWorkedOnDate.call(this,date)*(this.payPerHour));
    return wages;
}
//const allWagesFor = function () {
//    const eligibleDates = this.timeInEvents.map(function (e) {
//        return e.date
//    })  
//    const payable = eligibleDates.reduce(function (memo, d) {
//      return memo + wagesEarnedOnDate.call(this, d)
//  }.bind(this), 0)     
//}

function allWagesFor() {
  let eligibleDates = this.timeInEvents.map((event) => event.date);
  let totalWages = eligibleDates.reduce((total, date) => {
    return total + wagesEarnedOnDate.call(this, date);
  }, 0);
  return totalWages;
}


function findEmployeeByFirstName(eObj,firstNameString)
{
    return eObj.find(function(eObj){
      return eObj.firstName === firstNameString
    })
}
function calculatePayroll(emArray){
   let sum = 0;
    for (let i = 0; i < emArray.length; i++){
        sum += allWagesFor.call(emArray[i])
    }
    return sum;
}