function initGame() {
    // inside main game ts
    // eslint-disable-next-line
    const can = (<HTMLCanvasElement>document.getElementById("canvas1"));

    // The 2D Context for the HTML canvas element.
    // It provides objects, methods, and properties to draw
    // and manipulate graphics on a canvas drawing surface.
    const ctx = can.getContext("2d");

    // canvas width and height
    can.width = window.innerWidth;
    can.height = window.innerHeight;

    // create an image element
    const img = new Image(can.width, can.height);

    // specify the image source relative to the html or js file
    // when the image is in the same directory as the file
    // only the file name is required:
    img.src = `${process.env.REACT_APP_BASE_URL}/spacebg.png`;

    // window.onload is an event that occurs when all the assets
    // have been succesfuly loaded (in this case only the spacebg.png)
    // window.onload = function() {
        // the initial image height
        let imgHeight = 0;

        // the scroll speed
        // an important thing to ensure here is that can.height
        // is divisible by scrollSpeed
        const scrollSpeed = 10;

        // this is the primary animation loop that is called 60 times
        // per second
        function loop() {
            // draw image 1
            ctx?.drawImage(img, 0, imgHeight, can.width, can.height);

            // draw image 2
            ctx?.drawImage(img, 0, imgHeight - can.height, can.width, can.height);

            // update image height
            imgHeight += scrollSpeed;

            // reseting the images when the first image entirely
            // exits the screen
            if (imgHeight === can.height) {
                imgHeight = 0;
            }

            // this function creates a 60fps animation by scheduling a
            // loop function call before the
            // next redraw every time it is called
            window.requestAnimationFrame(loop);
        }

        // this initiates the animation by calling the loop function
        // for the first time
        loop();
    // }
}

export default initGame;