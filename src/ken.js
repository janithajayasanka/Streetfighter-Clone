// importing ken image //
const [ken, background] = document.querySelectorAll('img')

// declare default position //
const position = {
        x:GameViewport.gvWidth/2 - ken.width/2,
        y:110
    }

// declaring velocity //
let velocity = 2

position.x += velocity

// change direction when sprite move from end to end //
if (position.x > GameViewport.gvWidth - ken.width || position.x < 0){
    velocity = -velocity
}

// importing image on certian position on the screen //
context.drawImage(ken, position.x, position.y)