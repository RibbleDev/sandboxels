elements.big_boom = {
    color: "#ffaa00",
    category: "Bombed",
    state: "solid",
    density: 9999,
    behavior: behaviors.WALL,

    onPlace(pixel) {
        pixel.startTime = pixelTicks;
    },

    tick(pixel) {
        if (pixelTicks - pixel.startTime >= 2) {
            pixel.startTime = pixelTicks;

            let below = pixelMap[pixel.x]?.[pixel.y + 1];

            if (!below) {
                tryMove(pixel, pixel.x, pixel.y + 1);
            }
            else {
                explodeAt(pixel.x, pixel.y, 1000);
                deletePixel(pixel.x, pixel.y);
            }
        }
    }
};
