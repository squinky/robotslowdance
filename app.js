var five = require("johnny-five"), board = new five.Board();

var p1 = { input: { up: false, down: false, left: false, right: false } };
var p2 = { input: { up: false, down: false, left: false, right: false } };

var score = 0;

board.on("ready", function()
{
	this.pinMode(2, five.Pin.INPUT);
	this.pinMode(3, five.Pin.INPUT);
	this.pinMode(4, five.Pin.INPUT);
	this.pinMode(5, five.Pin.INPUT);

	this.pinMode(8, five.Pin.INPUT);
	this.pinMode(9, five.Pin.INPUT);
	this.pinMode(10, five.Pin.INPUT);
	this.pinMode(11, five.Pin.INPUT);

	this.digitalRead(2, function(value) { p1.input.up = !value });
	this.digitalRead(3, function(value) { p1.input.down = !value });
	this.digitalRead(4, function(value) { p1.input.left = !value });
	this.digitalRead(5, function(value) { p1.input.right = !value });

	this.digitalRead(8, function(value) { p2.input.up = !value });
	this.digitalRead(9, function(value) { p2.input.down = !value });
	this.digitalRead(10, function(value) { p2.input.left = !value });
	this.digitalRead(11, function(value) { p2.input.right = !value });

	this.loop(1, () =>
	{
		var oldScore = score;

		if (p1.input.up && p2.input.up) score++;
		else if (p1.input.down && p2.input.down) score++;
		else if (p1.input.left && p2.input.left) score++;
		else if (p1.input.right && p2.input.right) score++;

		if (score > oldScore) console.log("Score: "+score);
	});
});