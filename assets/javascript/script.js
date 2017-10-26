var answers = ['Absolutely','Yes','No','It is looking good','Maybe','Ask Again Later', 'Seems Unlikely','Slim chances','Did you really just wish for that?'];

$('#askBtn').on('click', function(){
	let result = answers[Math.floor(Math.random()*answers.length)];
	$('#answer').html(result);
	console.log('button working');
	console.log(result);
});
