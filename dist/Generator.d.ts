export declare type Local = {
    [t: string]: string;
};
export declare type Tags = {
    [t: string]: string | undefined;
};
export declare type Attribute<M> = {
    check: (tags: Tags, value: string, model: M, local: Local) => boolean;
    template: (local: Local, tags: Tags, value: string, model: M) => string;
};
export declare class Generator<M extends {}> {
    private attributes;
    constructor(attributes: Attribute<M>[]);
    empty(tags: Tags, value: string, model: M, local: Local): boolean;
    render(local: Local, tags: Tags, value: string, model: M, separator?: string): string;
}
