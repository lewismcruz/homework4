// Coding Game JavaScripts

// Build a timed code quiz with multiple-choice questions.
// App must run in the browser and feature dynamically updated HTML
// and CSS powered by JavaScript code.

// Must be clean and polished user interface and responsive.  Ensuring
// it adapts to multiple screen sizes.

// ***************** User Story **************
// Timed quiz on JavaScript fundamentals that stores high scores
// so I can gauge my progress compared to my peers

// Variables

var secondsLeft;
var arrAnswers;
var arrQuestions;
var arrQuestionAnswer;
var userAnswer;
var userInitials;
var userScore;
var topScore;
var counter;
var timeEl = document.querySelector(".time");
var timeP = document.querySelector(".gameover");

/*==========================================================================

I tried to use this code example provided in class to change the questions
and the choices to the next set of question and choices when a player selected
the correct answer to the previous question.  

My thought was to put this code in a advanceNextQuestion() function that could 
be called with the player selected the correct answer for each question.


// Set the body to a variable
var body = document.body;

// Create all necessary elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var cardBody = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Store our li elements in a variable
var listItems = document.getElementsByTagName("li");

// Set the text content of relevant elements
h1El.textContent = "Welcome to my page";
h2El.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";
kittenEl.textContent = "This is my kitten";
nameEl.textContent = "his name is Jax";
favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "Chicken Fingers";
li2.textContent = "Pizza";
li3.textContent = "Burgers";
li4.textContent = "Sushi";
        
    
    // Append all of the new elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
    
// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
imgEl.setAttribute("height", 200);
imgEl.setAttribute("width", 200);
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background:#333333; padding:20px;");
listItems[0].setAttribute("style", " color:blue; background: #666666; padding: 5px; margin-left: 35px;");
listItems[1].setAttribute("style", " color:blue; background: #777777; padding: 5px; margin-left: 35px;");
listItems[2].setAttribute("style", " color:orange; background: #888888; padding: 5px; margin-left: 35px;");
listItems[3].setAttribute("style", " color:orange; background: #999999; padding: 5px; margin-left: 35px;");

=========================================================================*/

//var submitEl = document.querySelector("#submit");
//var initialsInput = document.querySelector("#initials");
//var submissionResponseEl = document.querySelector("#Question");

//submitEl.addEventListener("click", function(event){
//    event.preventDefault();

//})

/*
input this to output "Correct" when user selects correct answer to question

var correctResponse = "Correct" + choiceInput.

 var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;

*/

     // While timer is ticking off need a condition to check for valid answers and for incorrect answers 
     // need to interrupt while loop to else (wrong answer) condition and decrement timer value variable by
     // 10000 milliseconds 



// Need to stop the JavaScript from starting when the page refreshes.
// Used 'event' inside setTime to then call the event.preventDefault method to keep the browser from refreshing.

    var buttonClickAction = document.querySelector("#startButton");  
    buttonClickAction.addEventListener("click", function setTime(event) {
        event.preventDefault();
    console.log("This has been clicked.");
    console.log("Game will now start");

// This counter works

    var secondsLeft = 10;

    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            console.log(secondsLeft);
            timeEl.textContent = "Time: " + secondsLeft;
            

            if(secondsLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
            }
        }, 1000);
    }

    function sendMessage() {
        
    timeP.textContent = "Time Gone - Game Over"; 
    }

    setTime();

    console.log("Starting Question Section.")

        var arrQuestions =  {
        
        question : "Commonly used data types DO NOT include:",
        correctAnswer : "alerts",
        "otherChoices" : ["strings","booleans","numbers"],
        

        question : "The condition in an if / else statement is enclosed within______.",
        correctAnswer : "curly brackets",
        "otherChoices" : ["quotes", "parenthesis", "square brackets"],

           

        question : "Arrays in JavaScript can be used to store:",
        correctAnswer : "All of the above",  
        "otherChoices" : ["numbers and strings", "other arrays", "booleans"],

        

        question : "A very useful tool used during development and debugging for printing content to the debugger is:",
        correctAnswer : "console log",
        "otherChoices" : ["JavaScript", "terminal/bash", "for loops"],

        }
    
       
    
    
 console.log("Starting choice selection logic.");
 
 console.log(arrQuestions.question);
 console.log(arrQuestions.correctAnswer);
 console.log(arrQuestions.question.otherChoices);
 console.log("outside Array ran");


 var score = 0;
 console.log(score);
 
 for (var i = 0; i < arrQuestions.length; i++) {
     var choiceSelected = confirm(arrQuestions[i].question);
     var questionCounter = arrQuestions.length;
     console.log(choiceSelected);
     console.log("Choice was selected here.");
 
     if ((choiceSelected === true && arrQuestions[i].correctAnswer === "t") ||
        (choiceSelected === false && arrQuestions[i].correctAnswer === "f")) {
        score++;
        alert("Correct");
        // Call function to load next set of questions to screen.
        // function advanceNextQuestion() 
        // to update page with next queston and choices once correct
        // choice is selected/condition met.
        choiceSelected
        }
        else {
            alert("Wrong!");
            secondsLeft === (secondsLeft - 2);
        }
    
      
     if (questionCounter === 4 && arrQuestions[i].correctAnswer === "t") {
        alert("Game over.");
     }
     alert("You got " + score + "/" + arrQuestions.length);
     console.log("Line 1000");
 
}
});
    console.log("End of Game");


    


