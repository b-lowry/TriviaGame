// list of variables used
var question = " ";
var answer = [];
var correctAnswer = [];
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var timer = 31;
var countdown;


//questions and answers and correct answers
var questions = [{
    question:"How many animal species are there in Red Dead Redemption 2??",
    answer:[5,100,150,200],
    correctAnswer: [200],
},{
    question:"What is the first name of the main character you play as in Red Dead Redemption 2??",
    answer:["Arthur","John","Duke","Joe"],
    correctAnswer: ["Arthur"],
},{
    question:"What is the first area where the actual base camp is started in Red Dead Redemption 2??",
    answer:["The Heartland","Strawberry","Blackwater","Grizzley"],
    correctAnswer: ["The Heartland"],
},{
    question:"Who is the main character from Red Dead Redemption",
    answer:["Buck","John","Shaq","Mary"],
    correctAnswer: ["John"],
}]

//starts the timer 
function timerStart () {
    clearInterval(countdown);
    timer = 31;
    countdown = setInterval(timerCountDown, 1000);
};

//to play music option on page
function play() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}




//allows timer to count down and fires stopTimer function and removes questions and aswers after game finishes
function timerCountDown () {
    timer--;
  
    $("#timeRemain").text("Time Remaining: " + timer + " seconds");
    if (timer <= 0) {
        $( "#answer1-1" ).off( "click" );
        $( "#answer1-2" ).off( "click" );
        $( "#answer1-3" ).off( "click" );
        $( "#answer1-4" ).off( "click" );
        $( "#answer2-1" ).off( "click" );
        $( "#answer2-2" ).off( "click" );
        $( "#answer2-3" ).off( "click" );
        $( "#answer2-4" ).off( "click" );
        $( "#answer3-1" ).off( "click" );
        $( "#answer3-2" ).off( "click" );
        $( "#answer3-3" ).off( "click" );
        $( "#answer3-4" ).off( "click" );
        $( "#answer4-1" ).off( "click" );
        $( "#answer4-2" ).off( "click" );
        $( "#answer4-3" ).off( "click" );
        $( "#answer4-4" ).off( "click" );
        stopTimer();
        removeQandA();

        //displays number of correct answers
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        //displays number of incorrect answers
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        //calls reset function to reset game
        setTimeout(resetGame, 1000);
    } else if (correctAnswerTotal === 4 && incorrectAnswerTotal === 0 ) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 1000);
    }   else if (correctAnswerTotal === 2 && incorrectAnswerTotal === 2 ) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 1000);
    }   else if (correctAnswerTotal === 3 && incorrectAnswerTotal === 1 ) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 1000);
    }   else if (correctAnswerTotal === 1 && incorrectAnswerTotal === 3 ) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 1000);
    }   else if (correctAnswerTotal === 0 && incorrectAnswerTotal === 4 ) {
        stopTimer();
        removeQandA();
        $("#numberofcorrectanswers").text("Number of Correct Answers:" + correctAnswerTotal);
        $("#numberofincorrectanswers").text("Number of Incorrect Answers:" + incorrectAnswerTotal);
        setTimeout(resetGame, 1000);
};
};

//clears the timer and resets it
function stopTimer () {
    clearInterval(countdown)
    timer = 31
}

//hides the correct and incorrect answers the user chose
function hideAnswerTotal () {
    $("#numberofcorrectanswers").hide();
    $("#numberofincorrectanswers").hide();
}

//shows the correct and incorrect answers the user chose
function showAnswerTotal () {
    $("#numberofcorrectanswers").show();
    $("#numberofincorrectanswers").show();
}


//shows the questions and answers on page
function QuestionsAndAnswers () {
    
    $("#question1").text(questions[0].question);
    $("#answer1-1").text(questions[0].answer[0]);  
    $("#answer1-2").html(questions[0].answer[1]); 
    $("#answer1-3").html(questions[0].answer[2]); 
    $("#answer1-4").html(questions[0].answer[3]);
    
    $("#question2").text(questions[1].question);
    $("#answer2-1").text(questions[1].answer[0]);  
    $("#answer2-2").html(questions[1].answer[1]); 
    $("#answer2-3").html(questions[1].answer[2]); 
    $("#answer2-4").html(questions[1].answer[3]);
    
    $("#question3").text(questions[2].question);
    $("#answer3-1").text(questions[2].answer[0]);  
    $("#answer3-2").html(questions[2].answer[1]); 
    $("#answer3-3").html(questions[2].answer[2]); 
    $("#answer3-4").html(questions[2].answer[3]);

    $("#question4").text(questions[3].question);
    $("#answer4-1").text(questions[3].answer[0]);  
    $("#answer4-2").html(questions[3].answer[1]); 
    $("#answer4-3").html(questions[3].answer[2]); 
    $("#answer4-4").html(questions[3].answer[3]);
};

  
//allows answers to be clicked and stores the user choice in correctAnswerTotal and incorrectAnswerTotal
function answerClick () {

//question 1 answer set
$("#answer1-4").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer1-1" ).off( "click" );
    $( "#answer1-2" ).off( "click" );
    $( "#answer1-3" ).off( "click" );
    $( "#answer1-4" ).off( "click" );
})
    $("#answer1-1").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer1-1" ).off( "click" );
    $( "#answer1-2" ).off( "click" );
    $( "#answer1-3" ).off( "click" );
    $( "#answer1-4" ).off( "click" );
});
$("#answer1-2").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer1-1" ).off( "click" );
    $( "#answer1-2" ).off( "click" );
    $( "#answer1-3" ).off( "click" );
    $( "#answer1-4" ).off( "click" );
});
$("#answer1-3").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer1-1" ).off( "click" );
    $( "#answer1-2" ).off( "click" );
    $( "#answer1-3" ).off( "click" );
    $( "#answer1-4" ).off( "click" );
});

