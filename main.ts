radio.setGroup(1)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        basic.showIcon(IconNames.Square)
    } else if (GHBit.Rocker(GHBit.enRocker.Up)) {
        basic.showArrow(ArrowNames.North)
        radio.sendNumber(1)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        basic.showArrow(ArrowNames.South)
        radio.sendNumber(2)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        basic.showArrow(ArrowNames.West)
        radio.sendNumber(3)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        basic.showArrow(ArrowNames.East)
        radio.sendNumber(4)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendNumber(5)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        radio.sendNumber(0)
    }
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendNumber(6)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendNumber(7)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendNumber(8)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendNumber(9)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
    } else {
        radio.sendNumber(0)
    }
})
