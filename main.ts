input.onButtonPressed(Button.A, function () {
    player_1 = randint(0, 1)
    if (coin_1 == 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    player_1 = randint(0, 1)
    if (coin_2 == 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    }
    if (coin_1 == coin_2 && coin_1 == coin_2) {
        player_1 += 1
        basic.showString("P1")
        basic.showString("" + (player_1))
        basic.clearScreen()
    } else {
        player_2 += 1
        basic.showString("p2")
        basic.showString("" + (player_1))
        basic.clearScreen()
    }
})
let player_1 = 0
let coin_2 = 0
let coin_1 = 0
coin_1 = 0
coin_2 = 0
player_1 = 0
let player_2 = 0
