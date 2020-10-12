export declare function getHtmlElement<K extends keyof HTMLElementTagNameMap>(selectors: K, contentElement?: ParentNode): HTMLElementTagNameMap[K];
export declare function getHtmlElement(selectors: string, contentElement?: ParentNode): HTMLElement;
export declare function getHtmlElements(selectors: string, contentElement?: ParentNode): HTMLElement[];
export declare function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, innerHTML?: string, classNames?: string[]): HTMLElementTagNameMap[K];
