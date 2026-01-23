let age1 = 20;
let hasID = true;

if (age1 >= 18 && hasID) {
    console.log("You can enter the Arfa Software Technology Park");
} else {
    console.log("You cannot enter the Arfa Software Technology Park");
}

// example  8 logical  OR ||
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("You can sleep late today!");
} else {
    console.log("Time to wake up early");
}
// expmple 9 logical NOT ! 
let isRaining = false;

if (!isRaining) {
    console.log("Let's go to web class");
} else {
    console.log("stay at hostel");
}
// example 10  if else and logical condition  LTV  HTV license

let age2 = Number(prompt("Enter your age:"));
let licenseType = prompt("Enter license type (HTV/LTV):").toUpperCase()
if (licenseType === "LTV" && age2 >= 18) {
    console.log("You are eligible for LTV license");
}
else if (licenseType === "HTV" && age2 >= 25) {
    console.log("You are eligible for HTV license");
}
else if (!(licenseType === "LTV" || licenseType === "HTV")) {
    console.log("Invalid license type entered");
}
else {
    console.log("You are not eligible due to age");
}
// example 11 eligible for vote
let age3 = Number(prompt("Enter your age:"));
let nationality = prompt("Enter your nationality:").toLowerCase();

if (age3 >= 18 && nationality === "pakistani") {
    alert("You are eligible to vote");
} else if (age3 < 18 && nationality === "pakistani") {
    alert("You are Pakistani but not old enough to vote");
} else {
    alert("You are not eligible to vote (non-Pakistani)");
}
// example 12 Passport eligibility
let age4 = Number(prompt("Enter your age for passport:"));
let nationality1 = prompt("Enter your nationality:").toLowerCase();

if (age4 >= 18 || nationality1 === "pakistani") {
    alert("You can apply for a passport");
} else {
    alert("You cannot apply for a passport");
}

