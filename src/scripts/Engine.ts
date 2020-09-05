export class Engine{
    Height : number;
    Width : number;
    constructor(private ctx: CanvasRenderingContext2D){
        this.resize(null);
    }

    private setCanseSize(){
        this.ctx.canvas.width = this.Width;
        this.ctx.canvas.height = this.Height;
    }

    clearScren(){
        this.ctx.clearRect(0,0,this.Width,this.Height);
    }

    resize(e: any){
        this.Height = window.innerHeight
        this.Width = window.innerWidth;
        this.setCanseSize();
    }
}