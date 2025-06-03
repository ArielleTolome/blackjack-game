# Blackjack Game 🃏

A classic Blackjack (21) card game built with vanilla HTML, CSS, and JavaScript. Features smooth animations, sound effects, and a casino-themed interface.

## 🎮 Features

- **Full Blackjack gameplay** - Hit, Stand, and automatic dealer play
- **Sound effects** - Card dealing, shuffling, wins, and losses
- **Smooth animations** - Cards are dealt with realistic timing
- **Mute/Unmute toggle** - Control sound effects with a single click
- **Responsive design** - Works on desktop and mobile devices
- **Casino-themed UI** - Green felt table with classic card styling

## 🚀 Getting Started

### Play Online
Simply open `blackjack.html` in your web browser to start playing!

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/blackjack-game.git
   cd blackjack-game
   ```

2. Open `blackjack.html` in your browser:
   ```bash
   open blackjack.html  # macOS
   # or
   start blackjack.html # Windows
   # or
   xdg-open blackjack.html # Linux
   ```

## 📖 How to Play

1. Click **"New Game"** to start
2. You and the dealer are each dealt two cards
3. Your goal is to get as close to 21 as possible without going over
4. Card values:
   - Number cards: Face value (2-10)
   - Face cards (J, Q, K): 10 points
   - Ace: 1 or 11 points (automatically calculated)
5. Choose to:
   - **Hit**: Take another card
   - **Stand**: Keep your current hand
6. Dealer must hit on 16 or less and stand on 17 or more
7. Win conditions:
   - Get 21 (Blackjack) with your first two cards
   - Get closer to 21 than the dealer without busting
   - Dealer busts (goes over 21)

## 🛠️ Technical Details

### Built With
- **HTML5** - Game structure
- **CSS3** - Styling and animations
- **JavaScript (ES6)** - Game logic and interactivity
- **Web Audio API** - Sound effects

### Project Structure
```
blackjack-game/
├── blackjack.html    # Main game file
├── blackjack.css     # Styling and animations
├── blackjack.js      # Game logic
└── README.md         # This file
```

### Key Features Implementation
- **Object-Oriented Design**: Game logic encapsulated in `BlackjackGame` class
- **Async Card Dealing**: Uses `setTimeout` for realistic card dealing animation
- **Dynamic Scoring**: Handles Ace values (1 or 11) automatically
- **Sound Management**: Base64 encoded audio for instant loading
- **Responsive Layout**: Flexbox-based design adapts to screen size

## 🎨 Customization

You can easily customize the game by modifying:
- **Colors**: Edit the CSS color scheme in `blackjack.css`
- **Sound Volume**: Change `audio.volume` in `blackjack.js` (default: 0.3)
- **Animation Speed**: Adjust `setTimeout` delays in card dealing functions
- **Card Styles**: Modify `.card` classes in CSS

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

Ideas for enhancements:
- Add betting system
- Implement split and double down
- Add card counting helper
- Create multiplayer mode
- Add more visual effects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Betting system with chip management
- [ ] Statistics tracking (wins/losses)
- [ ] Different difficulty levels
- [ ] Card back designs
- [ ] Background music
- [ ] Tutorial mode
- [ ] Achievements system

---

Enjoy playing! 🎰 If you find any bugs or have suggestions, please open an issue.