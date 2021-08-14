const util = require('util')
const request = util.promisify(require('request'))

module.exports = {
  randomCard(message, args) {
    const uri = `https://api.scryfall.com/cards/random`
    return request(uri)
      .then(({ response, body }) => {
        const {
          name,
          image_uris: { normal: img }
        } = JSON.parse(body)
        return { name, img }
      })
      .catch(err => {
        console.error(err)
      })
  }
}
