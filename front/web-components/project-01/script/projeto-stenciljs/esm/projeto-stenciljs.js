import { p as promiseResolve, b as bootstrapLazy } from './index-e53c14de.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["brio-side-drawer_5",[[1,"brio-stock-finder",{"stockInput":[32],"searchResults":[32],"loading":[32]}],[1,"brio-stock-price",{"stockSymbol":[1537,"stock-symbol"],"fetchedPrice":[32],"stockSymbolInputValue":[32],"isStockSymbolValid":[32],"error":[32],"loading":[32]},[[16,"brioStockSymbolClicked","onStockSymbolClicked"]]],[1,"brio-side-drawer",{"titulo":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}],[1,"brio-tooltip",{"texto":[513],"icon":[513],"opened":[1540],"toogle":[64]}],[1,"brio-spinner"]]]], options);
});
