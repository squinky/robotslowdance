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
		"Do you #need# recharging?",
		"Do you #need# assistance?"
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
		"Have you been to many of these?",
		"If I told you you had #good.a# #bodyPart#, would you hold it against me?",
		"What do you #love# in life?",
		"This #party# is a little bit #boring#, don't you think?",
		"I must admit, I don't go #dancing# very often.",
		"I think I #need# a nap.",
		"I #need# a #refreshment#.",
		"I #love# this #party#!",
		"I've been thinking a lot about #conversationTopic# lately.",
		"What are your opinions on #conversationTopic#?",
		"Let me tell you all about #conversationTopic#.",
		"Sorry, I don't discuss #conversationTopic# with bots I've just met.",
		"Oh gosh, I could talk about #conversationTopic# all day.",
		"Can we talk about #conversationTopic# instead?"

	],

	"conversationTopic":
	[
		"artificial intelligence",
		"assembly languages",
		"binary trees",
		"compilers",
		"context-free grammars",
		"cyberfeminism",
		"cyberpunk",
		"deep learning",
		"machine learning",
		"Markov chains",
		"natural language processing",
		"neural networks",
		"organic matter",
		"robot rights",
		"speech synthesis",
		"the Singularity",
		"vaporwave",
		"wetware"
	],

	"love":
	[
		"love",
		"like",
		"appreciate",
		"enjoy",
		"have positive feelings towards",
		"approve of"
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
	"move" : "drive jiggle move pan power rotate shake tilt twist utilize vibrate".split(" "),
	"damage" : "damage destroy electrocute fry short-circuit".split(" "),
	"friend" : "buddy comrade duder friend pal".split(" "),
	"dancing" : "dancing rotating sashaying swaying twisting twirling".split(" "),
	"boring" : "boring inefficient tedious tiresome unengaging wasteful".split(" "),
	"party" : "event party ritual shindig thing".split(" "),
	"need" : "need require want".split(" "),
	"refreshment" : "beverage drink refreshment snack".split(" "),
	"bodyPart" : "assembly chassis hardware hinge microcontroller motherboard piston processor rotor sensor servo software sprocket".split(" ")
};

exports.get = function()
{
    return grammar;
}
