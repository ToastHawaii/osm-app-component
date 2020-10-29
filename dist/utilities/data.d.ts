export declare function groupBy<T>(xs: T[], prop: string): {
    [p: string]: T[];
};
export declare function delay(ms: number): Promise<unknown>;
export declare function getRandomInt(min: number, max: number): number;
/**
 * Simple object check.
 */
export declare function isObject(item: any): boolean;
/**
 * Deep merge two objects.
 */
export declare function mergeDeep<T, S>(target: T, source: S): T;
