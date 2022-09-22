input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        # . # . #
        . # . # .
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # . # .
        # . # . .
        # # . # .
        # . # . .
        # # . # .
        `)
    basic.showLeds(`
        # # # . .
        # # . . .
        # # # . .
        # # . . .
        # # # . .
        `)
    basic.showLeds(`
        # # . # .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # . # #
        . . # . #
        . # . # #
        . . # . #
        . # . # #
        `)
    basic.showLeds(`
        . . # # #
        . . . # #
        . . # # #
        . . . # #
        . . # # #
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        . # . # .
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.forever(function () {
	
})
