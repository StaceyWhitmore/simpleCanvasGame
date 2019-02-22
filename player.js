var ARROW_MAP = {
    37: 'left',
    40: 'up',
    39: 'right',
    38: 'down'
};

class Player {
  constructor(context, width, height) {
    this._context = context
    this._height  = height
    this._width   = width
    this._x       = 0
    this._y       = 0
    this._speed = 5
document.addEventListener('keydown', this.keydown.bind(this))
  }

  draw() {
    this._context.beginPath()
    this._context.rect(    )
    //this._conext.fillStyle('orange')
    // ..... fill()
  }

  getBorders() {
        return {
          xMin: this._x,
          xMax: this._x + this._width,
          yMin: this._y,
          yMax: this._y + this._width
        }
  }

  keydown(e) {
    let arrow = ARROW_MAP[e.keyCode]
    if (arrow === 'left') {
      this._x -= this._speed
    }
    if (arrow === 'right') {
      this._x += this._speed
    }
    if (arrow === 'up') {
      //
    }
    if (arrow === 'down') {
      //
    }

  }

}//close Player class
