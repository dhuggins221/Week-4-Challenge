// Variables for the quiz
var currentQuestionIndex = 0;
var time = 120;
var timerId;

// DOM element variables
var startButton = document.getElementById("start")
var timerElement = document.getElementById("time");
var questionsElement = document.getElementById("questions");
var choicesElement = document.getElementById("choices");
var initialsBox = document.getElementById("initials");
var submitButton = document.getElementById("submit");
