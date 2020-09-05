import { Game } from './Game';
import { Engine } from "./Engine";

let canvas = document.getElementById('gamescreen') as HTMLCanvasElement;
let ctx = canvas.getContext('2d');


let engine = new Engine(ctx);
let game = new Game(engine.Height,engine.Width);



let LastTime = 0;

function gameLoop(timeStamp: any){
    let deltaTime = timeStamp - LastTime;
    LastTime = timeStamp;

    engine.clearScren();
    game.Update(deltaTime);
    game.Draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
window.addEventListener('resize',e => engine.resize(e))