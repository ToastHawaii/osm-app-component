export declare function hexToRgb(hex: string): number[];
export declare class Color {
    r: number;
    g: number;
    b: number;
    constructor(r: number, g: number, b: number);
    toString(): string;
    set(r: number, g: number, b: number): void;
    hueRotate(angle?: number): void;
    grayscale(value?: number): void;
    sepia(value?: number): void;
    saturate(value?: number): void;
    multiply(matrix: number[]): void;
    brightness(value?: number): void;
    contrast(value?: number): void;
    linear(slope?: number, intercept?: number): void;
    invert(value?: number): void;
    hsl(): {
        h: number;
        s: number;
        l: number;
    };
    clamp(value: number): number;
}
