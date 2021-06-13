/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface BrioSideDrawer {
        "open": () => Promise<boolean>;
        "opened": boolean;
        "titulo": string;
    }
    interface BrioSpinner {
    }
    interface BrioStockFinder {
    }
    interface BrioStockPrice {
        "stockSymbol": string;
    }
    interface BrioTooltip {
        "icon": string;
        "opened": boolean;
        "texto": string;
        "toogle": () => Promise<boolean>;
    }
}
declare global {
    interface HTMLBrioSideDrawerElement extends Components.BrioSideDrawer, HTMLStencilElement {
    }
    var HTMLBrioSideDrawerElement: {
        prototype: HTMLBrioSideDrawerElement;
        new (): HTMLBrioSideDrawerElement;
    };
    interface HTMLBrioSpinnerElement extends Components.BrioSpinner, HTMLStencilElement {
    }
    var HTMLBrioSpinnerElement: {
        prototype: HTMLBrioSpinnerElement;
        new (): HTMLBrioSpinnerElement;
    };
    interface HTMLBrioStockFinderElement extends Components.BrioStockFinder, HTMLStencilElement {
    }
    var HTMLBrioStockFinderElement: {
        prototype: HTMLBrioStockFinderElement;
        new (): HTMLBrioStockFinderElement;
    };
    interface HTMLBrioStockPriceElement extends Components.BrioStockPrice, HTMLStencilElement {
    }
    var HTMLBrioStockPriceElement: {
        prototype: HTMLBrioStockPriceElement;
        new (): HTMLBrioStockPriceElement;
    };
    interface HTMLBrioTooltipElement extends Components.BrioTooltip, HTMLStencilElement {
    }
    var HTMLBrioTooltipElement: {
        prototype: HTMLBrioTooltipElement;
        new (): HTMLBrioTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "brio-side-drawer": HTMLBrioSideDrawerElement;
        "brio-spinner": HTMLBrioSpinnerElement;
        "brio-stock-finder": HTMLBrioStockFinderElement;
        "brio-stock-price": HTMLBrioStockPriceElement;
        "brio-tooltip": HTMLBrioTooltipElement;
    }
}
declare namespace LocalJSX {
    interface BrioSideDrawer {
        "opened"?: boolean;
        "titulo"?: string;
    }
    interface BrioSpinner {
    }
    interface BrioStockFinder {
        "onBrioStockSymbolClicked"?: (event: CustomEvent<string>) => void;
    }
    interface BrioStockPrice {
        "stockSymbol"?: string;
    }
    interface BrioTooltip {
        "icon"?: string;
        "opened"?: boolean;
        "texto"?: string;
    }
    interface IntrinsicElements {
        "brio-side-drawer": BrioSideDrawer;
        "brio-spinner": BrioSpinner;
        "brio-stock-finder": BrioStockFinder;
        "brio-stock-price": BrioStockPrice;
        "brio-tooltip": BrioTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "brio-side-drawer": LocalJSX.BrioSideDrawer & JSXBase.HTMLAttributes<HTMLBrioSideDrawerElement>;
            "brio-spinner": LocalJSX.BrioSpinner & JSXBase.HTMLAttributes<HTMLBrioSpinnerElement>;
            "brio-stock-finder": LocalJSX.BrioStockFinder & JSXBase.HTMLAttributes<HTMLBrioStockFinderElement>;
            "brio-stock-price": LocalJSX.BrioStockPrice & JSXBase.HTMLAttributes<HTMLBrioStockPriceElement>;
            "brio-tooltip": LocalJSX.BrioTooltip & JSXBase.HTMLAttributes<HTMLBrioTooltipElement>;
        }
    }
}
