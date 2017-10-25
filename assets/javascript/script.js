var answers = ['Yes','No','Maybe','Ask Again Later', 'Seems Unlikely','Did you really just wish for that?'];

// document.getElementById('#button').onclick = function(){showAnswer()}

// function showAnswer(){
// 	var response = [Math.floor(Math.random)*answers.length];
// 	div.innerHTML = response;
// 	console.log(response);
// };

$('#askBtn').click(function(){
	//$('#answer').html(answers[Math.floor(Math.random()*answers.length)];);
	console.log('button working');
	console.log(answers[Math.floor(Math.random()*answers.length)];);
});