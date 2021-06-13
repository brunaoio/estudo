import { r as registerInstance, h, c as createEvent, H as Host, g as getElement } from './index-e53c14de.js';

const sideDrawerCss = "aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#ccc;box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);transition:left 0.5s ease-out;z-index:100}:host([opened]) aside{left:0}header button{color:white;font-size:1.3rem;font-weight:normal;padding:0 1rem;border:0;background:transparent;position:absolute;right:0;top:0;height:100%;cursor:pointer}header button:active{right:1px}header{padding:1rem;background:black;position:relative}header h1{font-size:1.5rem;color:white;margin:0}#tabs{display:flex;justify-content:center;width:100%;padding:0.9rem 0}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;font:inherit}#tabs button:hover,#tabs button:active,#tabs button.active{background:black;color:white}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0, 0, 0, 0.75);z-index:10;opacity:0;transition:opacity 0.5s ease-in-out;pointer-events:none}:host([opened]) .backdrop{opacity:1;pointer-events:all}";

const SideDrawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onCloseDrawer() {
    this.opened = false;
  }
  onChangeContent(content) {
    this.showContactInfo = content === 'contact';
  }
  async open() {
    this.opened = true;
    return this.opened;
  }
  render() {
    let mainContent = h("slot", null);
    if (this.showContactInfo) {
      mainContent = (h("div", { id: "contact-information" }, h("h2", null, "Contact Information"), h("p", null, "You can reach us via phone or e-mail"), h("ul", null, h("li", null, "Phone: 55 21 974750921"), h("li", null, "E-mail: ", h("a", { href: "mailto:tocarj@gmail.com" }, "tocarj@gmail.com")))));
    }
    return ([h("div", { class: "backdrop", onClick: this.onCloseDrawer.bind(this) }),
      h("aside", null, h("header", null, h("h1", null, this.titulo), h("button", { onClick: this.onCloseDrawer.bind(this) }, "X")), h("section", { id: "tabs" }, h("button", { class: !this.showContactInfo ? 'active' : '', onClick: this.onChangeContent.bind(this, 'nav') }, "Navigation"), h("button", { class: this.showContactInfo ? 'active' : '', onClick: this.onChangeContent.bind(this, 'contact') }, "Contact")), h("main", null, mainContent))]);
    // let content = null;
    // if (this.open) {
    //     content = (
    //         <aside>
    //             <header>
    //                 <h1>{this.titulo}</h1>
    //             </header>
    //             <main>
    //                 <slot></slot>
    //             </main>
    //         </aside>);
    // }
    // return content;
  }
};
SideDrawer.style = sideDrawerCss;

const spinnerCss = "@keyframes ldio-2u0v215ve73{0%{opacity:1}100%{opacity:0}}.ldio-2u0v215ve73 div{left:47px;top:24px;position:absolute;animation:ldio-2u0v215ve73 linear 1s infinite;background:#fe718d;width:6px;height:12px;border-radius:3px / 6px;transform-origin:3px 26px}.ldio-2u0v215ve73 div:nth-child(1){transform:rotate(0deg);animation-delay:-0.9166666666666666s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(2){transform:rotate(30deg);animation-delay:-0.8333333333333334s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(3){transform:rotate(60deg);animation-delay:-0.75s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(4){transform:rotate(90deg);animation-delay:-0.6666666666666666s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(5){transform:rotate(120deg);animation-delay:-0.5833333333333334s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(6){transform:rotate(150deg);animation-delay:-0.5s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(7){transform:rotate(180deg);animation-delay:-0.4166666666666667s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(8){transform:rotate(210deg);animation-delay:-0.3333333333333333s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(9){transform:rotate(240deg);animation-delay:-0.25s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(10){transform:rotate(270deg);animation-delay:-0.16666666666666666s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(11){transform:rotate(300deg);animation-delay:-0.08333333333333333s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(12){transform:rotate(330deg);animation-delay:0s;background:#fe718d}.loadingio-spinner-spinner-wnqg7qibvjd{width:50px;height:50px;display:inline-block;overflow:hidden;background:#ffffff}.ldio-2u0v215ve73{width:100%;height:100%;position:relative;transform:translateZ(0) scale(0.5);backface-visibility:hidden;transform-origin:0 0;}.ldio-2u0v215ve73 div{box-sizing:content-box}";

const Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", { class: "loadingio-spinner-spinner-wnqg7qibvjd" }, h("div", { class: "ldio-2u0v215ve73" }, h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null)));
  }
};
Spinner.style = spinnerCss;

const AV_API_KEY = 'C462Z9UUJ977HJ8N';

const stockFinderCss = ":host{font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;display:block;padding:2rem}form input{font:inherit;color:var(--color-primary, black);display:block;margin-bottom:0.5rem}form input:focus{outline:none}form button{color:var(--color-secundary, blueviolet);border:var(--color-secundary, blueviolet);background:rgb(245, 119, 182);padding:0.5rem 1rem}form button:hover{background:var(--color-secundary-highlight, hotpink)}form button:active{color:white;border:white}form button:disabled{background:#ccc;color:#999}ul{margin:0;padding:0;list-style:none}li{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc}li:active,li:hover{cursor:pointer;color:var(--color-primary-inverse, white);background:var(--color-primary, black)}li:active{font-size:1.02rem}";

const StockFinder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.brioStockSymbolClicked = createEvent(this, "brioStockSymbolClicked", 7);
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
      return h("li", { onClick: this.onStockSymbolClicked.bind(this, el.symbol) }, h("strong", null, el.symbol), " - ", el.name);
    }));
    if (this.loading) {
      content = h("brio-spinner", null);
    }
    return h(Host, null, h("form", { onSubmit: this.onFindStockSymbol.bind(this) }, h("input", { id: "stock-symbol", type: "text", ref: el => this.stockInput = el }), h("button", { type: "submit" }, "Find")), content);
  }
};
StockFinder.style = stockFinderCss;

const stockPriceCss = ":host{font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;display:block;padding:2rem}form input{font:inherit;color:var(--color-primary, black);display:block;margin-bottom:0.5rem}form input:focus{outline:none}form button{color:var(--color-secundary, blueviolet);border:var(--color-secundary, blueviolet);background:rgb(245, 119, 182);padding:0.5rem 1rem}form button:hover{background:hotpink}form button:active{color:var(--color-primary-inverse, white);border:var(--color-primary-inverse, white)}form button:disabled{background:#ccc;color:#999}:host(.error){border-color:red}";

const StockPrice = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      dataContent = h("p", null, "Price: U$ ", this.fetchedPrice);
    }
    if (this.loading) {
      dataContent = h("brio-spinner", null);
    }
    return (h(Host, { class: this.error ? 'error' : '' }, h("form", { onSubmit: this.onFetchStockPrice.bind(this) }, h("input", { id: "stock-symbol", ref: el => this.stockInput = el, value: this.stockSymbolInputValue, onInput: this.onStockSymbolValueInput.bind(this) }), h("button", { type: "submit", disabled: !this.isStockSymbolValid }, "fetch")), h("div", null, dataContent)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "stockSymbol": ["stockSymbolChanged"]
  }; }
};
StockPrice.style = stockPriceCss;

const tooltipCss = ":host{position:relative;display:block;width:fit-content}:host([opened]) #texto-tooltip{opacity:1;pointer-events:all}#icon{background:black;border-radius:3rem;color:white;margin:0 0.5rem 0rem;position:relative;padding:0 0.5rem;top:-0.3rem;right:0;cursor:pointer}#texto-tooltip{background:#000;color:white;position:absolute;top:1.5rem;right:0.5rem;width:45%;padding:0.3rem;opacity:0;pointer-events:none;transition:opacity 0.2s ease-out}";

const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = "?";
    this.opened = false;
  }
  async toogle() {
    this.opened = !this.opened;
    return this.opened;
    //console.log(this.opened);
  }
  render() {
    return (h("host", null, h("slot", null), h("span", { id: "icon", onClick: this.toogle.bind(this) }, this.icon), h("div", { id: "texto-tooltip" }, this.texto)));
  }
};
Tooltip.style = tooltipCss;

export { SideDrawer as brio_side_drawer, Spinner as brio_spinner, StockFinder as brio_stock_finder, StockPrice as brio_stock_price, Tooltip as brio_tooltip };
