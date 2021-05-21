function Food(gameSnake) {
  var self = this
  //食物的位置
  //使用do-while判断是否在蛇的身上，如果在，继续random食物的位置
  do {
    this.row = parseInt(Math.random() * gameSnake.row);
    this.col = parseInt(Math.random() * gameSnake.col);
  } while ((function () {
    //遍历蛇的row和col，再和新随机出来的食物位置进行判断是否重合
    for (var i = 0; i < gameSnake.snake.body.length; i++) {
      //注意这里不能用this,此时在立即执行函数里，this表示的是windows对象，应该用备份的self
      if (gameSnake.snake.body[i].row === self.row && gameSnake.snake.body[i].col === self.col) {
        return true
      }
    }
    return false
  })());

  console.log(this.row, this.col)
}
Food.prototype.render = function () {
  game.setHtml(this.row, this.col, "♥")
}