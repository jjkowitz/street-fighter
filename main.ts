controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 0)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 0)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, -100, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(player_2, -100, 0)
})
let player_2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
player_2 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(player_2, 100, 0)
player_2.setStayInScreen(true)
