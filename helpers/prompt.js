const hjson = require('hjson')
const fs = require('fs')

let prompts = null
module.exports = {
  randomPrompt() {
    if (!prompts) {
      try {
        const file = fs.readFileSync('helpers/prompts.hjson', 'utf8')
        // hjson is probably overkill, but whatever
        prompts = hjson.parse(file)
      } catch (err) {
        console.error(err)
      }
    }
    return prompts[Math.floor(Math.random() * prompts.length)] // TODO use shuffle/next instead
  }
}
