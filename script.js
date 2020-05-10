// Coding Game JavaScripts

// Build a timed code quiz with multiple-choice questions.
// App must run in the browser and feature dynamically updated HTML
// and CSS powered by JavaScript code.

// Must be clean and polished user interface and responsive.  Ensuring
// it adapts to multiple screen sizes.

// ***************** User Story **************
// Timed quiz on JavaScript fundamentals that stores high scores
// so I can gauge my progress compared to my peers



// Click a start button
// Use code from Password Generator homework assignment here to create button on page




// Start a timer and present the first question


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






// *********************************
// Final Screen is:

// All Done!
// Your final score is 22.
// Enter your initials:    
// Submit button
// *********************************



// Create answer array of correct answers and map it's index to the corresponding question it answers correctly.

// Use JavaScript object and property paring to then pair the correct answer to the corret question
// and then map/link the correct answer to a button. All incorrect answers are mapped or links to "incorrect or wrong output message."

var arrAnswers = ["strings", "booleans", "alerts", "numbers", "quotes", "curly brackets", "parenthesis", "square brackets", "numbers and strings", "other arrays", "booleans", "all of the above", "JavaScript", "terminal/bash", "for loops", "console log",];




// Storage of user responses

var userAnswer;


// How to maybe relate the 2 arrays of arrAnswers and arrQuestions using JavaScript objects and properties.

// Coupling of a property and a value:
// Using a datatype
// Use an object in JavaScript



var arrQuestions = {
    "Question1": [
        "Choice1" = "This is choice 1.",
        "Choice2" = "This is choice 2.",
        "Choice3" = "This is choice 3.",
        "Choice4" = "This is choice 4.",
        "Choice5" = "This is choice 5.",
    ],
    "Question2": [
        "Choice1" = "This is choice 1.",
        "Choice2" = "This is choice 2.",
        "Choice3" = "This is choice 3.",
        "Choice4" = "This is choice 4.",
        "Choice5" = "This is choice 5.",
    ],
    "Question3": [
        "Choice1" = "This is choice 1.",
        "Choice2" = "This is choice 2.",
        "Choice3" = "This is choice 3.",
        "Choice4" = "This is choice 4.",
        "Choice5" = "This is choice 5.",
    ],
    "Question4": [
        "Choice1" = "This is choice 1.",
        "Choice2" = "This is choice 2.",
        "Choice3" = "This is choice 3.",
        "Choice4" = "This is choice 4.",
        "Choice5" = "This is choice 5.",
    ],
    "Question5": [
        "Choice1" = "This is choice 1.",
        "Choice2" = "This is choice 2.",
        "Choice3" = "This is choice 3.",
        "Choice4" = "This is choice 4.",
        "Choice5" = "This is choice 5.",
    ],
}



// If question answered in correctly
alert("Incorrect answer.  10 seconds off time deducted from the clock.")


if (arrQuestions.Question1) {
    var userQuestion1Answer = "Choice 1.";
    var answerCorrect = arrQuestions[]
// If question answered in correctly
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