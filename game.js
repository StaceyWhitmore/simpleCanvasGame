//https://itnext.io/tutorial-the-simplest-canvas-game-in-100-lines-5-min-6bfb577403dd
//https://github.com/maksrom/simple-game
class Game {
  constructor(canvas, width, height) {
    canvas.width  = width;
    canvas.height = height;
    this._width   = width;
    this._height  = height;
    this._context   = canvas.getContext('2d');
    this.player = new Player(this._context, this._width / 10, this._height / 10)
  }
  play() {
    //requestAnimationFrame(this.play.bind(this))
    this._clear//clear the canvas before drawing anything
    this._drawBorder//draw a border to conatin the game area\
    this._player.draw()//upate the player

    if (this._checkState) {
      requestAnimationFrame(this.play.bind(this))

    } else {
       this._playLose()
    }
  } //close play()

  _checkState() {
    let borders = this._player.getBorders();
    return (borders.xMin >= 0 &&
        borders.xMax <= this._width &&
        borders.yMin >= 0 &&
        borders.yMax <= this._height);
  }

  _playLose() {
    this._context.beginPath();
    this._context.font = '48px serif';
    this._context.fillStyle = 'red';
    this._context.fillText("You lose!", this._width / 2, this._height / 2);
  }

  _drawBorder() {
    this._context.beginPath();
    this._context.rect(0, 0, this._width, this._height);
    this._context.stroke();
  }

  _clear() {
    this._context.clearRect(0, 0, this._width, this._height); // clear the entire game area

  }

}//close Game class



const game = new Game(getElementByTagName('canvas')[0],
400,
400)

game.play()//play() method must be inherit in canvas ..hmm.
