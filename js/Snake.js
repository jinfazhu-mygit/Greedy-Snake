function Snake() {
  this.body = [
    { "row": 3, "col": 5 },
    { "row": 3, "col": 4 },
    { "row": 3, "col": 3 },
    { "row": 3, "col": 2 },
  ];
  this.direction = "R";
  //即将改变的方向，为了防止出现原地调头的情况
  this.willDirection = "R";
}
//蛇的运动
Snake.prototype.update = function () {
  //接收willDirection
  this.direction = this.willDirection;
  switch (this.direction) {
    case "R"://右
      this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col + 1 })
      break;
    case "L"://左
      this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col - 1 })
      break;
    case "U"://上
      this.body.unshift({ "row": this.body[0].row - 1, "col": this.body[0].col })
      break;
    case "D"://下
      this.body.unshift({ "row": this.body[0].row + 1, "col": this.body[0].col })
      break;
  };
  //死亡的判断 撞到墙
  if (this.body[0].col > game.col - 1 || this.body[0].row > game.row - 1 ||
    this.body[0].col < 0 || this.body[0].row < 0) {
    alert("游戏结束，当前得分为:" + game.score)
    location.reload()
    this.body.shift()
    clearInterval(game.timer)
  }
  //撞到自己
  for (var i = 1; i < this.body.length; i++) {
    if (this.body[0].col === this.body[i].col && this.body[0].row === this.body[i].row) {
      alert("游戏结束，当前得分为:" + game.score)
      location.reload()
      this.body.shift()
      clearInterval(game.timer)
    }
  }
  //蛇吃食物 吃到食物后，尾部不进行删除，未吃到才删
  if (this.body[0].row === game.food.row && this.body[0].col === game.food.col) {
    game.food = new Food(game)  //生成新食物
    //帧编号归零
    game.f = 0;
    game.score++;
  } else {
    this.body.pop()
  }
}

Snake.prototype.changeDirection = function (d) {
  console.log(d)
  this.willDirection = d;
}

Snake.prototype.render = function () {
  //蛇头的渲染
  game.setColor(this.body[0].row, this.body[0].col, 'pink')
  //蛇身的渲染
  for (var i = 1; i < this.body.length; i++) {
    game.setColor(this.body[i].row, this.body[i].col, 'cyan')
  }
}