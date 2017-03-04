

//global variables
var answers = ['NSYNC', 'Spunky', '1993'];
var data = $('input');
var correctAnswer = 0;
var incorrectAnswer = 0;
var empty = 0;
var counter = 30;



function startGame(){
	$('.data').css('display', 'none');
	for(var i = 0; i < data.length; i++){
		if (data[i].checked){
			if(answers.indexOf(data[i].value) != -1){
				correctAnswer++;
			}

				else{
					incorrectAnswer++;
			}
		}
		
	}
	var result = correctAnswer + incorrectAnswer;

	if(result != 3){
		empty = 3 - result;

	}

	$('.empty').html("You have " + empty + " to answer");
	$('.correct').html("You have " + correctAnswer + " correct!");
	$('.incorrect').html("You have " + incorrectAnswer + " wrong!");
}




$('.start').on('click', function(){
	
	$('.start').css('display', 'none');

	$('.data').css('display', 'block');

	var startCounter = setInterval(function(){
		counter --;
		
		

		if(counter > 9){
			$('.counter').html("Time Remaining 00:" + counter);
		}
		else if(counter <= 9){
			$('.counter').html("Time Remaining 00:0" + counter);
		}

		if(counter <= 0){
			clearInterval(startCounter);
			startGame();
		}
	}, 1000);


	$('.done').on('click', function(){
		startGame();

	});
});






