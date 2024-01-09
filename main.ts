bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    connected = 1
    while (connected == 1) {
        uartdata = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        CarCtrl()
        domusic()
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connected = 0
})
function domusic () {
    if (uartdata == "1") {
        music.ringTone(262)
    } else if (uartdata == "2") {
        music.ringTone(294)
    } else if (uartdata == "3") {
        music.ringTone(330)
    } else if (uartdata == "4") {
        music.ringTone(349)
    } else if (uartdata == "5") {
        music.ringTone(392)
    } else if (uartdata == "6") {
        music.ringTone(440)
    } else if (uartdata == "7") {
        music.ringTone(494)
    } else if (uartdata == "8") {
        music.ringTone(523)
    } else if (uartdata == "B1") {
        music.ringTone(277)
    } else if (uartdata == "B2") {
        music.ringTone(311)
    } else if (uartdata == "B3") {
        music.ringTone(370)
    } else if (uartdata == "B4") {
        music.ringTone(415)
    } else if (uartdata == "B5") {
        music.ringTone(466)
    } else if (uartdata == "O") {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
}
function ModeSelect () {
    if (uartdata == "S") {
        basic.showIcon(IconNames.Confused)
    } else if (uartdata == "T") {
        basic.showIcon(IconNames.Angry)
    } else if (uartdata == "U") {
        basic.showIcon(IconNames.EighthNote)
    } else if (uartdata == "V") {
        basic.showLeds(`
            . . . . .
            # . . . #
            # # # # #
            # . . . #
            . # # # .
            `)
    }
}
function CarCtrl () {
    if (uartdata == "A") {
        basic.showIcon(IconNames.House)
    } else if (uartdata == "B") {
        basic.showLeds(`
            . # . # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (uartdata == "C") {
        basic.showLeds(`
            . . # . .
            . # # # #
            # # # # .
            . # # # #
            . . # . .
            `)
    } else if (uartdata == "D") {
        basic.showLeds(`
            . . # . .
            # # # # .
            . # # # #
            # # # # .
            . . # . .
            `)
    } else if (uartdata == "E") {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . # . .
            # . # # .
            . # # # #
            `)
    } else if (uartdata == "F") {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # . #
            # # . . #
            # . . . .
            `)
    } else if (uartdata == "0") {
        basic.showIcon(IconNames.No)
    }
}
let uartdata = ""
let connected = 0
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)
connected = 0
