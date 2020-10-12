import { Color } from "./Color";
export declare class Solver {
    target: Color;
    targetHSL: {
        h: number;
        s: number;
        l: number;
    };
    reusedColor: Color;
    constructor(target: Color);
    solve(): {
        values: number[];
        loss: number;
        filter: string;
    };
    solveWide(): {
        loss: number;
        values: number[];
    };
    solveNarrow(wide: {
        loss: number;
        values: number[];
    }): {
        values: number[];
        loss: number;
    };
    spsa(A: number, a: number[], c: number, values: number[], iters: number): {
        values: number[];
        loss: number;
    };
    loss(filters: number[]): number;
    css(filters: number[]): string;
}
