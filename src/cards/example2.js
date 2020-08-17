module.exports = {
	name: "Example 2",
	contributor: "VirtusGraphics",
	exec: (event, args, modules, cards) => {
		console.log("Event", event)
		console.log("Args", args)
		console.log("modules", modules)
		console.log("cards", cards)
	}
}