//Рисуем человечка
var hangAMan = function (numberOfParts) {
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.beginPath()
    if (numberOfParts == 1) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.stroke()
    }
    else if (numberOfParts == 2) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.stroke()
    }
    else if (numberOfParts == 3) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.moveTo(150, 145)
        ctx.lineTo(200, 170)
        ctx.stroke()
    }
    else if (numberOfParts == 4) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.moveTo(150, 145)
        ctx.lineTo(200, 170)
        ctx.lineTo(250, 145)
        ctx.stroke()
    }
    else if (numberOfParts == 5) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.moveTo(150, 145)
        ctx.lineTo(200, 170)
        ctx.lineTo(250, 145)
        ctx.moveTo(150, 300)
        ctx.lineTo(200, 240)
        ctx.stroke()
    }
    else {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.moveTo(150, 145)
        ctx.lineTo(200, 170)
        ctx.lineTo(250, 145)
        ctx.moveTo(150, 300)
        ctx.lineTo(200, 240)
        ctx.lineTo(250, 300)
        ctx.stroke()
    }
}
