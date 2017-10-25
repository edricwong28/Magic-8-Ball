var answers = ['Yes','No','Maybe','Ask Again Later', 'Seems Unlikely','Did you really just wish for that?'];

$('#askBtn').on('click', function(){
	$('#answer').html(answers[Math.floor(Math.random()*answers.length)]);
	console.log('button working');
	console.log(answers[Math.floor(Math.random()*answers.length)]);
});

// $('#alert').click(function(){
// 	alert("working");
// })