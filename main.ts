input.onButtonPressed(Button.A, function () {
    Jogador_A_ganha = 1
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Vitorias")
    basic.showNumber(Jogador_A_ganha)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.pause(1000)
    basic.showNumber(jogador_B_ganha)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.showNumber(Empate)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    Empate += 1
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # # # .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    jogador_B_ganha = 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
})
let Empate = 0
let jogador_B_ganha = 0
let Jogador_A_ganha = 0
Jogador_A_ganha = 0
jogador_B_ganha = 0
Empate = 0
