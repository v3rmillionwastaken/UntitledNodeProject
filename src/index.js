// Good luck!
const electron_api = require('./electron.js')

const main = () => {
  console.log('=============UntitledNodeProject=============')
  console.log('Made by v3rmillion.net')
  console.log('If you read this you are cute!')
}

const dancingSpider = () => {
  function sleep(milliseconds) {
    const start = new Date().getTime()
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break
      }
    }
  }

  for(let i = 0; i < 10; i++) {
    sleep(300)
    console.log("           /\\oo/|")
    sleep(300)
    console.log("          |\\oo/\\")
  }
}

// make sure to add your thing into this list if you want it displayed in the gui
const listOfThings = []
listOfThings.push({
  key: dancingSpider,
  value: { contributor: "@fuzzbuck", title: "dancing spider" }
})

electron_api.processListOfThings(listOfThings)
main()
