import { Component, Event, EventEmitter, h, Host, State } from "@stencil/core";
import { AV_API_KEY } from "../../global/global";
@Component({
    tag: 'brio-stock-finder',
    styleUrl: './stock-finder.css',
    shadow: true
})
export class StockFinder {
    @State() stockInput: HTMLInputElement;
    @State() searchResults: { name: string, symbol: string }[] = [];
    @State() loading = false;
    @Event({ bubbles: true, composed: true }) brioStockSymbolClicked: EventEmitter<string>;

    onFindStockSymbol(event: Event) {
        event.preventDefault();
        this.loading = true;
        const stockSymbol = this.stockInput.value;
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockSymbol}&apikey=${AV_API_KEY}`)
            .then(res => res.json())
            .then(parsedRef => {

                this.searchResults = parsedRef.bestMatches.map(match => {
                    return { name: match['2. name'], symbol: match['1. symbol'] }
                })
                console.log(this.searchResults);

                this.loading = false;
            }
            )
            .catch(err => {
                console.log(err)
                this.loading = false;
            });

    }

    onStockSymbolClicked(symbol: string) {
        this.brioStockSymbolClicked.emit(symbol);
    }

    render() {
        let content =
            <ul>
                {this.searchResults.map(el => {
                    return <li onClick={this.onStockSymbolClicked.bind(this, el.symbol)}><strong>{el.symbol}</strong> - {el.name}</li>;
                })}
            </ul>

        if (this.loading) {
            content = <brio-spinner></brio-spinner>
        }
        return <Host>
            <form onSubmit={this.onFindStockSymbol.bind(this)}>
                <input id="stock-symbol" type="text"
                    ref={el => this.stockInput = el}></input>
                <button type="submit">Find</button>
            </form>
            {content}
        </Host >;

    }
}