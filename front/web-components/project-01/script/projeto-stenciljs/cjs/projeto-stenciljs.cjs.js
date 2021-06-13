'use strict';

const index = require('./index-9a2ce51c.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('projeto-stenciljs.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["brio-side-drawer_5.cjs",[[1,"brio-stock-finder",{"stockInput":[32],"searchResults":[32],"loading":[32]}],[1,"brio-stock-price",{"stockSymbol":[1537,"stock-symbol"],"fetchedPrice":[32],"stockSymbolInputValue":[32],"isStockSymbolValid":[32],"error":[32],"loading":[32]},[[16,"brioStockSymbolClicked","onStockSymbolClicked"]]],[1,"brio-side-drawer",{"titulo":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}],[1,"brio-tooltip",{"texto":[513],"icon":[513],"opened":[1540],"toogle":[64]}],[1,"brio-spinner"]]]], options);
});
