var isNorth, thisLat, thisLng, declin, compDangle, dispDeclin; function Setup() { SetImperialSelect(); Calculate(); Convert(); SetNumeric(); SetAnimFrame() }
function Calculate(f = !1) {
    let signedLat = Math.max(Math.min(document.getElementById("latitude").value, 90), -90);
    const newLat = Math.abs(signedLat);
    isValid = !0; var k = newLat; if (isValid) {
        var v = Get32nds(null, "ddDiamInches", "ddDiamFrac"), r = signedLat >= 0 ? true : false, w = false, n = false, b = v / 2, h = k * RAD, E = Math.sin(h), a = n ? b / Math.cos(h) - b : 0, F = 3.75 * RAD, p = $("cnvsDial"), u = 3 * v; p.width = u + 6; b *= 3; var e = p.width / 2, D = b + Math.sin(h) * b, l = 3 * a; p.height = n ? D + l + 16 : D + 16; a = p.getContext("2d"); a.save(); a.translate(0, 2 + l); var m = RAD270 + h, q = RAD270 - h; a.beginPath(); if (n) {
            a.arc(e, b, b, RAD180 - h, RAD270 -
                h, !1); var d = e + Math.cos(RAD270 - h) * b; var c = b + Math.sin(RAD270 - h) * b; a.moveTo(d, c); a.lineTo(e, -l); d = e + Math.cos(RAD270 + h) * b; a.lineTo(d, c); a.arc(e, b, b, RAD270 + h, h, !1)
        } else a.arc(e, b, b, RAD180 - h, h, !1); a.lineTo(e, b); d = e + Math.cos(RAD180 - h) * b; c = b + Math.sin(RAD180 - h) * b; a.lineTo(d, c); a.strokeStyle = w ? "#677" : "#000"; a.stroke(); w && (a.fillStyle = a.createPattern($("imgMarble"), "repeat"), a.fill()); a.beginPath(); a.moveTo(e, n ? -l : 0); a.lineTo(e, b); d = e + Math.cos(q) * b; c = b + Math.sin(q) * b; a.lineTo(d, c); a.moveTo(e, b); d = e + Math.cos(m) *
            b; c = b + Math.sin(m) * b; a.lineTo(d, c); n = u / 50; a.font = n + "px Verdana"; a.textBaseline = "middle"; a.textAlign = "center"; a.fillStyle = "#000"; u = .05 * b; l = .7 * b; var y = l + 2 * n, z = l + n, A = .84 * b, B = .9 * b; a.textAlign = "center"; a.textBaseline = "middle"; for (var g, t = 1; 24 > t; t++) {
                var C = t / 4; var x = Math.atan(Math.tan(t * F) * E); d = m + x; g = Math.cos(d); c = Math.sin(d); 0 === t % 4 ? (a.moveTo(e + g * u, b + c * u), a.lineTo(e + g * l, b + c * l), a.moveTo(e + g * y, b + c * y), a.save(), a.translate(e + g * z, b + c * z), a.rotate(RAD90 + d), a.fillText(r ? C : 12 - C, 0, 0), a.restore()) : 0 === t % 2 ? a.moveTo(e +
                    g * A, b + c * A) : a.moveTo(e + g * B, b + c * B); d = e + g * b; c = b + c * b; a.lineTo(d, c); d = q - x; g = Math.cos(d); c = Math.sin(d); 0 === t % 4 ? (a.moveTo(e + g * u, b + c * u), a.lineTo(e + g * l, b + c * l), a.moveTo(e + g * y, b + c * y), a.save(), a.translate(e + g * z, b + c * z), a.rotate(RAD90 + d), a.fillText(r ? 12 - C : C, 0, 0), a.restore()) : 0 === t % 2 ? a.moveTo(e + g * A, b + c * A) : a.moveTo(e + g * B, b + c * B); d = e + g * b; c = b + c * b; a.lineTo(d, c)
            } a.strokeStyle = w ? "#444" : "#000"; a.stroke(); x = Math.atan(Math.tan(24 * F) * E); d = m + x; g = Math.cos(d); c = Math.sin(d); a.textBaseline = "bottom"; a.save(); a.translate(e + g * l, b +
                c * l); a.rotate(RAD90 + d); a.textAlign = "right"; a.fillText(" 6 ", 0, 0); a.restore(); a.save(); a.translate(e + .6 * g * b, b + .6 * c * b); a.rotate(d); a.font = 1.2 * n + "px Verdana"; a.fillText(r ? "PM" : "AM", 0, 0); a.restore(); d = q - x; g = Math.cos(d); c = Math.sin(d); a.save(); a.translate(e + g * l, b + c * l); a.rotate(RAD90 + d); a.textAlign = "left"; a.fillText(" 6 ", 0, 0); a.restore(); a.save(); a.translate(e + .6 * g * b, b + .6 * c * b); a.rotate(RAD180 + d); a.font = 1.2 * n + "px Verdana"; a.fillText(r ? "AM" : "PM", 0, 0); a.restore(); d = e + Math.cos(m) * (b - 10); c = b + Math.sin(m) * (b -
                    10); a.font = "12px Verdana"; a.save(); a.textAlign = "right"; a.translate(d, c); a.rotate(m); a.fillText("True " + (r ? "North" : "South") + " \u2192", 0, 0); a.restore(); d = e + .45 * Math.cos(m) * b; c = b + .45 * Math.sin(m) * b; a.save(); a.textAlign = "center"; a.translate(d, c); a.rotate(m); a.fillText("aarushmagic.com", 0, 0); a.restore(); d = e + Math.cos(q) * (b - 10); c = b + Math.sin(q) * (b - 10); a.save(); a.textAlign = "left"; a.translate(d, c); a.rotate(-m); a.fillText("\u2190 True " + (r ? "North" : "South"), 0, 0); a.restore(); d = e + .45 * Math.cos(q) * b; c = b + .45 * Math.sin(q) *
                        b; a.save(); a.textAlign = "center"; a.translate(d, c); a.rotate(-m); a.fillText("aarushmagic.com", 0, 0); a.restore(); w = 16 / Math.tan(h) + 20; d = e + Math.cos(q) * w; c = b + Math.sin(q) * w; a.save(); a.translate(d, c); a.rotate(-m); a.fillText(k + "\u00b0", 0, 0); a.restore(); a.restore(); a.textAlign = "left"; a.font = "14px Verdana"; a.textBaseline = "top"; a.fillText("Latitude " + k + "\u00b0 " + (r ? "North" : "South"), 2, 0); f && (a.fillText("Longitude " + Math.abs(RoundTo(thisLng, 2)) + "\u00b0 " + (0 < thisLng ? "East" : "West"), 2, 24), a.fillText("Compass " + RoundTo(compDangle,
                            1) + "\u00b0", 2, 48)); a.font = "14px Verdana"; a.textAlign = "center"; a.textBaseline = "bottom"; a.fillStyle = "#00f"; p.title = _GetPageFit(p.width, p.height); $("rngLat").value = k; $("rngDiam").value = v
    }
}

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
function writeInstructions(lat) {
    const f = document.getElementById("cut-bottom");
    const ftx = f.getContext("2d");
    ftx.clearRect(0, 0, canvas.width, canvas.height);
    if (!document.getElementById("instructions").checked) {
        return;
    }
    direction = lat >= 0 ? "north" : "south";
    var txt = "Instructions:\n1. Point the sundial " + direction + "\n2. Hold the sundial flat\n3. Estimate time by looking at the shadow\n4. Don't forget to account for daylight savings time\n5. Enjoy!!";
    var x = 15;
    var y = 10;
    var lineheight = 15;
    var lines = txt.split('\n');
    ftx.font = "11px Times New Romanx";
    for (var i = 0; i < lines.length; i++) {
        ftx.fillText(lines[i], x, y + (i * lineheight));
    }
}
function drawAngle(abc) {
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.moveTo(144, 144);
    ctx.lineTo(288, (144 - 0.5 * 288 * Math.tan((90 - abc * 1) * Math.PI / 180)));
    ctx.stroke();
}
function drawAngleLeft(cba) {
    ctx.beginPath();
    ctx.moveTo(144, 144);
    ctx.lineTo(0, (144 - 0.5 * 288 * Math.tan((90 - cba * 1) * Math.PI / 180)));
    ctx.stroke();
}
function angleAtHour(hour) {
    let deg = Math.max(Math.min(document.getElementById("latitude").value, 90), -90);
    let lat = Math.abs(deg);
    const slat = Math.sin((lat * Math.PI) / 180);
    var hr = 15 * hour;
    var thour = Math.tan((hr * Math.PI) / 180);
    return ((Math.atan(thour * slat) * 180) / Math.PI).toFixed(2);
}
function clearcanvas1() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function clearcanvas2() {
    var canvas = document.getElementById('cut-top'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function clearcanvas3() {
    var canvas = document.getElementById('triangleOne'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
document.querySelector("#left").addEventListener("click", function () {
    var deg = Math.max(Math.min(document.getElementById("latitude").value, 90), -90);
    var lat = Math.abs(deg);
    clearcanvas1();
    clearcanvas2();
    clearcanvas3();
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
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
    drawAngleLeft(angle)
    angle = angleAtHour(2);
    drawAngleLeft(angle)
    angle = angleAtHour(3);
    drawAngleLeft(angle)
    angle = angleAtHour(4);
    drawAngleLeft(angle)
    angle = angleAtHour(5);
    drawAngleLeft(angle);


    const d = document.getElementById("cut-top");
    const dtx = d.getContext("2d");

    dtx.beginPath();
    dtx.strokeStyle = "#FF0000";
    dtx.moveTo(75, 150);
    dtx.lineTo(75, 150 - (75 * Math.tan(lat * Math.PI / 180)));
    dtx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.moveTo(144, 144);
    ctx.lineTo(144, 36);
    ctx.stroke();

    const e = document.getElementById("triangleOne");
    const etx = e.getContext("2d");
    var toa = 75 * Math.tan(lat * Math.PI / 180);
    etx.beginPath();
    etx.moveTo(15, 15);
    etx.lineTo(75 + 15, 15);
    etx.stroke();
    etx.beginPath();
    etx.moveTo(15, 0);
    etx.lineTo(15 + 54, 0);
    etx.stroke();
    etx.beginPath();
    etx.moveTo(15, 0);
    etx.lineTo(15, 15);
    etx.stroke();
    etx.beginPath();
    etx.moveTo(15 + 54, 15);
    etx.lineTo(15 + 54, 0);
    etx.stroke();
    etx.beginPath();
    etx.moveTo(75 + 15, 15);
    etx.lineTo(75 + 15, 15 + toa);
    etx.stroke();
    etx.beginPath();
    etx.moveTo(15, 15);
    etx.lineTo(75 + 15, 15 + toa);
    etx.stroke();
    etx.beginPath();
    etx.moveTo(75 + 30, 15);
    etx.lineTo(75 + 30, 15 + toa);
    etx.stroke();
    etx.beginPath();
    etx.moveTo(15 + 75, 15 + toa);
    etx.lineTo(75 + 30, 15 + toa);
    etx.stroke();
    etx.beginPath();
    etx.moveTo(15 + 75, 15);
    etx.lineTo(75 + 30, 15);
    etx.stroke();
    writeInstructions(document.getElementById("latitude").value)
    Calculate();
});

console.log('Hey! You just found a hidden feature of this website! Below, type in "sundialAngles(your_latitude)" and press enter to get the list of sundial shadow angles for your latitude!')
document.getElementById("right").onclick = hfis => {
    navigator.geolocation.getCurrentPosition(position => {
        const rawlat = position.coords.latitude;
        document.getElementById("latitude").value = Math.round(rawlat * 10) / 10;
        const lat = Math.abs(rawlat);
        clearcanvas1();
        clearcanvas2();
        clearcanvas3();
        ctx.beginPath();
        ctx.strokeStyle = "#000000";
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
        drawAngleLeft(angle)
        angle = angleAtHour(2);
        drawAngleLeft(angle)
        angle = angleAtHour(3);
        drawAngleLeft(angle)
        angle = angleAtHour(4);
        drawAngleLeft(angle)
        angle = angleAtHour(5);
        drawAngleLeft(angle);


        const d = document.getElementById("cut-top");
        const dtx = d.getContext("2d");

        dtx.beginPath();
        dtx.strokeStyle = "#FF0000";
        dtx.moveTo(75, 150);
        dtx.lineTo(75, 150 - (75 * Math.tan(lat * Math.PI / 180)));
        dtx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "#FF0000";
        ctx.moveTo(144, 144);
        ctx.lineTo(144, 36);
        ctx.stroke();

        const e = document.getElementById("triangleOne");
        const etx = e.getContext("2d");
        var toa = 75 * Math.tan(lat * Math.PI / 180);
        etx.beginPath();
        etx.moveTo(15, 15);
        etx.lineTo(75 + 15, 15);
        etx.stroke();
        etx.beginPath();
        etx.moveTo(15, 0);
        etx.lineTo(15 + 54, 0);
        etx.stroke();
        etx.beginPath();
        etx.moveTo(15, 0);
        etx.lineTo(15, 15);
        etx.stroke();
        etx.beginPath();
        etx.moveTo(15 + 54, 15);
        etx.lineTo(15 + 54, 0);
        etx.stroke();
        etx.beginPath();
        etx.moveTo(75 + 15, 15);
        etx.lineTo(75 + 15, 15 + toa);
        etx.stroke();
        etx.beginPath();
        etx.moveTo(15, 15);
        etx.lineTo(75 + 15, 15 + toa);
        etx.stroke();
        etx.beginPath();
        etx.moveTo(75 + 30, 15);
        etx.lineTo(75 + 30, 15 + toa);
        etx.stroke();
        etx.beginPath();
        etx.moveTo(15 + 75, 15 + toa);
        etx.lineTo(75 + 30, 15 + toa);
        etx.stroke();
        etx.beginPath();
        etx.moveTo(15 + 75, 15);
        etx.lineTo(75 + 30, 15);
        etx.stroke();
        writeInstructions(document.getElementById("latitude").value)
        Calculate();
    })

};
function sundialAngles(myLat) {
    console.log("At 6 am, the angle is -90 degrees")
    for (let i = -5; i <= -1; i++) {
        let deg = Math.max(Math.min(myLat, 90), -90);
        let lat = Math.abs(deg);
        const slat = Math.sin((lat * Math.PI) / 180);
        var hr = 15 * i;
        var thour = Math.tan((hr * Math.PI) / 180);
        console.log("At " + (i + 12) + " am, the angle is " + ((Math.atan(thour * slat) * 180) / Math.PI).toFixed(2) + " degrees");
    }
    console.log("At noon, the angle is 0 degrees")
    for (let i = 1; i <= 5; i++) {
        let deg = Math.max(Math.min(myLat, 90), -90);
        let lat = Math.abs(deg);
        const slat = Math.sin((lat * Math.PI) / 180);
        var hr = 15 * i;
        var thour = Math.tan((hr * Math.PI) / 180);
        console.log("At " + i + " pm, the angle is " + ((Math.atan(thour * slat) * 180) / Math.PI).toFixed(2) + " degrees");
    } console.log("At 6 pm, the angle is 90 degrees")
}
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    } else if (hour == 12) {
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec + " " + am_pm;

    document.getElementById("clock")
        .innerHTML = currentTime;
}

showTime();
document.getElementById("printButton").onclick = iusd => {
    if (document.getElementById("bigSundial").checked) {
        document.getElementById("cnvsDial").style.display = "block";
    }
    writeInstructions(document.getElementById("latitude").value)
    document.execCommand('print', false, null);
    document.getElementById("cnvsDial").style.display = "none";
}