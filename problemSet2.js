// function jediName(firstName,lastName){
//     let jediNam=lastName.slice(0,3)+firstName.slice(0,2);
//     console.log(jediNam);
//     return  jediNam;
// }

// jediName("ahad","darkhosh");
//------------------------------------------------------------------------
// function beyond(num){
//     if (num.POSITIVE_INFINITY || num.NEGATIVE_INFINITY)
//     {
//     console.log('And beyond');
//     }
//     else if (isFinite(num) && num>0)
//     {
//     console.log('And beyond');
//     }
//     else if (!(isFinite(num) && num>0))
//     {
//     console.log('To negative infinity');
//     }
//     else if (num ===0)
//     {
//         console.log('Staying home');
//     }

// }
// beyond(1/0);
// beyond(-1/0);
// beyond(0/1);
// beyond(5);
// beyond(-5);
//-----------------------------------------------------------------------
// const letterToNum={'a':2,'b':3,'c':4,'d':5};
// const sentence='craft block argon meter bells brown croon droop';
// let words=[];
// words=sentence.split(' ');

// for (let i=0;i<words.length;i++){
//     //find the first character of the each word
//   let charac=words[i].charAt(0);
//   let indexOfFirstLetter=letterToNum[charac];
//   let decodedLetter;
//   if (indexOfFirstLetter){
//   decodedLetter=words[i].charAt(indexOfFirstLetter-1);
//   }
//   else{
//   decodedLetter=' ';
//   }
//   console.log(decodedLetter);
// }
//--------------------------------------------------------------------------
// const months={'January':31,'February':28,'March':31,'April':30,'May':31,'June':30,'July':31,'August':31,'September':30,'October':31,'November': 30,'December':31,};

//   function monthsdays(month){
//     if( month in months ) {
//       console.log(months[month]);
//   }
//  }
//   monthsdays("February");
//--------------------------------------------------------------------------
function rps(playerChoice){
const computerNumber=Math.floor(Math.random()*3);
if (computerNumber === 0) {
  computerMoveChoice = "rock";
} else if (computerNumber == 1) {
  computerMoveChoice = "paper";
} else {
  computerMoveChoice = "scissors";
}

// Printing out what the computer chose
console.log("The computer chose: " + computerMoveChoice);

// Comparing the choices
// Both choices are the same (tie)
if (playerChoice === computerMoveChoice) {
  console.log("It's a tie!");
  console.log("Computer score: " + computerScore + " Player score: " + playerScore);
}

// Player choose rock --- Computer choose paper (computer wins)
else if ((playerChoice==="rock" && computerMoveChoice==="paper")) {
  console.log("Paper beats rock. The computer wins!");
  computerScore++;
  console.log("Computer score: " + computerScore + " Player score: " + playerScore);
}

// Player choose rock --- Computer choose scissors (player wins)
else if ((playerChoice==="rock" && computerMoveChoice==="scissors")) {
  console.log("Rock beats scissors. Player wins!");
  playerScore++;
  console.log("Computer score: " + computerScore + "Player score: " + playerScore);
}

// Player choose paper --- Computer choose rock (player wins)
else if ((playerChoice==="paper" && computerMoveChoice==="rock")) {
  console.log("Paper beats rock. Player wins!");
  playerScore++;
  console.log("Computer score: " + computerScore + "Player score: " + playerScore );
}

// Player choose paper --- Computer choose scissors (computer wins)
else if ((playerChoice==="paper" && computerMoveChoice==="scissors")) {
  console.log("Scissors beats paper. The computer wins!");
  computerScore++;
  console.log("Computer score: " + computerScore + "Player score: " + playerScore);
}

// Player choose scissors --- Computer choose rock (computer wins)
else if ((playerChoice==="scissors" && computerMoveChoice==="rock")) {
  console.log("Rock beats scissors. The computer wins!");
  computerScore++;
  console.log("Computer score: " + computerScore + "Player score: " + playerScore );
}

// Player choose scissors --- Computer choose paper (player wins)
else if ((playerChoice==="scissors" && computerMoveChoice==="paper")) {
  console.log("Scissors beats paper. Player wins!");
  playerScore++;
  console.log("Computer score: " + computerScore + "Player score: " + playerScore );
}
}


rps(2);