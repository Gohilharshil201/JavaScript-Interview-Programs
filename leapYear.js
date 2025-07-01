// Check if a year is a leap year.

function checkLeapYear(year) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (isLeapYear) {
    console.log(`${year} is leapYear`);
  } else {
    console.log(`${year} is not leapYear`);
  }
  return isLeapYear;
}

checkLeapYear(2024);
