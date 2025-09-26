# 🏓 Simple Pong Game

A classic Pong game implementation using HTML5 Canvas and JavaScript. Play against a computer opponent with smooth controls and realistic ball physics.

![Pong Game Screenshot](https://img.shields.io/badge/Game-Pong-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎮 Features

- **Smooth Gameplay**: 60 FPS game loop with requestAnimationFrame
- **Dual Control System**: Play with mouse or keyboard controls
- **Smart AI Opponent**: Computer player with realistic difficulty
- **Real-time Scoring**: Live score tracking
- **Responsive Ball Physics**: Dynamic ball angles based on paddle collision points
- **Classic Design**: Retro-style graphics with clean UI

## 🚀 How to Play

### Controls
- **Mouse**: Move your mouse up and down to control the left paddle
- **Keyboard**: Use ↑ (Up Arrow) and ↓ (Down Arrow) keys

### Objective
- Prevent the ball from reaching your side
- Score points by getting the ball past the computer's paddle
- First to score the most points wins!

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/pong-game.git
   cd pong-game
   ```

2. **Open the game**:
   - Simply open `index.html` in your web browser
   - No additional setup or dependencies required!

3. **Or run with a local server** (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
   Then navigate to `http://localhost:8000`

## 📁 Project Structure

```
pong-game/
├── index.html          # Main HTML file
├── script.js           # Game logic and JavaScript
├── style.css           # Styling and layout
├── LICENSE             # Apache 2.0 License
└── README.md           # This file
```

## 🎯 Game Mechanics

### Ball Physics
- Ball bounces off top and bottom walls
- Collision with paddles changes ball direction based on impact point
- Ball speed increases slightly after paddle collisions for added challenge

### AI Behavior
- Computer paddle follows the ball with slight delay for realistic gameplay
- Difficulty balanced to be challenging but beatable

### Scoring System
- Player scores when ball passes computer's paddle (right side)
- Computer scores when ball passes player's paddle (left side)
- Scores update in real-time

## 🔧 Technical Details

- **Canvas Size**: 800x500 pixels
- **Paddle Dimensions**: 15x100 pixels
- **Ball Size**: 12 pixel radius
- **Frame Rate**: ~60 FPS using requestAnimationFrame

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Ideas for Contributions
- Add sound effects
- Implement different difficulty levels
- Add power-ups or special effects
- Create multiplayer mode
- Add touch controls for mobile devices
- Implement game pause/resume functionality

## 🐛 Known Issues

- None currently reported

## 📝 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🎨 Customization

You can easily customize the game by modifying these variables in `script.js`:

```javascript
// Paddle dimensions
const paddleWidth = 15, paddleHeight = 100;

// Ball properties
const ballSize = 12;
const ballSpeed = 5;

// Player speeds
playerPaddle.speed = 6;  // Player paddle speed
computerPaddle.speed = 5; // Computer paddle speed
```

## 🌟 Acknowledgments

- Inspired by the classic Pong game by Atari (1972)
- Built with modern web technologies
- Thanks to the open-source community

---

**Enjoy playing! 🎮**

*Made with ❤️ and JavaScript*
