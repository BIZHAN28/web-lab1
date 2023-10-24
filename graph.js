const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

ctx.translate(centerX,centerY);
var rInputs = document.querySelectorAll("#rInput");
draw(0);
for (rInput of rInputs){
  let scale = rInput.textContent;
  rInput.addEventListener("click", function() {
    draw(scale);
  });
}

function draw(scale) {

  ctx.clearRect(-centerX, -centerY, canvas.width, canvas.height);

  //дуга
  ctx.beginPath();
  ctx.arc(0, 0, 50 * scale, 0, Math.PI / 2);
  ctx.lineTo(0, 0);
  ctx.fillStyle = 'lightblue';
  ctx.fill();

  //прямоугольник
  const rectWidth = -25;
  const rectHeight = -50;
  ctx.fillRect(0, 0, rectWidth*scale, rectHeight*scale);

  //треугольник

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-50*scale, 0);
  ctx.lineTo(0, 25*scale);
  ctx.closePath();
  ctx.fill();

  //координаты
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(-centerX, 0);
  ctx.lineTo(centerX, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, -centerY);
  ctx.lineTo(0, centerY);
  ctx.stroke();
  ctx.font = '12px Arial';
  const singleSegment = 50;
  for (let i = -centerX + singleSegment; i < centerX; i += singleSegment) {
      ctx.beginPath();
      ctx.moveTo(i, -5);
      ctx.lineTo(i, 5);
      ctx.stroke();
      ctx.fillText(i / singleSegment, i - 5, 20);
  }

  for (let i = -centerY + singleSegment; i < centerY; i += singleSegment) {
    ctx.beginPath();
    ctx.moveTo(-5, i);
    ctx.lineTo(5, i);
    ctx.stroke();
    ctx.fillText(-i / singleSegment, -25, i + 5);
  }

  ctx.fillText('X', centerX - 10, -10);
  ctx.fillText('Y', 10, -centerY + 10);

  ctx.beginPath();
  ctx.moveTo(centerX - 10, -10);
  ctx.lineTo(centerX, 0);
  ctx.lineTo(centerX - 10, 10);

  ctx.moveTo(10, -centerY + 10);
  ctx.lineTo(0, -centerY);
  ctx.lineTo(-10, -centerY + 10);

  ctx.stroke();
}
