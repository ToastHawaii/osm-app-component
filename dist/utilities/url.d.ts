export declare const httpRegex: RegExp;
export declare function toUrl(url: string | undefined): string | undefined;
export declare function toWikipediaUrl(wikipedia: string | undefined): string | undefined;
export declare function toFacebookUrl(url: string | undefined): string | undefined;
export declare function utilQsString(obj: any, noencode?: boolean): string;
export declare function getQueryParams(): {
    [k: string]: string;
};
export declare function setQueryParams(params: {
    [p: string]: string | number | boolean | undefined;
}): void;
export declare function getHashParams(): {
    [k: string]: string;
};
export declare function setHashParams(params: {
    [p: string]: string | number | boolean | undefined;
}, hashChangeEventListener: {
    (this: Window, ev: HashChangeEvent): any;
    (this: Window, ev: HashChangeEvent): any;
}): void;
export declare function combine(...parts: string[]): string;
