import { Element, Component, h, Host, State, Prop, Watch, Listen } from "@stencil/core";
import { AV_API_KEY } from "../../global/global";
export class StockPrice {
  constructor() {
    this.isStockSymbolValid = false;
    this.loading = false;
  }
  stockSymbolChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.stockSymbolInputValue = this.stockSymbol;
      this.isStockSymbolValid = true;
      this.fetchStockPrice(newValue);
    }
  }
  onStockSymbolClicked(event) {
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
      //this.fetchStockPrice(event.detail);
    }
  }
  //completando o 2way databind
  onStockSymbolValueInput(event) {
    this.stockSymbolInputValue = event.target.value;
    if (this.stockSymbolInputValue.trim() !== '') {
      this.isStockSymbolValid = true;
    }
    else {
      this.isStockSymbolValid = false;
    }
  }
  onFetchStockPrice(event) {
    event.preventDefault();
    //const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    //const stockSymbol = this.stockInput.value;
    //const stockSymbol = this.stockSymbolValue;   
    //this.fetchStockPrice(stockSymbol);
    this.stockSymbol = this.stockSymbolInputValue;
  }
  /*inicio lifecycle events*/
  componentWillLoad() {
    console.log('componentWillLoad');
    if (this.stockSymbol) {
      this.stockSymbolInputValue = this.stockSymbol;
      //this.intialStockSymbol = this.stockSymbol;
      this.isStockSymbolValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }
  /*onload do componente, porém mais performático usar
  componentWillLoad para evitar rerender*/
  componentDidLoad() {
    console.log('componentDidLoad');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    // console.log('componentDidUpdate');
    // if (this.intialStockSymbol !== this.stockSymbol) {
    //     this.intialStockSymbol = this.stockSymbol;
    //     this.fetchStockPrice(this.stockSymbol);
    // }
  }
  disconnectedCallback() {
    console.log('disconnectedCallback');
  }
  /*fim lifecycle events*/
  fetchStockPrice(stockSymbol) {
    this.loading = true;
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey= + ${AV_API_KEY}`)
      .then(res => {
      if (res.status !== 200) {
        throw new Error('Server Error!');
      }
      return res.json();
    })
      .then(parsedRes => {
      if (!parsedRes['Global Quote']['05. price']) {
        throw new Error('Invalid Symbol!');
      }
      this.error = null;
      this.fetchedPrice = parsedRes['Global Quote']['05. price'];
      this.loading = false;
    })
      .catch(err => {
      //console.log(err);
      this.error = err.message;
      this.loading = false;
    });
  }
  /* só utilizar sem o <Host>*/
  // hostData() {
  //     return { class: this.error ? 'error' : '' };
  // }
  /* função padrão de renderização */
  render() {
    let dataContent = h("p", null, "Please insert a valid Stock Symbol");
    if (this.error) {
      dataContent = h("p", null, this.error);
    }
    else if (this.fetchedPrice) {
      dataContent = h("p", null,
        "Price: U$ ",
        this.fetchedPrice);
    }
    if (this.loading) {
      dataContent = h("brio-spinner", null);
    }
    return (h(Host, { class: this.error ? 'error' : '' },
      h("form", { onSubmit: this.onFetchStockPrice.bind(this) },
        h("input", { id: "stock-symbol", ref: el => this.stockInput = el, value: this.stockSymbolInputValue, onInput: this.onStockSymbolValueInput.bind(this) }),
        h("button", { type: "submit", disabled: !this.isStockSymbolValid }, "fetch")),
      h("div", null, dataContent)));
  }
  static get is() { return "brio-stock-price"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./stock-price.css"]
  }; }
  static get styleUrls() { return {
    "$": ["stock-price.css"]
  }; }
  static get properties() { return {
    "stockSymbol": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "stock-symbol",
      "reflect": true
    }
  }; }
  static get states() { return {
    "fetchedPrice": {},
    "stockSymbolInputValue": {},
    "isStockSymbolValid": {},
    "error": {},
    "loading": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "stockSymbol",
      "methodName": "stockSymbolChanged"
    }]; }
  static get listeners() { return [{
      "name": "brioStockSymbolClicked",
      "method": "onStockSymbolClicked",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
