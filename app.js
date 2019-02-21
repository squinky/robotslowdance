var five = require("johnny-five");
var board = new five.Board();

var grammar = require('./grammar.js');

var player = require('play-sound')(opts = {});
var bgm;

var say = require('say');

var p1 =
{
	input: { up: false, down: false, left: false, right: false },
	servos: {}
};

var p2 =
{
	input: { up: false, down: false, left: false, right: false },
	servos: {}
};

var start = { button: false, led: null };

var timeToDance = false;

board.on("ready", function()
{
	start.led = new five.Led(14);
	start.led.blink(500);

	this.pinMode(15, five.Pin.INPUT);

	this.pinMode(2, five.Pin.INPUT);
	this.pinMode(3, five.Pin.INPUT);
	this.pinMode(4, five.Pin.INPUT);
	this.pinMode(5, five.Pin.INPUT);

	this.pinMode(8, five.Pin.INPUT);
	this.pinMode(9, five.Pin.INPUT);
	this.pinMode(10, five.Pin.INPUT);
	this.pinMode(11, five.Pin.INPUT);

	this.digitalRead(15, function(value) { start.button = !value });

	this.digitalRead(2, function(value) { p1.input.up = !value });
	this.digitalRead(3, function(value) { p1.input.down = !value });
	this.digitalRead(4, function(value) { p1.input.left = !value });
	this.digitalRead(5, function(value) { p1.input.right = !value });

	this.digitalRead(8, function(value) { p2.input.up = !value });
	this.digitalRead(9, function(value) { p2.input.down = !value });
	this.digitalRead(10, function(value) { p2.input.left = !value });
	this.digitalRead(11, function(value) { p2.input.right = !value });

	p1.servos.bottom = new five.Servo({ pin: 6, range: [0, 180], startAt: 90 });
	p1.servos.top = new five.Servo({ pin: 7, range: [45, 135], startAt: 90 });
	p2.servos.bottom = new five.Servo({ pin: 12, range: [0, 180], startAt: 90 });
	p2.servos.top = new five.Servo({ pin: 13, range: [45, 135], startAt: 90 });

	this.loop(1, () =>
	{
		if (timeToDance)
		{
			if (p1.input.up) p1.servos.bottom.max();
			else if (p1.input.down) p1.servos.bottom.min();
			else p1.servos.bottom.home();

			if (p1.input.left) p1.servos.top.max();
			else if (p1.input.right) p1.servos.top.min();
			else p1.servos.top.home();

			if (p2.input.up) p2.servos.bottom.min();
			else if (p2.input.down) p2.servos.bottom.max();
			else p2.servos.bottom.home();

			if (p2.input.left) p2.servos.top.max();
			else if (p2.input.right) p2.servos.top.min();
			else p2.servos.top.home();

			// in sync?
			// p1/p2 moving
			// p1/p2 changed direction?
			// p1/p2 last direction

			// after 1000 loops (1 second)
			// has p1/p2 moved?
			// # in sync
			// # of times p1/p2 changed direction
			// reset ms vars

			// after the last robot has spoken
			// choose which robot speaks
			// choose which things the robot can say
			// reset second vars
		}
		else
		{
			if (start.button)
			{	
				start.led.stop().off();

				bgm = player.play('bgm.mp3', function(err){ if (err) throw err });

				talk(p2, "Hello, I am a dancing robot.");

				// choose which robot speaks
				// start with a greeting

				timeToDance = true;
			}
		}
	});
});

board.on("exit", function()
{
	if (bgm) bgm.kill();
});

function talk(player, text)
{
	console.log("Speaking...");

	var voice;
	if (player == p1) voice = "voice_kal_diphone";
	else voice = "voice_ked_diphone";

	say.speak(text, voice, undefined, (error) =>
	{
		if (error) return console.error(error);
		console.log('Stopped speaking.');
	});
}