export declare function extractName(tags: any, langCode: string): any;
export declare function extractType(local: any, tags: any, value: string): any;
export declare function extractOperator(tags: any): any;
export declare function extractImage(tags: any): string | undefined;
export declare function extractLocality(address: any): any;
export declare function extractStreet(result: any, local: {
    code: string;
}): any;
export declare function getOrDefault(arr: any, ...names: string[]): {
    [name: string]: string;
};