// function newQuestionLayout() {


    // }
    
         
 
     
 
    

// This counter works *******

// After start button is clicked need to change the buttons to choices and display question.
// After correct choice is selected need to also need to display "Correct" output to user
// and then change the question and answers displayed to the next question.



/* 
choice1Button.addEventListener("click", startTimer);
choice2Button.addEventListener("click", pauseTimer);
choice3Button.addEventListener("click", stopTimer);
choice4Toggle.addEventListener("change", toggleStatus);
*/





 
// Create a function that generates new HTML on the index.html page

/*  


function newQuestionLayout() {

    // Create all necessary elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li"); 

// Store our li elements in a variable


// Set the text content of relevant elements
h1El.textConent = "Question" + question[i];
li1.textContent = "Choice 1" + otherChoices[0];
li2.textContent = "Choice 2" + otherChoices[1];
li3.textContent = "Choice 3" + otherChoices[2];
li4.textContent = "Choice 4" + otherChoices[3];


// Append all of the new elements
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Style the elements - use Bootstrap styling classes to do this if possible
listItems[0].setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
listItems[1].setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
listItems[2].setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
listItems[3].setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");

}

*/
 
 
 

/*

// Click a start button
// Use code from Password Generator homework assignment here to create button on page


// Need to figure out how to work with event listener for click button action.

// buttonClickAction.addEventListener("click", startGame);
// generateBtn.addEventListener("click", startGame);

// Start a timer and present the first question
     // Start timer and game on buttonclick of Start Quiz button




     // Final condition to be met to stop the game is checking if all questions in the Question Array 
     // were answered.

// Answer the question then present another question




// Use this array for questions!!! 


for (var i = 0; i < arrQuestions.length; i++) {
   var userAnswerObj = arrQuestions[i];





}



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




// Random number generator
// Loop 10 times
for (var i = 0; i < 3; i++) {
    // Generate a random whole number between 8 and 128
    var num = Math.floor(Math.random() * 3) + 1;

    // Display in console
    console.log(num);
}

// Loop through random letters selection through array  
var arrWrongAnswerQuestion1 = "jfiowjeoirj;slkfjaeoifj"

console.log(alpha[Math.floor(Math.random() * arrWrongAnswerQuestion1.length)])

// Working with arrays using functions

function consoleInside(arr) {

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log("--------");

}

// This is how you call the function 

consoleInside(brands);
consoleInside(heroes);
consoleInside(booksOnMyShelf);







// *********************************
// Final Screen is:

// All Done!
// Your final score is 22.
// Enter your initials:    
// Submit button
// *********************************




// Storage of user responses

// If question answered incorrectly
// Subtract time from the clock -- take off 10 seconds from timer

// See While loop above





// When all questions are answered or the timer reaches 0



// The game is over


// When the game is over allow user to save initials and score.

// Save scores and initials to local browser storage for recall -- can be cleared out.
// Need to clear out and reset timer





// How is the final screen displayed?  Is it a new HTML page with All done! on it or
// is it JavaScript?

// Is Highscores page a new page? -- Yes it is.
// Highscores simply displays the initials and the score.

// console.log(1.userInitials - userScore)

*/


