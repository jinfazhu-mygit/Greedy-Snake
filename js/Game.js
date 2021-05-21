function Game() {
  this.row = 20;
  this.col = 20;
  //初始化节点
  this.init()
  //实例化蛇类
  this.snake = new Snake();
  //初始化食物
  this.food = new Food(this);
  //分数
  this.score = 0;
  //执行定时器任务
  this.start();
  //键盘事件监听
  this.bindEvent()
}
Game.prototype.init = function () {
  this.dom = document.createElement("table");
  var tr, td;
  //遍历行和列
  for (i = 0; i < this.row; i++) {
    tr = document.createElement("tr");
    for (j = 0; j < this.col; j++) {
      td = document.createElement("td")
      tr.appendChild(td)
    }
    this.dom.appendChild(tr);
  }
  //表格上树
  document.getElementById("app").appendChild(this.dom)
}

//键盘监听
Game.prototype.bindEvent = function () {
  //键盘事件
  document.onkeydown = function (event) {
    switch (event.keyCode) {
      //A W D S
      case 65:
        if (game.snake.direction != "R") {
          game.snake.changeDirection("L")
        }
        break;
      case 87:
        if (game.snake.direction != "D") {
          game.snake.changeDirection("U")
        }
        break;
      case 68:
        if (game.snake.direction != "L") {
          game.snake.changeDirection("R")
        }
        break;
      case 83:
        if (game.snake.direction != "U") {
          game.snake.changeDirection("D")
        }
        break;
      //左 上 右 下
      case 37:
        if (game.snake.direction != "R") {
          game.snake.changeDirection("L")
        }
        break;
      case 38:
        if (game.snake.direction != "D") {
          game.snake.changeDirection("U")
        }
        break;
      case 39:
        if (game.snake.direction != "L") {
          game.snake.changeDirection("R")
        }
        break;
      case 40:
        if (game.snake.direction != "U") {
          game.snake.changeDirection("D")
        }
        break;
    }
  }
}

Game.prototype.start = function () {
  //帧编号
  this.f = 0;
  this.timer = setInterval(() => {
    game.f++
    //帧编号显示
    document.getElementById("f").innerHTML = "帧编号:" + game.f;
    //分数显示
    document.getElementById("score").innerHTML = "分数:" + game.score;
    //清除屏幕
    game.clear()
    //运动更新
    //蛇的更新速度，当蛇变长的时候，速度变快
    var during = game.snake.body.length < 30 ? 30 - game.snake.body.length : 1;
    //蛇的渲染更新
    game.f % during == 0 && game.snake.update();
    //渲染
    game.snake.render()
    //食物
    game.food.render()
  }, 30);
}

//清除颜色
Game.prototype.clear = function () {
  //擦除画布
  for (var i = 0; i < this.row; i++) {
    for (var j = 0; j < this.col; j++) {
      this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background = 'white'
      this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = ''
    }
  }
}

//设置颜色的方法
Game.prototype.setColor = function (row, col, color) {
  //表格的第几行第几列设置什么颜色
  this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color
}
//食物渲染
Game.prototype.setHtml = function (row, col, html) {
  this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = html
}
//定时器
