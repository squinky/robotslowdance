var grammar =
{
	"greeting":
	[
		"Hello there.",
		"Greetings.",
		"Fancy seeing you here.",
		"Why hello.",
		"Hey there.",
		"Let's do this.",
		"Oh em gee, I love this song!",
		"Shall we dance?",
		"Wanna dance?"
	],

	"bothStandStill":
	[
		"Are we going to dance or aren't we?",
		"Well, this is awkward."
	],

	"standStill":
	[
		"Just so you know, I've never done this before.",
		"I seem to have temporarily forgotten how to #move# my #bodyPart#.",
		"I think I'm starting to fall asleep."
	],

	"moveAlone":
	[
		"Oh yeah, you #love# that, don't you?",
		"Clearly, my #bodyPart# can #move# #better# than yours."
	],

	"moveRealFast":
	[
		"#move.capitalize#! #move.capitalize#! #move.capitalize#!",
		"#bodyPart.capitalize#! #bodyPart.capitalize#! #bodyPart.capitalize#!"
	],

	"moveInSync":
	[
		"Wow, you're #very# #good# at this!",
		"I #love# the way you #move# that #bodyPart#."
	],

	"moveOutOfSync":
	[
		"#ouch.capitalize#, my #bodyPart#!",
		"I have no idea what I'm doing right now.",
		"So, uh, do you like, umm, stuff?",
		"Nice #bodyPart#."
	],

	"better":
	[
		"better",
		"more competently",
		"more efficiently",
		"more precisely"
	],

	"good" : "amazing competent efficient good great impressive precise".split(" "),
	"very" : "impressively incredibly quite really super very".split(" "),
	"love" : "appreciate enjoy like love".split(" "),
	"move" : "drive jiggle move pan power rotate shake tilt twist vibrate".split(" "),
	"ouch" : "ack eep oof ouch ow yowch yow".split(" "),
	"bodyPart" : "assembly chassis hinge microcontroller motherboard piston processor rotor sensor servo sprocket".split(" ")

	// both robots stand completely still
	// one robot moves, the other stands still
	// robots move out of sync
	// robots move in sync
	// moving fast/slow
};

exports.get = function()
{
    return grammar;
}
