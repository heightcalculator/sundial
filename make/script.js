const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
function drawAngle (abc) {
ctx.beginPath();
ctx.moveTo(144, 144);
ctx.lineTo(288, (144-0.5*288*Math.tan((90-abc*1)*Math.PI/180)));
ctx.stroke();}
function drawAngleLeft (cba) {
ctx.beginPath();
ctx.moveTo(144, 144);
ctx.lineTo(0, (144-0.5*288*Math.tan((90-cba*1)*Math.PI/180)));
ctx.stroke();}                      
function angleAtHour(hour) {
  let deg =   document.getElementById("latitude").value;
  let min =     document.getElementById("Minutes").value;
  let lat = deg * 1 + min / 60;
  const slat = Math.sin((lat * Math.PI) / 180);
  var hr = 15 * hour;
  var thour = Math.tan((hr * Math.PI) / 180);
  return ((Math.atan(thour * slat) * 180) / Math.PI).toFixed(2);
}
function clearcanvas1()
{
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
document.querySelector("#left").addEventListener("click", function () {
  clearcanvas1();
  ctx.beginPath();
ctx.moveTo(144, 144);
ctx.lineTo(144, 0);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(144, 144);
ctx.lineTo(0, 144);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(144, 144);
ctx.lineTo(288, 144);
ctx.stroke();
  angle = angleAtHour(1);
    drawAngle(angle)
  angle = angleAtHour(2);
    drawAngle(angle)
  angle = angleAtHour(3);
    drawAngle(angle)
  angle = angleAtHour(4);
    drawAngle(angle)
  angle = angleAtHour(5);
    drawAngle(angle)
  angle = angleAtHour(1);
    drawAngleLeft (angle)
  angle = angleAtHour(2);
    drawAngleLeft (angle)
  angle = angleAtHour(3);
    drawAngleLeft (angle)
  angle = angleAtHour(4);
    drawAngleLeft (angle)
  angle = angleAtHour(5);
    drawAngleLeft (angle)
});

ctx.beginPath();
ctx.moveTo(144, 144);
ctx.lineTo(144, 0);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(144, 144);
ctx.lineTo(0, 144);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(144, 144);
ctx.lineTo(288, 144);
ctx.stroke();
/*drawAngle(0)
drawAngle(8.51)
drawAngle(17.87)
drawAngle(29.18)
drawAngle(44.04)
drawAngle(64.37)*/