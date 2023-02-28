# Fact or Fiction

Simple discord bot that plays a simple game:

1. Provides a random prompt, e.g. "Best name for a rap album"
2. Provides two random cards (sourced from [Scryfall](https://scryfall.com/))
3. Chat votes on which one they like more with reactions 1️⃣ or 2️⃣

This game is a fun, casual alternative to arguing over how to roll a die. Perfect for cube!

![Screenshot](./screenshots/ScreenShot1.png?raw=true)

## Tech Used

- [Node](https://nodejs.org/en/) - simple runtime
- [discord.js](https://discord.js.org/) - simple library to make a Discord bot
- [Scryfall API](https://scryfall.com/docs/api) - to get random cards and images
  - Scryfall has **NOT** endorsed me, my work, or this product.
- [Fly.io](https://fly.io/) - cheap deployment alternative to Heroku

## Change log

### DONE

- Display random cards from Scryfall
- Add reactions
- Setup hosting
- Gather list of prompts
- Remove "play" from the command, just `!fof`
- No basic lands and no non-cards (like Vanguard)
- Use "you" and "your opponent" instead of 1 & 2

### TODO

- More prompts!
- Allow prompts to be filtering by card type, like "Only spells" or "Only creatures"
- Use shuffle prompts instead of random (so they don't get repeated as often)

### MAYBE

- Allow prompt ideas to be sent to the bot
