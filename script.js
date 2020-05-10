// Coding Game JavaScripts

// Build a timed code quiz with multiple-choice questions.
// App must run in the browser and feature dynamically updated HTML
// and CSS powered by JavaScript code.

// Must be clean and polished user interface and responsive.  Ensuring
// it adapts to multiple screen sizes.

// ***************** User Story **************
// Timed quiz on JavaScript fundamentals that stores high scores
// so I can gauge my progress compared to my peers
var timeEl;
var secondsLeft;
var arrAnswers;
var arrQuestions;
var arrQuestionAnswer;
var userAnswer;
var userInitials
var userScore
var topScore


// Click a start button
// Use code from Password Generator homework assignment here to create button on page

generateButton.addEventListener("click", startGame);

// Start a timer and present the first question
     // Start timer and game on buttonclick of Start Quiz button

var timeEl = document.querySelector(".time");


var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        //timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if(secondsLeft === 0){
          clearInterval(timerInterval);
          sendMessage();
        }
    }, 1000);
}

     // While timer is ticking off need a condition to check for valid answers and for incorrect answers 
     // need to interrupt while loop to else (wrong answer) condition and decrement timer value variable by
     // 10000 milliseconds 


     // Final condition to be met to stop the game is checking if all questions in the Question Array 
     // were answered.

// Answer the question then present another question




// Create "Question Bank" of questions to present to user store them in an array that can be traversed randomly to
// ask user a question.

// Make arrQuestions an array of all questions asked

var arrQuestions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed within_.", "Arrays in JavaScript can be used to store:", "String values must be enclosed within_____ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];


// Question 1 = Commonly used data types DO NOT include:

// Question 2 = The condition in an if / else statement is enclosed within_.

// Question 3 = Arrays in JavaScript can be used to store:

// Question 4 = String values must be enclosed within_____ when being assigned to variables.

// Question 5 = A very useful tool used during development and debugging for printing content to the debugger is:

// Create answer array of correct answers and map it's index to the corresponding question it answers correctly.

// Use JavaScript object and property paring to then pair the correct answer to the corret question
// and then map/link the correct answer to a button. All incorrect answers are mapped or links to "incorrect or wrong output message."

var arrAnswers = ["strings", "booleans", "alerts", "numbers", "quotes", "curly brackets", "parenthesis", "square brackets", "numbers and strings", "other arrays", "booleans", "all of the above", "JavaScript", "terminal/bash", "for loops", "console log",];


// How to maybe relate the 2 arrays of arrAnswers and arrQuestions using JavaScript objects and properties.

// Coupling of a property and a value:
// Using a datatype
// Use an object in JavaScript

var arrQuestionAnswer = {
    "Commonly used data types DO NOT include:" : "alert",    
    "The condition in an if / else statement is enclosed within______." : "curly brackets",
    "Arrays in JavaScript can be used to store:" : "All of the above",
    "A very useful tool used during development and debugging for printing content to the debugger is:" : "console log",
}

var arrWrongAnswerQuestion1 = [arrAnswers[0], arrAnswers[1], arrAnswers[3]];
var arrWrongAnswerQuestion2 = [arrAnswers[4], arrAnswers[6], arrAnswers[7]];
var arrWrongAnswerQuestion3 = [arrAnswers[8], arrAnswers[9], arrAnswers[10]];
var arrWrongAnswerQuestion3 = [arrAnswers[12], arrAnswers[13], arrAnswers[14]];

// If question answered incorrectly
// Take 10 seconds off time deducted from the clock.") Do not need to display notice on screen.


if (arrQuestions.Question1) {
    var userQuestion1Answer = "Choice 1.";
    var answerCorrect = arrQuestions[]



// Looping through Questions array
for (var i = 0; i < arrQuestions.length; i++) {

    if (arrQuestions[i] > 2){
        //Question 1
        userAnser = prompt("Commonly used data types DO NOT include:");

    }
    else {
        incorrectUserAnswer = prompt("That is wrong.");
    }

}

// Random number generator
// Loop 10 times
for (var i = 0; i < 10; i++) {
    // Generate a random whole number between 8 and 128
    var num = Math.floor(Math.random() * 128) + 8;

    // Display in console
    console.log(num);
}

// Loop through random letters selection through array  
var alpha = "jfiowjeoirj;slkfjaeoifj"

console.log(alpha[Math.floor(Math.random() * alpha.length)])






// *********************************
// Final Screen is:

// All Done!
// Your final score is 22.
// Enter your initials:    
// Submit button
// *********************************




// Storage of user responses

var userAnswer;


// If question answered incorrectly
// Subtract time from the clock -- take off 10 seconds from timer

// See While loop above





// When all questions are answered or the timer reaches 0



// The game is over


// When the game is over allow user to save initials and score.



var userInitials
var userScore
var topScore  // for comparison of scores


// How is the final screen displayed?  Is it a new HTML page with All done! on it or
// is it JavaScript?

// Is Highscores page a new page?
// Highscores simply displays the initials and the score.

console.log(1.userInitials - userScore)   