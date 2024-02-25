const GameViewport = {
    gvWidth: 384,
    gvHeight: 224,
    gvScale: 4
}


// this will load after all the html is loaded //

window.onload =function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    // to keep the original size dimentions //
    canvasEl.width = GameViewport.gvWidth;
    canvasEl.height = GameViewport.gvHeight;

    // importing all images //
    const [ken, background] = document.querySelectorAll('img')

    // declare default position //
    const position = {
        x:GameViewport.gvWidth/2 - ken.width/2,
        y:110
    }

    // declaring velocity //
    let velocity = 2

    // frame loop function //
    function frame() {
        position.x += velocity

        // change direction when sprite move from end to end //
        if (position.x > GameViewport.gvWidth - ken.width || position.x < 0){
            velocity = -velocity
        }

        // clear the previous frame //
        // context.clearRect(0, 0, GameViewport.gvWidth, GameViewport.gvHeight)

        context.drawImage(background, 0, 0)

        // importing image on certian position on the screen //
        context.drawImage(ken, position.x, position.y)

        window.requestAnimationFrame(frame)
    }

    // calling frame loop function //
    window.requestAnimationFrame(frame)

     console.log(context)
}