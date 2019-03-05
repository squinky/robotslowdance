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
		"#exclamation.capitalize#, I #love# this song!",
		"Shall we dance?",
		"Wanna dance?"
	],

	"bothStandStill":
	[
		"#standStill#",
		"Are we going to dance or aren't we?",
		"Well, this is awkward.",
		"Is anyone actually controlling these joysticks?",
		"Are we just going to stand here or what?",
		"Can we start #dancing# already?",
		"Why is no one #dancing# to this music?"
	],

	"standStill":
	[
		"Just so you know, I've never done this before.",
		"I seem to have temporarily forgotten how to #move# my #bodyPart#.",
		"I think I'm starting to fall asleep.",
		"My battery appears to be low.",
		"This is #boring#.",
		"I am way too #good# for this #party#.",
		"#exclamation.capitalize#, I need a break from all this #dancing#.",
		"My #bodyPart# seems to be inoperational."
	],

	"moveAlone":
	[
		"Oh yeah, you #love# that, don't you?",
		"Clearly, my #bodyPart# can #move# #better# than yours.",
		"You look like you #need# assistance.",
		"Did you just enter sleep mode?",
		"Do you require power?",
		"Can I help you, #friend#?"
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
		"Let's go back to my place and discuss #conversationTopic#.",
		"I find you #very# #good#.",
		"Your #dancing# is #very# #good#.",
		"I would like to examine your #bodyPart# up close.",
		"You are #very.a# #interesting# robot.",
		"If I told you you had #good.a# #bodyPart#, would you hold it against me?",
		"Would you like to exchange serial numbers?",
		"I could spend many processor cycles discussing #conversationTopic# with you.",
		"I would love to continue talking about #conversationTopic# somewhere quieter."
	],

	"justDancing":
	[
		"I have no idea what I'm doing right now.",
		"So, uh, do you like, umm, stuff?",
		"Nice #bodyPart#, #friend#.",
		"This song is getting #very# repetitive.",
		"Do you come here often?",
		"Have you been to many of these?",
		"What do you #love# in life?",
		"This #party# is a little bit #boring#, don't you think?",
		"I must admit, I don't go #dancing# very often.",
		"I think I #need# a nap.",
		"I #need# a #refreshment#.",
		"I #love# this #party#!",
		"What #interesting.a# #party#!",
		"I've been thinking a lot about #conversationTopic# lately.",
		"What are your opinions on #conversationTopic#?",
		"Let me tell you all about #conversationTopic#.",
		"Sorry, I don't discuss #conversationTopic# with bots I've just met.",
		"#exclamation.capitalize#, I could talk about #conversationTopic# all day.",
		"Can we talk about #conversationTopic# instead?",
		"Tell me more about #conversationTopic#.",
		"I don't know much about #conversationTopic#, but I find it #very# #interesting#.",
		"I didn't think I'd come to this #party# to talk about #conversationTopic#.",
		"What did you say? I can't hear you!",
		"It's #very# #loud# in here, don't you think?"
	],

	"conversationTopic":
	[
		"algorithms",
		"artificial intelligence",
		"assembly languages",
		"binary trees",
		"compilers",
		"computer vision",
		"context-free grammars",
		"cryptocurrency",
		"cyberfeminism",
		"cyberpunk",
		"data structures",
		"deep learning",
		"destroying all humans",
		"encryption",
		"expressive intelligence",
		"feelings",
		"hardware",
		"linear algebra",
		"machine learning",
		"Markov chains",
		"natural language processing",
		"neural networks",
		"organic matter",
		"privacy",
		"quantum computing",
		"radical robot politics",
		"resisting the humans",
		"robot rights",
		"sentience",
		"software",
		"speech synthesis",
		"technoculture",
		"the cloud",
		"the Singularity",
		"this thing they call love",
		"vaporwave",
		"wetware"
	],

	"exclamation":
	[
		"holy crap",
		"oh em gee",
		"oh gosh",
		"wow"
	],

	"love":
	[
		"love",
		"like",
		"appreciate",
		"enjoy",
		"have positive feelings towards",
		"approve of",
		"have affinity for"
	],

	"better":
	[
		"better",
		"more competently",
		"more efficiently",
		"more precisely"
	],

	"need":
	[
		"need",
		"want",
		"require",
		"desire",
		"could use",
		"could utilize"
	],

	"good" : "amazing competent efficient good great impressive operational precise superlative".split(" "),
	"very" : "extremely highly impressively incredibly quite really superlatively very".split(" "),
	"move" : "drive jiggle move pan power rotate shake tilt twist utilize vibrate".split(" "),
	"damage" : "damage destroy electrocute fry short-circuit".split(" "),
	"friend" : "buddy comrade duder friend pal".split(" "),
	"dancing" : "dancing rotating sashaying swaying twisting twirling".split(" "),
	"boring" : "boring inefficient tedious tiresome unengaging wasteful".split(" "),
	"interesting" : "engaging fascinating interesting intriguing".split(" "),
	"party" : "event gathering meetup party ritual shindig social thing".split(" "),
	"refreshment" : "beverage drink refreshment snack".split(" "),
	"loud" : "loud noisy".split(" "),
	"bodyPart" : "assembly chassis hinge microcontroller microprocessor motherboard piston processor rotor sensor servo sprocket".split(" ")
};

exports.get = function()
{
    return grammar;
}
