'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9a2ce51c.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["brio-side-drawer_5.cjs",[[1,"brio-stock-finder",{"stockInput":[32],"searchResults":[32],"loading":[32]}],[1,"brio-stock-price",{"stockSymbol":[1537,"stock-symbol"],"fetchedPrice":[32],"stockSymbolInputValue":[32],"isStockSymbolValid":[32],"error":[32],"loading":[32]},[[16,"brioStockSymbolClicked","onStockSymbolClicked"]]],[1,"brio-side-drawer",{"titulo":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}],[1,"brio-tooltip",{"texto":[513],"icon":[513],"opened":[1540],"toogle":[64]}],[1,"brio-spinner"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
