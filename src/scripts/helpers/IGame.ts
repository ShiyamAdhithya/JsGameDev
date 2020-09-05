export interface IGame {
    Postion: IPostion,
    Init(): void;
    Draw(ctx: CanvasRenderingContext2D): void;
    Update(ctx: CanvasRenderingContext2D): void;
}

export interface IPostion {
    X: number,
    Y: number
}

export abstract class GenericGameObj implements IGame{

    constructor(protected GameHeight: number, protected GameWidth: number){
        this.Init();
    }
    Height: number;
    Width: number;

    Init(): void {
        throw new Error("Method not implemented.");
    }

    Postion: IPostion;
    Draw(ctx: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
    Update(ctx: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
}