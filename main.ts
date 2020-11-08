namespace SpriteKind {
    export const Monster = SpriteKind.create()
    export const Data = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster, function(sprite: Sprite, otherSprite: Sprite) {
    game.reset() 
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function(){
    vivian.setImage(vivianLightImg)
    turnOffTheDark()
}
// flashlight off
// Set the tile map to show a dark room
function setTilemap () {
    tiles.loadMap(tiles.createMap(tilemap`level`))
    tiles.setTilemap(tilemap`level_0`)}

function turnOffTheDark(){

}

   function turnOnTheDark(){
       setTilemap()
       for(let monster of sprites.allOfKind(SpriteKind.Data)){
           monster.setImage(sprites.readDataSprite(monster, "night").image)
           monster.setKind(SpriteKind.Monster)
           monster.follow(vivian)
       }
       darkIsOff = true       

}
function makeDualityMonster (night: Image, day: Image) {
    let monster = sprites.create(night, SpriteKind.Monster)
    let darkSprite = sprites.create(night, SpriteKind.Data)
    let lightSprite = sprites.create(day, SpriteKind.Data)
    darkSprite.setFlag(SpriteFlag.Ghost, true)
    darkSprite.setFlag(SpriteFlag.Invisible, true)
    lightSprite.setFlag(SpriteFlag.Ghost, true)
    lightSprite.setFlag(SpriteFlag.Invisible, true)
    sprites.setDataSprite(monster, "night", darkSprite)
    sprites.setDataSprite(monster, "day", lightSprite)
    monster.setPosition(randint(50, 500), randint(0, 100))
    monster.follow(vivian, 15)
}
function createAllMonsters(){
    for (let i = 0; i  < nightMonsterImgs.length; i++){
        let night = nightMonsterImgs[i]
        let day = dayItemImgs[i]
        for (let j = 0; j<3; j++){
            makeDualityMonster(night, day)


        }
    }
}

// To redraw the tiles in different colors
function redoTiles () {
    tileImages = [
    myTiles.tile1,
    myTiles.tile2,
    myTiles.tile3,
    myTiles.tile4,
    myTiles.tile5,
    myTiles.tile6,
    myTiles.tile7
    ]
    for (let tileImage of tileImages) {
        copiedTile = tileImage.clone()
        copiedTile.replace(12, 13)
        copiedTile.replace(11, 1)
        copiedTile.replace(14, 4)
        tiles.coverAllTiles(tileImage, copiedTile)
    }
}
let copiedTile: Image = null
let tileImages: Image[] = []
let nightMonsterImgs = [img`
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 f f 8 8 8 8 f f 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 c . 
    . . . 8 8 8 8 8 8 8 8 8 8 c c c 
    . . . . . 8 8 8 8 8 8 8 c c c c 
    . . . . . . . c c c c c c c c c 
    . . . . . . . . . c c c c c c c 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . e e e e e . . . . . 
    . . . . . e b b 6 6 b e . . . . 
    . . e e e b c c 6 6 6 c e . . . 
    . e b b c c c c c 6 6 6 c e . . 
    . e b c c c c c c c 6 6 c c e . 
    . e b c c c c c c c c c c c e . 
    . e c c c c e c c c c c c c e . 
    . e b c c e . e e c 6 c c c e . 
    . e b c c e . . . e 6 e 6 e . . 
    . e c c c c e . . . 6 . 6 . . . 
    . e b c c c e e . 6 . . 6 . . . 
    . . e c c c c b e e . 6 . . . . 
    . . e c c c c c c b e e . . . . 
    . e c c c c c c c c c b e e e . 
    e b c c c c c c c c c c c c b e 
    . e e e e e e e e e e e e e e . 
    `, img`
    e e . . . . . . . . . . . . . . 
    e e e e e e e e . . . . . . . . 
    . e e b b b b b b b b . . . . . 
    . e b b b b b b b b b b b . . . 
    . e b b b b b b b b b b b b . . 
    . e b b b b b b b b b b b b b . 
    e b b b f f b b b b b b b b b . 
    e b b f c c f b b b b b b . f . 
    e b b f c c f b b b . f . . . . 
    e b b b f f b b b . . . . . . . 
    e b b b b b b b b . . . . . . . 
    . e b b b b b b b . . . . . . . 
    . . e b b b b b b . f . . f . . 
    . . . e e b b b b b b b b b b . 
    . . . . . e e e b b b e e e e . 
    . . . . . . . . e e e e . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . f f f f . . . 
    . . . . . . . . f 6 6 6 6 f . . 
    . . . . . . . f c c 6 6 6 f . . 
    . . . . . . f c c c 6 6 f . . . 
    . . . . . . f c c c 6 6 f . . . 
    . . . . . . f c c 6 6 6 f . . . 
    . . . . . . f 6 6 6 c c f . . . 
    . . . . . . f 6 6 c c c f . . . 
    . . . . . . f 6 6 c c c f . . . 
    . . . . . . f 6 6 6 c c f . . . 
    . . . . . . f 6 6 6 6 6 f . . . 
    . . . . . f f f 6 6 6 6 f . . . 
    . . . . f 6 6 6 6 6 6 6 f . . . 
    . . . f b b 6 6 6 6 6 6 f . . . 
    . . f f f f f f f f f f f . . . 
    `, img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f f f f f f 6 f . . . . . 
    . . . f f 6 f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f . f . f . . . . 
    . . . f . f f f . . f . . . . . 
    . . . . . f . f . f f . . . . . 
    . . . . . f . f . f . . . . . . 
    . . . . . f . . . . . . . . . . 
    `]
let dayItemImgs = [img`
    . . . f f f f f f f f f f . . . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . f 9 9 1 1 1 1 1 1 1 1 9 9 f . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . f 9 1 1 1 1 1 1 1 1 9 f . . 
    . . f 9 1 1 1 1 1 1 1 1 9 f . . 
    . . f 9 1 1 1 1 1 1 1 1 9 f . . 
    . . f 9 9 9 9 1 1 1 1 1 9 f . . 
    . . f 9 9 9 9 9 1 1 1 1 9 f . . 
    . . f 9 9 9 9 9 9 1 1 1 9 f . . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . . f f f f f f f f . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 . . . . . . . 
    . . 3 . 3 . 3 3 6 3 . . . . . . 
    . 3 . 3 . 3 3 6 6 3 . . . . . . 
    . . 3 . 3 . 3 6 6 3 . . . . . . 
    . 3 . 3 . 3 3 6 3 3 9 . . . . . 
    . . . 3 3 3 3 3 3 9 9 9 9 . . . 
    . . . . . . . . 9 9 9 9 9 9 . . 
    . . . . . . . . . . 9 9 9 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    e . . . . . . . . . . . . . . . 
    c e . . . . . . . . . . . . . . 
    . c e . . . . . . . . . . . . . 
    . . c e . . . . . . . . . . . . 
    . . . c e . . . . . . . . . . . 
    . . . . c e . . . . . . . . . . 
    . . . . . c e . . . . . . . . . 
    . . . . . . c e . . . . . . . . 
    . . . . . . . c e . . . . . . . 
    . . . . . . . . c 5 5 5 . . . . 
    . . . . . . . . 4 5 5 5 e . . . 
    . . . . . . . . 4 5 5 e 5 5 . . 
    . . . . . . . . 4 e e 5 5 5 5 . 
    . . . . . . . . e 4 5 5 4 5 . . 
    . . . . . . . . . 4 5 5 5 . . . 
    . . . . . . . . . . 4 4 . . . . 
    `, img`
    . . . . . . . . . . . . b b . . 
    . . . . . . . . . . . b . . . . 
    . . . . . . . . . 2 2 b . . . . 
    . . . . . . . . 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . 2 2 2 2 b . . . . 
    . . . . . . . . 2 2 2 b . . . . 
    . . . . . b b b b d d b . . . . 
    . . . . 1 1 b b b b b f . . . . 
    . . . . f f f f f f f f . . . . 
    `, img`
    . . . . . . f f f . . . . . . . 
    . . . . f f 8 8 8 f . . . . . . 
    . . . . f 6 f 8 8 f f . . . . . 
    . . . f 6 6 6 f f 6 6 . . . . . 
    . . . f 1 1 1 6 6 1 1 f . . . . 
    . . . f 6 6 f 1 1 6 6 f . . . . 
    . . . f 1 1 f 6 6 f 1 f . . . . 
    . . . f 6 6 f 1 1 f 6 f . . . . 
    . . . f 1 1 f 6 6 f 1 f . . . . 
    . . . f 6 6 f 1 1 f 6 f . . . . 
    . . . f 1 1 f 6 6 f 1 f . . . . 
    . . . f 6 6 f f f f 6 f . . . . 
    . . . f 1 1 f . . f 1 f . . . . 
    . . . f 6 6 f . . f 6 f . . . . 
    . . . . f f . . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
let darkIsOff: Boolean
let vivianDarkImg = img`
    . f f f f f f f f f f f f . . . 
    f f f . f f f f f b b f f f . . 
    f f . f f f f f b b b b f f . . 
    f f . f f f f b b b b b b b f . 
    . . . f f f b b b f b b b f f . 
    . . . f f b b b b b b b b b f . 
    . . . . f b b b b b b b b b f . 
    . . . . f c c c c c c c c c f . 
    . . . . f c c c c c c c c c f . 
    . . . . f c b b c c c c c c f . 
    . . . . f c b b c c c c c c f . 
    . . . . f c c b 8 8 c c c c f . 
    . . . . . f 8 b 8 8 c c c c f . 
    . . . . . f f f 8 8 f f f f f . 
    . . . . . 6 f f f f f f f . . . 
    . . . . . . f b b b f f b b b . 
    `
let vivianLightImg = img`
    . f f f f f f f f f f f f . . . 
    f f f . f f f f f d d f f f . . 
    f f . f f f f f d d d d f f . . 
    f f . f f f f d d d d d d d f . 
    . . . f f f d d d f d d d f f 5 
    . . . f f d d d d d d d d d 5 . 
    . . . . f d d d d d d d d 5 f . 
    . . . . f 2 2 2 2 2 2 2 5 2 f . 
    . . . . f 2 2 2 2 2 2 2 5 2 f . 
    . . . . f 2 d d 2 2 2 5 2 2 f . 
    . . . . f 2 d d 2 2 5 2 2 2 f . 
    . . . . f 2 2 d 8 4 2 2 2 2 f . 
    . . . . . f 8 d 8 4 5 5 5 5 5 5 
    . . . . . f f f 8 4 f f f f f . 
    . . . . . . f f f f 5 5 f . . . 
    . . . . . . f d d d f f 5 5 d . 
    `
setTilemap()
let vivian = sprites.create(vivianDarkImg, SpriteKind.Player)
controller.moveSprite(vivian)
scene.cameraFollowSprite(vivian)
tiles.placeOnTile(vivian, tiles.getTileLocation(1, 5))
createAllMonsters()