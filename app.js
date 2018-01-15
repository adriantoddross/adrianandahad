// let name = 'Joe';
// let age = 21;

// function whoAmI(name = 'Chris', age = 29){
//  console.log('\"Hi, my name is ' + name + ' and I\'m ' + age + ' years old\"');
//  return age;
// }

// function birthYear(age = 29) {
//   let yob = whoAmI();
//   let yearOfBirth = 2018 - age;
//   console.log('"I was born in ' + yearOfBirth + '\"');
// }

// birthYear();

function whoAmI (name, age) {
  // unsused answer: const yob = yearOfBirth(age);
  // unsused answer: return name + yob;
  if (typeof(name) === "string" && typeof(age) === "number") {
    console.log(`Hi, my name is ${name} and I was born in ${age}.`);
  } else if (typeof(name) !== "string" || typeof(age) !== "number") {
    console.error("Arguments not valid");
  }
  else {
    throw 'error';
  }
}

function testingAge (name, age) {
whoAmI(name, age);
  if (age < 0) {
    throw 'error';
  } else if (typeof(age) !== "number") {
    throw 'error';
  } else {
    console.log('It works.');
  }
}

function yearOfBirth (name, age) {
  const currentYear = 2018;
  let yearOfBirth = currentYear - age;
  try {
    testingAge(name, yearOfBirth);
  } catch (error) {
    return `Age can not be a negative number.`;
  }
}
console.log(yearOfBirth('Adrian', 23));
