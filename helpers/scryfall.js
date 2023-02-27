const util = require('util')
const request = util.promisify(require('request'))

module.exports = {
  randomCard(message, args) {
    let filters = [
      '-(t:land t:basic)', // no basics
      'not:extra' // no weird cards
    ]
    const query = encodeURI(filters.join(' '))
    const uri = `https://api.scryfall.com/cards/random?q=${query}`
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
