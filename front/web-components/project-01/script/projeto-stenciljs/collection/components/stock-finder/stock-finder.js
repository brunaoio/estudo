import { Component, Event, h, Host, State } from "@stencil/core";
import { AV_API_KEY } from "../../global/global";
export class StockFinder {
  constructor() {
    this.searchResults = [];
    this.loading = false;
  }
  onFindStockSymbol(event) {
    event.preventDefault();
    this.loading = true;
    const stockSymbol = this.stockInput.value;
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockSymbol}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(parsedRef => {
      this.searchResults = parsedRef.bestMatches.map(match => {
        return { name: match['2. name'], symbol: match['1. symbol'] };
      });
      console.log(this.searchResults);
      this.loading = false;
    })
      .catch(err => {
      console.log(err);
      this.loading = false;
    });
  }
  onStockSymbolClicked(symbol) {
    this.brioStockSymbolClicked.emit(symbol);
  }
  render() {
    let content = h("ul", null, this.searchResults.map(el => {
      return h("li", { onClick: this.onStockSymbolClicked.bind(this, el.symbol) },
        h("strong", null, el.symbol),
        " - ",
        el.name);
    }));
    if (this.loading) {
      content = h("brio-spinner", null);
    }
    return h(Host, null,
      h("form", { onSubmit: this.onFindStockSymbol.bind(this) },
        h("input", { id: "stock-symbol", type: "text", ref: el => this.stockInput = el }),
        h("button", { type: "submit" }, "Find")),
      content);
  }
  static get is() { return "brio-stock-finder"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./stock-finder.css"]
  }; }
  static get styleUrls() { return {
    "$": ["stock-finder.css"]
  }; }
  static get states() { return {
    "stockInput": {},
    "searchResults": {},
    "loading": {}
  }; }
  static get events() { return [{
      "method": "brioStockSymbolClicked",
      "name": "brioStockSymbolClicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
