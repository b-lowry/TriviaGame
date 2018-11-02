var question = " ";
var questionNumber = 0;
var answer = [];
var correctAnswer = [];
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var unansweredTotal = 0;
var timer = 31;
var countdown;
var usersPick;


//questions and answers
var questions = [{
    question:"How many animal species are there in Red Dead Redemption 2??",
    answer:["5","100","150","200"],
    correctAnswer: ["200"],
},{
    question:"What is the first name of the main character you play as in Red Dead Redemption 2??",
    answer:["Arthur","John","Duke","Joe"],
    correctAnswer: ["Arthur"],
},{
    question:"What is the first area where the actual base camp is started in Red Dead Redemption 2??",
    answer:["The Heartland","Strawberry","Blackwater","Grizzley"],
    correctAnswer: ["The Heartland"],
}]

//functions

function timerStart () {
    clearInterval(countdown);
    timer = 31;
    countdown = setInterval(timerCountDown, 1000);
};
function timerCountDown () {
    timer--;
    $("#timeRemain").text("Time Remaining: " + timer + " seconds");
    if (timer <= 0) {
        stopTimer();
        $("#question").text("Time's Up! The correct answer is " + questions[questionNumber].correctAnswer);
        $("#answer").html(questions[questionNumber]);
        unansweredTotal++;
        //next();
    }
};

function stopTimer () {
    clearInterval(countdown)
 }

 function QuestionsAndAnswers () {
    $("#question1").text(questions[0].question);
    $("#answer1").html("<p class='answer1'>"+ questions[0].answer[0] + "<p>" + 
    "<p class='answer1'>"+ questions[0].answer[1] + "<p>" + 
    "<p class='answer1'>"+ questions[0].answer[2] + "<p>" + 
    "<p class='answer1'>"+ questions[0].answer[3] + "<p>")

    $("#question2").text(questions[1].question);
    $("#answer2").html("<p class='answer2'>"+ questions[1].answer[0] + "<p>" + 
    "<p class='answer2'>"+ questions[1].answer[1] + "<p>" + 
    "<p class='answer2'>"+ questions[1].answer[2] + "<p>" + 
    "<p class='answer2'>"+ questions[1].answer[3] + "<p>")

    $("#question3").text(questions[2].question);
    $("#answer3").html("<p class='answer3'>"+ questions[2].answer[0] + "<p>" + 
    "<p class='answer3'>"+ questions[2].answer[1] + "<p>" + 
    "<p class='answer3'>"+ questions[2].answer[2] + "<p>" + 
    "<p class='answer3'>"+ questions[2].answer[3] + "<p>")
}


$(".answer1").on("click", function () {
    usersPick = $(this).text();
    if (usersPick === questions[0].correctAnswer) {
        correctAnswerTotal ++;
    } else {
        incorrectAnswerTotal ++;
    }
})



$(document).ready(function() {
    $("#start").on("click", function() {
        $(this).hide();
        setTimeout(QuestionsAndAnswers, 1000);     
        timerStart();
     });
})


    
 