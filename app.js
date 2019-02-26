var five = require("johnny-five");
var board = new five.Board();

var tracery = require('tracery-grammar');
var text = require('./grammar.js');
var grammar = tracery.createGrammar(text.get());
grammar.addModifiers(tracery.baseEngModifiers); 

var player = require('play-sound')(opts = {});
var bgm;

var say = require('say');
var currentSpeaker;
var talking = false;

var p1 =
{
	name: "Player 1",
	input: { up: false, down: false, left: false, right: false },
	lastInput: { up: false, down: false, left: false, right: false },
	servos: {},
	moving: 0,
	changedDirection: 0
};

var p2 =
{
	name: "Player 2",
	input: { up: false, down: false, left: false, right: false },
	lastInput: { up: false, down: false, left: false, right: false },
	servos: {},
	moving: 0,
	changedDirection: 0
};

var start = { button: false, led: null };
var startButtonHeld = 0;

var timeToDance = false;
var timeSinceLastSpoken = 0;
var movingInSync = 0;

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

			if (talking)
			{
				timeSinceLastSpoken++;

				if (p1.input.up || p1.input.down || p1.input.left || p1.input.right) p1.moving++;
				if (p2.input.up || p2.input.down || p2.input.left || p2.input.right) p2.moving++;
				if (JSON.stringify(p1.lastInput) != JSON.stringify(p1.input)) p1.changedDirection++;
				if (JSON.stringify(p2.lastInput) != JSON.stringify(p2.input)) p2.changedDirection++;
				if (JSON.stringify(p1.input) == JSON.stringify(p2.input)) movingInSync++;

				p1.lastInput = JSON.parse(JSON.stringify(p1.input));
				p2.lastInput = JSON.parse(JSON.stringify(p2.input));
			}
			else
			{
				pickNextSpeaker();

				if (!p1.moving && !p2.moving)
				{
					console.log("Neither robot is moving. Awk-ward!");
					talk(currentSpeaker, grammar.flatten('#bothStandStill#'));
				}
				else if (!p1.moving || !p2.moving)
				{
					if (isDancingFast(p1) || isDancingFast(p2))
					{
						if (isDancingFast(currentSpeaker))
						{
							console.log(currentSpeaker.name+" is dancing real fast, yikes!");
							talk(currentSpeaker, grammar.flatten('#moveFast#'));
						}
						else
						{
							console.log(currentSpeaker.name+"'s partner is dancing real fast and "+currentSpeaker.name+" is concerned.");
							talk(currentSpeaker, grammar.flatten('#moveFastResponse#'));
						}
					}
					else if (!currentSpeaker.moving)
					{
						console.log(currentSpeaker.name+" is standing still while their partner is moving.");
						talk(currentSpeaker, grammar.flatten('#standStill#'));
					}
					else
					{
						console.log(currentSpeaker.name+" is moving while their partner is standing still.");
						talk(currentSpeaker, grammar.flatten('#moveAlone#'));
					}
				}
				else if (movingInSync/timeSinceLastSpoken >= 0.8)
				{
					console.log("The robots are moving in sync. Ooh la la!");
					talk(currentSpeaker, grammar.flatten('#moveInSync#'));
				}
				else
				{
					if (isDancingFast(p1) || isDancingFast(p2))
					{
						if (isDancingFast(currentSpeaker))
						{
							console.log(currentSpeaker.name+" is dancing real fast, yikes!");
							talk(currentSpeaker, grammar.flatten('#moveFast#'));
						}
						else
						{
							console.log(currentSpeaker.name+"'s partner is dancing real fast and "+currentSpeaker.name+" is concerned.");
							talk(currentSpeaker, grammar.flatten('#moveFastResponse#'));
						}
					}
					else
					{
						console.log("The robots are dancing and not doing anything special.");
						talk(currentSpeaker, grammar.flatten('#justDancing#'));
					}
				}

				timeSinceLastSpoken = 0;
				movingInSync = 0;
				p1.moving = 0;
				p2.moving = 0;
				p1.changedDirection = 0;
				p2.changedDirection = 0;
			}

			if (start.button)
			{
				if (startButtonHeld >= 3000)
				{
					bgm.kill();
				}
				else
				{
					startButtonHeld++;
				}
			}
			else
			{
				if (startButtonHeld) startButtonHeld = 0;
			}
		}
		else
		{
			if (start.button)
			{	
				start.led.stop().off();

				bgm = player.play('bgm.mp3', function(err)
				{
					if (err) throw err;
					endGame();
				});

				pickNextSpeaker();
				talk(currentSpeaker, grammar.flatten('#greeting#'));

				timeToDance = true;
			}
		}
	});
});

board.on("exit", function()
{
	if (bgm) bgm.kill();
	p1.servos.bottom.home();
	p1.servos.top.home();
	p2.servos.bottom.home();
	p2.servos.top.home();
	start.led.stop().off();
});

function talk(speaker, text)
{
	console.log(speaker.name, text);

	talking = true;

	var voice;
	if (speaker == p1) voice = "voice_us1_mbrola";
	else voice = "voice_us2_mbrola";

	say.speak(text, voice, undefined, (error) =>
	{
		if (error) return console.error(error);
		talking = false;
	});
}

function pickNextSpeaker()
{
	if (!currentSpeaker)
	{
		currentSpeaker = Math.random() < 0.5 ? p1 : p2;
	}
	else if (currentSpeaker == p1)
	{
		currentSpeaker = Math.random() < 0.8 ? p2 : p1;
	}
	else if (currentSpeaker == p2)
	{
		currentSpeaker = Math.random() < 0.8 ? p1 : p2;
	}
}

function isDancingFast(robot)
{
	return (robot.changedDirection/timeSinceLastSpoken >= 0.01);
}

function endGame()
{
	p1.servos.bottom.home();
	p1.servos.top.home();
	p2.servos.bottom.home();
	p2.servos.top.home();

	start.led.blink(500);

	timeSinceLastSpoken = 0;
	movingInSync = 0;
	p1.moving = 0;
	p2.moving = 0;
	p1.changedDirection = 0;
	p2.changedDirection = 0;
	timeToDance = false;
}
