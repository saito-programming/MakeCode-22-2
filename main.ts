input.onButtonPressed(Button.A, function () {
    時間をはかるのを始める = 1
})
input.onGesture(Gesture.Shake, function () {
    振った回数 += 1
})
let 時間をはかるのを始める = 0
let 今の秒数 = 0
時間をはかるのを始める = 0
let 振った回数 = 0
basic.forever(function () {
    if (時間をはかるのを始める == 1) {
        basic.pause(1000)
        今の秒数 += 1
        if (今の秒数 == 5) {
            basic.showNumber(振った回数)
        }
    }
})
