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

function yearOfBirth (age) {
  const currentYear = 2018;
  return currentYear - age;
}

function whoAmI (name, age) {
  const yob = yearOfBirth(age);
  // return name + yob;
  return `"Hi, my name is ${name} and I was born in ${yob}."`;
}

console.log(whoAmI('Adrian', 24));
