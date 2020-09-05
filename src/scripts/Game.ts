import { Paddle } from './Paddle';
import { Ball } from './Ball';
import { GenericGameObj } from './helpers/IGame';
import { Level1,LevelBuilder } from "./level";

export class Game {
    GameHeight: number;
    GameWidth: number;
    GameObjs: GenericGameObj[];
    Paddle: Paddle;
    Ball: Ball;

    constructor(Height: number, Width: number){
        this.GameHeight = Height;
        this.GameWidth = Width;
        this.Start()
    }

    Start(){
        let paddle = new Paddle(this);
        let ball = new Ball(this);
        let bricks = LevelBuilder(this,Level1);
        this.Paddle = paddle;
        this.Ball = ball;
        this.GameObjs = [paddle,ball,...bricks];
    }

    Draw(ctx: CanvasRenderingContext2D): void {
        this.GameObjs.forEach(x => x.Draw(ctx));
    }
    Update(deltaTime: any): void {
        this.GameObjs.forEach(x => x.Update(deltaTime));
    }
}