//question 2 answer set
$("#answer2-1").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer2-1" ).off( "click" );
    $( "#answer2-2" ).off( "click" );
    $( "#answer2-3" ).off( "click" );
    $( "#answer2-4" ).off( "click" );
})
    $("#answer2-2").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer2-2" ).off( "click" );
    $( "#answer2-1" ).off( "click" );
    $( "#answer2-3" ).off( "click" );
    $( "#answer2-4" ).off( "click" );
});
$("#answer2-3").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer2-2" ).off( "click" );
    $( "#answer2-1" ).off( "click" );
    $( "#answer2-3" ).off( "click" );
    $( "#answer2-4" ).off( "click" );
});
$("#answer2-4").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer2-2" ).off( "click" );
    $( "#answer2-1" ).off( "click" );
    $( "#answer2-3" ).off( "click" );
    $( "#answer2-4" ).off( "click" );
});

//question 3 answer set
$("#answer3-1").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer3-1" ).off( "click" );
    $( "#answer3-2" ).off( "click" );
    $( "#answer3-3" ).off( "click" );
    $( "#answer3-4" ).off( "click" );

})
    $("#answer3-2").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer3-2").off( "click" );
    $( "#answer3-3").off( "click" );
    $( "#answer3-4").off( "click" );
    $( "#answer3-1" ).off( "click" );
});
$("#answer3-3").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer3-2").off( "click" );
    $( "#answer3-3").off( "click" );
    $( "#answer3-4").off( "click" );
    $( "#answer3-1" ).off( "click" );
});
$("#answer3-4").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer3-2").off( "click" );
    $( "#answer3-3").off( "click" );
    $( "#answer3-4").off( "click" );
    $( "#answer3-1" ).off( "click" );
});

//question 4 answer set
$("#answer4-2").on("click", function(){ 
    correctAnswerTotal++;
    console.log(correctAnswerTotal);
    $( "#answer4-1" ).off( "click" );
    $( "#answer4-2" ).off( "click" );
    $( "#answer4-3" ).off( "click" );
    $( "#answer4-4" ).off( "click" );
})
    $("#answer4-1").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer4-1" ).off( "click" );
    $( "#answer4-2" ).off( "click" );
    $( "#answer4-3" ).off( "click" );
    $( "#answer4-4" ).off( "click" );
});
$("#answer4-3").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer4-1" ).off( "click" );
    $( "#answer4-2" ).off( "click" );
    $( "#answer4-3" ).off( "click" );
    $( "#answer4-4" ).off( "click" );
});
$("#answer4-4").on("click", function(){ 
    incorrectAnswerTotal++;
    console.log(incorrectAnswerTotal);
    $( "#answer4-1" ).off( "click" );
    $( "#answer4-2" ).off( "click" );
    $( "#answer4-3" ).off( "click" );
    $( "#answer4-4" ).off( "click" );
});

}




//removes the questions and answers so not visible when first page of game appears
function removeQandA () {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#answer1-1").hide();
    $("#answer1-2").hide();
    $("#answer1-3").hide();
    $("#answer1-4").hide();
    $("#answer2-1").hide();
    $("#answer2-2").hide();
    $("#answer2-3").hide();
    $("#answer2-4").hide();
    $("#answer3-1").hide();
    $("#answer3-2").hide();
    $("#answer3-3").hide();
    $("#answer3-4").hide();
    $("#answer4-1").hide();
    $("#answer4-2").hide();
    $("#answer4-3").hide();
    $("#answer4-4").hide();
}

//shows questions and answers after start button is clicked
function showQandA () {
    $("#question1").show();
    $("#question2").show();
    $("#question3").show();
    $("#question4").show();
    $("#answer1-1").show();
    $("#answer1-2").show();
    $("#answer1-3").show();
    $("#answer1-4").show();
    $("#answer2-1").show();
    $("#answer2-2").show();
    $("#answer2-3").show();
    $("#answer2-4").show();
    $("#answer3-1").show();
    $("#answer3-2").show();
    $("#answer3-3").show();
    $("#answer3-4").show();
    $("#answer4-1").show();
    $("#answer4-2").show();
    $("#answer4-3").show();
    $("#answer4-4").show();
}


//resets game
function resetGame() {
    hideAnswerTotal();
    showAnswerTotal();
    $("#timeRemain").hide();

    //resets variables
    correctAnswerTotal = 0;
    incorrectAnswerTotal = 0;
    timer = 31
    //allows game to return to ready state
    $(document).ready(function() {
        $("#start").show();
        $("#start").on("click", function() {
            $("#start").hide();
            setTimeout(showQandA, 1000);
            setTimeout(QuestionsAndAnswers, 1000);
            $("#timeRemain").show();    
        }); 
    });
}

//removes questions and answers at beggining before user clicks start to begin
removeQandA();
$("#rules").text("You will have 30 seconds");
$("#rules2").text("You must answer 4 questions");
$("#rules3").text("Press start to begin...if you wish");


//starts the game with click of start button on page
$(document).ready(function() {
    $("#start").on("click", function() {
        $("#rules").hide();
        $("#rules2").hide();
        $("#rules3").hide();
        $(this).hide();
        setTimeout(showQandA, 1000);
        setTimeout(QuestionsAndAnswers, 1000);   
        timerStart();
        answerClick();
    });
    
});

    
 