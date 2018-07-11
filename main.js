// _1_ - Calculator Function
// Make a function that takes in a word, and two numbers.
// The supported words would be “add”, “subtract”, “multiply” & “divide”.
// This function should perform the appropriate calculator action on the
// numbers and return the answer.
// Your calculator function should work for all of the following examples.

function calculator(word, x, y) {
 if (word == "add") {
   return (x + y);
 }
 if (word == "subtract") {
   return (x - y);
 }
 if (word == "multiply") {
   return (x * y);
 }
 if (word == "divide") {
   return (x / y);
 }
}

// *2* - Kardashian Quiz
// Let’s build a simple quiz program, this is the perfect use of a
//function to take care of the repetitive task of reading from a
//collection of questions. First off you should build a function
//that takes in a question and an answer then returns 1 or 0 depending
//on if the person got it right.
// You can make use of the prompt  function in JavaScript to get user
//input. Here’s some starter code:

var questions = [
"Was Kim born in 1985?",
"Will Rob get out of jail?",
"Does North seem happy?",
"Kanye released 'Heartless' in 2008?"
]

var answers = [
"yes",
"no",
"no",
"yes"
]


function rightOrWrong(questions, answers){
  var score = 0
  for(i = 0; i < questions.length; i++ ){
    var final = prompt(questions[i]);
      if (final == answers[i]){
        score += 1
      }
  }
  console.log('Your score is ' + score);}
