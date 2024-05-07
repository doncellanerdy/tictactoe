# Classic Tic Tac Toe

Classic game and classic coding project, the game is implemented completly with front-end code.

![expample of how tictactoe game works](https://github.com/diannedejesus/knowledge-aquisition/blob/main/tictactoe/tictactoe.gif)

## How It's Made:

**Tech used:** HTML, CSS, and JavaScript

The layout was done using a grid to achieve undistorted squares when resizing. CSS is used so the player can visualize how their move will look on the board. The rest is done in javascript. I built a class to handle the main mechanics of the game (tracking current player, tracking board state, checking for a winner, reseting the board, validating moves and setting the character to be used for representing a player). Then I utilized that class to implement the game. Using the created board we can set the players to the classic X's and O's, display the current player and display the end game message. I also added a reset button which refreshes the page to clear the board.

## Optimizations

If I had the time to keep working on the project, I would have added to the class a way to handle a wider varieties of player icons to make the game more visually engaging. Also would have modified the boards whitespace to make the interfase more pleasing on mobile. I would refactored the code for clarity and add more funcionality like tracking player wins.

## Lessons Learned:

I found out that making a perfectly square grid that maintains its aspect ratio can be a challenge using floats, I would need to add some media queries to account for different aspect ratios, which is why I opted for using a grid layout. I could have just used a table but wanted the page to be more semanticly relevant. The class was fun to make and use, it is a useful method for these kinds of projects making the code so much simpler to use and understand.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Coin Flipper:**
