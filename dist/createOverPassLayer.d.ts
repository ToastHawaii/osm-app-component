import { Attribute } from "./Generator";
import "leaflet-overpass-layer";
export declare function createOverPassLayer<M>(group: string, value: string, icon: string, query: string, attributes: Attribute<M>[], attributeDescriptions: Attribute<{}>[], local: any, color: string, isActive: () => boolean, globalFilter?: (tags: any) => boolean): any;
export declare function shareLink(url: string, target: HTMLElement, local: {
    linkCopied: string;
}, title: string, description: string): Promise<void>;
export declare function isIOS(): boolean;
