import { GenericGameObj, IPostion } from "./helpers/IGame";
import { Game } from './Game';

export class Brick extends GenericGameObj {
    private BrickDom: HTMLImageElement;
    constructor(private Game: Game, postion: IPostion){
        super(Game.GameHeight,Game.GameWidth);
        this.BrickDom = document.getElementById('brick') as HTMLImageElement;
        this.Postion = postion;
    }

    Init(): void {
        this.Height = 25;
        this.Width = 50;
    }

    Draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.BrickDom,this.Postion.X, this.Postion.Y,this.Width,this.Height);
    }
    Update(deltaTime: any): void {
    }
}