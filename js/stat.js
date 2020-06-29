'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var  BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderTitle = function(ctx, x, y, gap, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText('Ура вы победили!', x, y + gap);
  ctx.fillText('Список результатов:', x, y + gap* 2);
}

function getRandomColor() {
  return 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderBar = function(ctx, i, times, maxTime) {
  var x = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
  var y = CLOUD_Y + FONT_GAP * 2 + GAP * 3 + BAR_HEIGHT;
  var width = BAR_WIDTH;
  var height = - BAR_HEIGHT  * times[i] / maxTime;
  ctx.fillRect(x, y, width, height);
}

var renderName = function(ctx, players, i) {
  var playerName = players[i];
  var x = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
  var y = CLOUD_Y + GAP * 2 + FONT_GAP * 4 + BAR_HEIGHT;
  ctx.fillText(playerName, x, y);
}

var renderTime = function(ctx, times, i, maxTime) {
  var timeValue = Math.round(times[i]);
  var xPosition = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
  var yPosition= CLOUD_Y + GAP + FONT_GAP * 3 + BAR_HEIGHT - BAR_HEIGHT  * times[i] / maxTime;
  ctx.fillText(timeValue, xPosition, yPosition);
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderTitle(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, FONT_GAP, '16px PT Mono', '#000');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomColor();
    renderBar(ctx, i, times, maxTime);
    ctx.fillStyle = '#000';
    renderName(ctx, players, i);
    renderTime(ctx, times, i, maxTime);
  }
};
