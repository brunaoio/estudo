import{r as t,h as o,c as i,H as n,g as e}from"./p-ea00ab8e.js";const r=class{constructor(o){t(this,o)}onCloseDrawer(){this.opened=!1}onChangeContent(t){this.showContactInfo="contact"===t}async open(){return this.opened=!0,this.opened}render(){let t=o("slot",null);return this.showContactInfo&&(t=o("div",{id:"contact-information"},o("h2",null,"Contact Information"),o("p",null,"You can reach us via phone or e-mail"),o("ul",null,o("li",null,"Phone: 55 21 974750921"),o("li",null,"E-mail: ",o("a",{href:"mailto:tocarj@gmail.com"},"tocarj@gmail.com"))))),[o("div",{class:"backdrop",onClick:this.onCloseDrawer.bind(this)}),o("aside",null,o("header",null,o("h1",null,this.titulo),o("button",{onClick:this.onCloseDrawer.bind(this)},"X")),o("section",{id:"tabs"},o("button",{class:this.showContactInfo?"":"active",onClick:this.onChangeContent.bind(this,"nav")},"Navigation"),o("button",{class:this.showContactInfo?"active":"",onClick:this.onChangeContent.bind(this,"contact")},"Contact")),o("main",null,t))]}};r.style="aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#ccc;box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);transition:left 0.5s ease-out;z-index:100}:host([opened]) aside{left:0}header button{color:white;font-size:1.3rem;font-weight:normal;padding:0 1rem;border:0;background:transparent;position:absolute;right:0;top:0;height:100%;cursor:pointer}header button:active{right:1px}header{padding:1rem;background:black;position:relative}header h1{font-size:1.5rem;color:white;margin:0}#tabs{display:flex;justify-content:center;width:100%;padding:0.9rem 0}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;font:inherit}#tabs button:hover,#tabs button:active,#tabs button.active{background:black;color:white}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0, 0, 0, 0.75);z-index:10;opacity:0;transition:opacity 0.5s ease-in-out;pointer-events:none}:host([opened]) .backdrop{opacity:1;pointer-events:all}";const a=class{constructor(o){t(this,o)}render(){return o("div",{class:"loadingio-spinner-spinner-wnqg7qibvjd"},o("div",{class:"ldio-2u0v215ve73"},o("div",null),o("div",null),o("div",null),o("div",null),o("div",null),o("div",null),o("div",null),o("div",null),o("div",null),o("div",null),o("div",null),o("div",null)))}};a.style="@keyframes ldio-2u0v215ve73{0%{opacity:1}100%{opacity:0}}.ldio-2u0v215ve73 div{left:47px;top:24px;position:absolute;animation:ldio-2u0v215ve73 linear 1s infinite;background:#fe718d;width:6px;height:12px;border-radius:3px / 6px;transform-origin:3px 26px}.ldio-2u0v215ve73 div:nth-child(1){transform:rotate(0deg);animation-delay:-0.9166666666666666s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(2){transform:rotate(30deg);animation-delay:-0.8333333333333334s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(3){transform:rotate(60deg);animation-delay:-0.75s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(4){transform:rotate(90deg);animation-delay:-0.6666666666666666s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(5){transform:rotate(120deg);animation-delay:-0.5833333333333334s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(6){transform:rotate(150deg);animation-delay:-0.5s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(7){transform:rotate(180deg);animation-delay:-0.4166666666666667s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(8){transform:rotate(210deg);animation-delay:-0.3333333333333333s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(9){transform:rotate(240deg);animation-delay:-0.25s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(10){transform:rotate(270deg);animation-delay:-0.16666666666666666s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(11){transform:rotate(300deg);animation-delay:-0.08333333333333333s;background:#fe718d}.ldio-2u0v215ve73 div:nth-child(12){transform:rotate(330deg);animation-delay:0s;background:#fe718d}.loadingio-spinner-spinner-wnqg7qibvjd{width:50px;height:50px;display:inline-block;overflow:hidden;background:#ffffff}.ldio-2u0v215ve73{width:100%;height:100%;position:relative;transform:translateZ(0) scale(0.5);backface-visibility:hidden;transform-origin:0 0;}.ldio-2u0v215ve73 div{box-sizing:content-box}";const l=class{constructor(o){t(this,o),this.brioStockSymbolClicked=i(this,"brioStockSymbolClicked",7),this.searchResults=[],this.loading=!1}onFindStockSymbol(t){t.preventDefault(),this.loading=!0,fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.stockInput.value}&apikey=C462Z9UUJ977HJ8N`).then((t=>t.json())).then((t=>{this.searchResults=t.bestMatches.map((t=>({name:t["2. name"],symbol:t["1. symbol"]}))),console.log(this.searchResults),this.loading=!1})).catch((t=>{console.log(t),this.loading=!1}))}onStockSymbolClicked(t){this.brioStockSymbolClicked.emit(t)}render(){let t=o("ul",null,this.searchResults.map((t=>o("li",{onClick:this.onStockSymbolClicked.bind(this,t.symbol)},o("strong",null,t.symbol)," - ",t.name))));return this.loading&&(t=o("brio-spinner",null)),o(n,null,o("form",{onSubmit:this.onFindStockSymbol.bind(this)},o("input",{id:"stock-symbol",type:"text",ref:t=>this.stockInput=t}),o("button",{type:"submit"},"Find")),t)}};l.style=":host{font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;display:block;padding:2rem}form input{font:inherit;color:var(--color-primary, black);display:block;margin-bottom:0.5rem}form input:focus{outline:none}form button{color:var(--color-secundary, blueviolet);border:var(--color-secundary, blueviolet);background:rgb(245, 119, 182);padding:0.5rem 1rem}form button:hover{background:var(--color-secundary-highlight, hotpink)}form button:active{color:white;border:white}form button:disabled{background:#ccc;color:#999}ul{margin:0;padding:0;list-style:none}li{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc}li:active,li:hover{cursor:pointer;color:var(--color-primary-inverse, white);background:var(--color-primary, black)}li:active{font-size:1.02rem}";const s=class{constructor(o){t(this,o),this.isStockSymbolValid=!1,this.loading=!1}stockSymbolChanged(t,o){t!==o&&(this.stockSymbolInputValue=this.stockSymbol,this.isStockSymbolValid=!0,this.fetchStockPrice(t))}onStockSymbolClicked(t){t.detail&&t.detail!==this.stockSymbol&&(this.stockSymbol=t.detail)}onStockSymbolValueInput(t){this.stockSymbolInputValue=t.target.value,this.isStockSymbolValid=""!==this.stockSymbolInputValue.trim()}onFetchStockPrice(t){t.preventDefault(),this.stockSymbol=this.stockSymbolInputValue}componentWillLoad(){console.log("componentWillLoad"),this.stockSymbol&&(this.stockSymbolInputValue=this.stockSymbol,this.isStockSymbolValid=!0,this.fetchStockPrice(this.stockSymbol))}componentDidLoad(){console.log("componentDidLoad")}componentWillUpdate(){console.log("componentWillUpdate")}componentDidUpdate(){}disconnectedCallback(){console.log("disconnectedCallback")}fetchStockPrice(t){this.loading=!0,fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${t}&apikey= + C462Z9UUJ977HJ8N`).then((t=>{if(200!==t.status)throw new Error("Server Error!");return t.json()})).then((t=>{if(!t["Global Quote"]["05. price"])throw new Error("Invalid Symbol!");this.error=null,this.fetchedPrice=t["Global Quote"]["05. price"],this.loading=!1})).catch((t=>{this.error=t.message,this.loading=!1}))}render(){let t=o("p",null,"Please insert a valid Stock Symbol");return this.error?t=o("p",null,this.error):this.fetchedPrice&&(t=o("p",null,"Price: U$ ",this.fetchedPrice)),this.loading&&(t=o("brio-spinner",null)),o(n,{class:this.error?"error":""},o("form",{onSubmit:this.onFetchStockPrice.bind(this)},o("input",{id:"stock-symbol",ref:t=>this.stockInput=t,value:this.stockSymbolInputValue,onInput:this.onStockSymbolValueInput.bind(this)}),o("button",{type:"submit",disabled:!this.isStockSymbolValid},"fetch")),o("div",null,t))}get el(){return e(this)}static get watchers(){return{stockSymbol:["stockSymbolChanged"]}}};s.style=":host{font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;display:block;padding:2rem}form input{font:inherit;color:var(--color-primary, black);display:block;margin-bottom:0.5rem}form input:focus{outline:none}form button{color:var(--color-secundary, blueviolet);border:var(--color-secundary, blueviolet);background:rgb(245, 119, 182);padding:0.5rem 1rem}form button:hover{background:hotpink}form button:active{color:var(--color-primary-inverse, white);border:var(--color-primary-inverse, white)}form button:disabled{background:#ccc;color:#999}:host(.error){border-color:red}";const d=class{constructor(o){t(this,o),this.icon="?",this.opened=!1}async toogle(){return this.opened=!this.opened,this.opened}render(){return o("host",null,o("slot",null),o("span",{id:"icon",onClick:this.toogle.bind(this)},this.icon),o("div",{id:"texto-tooltip"},this.texto))}};d.style=":host{position:relative;display:block;width:fit-content}:host([opened]) #texto-tooltip{opacity:1;pointer-events:all}#icon{background:black;border-radius:3rem;color:white;margin:0 0.5rem 0rem;position:relative;padding:0 0.5rem;top:-0.3rem;right:0;cursor:pointer}#texto-tooltip{background:#000;color:white;position:absolute;top:1.5rem;right:0.5rem;width:45%;padding:0.3rem;opacity:0;pointer-events:none;transition:opacity 0.2s ease-out}";export{r as brio_side_drawer,a as brio_spinner,l as brio_stock_finder,s as brio_stock_price,d as brio_tooltip}