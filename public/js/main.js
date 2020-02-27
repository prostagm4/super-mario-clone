import {loadImage, loadLevel} from './loader.js';
import SpriteSheet from './SpriteSheet.js';

function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x1, y1, x2, y2]) => {
        for(let x=x1; x<x2; ++x) {
            for(let y=y1; y<y2; ++y) {
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    });
}

const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

loadImage('/img/tiles.png').then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('sky', 3, 23);
    sprites.define('ground', 0, 0);
    sprites.define('brick', 2, 0);
    sprites.define('box', 25, 0);
    sprites.define('pilaster', 0, 1);
    sprites.define('blue', 2, 2);
    console.log(sprites.tiles);

    loadLevel('0-0').then(level => {
    level.backgrounds.forEach(background => {
        drawBackground(background, ctx, sprites);
    });
});
});

