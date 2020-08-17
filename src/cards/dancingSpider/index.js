module.exports = {
	contributor: "@fuzzbuck",
	name: "dancing spider",
	exec: () => {
		function sleep(milliseconds) {
			const start = new Date().getTime()
			for (let i = 0; i < 1e7; i++) {
				if ((new Date().getTime() - start) > milliseconds) {
					break
				}
			}
		}

		for (let i = 0; i < 10; i++) {
			sleep(300)
			console.log("           /\\oo/|")
			sleep(300)
			console.log("          |\\oo/\\")
		}
	}
}