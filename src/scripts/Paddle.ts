import { Game } from './Game';
import { GenericGameObj } from './helpers/IGame';

export class Paddle extends GenericGameObj {

    private MaxSpeed : number = 7;
    private Speed : number = 0;
    Name: string;
    
    constructor(private game: Game){
        super(game.GameHeight,game.GameWidth);
        window.addEventListener('keydown',e => {
            switch(e.keyCode){
                case 37:
                    this.MoveLeft();
                    break;
                case 39:
                    this.MoveRight();
                    break;
                default:
                    break;
            }
        });
        window.addEventListener('keyup',e => {
            switch(e.keyCode){
                case 37:
                case 39:
                    if(this.Speed < 0 || this.Speed > 0)
                        this.Stop(); 
                    break;
                default:
                    break;
            }
           
        });
    }

    Init(): void {
        this.Height = 25;
        this.Width = 200;
        this.Postion = {
            X : (this.GameWidth - this.Width) / 2,
            Y : (this.GameHeight - this.Height - 30)
        }
    }

    Stop(){
        this.Speed = 0;
    }

    MoveLeft(){
        this.Speed = -this.MaxSpeed;
    }
    MoveRight(){
        this.Speed = this.MaxSpeed;
    }

    Draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'lightgray';
        ctx.fillRect(this.Postion.X,this.Postion.Y,this.Width,this.Height);
    }
    Update(deltaTime: any): void {
        this.Postion.X += this.Speed;
        if(this.Postion.X < 0) this.Postion.X = 0;
        if(this.Postion.X + this.Width > this.GameWidth) this.Postion.X = this.GameWidth - this.Width;
    }
    
    
}