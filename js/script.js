var students = ["Yuening", "Polina", "Nicole", "James C", "Susie", "Joon Hee", "George", "Stephen", "Tyler", "Eric", "James T", "Grace", "Echo", "Camille", "Zhijian", "Joy", "Jamie", "Cindy" ];

$(document).ready(setup);

// when document is ready...
function setup() {
	// add event listeners
	$('#random').click(displayRandom);
	$('#shuffle').click(displayShuffle);
	$('#clear').click(clear);

	// options object
	// 
	// var options = {
	// 	'trigger': 'hover',
	// 	'delay': '50',
	// 	'placement': 'bottom'
	// }

	$('[data-toggle="popover"]').popover({
		'trigger': 'hover',
		'delay': '50',
		'placement': 'top'
	});
}

// event handlers
function displayRandom() {
	var student = getRandomStudent();
	var domElement = $('#display-random');
	domElement.text(student);
}

function displayShuffle() {
	shuffleStudents();
	var studentList = $('#display-shuffle');

	// clear text from <ol>
	studentList.text('');

	for (var i = 0; i < students.length; i++) {
		// display student
		var li = $('<li></li>');
		li.text(students[i]);
		li.addClass('list-group-item');

		// add badge
		var span = $('<span>');
		span.addClass('badge');
		span.text(i+1);


		// append
		li.append(span);
		studentList.append(li);
	}
}

function clear() {
	$('#display-shuffle').text('');
	$('#display-random').text('');
}

// helpers
function randomNumber(max) {
	// max is either the number we provided, or 1
	// var max = max || 1;

	if (typeof max == "number") {
		var num = Math.floor( Math.random() * max );
		return num;
	} else {
		// coin flip if we dont provide max
		return Math.round ( Math.random() );
	}

}

function getRandomStudent() {
	var len = students.length;
	var index = randomNumber(len);
	var student = students[index];
	return student;
}

function shuffleStudents() {
	students = _.shuffle(students);
	return students;
}