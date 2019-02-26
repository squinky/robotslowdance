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
		"Oh em gee, I #love# this song!",
		"Shall we dance?",
		"Wanna dance?"
	],

	"bothStandStill":
	[
		"#standStill#",
		"Are we going to dance or aren't we?",
		"Well, this is awkward.",
		"Is anyone actually controlling these joysticks?"
	],

	"standStill":
	[
		"Just so you know, I've never done this before.",
		"I seem to have temporarily forgotten how to #move# my #bodyPart#.",
		"I think I'm starting to fall asleep.",
		"My battery appears to be low.",
		"This is #boring#."
	],

	"moveAlone":
	[
		"Oh yeah, you #love# that, don't you?",
		"Clearly, my #bodyPart# can #move# #better# than yours.",
		"Do you need to be recharged?",
		"Do you require assistance?"
	],

	"moveFast":
	[
		"#move.capitalize#! #move.capitalize#! #move.capitalize#!",
		"#bodyPart.capitalize#! #bodyPart.capitalize#! #bodyPart.capitalize#!",
		"#good.capitalize#! #good.capitalize#! #good.capitalize#!",
		"Look how #good# at #dancing# I am!",
		"I am the most #good# at #dancing#!"
	],

	"moveFastResponse":
	[
		"You okay there, #friend#?",
		"Careful not to #damage# your #bodyPart#!",
		"I am #very# concerned about your erratic movement.",
		"I am nervous that you may #damage# something."
	],

	"moveInSync":
	[
		"Wow, you're #very# #good# at this!",
		"I #love# your #bodyPart#",
		"I #love# the way you #move# that #bodyPart#.",
		"Your #bodyPart# is #very# #good#.",
		"Let's go back to my place and recharge.",
		"I find you #very# #good#.",
		"Your #dancing# is #very# #good#.",
		"I would like to examine your #bodyPart# up close."
	],

	"justDancing":
	[
		"I have no idea what I'm doing right now.",
		"So, uh, do you like, umm, stuff?",
		"Would you like to exchange serial numbers?",
		"Nice #bodyPart#, #friend#.",
		"This song is getting #very# repetitive.",
		"Do you come here often?",
		"Have you been to many of these?"
	],

	"better":
	[
		"better",
		"more competently",
		"more efficiently",
		"more precisely"
	],

	"good" : "amazing competent efficient good great impressive operational precise superlative".split(" "),
	"very" : "extremely highly impressively incredibly quite really superlatively very".split(" "),
	"love" : "appreciate enjoy like love".split(" "),
	"move" : "drive jiggle move pan power rotate shake tilt twist utilize vibrate".split(" "),
	"damage" : "damage destroy electrocute fry short-circuit".split(" "),
	"friend" : "buddy comrade duder friend pal".split(" "),
	"dancing" : "dancing rotating sashaying swaying twisting twirling".split(" "),
	"boring" : "boring inefficient tedious tiresome unengaging wasteful".split(" "),
	"bodyPart" : "assembly chassis hinge microcontroller motherboard piston processor rotor sensor servo sprocket".split(" ")
};

exports.get = function()
{
    return grammar;
}
