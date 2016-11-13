import { ElementRef, Renderer } from '@angular/core';
export declare class NglSection {
    private element;
    private renderer;
    title: string;
    open: boolean;
    private openChange;
    constructor(element: ElementRef, renderer: Renderer);
    toggle(event: Event): void;
}
