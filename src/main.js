/*
 * Lily Demos
 * Rocket Patrol: Epic Edition
 * Time taken: 5.2 hours
 * Mods: 
 *    Fire UI added, New tilemap, Speedup after 30 seconds, Randomized spaceship direction, 
 *    Rocket moveable while fired, Remaining time displayed, New title screen, New spaceship enemy
 * Sources:
 *    https://phaser.discourse.group/t/how-to-remove-text/742
 *    https://www.html5gamedevs.com/topic/14039-call-a-function-in-the-update-method-only-once/
 *    https://gamedev.stackexchange.com/questions/182242/phaser-3-how-to-trigger-an-event-every-1-second
 *    
 */

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

//UI size
let borderUIsize = game.config.height / 15;
let borderPadding = borderUIsize / 3;

//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;