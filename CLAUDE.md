# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a vanilla JavaScript Blackjack game with no build process or external dependencies. The entire game runs client-side in the browser.

## Development Commands

Since this is a static site with no build process:
- **Run locally**: Open `index.html` directly in a web browser
- **Deploy**: Push to GitHub and enable GitHub Pages from main branch
- **Test**: Open in browser and manually test gameplay

## Architecture

### File Structure
- `index.html` - Entry point, contains game UI structure
- `blackjack.js` - All game logic in a single `BlackjackGame` class
- `blackjack.css` - All styling, casino-themed with responsive design

### Key Implementation Details

1. **Sound System**: Audio files are embedded as Base64 strings in `blackjack.js` to avoid external dependencies. Sound types include:
   - `cardDeal` - Card dealing sound
   - `shuffle` - Deck shuffling
   - `buttonClick` - UI interactions
   - `win`/`lose` - Game outcome sounds

2. **Card Dealing Animation**: Uses `setTimeout` chains for sequential card dealing with 300ms delays between cards

3. **Ace Handling**: Automatic calculation in `calculateScore()` - starts Aces as 11, reduces to 1 if bust

4. **Game State**: Managed through class properties:
   - `deck[]` - Current deck of cards
   - `playerHand[]` / `dealerHand[]` - Card arrays
   - `gameOver` - Boolean game state
   - `isMuted` - Sound toggle state

## Key Functions

- `startNewGame()` - Resets game state, shuffles deck, deals initial cards with animation
- `hit()` - Player draws a card, checks for bust/21
- `stand()` - Dealer draws cards (must hit on 16 or less), determines winner
- `calculateScore(hand)` - Handles scoring including dynamic Ace values
- `endGame(message, result)` - Sets final state and plays win/lose sounds

## Deployment

The game is deployed via GitHub Pages:
1. Repository: https://github.com/ArielleTolome/blackjack-game
2. Live game: https://arielletolome.github.io/blackjack-game/
3. To update: Push changes to main branch, GitHub Pages auto-deploys

## Common Modifications

- **Change sound volume**: Modify `audio.volume` in `createSound()` (currently 0.3)
- **Adjust animation speed**: Change `setTimeout` delays in `startNewGame()` and `stand()`
- **Modify colors**: Update CSS variables in `blackjack.css`
- **Add new features**: Extend `BlackjackGame` class with new methods