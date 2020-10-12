export declare function toTitle(model: {
    name: string;
    address: {
        name: string;
        street: string;
    };
    type: string;
    operator: string;
}): string;
export declare function toLevel(model: number, local: {
    groundFloor: (level: number) => string;
    basement: (level: number) => string;
    floor: (level: number) => string;
}): string;
export declare function toOpenOrClose(model: {
    getUnknown: (date?: Date) => string;
    getComment: (date?: Date) => string;
    getState: (date?: Date) => string;
    getNextChange: () => Date;
}, local: {
    maybeOpen: string;
    thatDependsOn: string;
    open: string;
    closed: string;
    maybeCloses: string;
    maybeOpens: string;
    closes: string;
    opens: string;
}): string | undefined;
