// Good luck!
const electron_api = require('./electron.js')// Require everything in "modules" folder
const path = require("path")
const fs = require("fs")
const cardsPath = path.join(__dirname, "/cards")
const modulesPath = path.join(__dirname, "/modules")

/**
 * Automatically require and load all modules and 
 * cards inside the modules and cards folder.
 */
let _ = fs.readdirSync(cardsPath).map(e => e.replace(".js", ""))
_.forEach(name => {
	const c = require(path.join(cardsPath, name))
	c._location = path.join(cardsPath, name)
	electron_api.cards.set(name, c)
})

_ = fs.readdirSync(modulesPath).map(e => e.replace(".js", ""))
_.forEach(name => {
	const m = require(path.join(modulesPath, name))
	m._location = path.join(modulesPath, name)
	electron_api.modules.set(name, m)
})

electron_api.modules.get("motd").exec()
