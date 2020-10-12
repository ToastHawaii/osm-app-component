import "leaflet-overpass-layer";
import { Attribute } from "./Generator";
export declare function initMap<M>(filterOptions: {
    id: number;
    group: string;
    subgroup?: string;
    order?: number;
    value: string;
    icon: string;
    button?: string;
    query: string;
    color: string;
    edit: string[];
    tags: string[];
}[], attributes: Attribute<M>[], local: any): void;
export declare function overpassSubs(query: string): string;
export declare function parseOpeningHours(openingHours: string | undefined, localCode: string): any;
export declare function updateCount(local: any): void;
