export declare class StockPrice {
  el: HTMLElement;
  stockInput: HTMLInputElement;
  fetchedPrice: number;
  stockSymbolInputValue: string;
  isStockSymbolValid: boolean;
  error: string;
  loading: boolean;
  stockSymbol: string;
  stockSymbolChanged(newValue: string, oldValue: string): void;
  onStockSymbolClicked(event: CustomEvent): void;
  onStockSymbolValueInput(event: Event): void;
  onFetchStockPrice(event: Event): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentWillUpdate(): void;
  componentDidUpdate(): void;
  disconnectedCallback(): void;
  fetchStockPrice(stockSymbol: string): void;
  render(): any;
}
