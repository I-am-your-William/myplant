input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 840) {
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(2000)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(5000)
    }
})
