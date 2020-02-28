import {loadLevel} from './loader.js';
import {loadBackgroundSprites, loadMarioSprite} from './sprites.js';

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

Promise.all([
    loadMarioSprite(), 
    loadBackgroundSprites(),
    loadLevel('0-0')]
    ).then(([
        marioSprite,
        sprites,
        level
        ]) => {
    loadLevel('0-0').then(level => {
        level.backgrounds.forEach(background => {
            drawBackground(background, ctx, sprites);
        });

        marioSprite.draw('idle', ctx, pos.x, pos.y)
    });
});

