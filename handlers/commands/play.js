const { randomPrompt } = require('../../helpers/prompt')
const { randomCard } = require('../../helpers/scryfall')

module.exports = {
  name: '',
  description: 'play Fact-or-Fiction!',
  args: false, // SOMEDAY: support args, like names? or card types?
  usage: '', // TODO
  execute(message) {
    /* Gets two random cards from Scryfall.
       Displays a random prompt, the two card names and the card images
       Finally, adds the '1' and '2' emojis as reactions for easy voting */
    const cards = [randomCard(), randomCard()]
    return Promise.all(cards)
      .then(data => {
        const [first, second] = data
        const text =
          `Prompt: ${randomPrompt()}\n` +
          `1: ${first.name} (${message.author}'s card)\n` +
          `2: ${second.name} (opponent's card)`
        return message.channel.send(text, {
          files: [first.img, second.img]
        })
      })
      .then(msg => {
        msg.react('1️⃣')
        msg.react('2️⃣')
      })
      .catch(err => console.error(err))
  }
}
