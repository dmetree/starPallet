var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function drawStar(cx, cy, spikes, outerRadius, innerRadius, fillS) {
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;
  var fillStrarStyle = fillS;

  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius)
  for (i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y)
    rot += step

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y)
    rot += step
  }
  ctx.lineTo(cx, cy - outerRadius)
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = fillStrarStyle;
  ctx.stroke();
  ctx.fillStyle = fillStrarStyle;
  ctx.fill();

}

drawStar(35, 100, 5, 30, 15, 'red');
drawStar(105, 100, 5, 30, 15, 'blue');
drawStar(175, 100, 5, 30, 15, 'green');
drawStar(245, 100, 5, 30, 15, 'yellow');
drawStar(315, 100, 5, 30, 15, 'black');


$('#canvas').click(function (e) {
  var canvasOffset = $(canvas).offset();
  var canvasX = Math.floor(e.pageX - canvasOffset.left);
  var canvasY = Math.floor(e.pageY - canvasOffset.top);

  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var pixels = imageData.data;
  var pixelRedIndex = ((canvasY - 1) * (imageData.width * 4)) + ((canvasX - 1) * 4);
  var pixelcolor = "rgba(" + pixels[pixelRedIndex] + ", " + pixels[pixelRedIndex + 1] + ", " + pixels[pixelRedIndex + 2] + ", " + pixels[pixelRedIndex + 3] + ")";

  $("#pallet").css("backgroundColor", pixelcolor);
});
