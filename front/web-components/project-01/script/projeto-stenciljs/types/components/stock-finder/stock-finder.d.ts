import { EventEmitter } from "../../stencil-public-runtime";
export declare class StockFinder {
  stockInput: HTMLInputElement;
  searchResults: {
    name: string;
    symbol: string;
  }[];
  loading: boolean;
  brioStockSymbolClicked: EventEmitter<string>;
  onFindStockSymbol(event: Event): void;
  onStockSymbolClicked(symbol: string): void;
  render(): any;
}
