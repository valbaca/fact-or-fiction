module.exports = {
  name: 'play',
  description: 'play Fact-or-Fiction!',
  args: false, // SOMEDAY: support args, like names? or card types?
  usage: '', // TODO
  execute(message) {
    return message.reply('howdy!')
  }
}
