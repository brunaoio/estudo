import { Element, Component, h, Host, State, Prop, Watch, Listen } from "@stencil/core";
import { AV_API_KEY } from "../../global/global";
@Component({
    tag: 'brio-stock-price',
    styleUrl: './stock-price.css',
    shadow: true
})
export class StockPrice {
    @Element() el: HTMLElement;
    stockInput: HTMLInputElement;

    @State() fetchedPrice: number;
    @State() stockSymbolInputValue: string;
    @State() isStockSymbolValid = false;
    //@State() intialStockSymbol: string;
    @State() error: string;
    @State() loading = false;

    @Prop({ mutable: true, reflect: true }) stockSymbol: string;
    @Watch('stockSymbol')
    stockSymbolChanged(newValue: string, oldValue: string) {
        if (newValue !== oldValue) {
            this.stockSymbolInputValue = this.stockSymbol;
            this.isStockSymbolValid = true;
            this.fetchStockPrice(newValue);
        }
    }

    @Listen('brioStockSymbolClicked', { target: 'body' })
    onStockSymbolClicked(event: CustomEvent) {
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
            //this.fetchStockPrice(event.detail);
        }
    }

    //completando o 2way databind
    onStockSymbolValueInput(event: Event) {
        this.stockSymbolInputValue = (event.target as HTMLInputElement).value;
        if (this.stockSymbolInputValue.trim() !== '') {
            this.isStockSymbolValid = true;
        } else {
            this.isStockSymbolValid = false;
        }
    }

    onFetchStockPrice(event: Event) {
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


    fetchStockPrice(stockSymbol: string) {
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
        let dataContent = <p>Please insert a valid Stock Symbol</p>;
        if (this.error) {
            dataContent = <p>{this.error}</p>
        }
        else if (this.fetchedPrice) {
            dataContent = <p>Price: U$ {this.fetchedPrice}</p>;
        }

        if (this.loading) {
            dataContent = <brio-spinner></brio-spinner>;
        }
        return (
            <Host class={this.error ? 'error' : ''}>
                <form onSubmit={this.onFetchStockPrice.bind(this)}>
                    <input id="stock-symbol"
                        ref={el => this.stockInput = el}
                        value={this.stockSymbolInputValue}
                        onInput={this.onStockSymbolValueInput.bind(this)}
                    ></input>
                    <button type="submit" disabled={!this.isStockSymbolValid}>fetch</button>
                </form>
                <div>
                    {dataContent}
                </div>
            </Host >
        )
    }
}