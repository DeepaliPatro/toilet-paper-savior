# Toilet-paper-savior

Remember the time when we all saved planet earth from the deadly pandemic with nothing but toilet paper? Well, if you were hiding in your safehouse and missed out on all the avtion, here is your chance to be the Toilet-paper-savior.

Try it [here](https://6445ed5f954f5a53b417aa02--elegant-kelpie-6aa7bb.netlify.app/).

This game is my take on the classic single-player puzzle game, Minesweeper. Here are the basic rules:

- The game board contains hidden viruses under some of the tiles. The size of the board and number of viruses varies depending on the difficulty level.

- Your goal is to uncover all the tiles on the board that are clear of viruses, without exposing any of the contaminated tiles.

- To help you accomplish this goal, each tile that does not contain a virus will display a number that indicates the number of viruses under the adjacent tiles (horizontally, vertically, and diagonally).

- If you click on a tile that contains a virus, the game is over and you lose.

- You can mark tiles that you think might contain a virus by right-clicking on them. This will place a 🧻 on the tile to help stop the spread. 🧻s are useful for keeping track of which tiles you think are dangerous.

- If you uncover all the tiles that do not contain viruses, you win!

That's about it! Good luck!

## 📀 Tech stack

- React 
- CSS
- Material UI

## ⚙️ Application features

- Login / Logout
- Change the size of the board and number of mines to change difficulty level
- Start a new game at anytime


###  👩🏻‍💻 In the pipeline 

- game state should be persistent on the client so refreshing the page or navigating away/back does not lose the current game
- Show score of current player
- Show high score
- Timer and timed game
- click counter
- mineplacement that avoids guessing
- hints / tips:
    - reveal board
    - set one random flag
- Replay button
- Game sounds


### 👀 Behind the scenes:

The app has two main components:

- Board: 

    - It renders a n x n grid.
    - Randomly plants the number of viruses on the grid.

- Cell:

    - It renders a div representing the tile / cell on the board

    


