import { Game } from './Game';
import { GenericGameObj, IPostion } from './helpers/IGame';

export class Ball extends GenericGameObj {
    private BallDom: HTMLImageElement;
    private Speed: IPostion = {
        X : 5,
        Y: 5 
    }

    constructor(private Game: Game){
        super(Game.GameHeight,Game.GameWidth);
        this.BallDom = document.getElementById('ball') as HTMLImageElement;
    }

    Init(): void {
        this.Height = 32;
        this.Width = 32;
        this.Postion = {
            X : 10,
            Y : 10
        }
    }

    collisionBetweenPaddileAndBall(){
        let bottomOfBall = this.Postion.Y + this.Height;
        let topOfPaddle = this.Game.Paddle.Postion.Y;
        let leftSideOfPaddle = this.Game.Paddle.Postion.X;
        let rightSideOfPaddle = this.Game.Paddle.Postion.X + this.Game.Paddle.Width;

        if(bottomOfBall > topOfPaddle && this.Postion.X >= leftSideOfPaddle && this.Postion.X + this.Width <= rightSideOfPaddle){
            this.Speed.Y = -this.Speed.Y;
            this.Postion.Y = this.Game.Paddle.Postion.Y - this.Height;
        }
    }

    Draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.BallDom,this.Postion.X, this.Postion.Y,this.Width,this.Height);
    }
    Update(deltaTime: any): void {
        this.Postion.X += this.Speed.X;
        this.Postion.Y += this.Speed.Y;
        if(this.Postion.X  < 0 || this.Postion.X + this.Width > this.GameWidth) this.Speed.X = -this.Speed.X;
        if(this.Postion.Y  < 0 || this.Postion.Y + this.Height > this.GameHeight) this.Speed.Y = -this.Speed.Y;

        this.collisionBetweenPaddileAndBall()
    }
}