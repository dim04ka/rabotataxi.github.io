// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/owl.carousel/dist/assets/owl.carousel.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./owl.video.play.png":[["owl.video.play.0094e0a6.png","node_modules/owl.carousel/dist/assets/owl.video.play.png"],"node_modules/owl.carousel/dist/assets/owl.video.play.png"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/owl.carousel/dist/assets/owl.theme.default.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/header.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\svg\\logo.svg":[["logo.c096ba17.svg","img/svg/logo.svg"],"img/svg/logo.svg"],"./..\\img\\svg\\burger.svg":[["burger.769913a0.svg","img/svg/burger.svg"],"img/svg/burger.svg"],"./..\\img\\header.png":[["header.848e1042.png","img/header.png"],"img/header.png"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/what.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\svg\\icon_mobile.svg":[["icon_mobile.bd9a9492.svg","img/svg/icon_mobile.svg"],"img/svg/icon_mobile.svg"],"./..\\img\\svg\\icon_mens.svg":[["icon_mens.f94d1501.svg","img/svg/icon_mens.svg"],"img/svg/icon_mens.svg"],"./..\\img\\svg\\icon_puzzle.svg":[["icon_puzzle.435cd6c9.svg","img/svg/icon_puzzle.svg"],"img/svg/icon_puzzle.svg"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/offer.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\line.png":[["line.1b394275.png","img/line.png"],"img/line.png"],"./..\\img\\svg\\icon_key.png":[["icon_key.116d8ef3.png","img/svg/icon_key.png"],"img/svg/icon_key.png"],"./..\\img\\svg\\icon_bag.png":[["icon_bag.d4445ad3.png","img/svg/icon_bag.png"],"img/svg/icon_bag.png"],"./..\\img\\svg\\icon_hammer.png":[["icon_hammer.e86fe509.png","img/svg/icon_hammer.png"],"img/svg/icon_hammer.png"],"./..\\img\\1.png":[["1.06f8af9e.png","img/1.png"],"img/1.png"],"./..\\img\\2.png":[["2.ec21867c.png","img/2.png"],"img/2.png"],"./..\\img\\3.png":[["3.5d1f2f90.png","img/3.png"],"img/3.png"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/akcija.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\auto.png":[["auto.cb0dc670.png","img/auto.png"],"img/auto.png"],"./..\\img\\brill.png":[["brill.cd529cc0.png","img/brill.png"],"img/brill.png"],"./..\\img\\money.png":[["money.c834e0cc.png","img/money.png"],"img/money.png"],"./..\\img\\machin.png":[["machin.80ef5705.png","img/machin.png"],"img/machin.png"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/dohod.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/work.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\arr-white.png":[["arr-white.bf667cf8.png","img/arr-white.png"],"img/arr-white.png"],"./..\\img\\arrow-right.png":[["arrow-right.d5331449.png","img/arrow-right.png"],"img/arrow-right.png"],"./..\\img\\laim.png":[["laim.e17c5566.png","img/laim.png"],"img/laim.png"],"./..\\img\\iq.png":[["iq.42b4fe66.png","img/iq.png"],"img/iq.png"],"./..\\img\\comandir.png":[["comandir.90b1056a.png","img/comandir.png"],"img/comandir.png"],"./..\\img\\135.png":[["135.7bc8473e.png","img/135.png"],"img/135.png"],"./..\\img\\v10.png":[["v10.896bc7b8.png","img/v10.png"],"img/v10.png"],"./..\\img\\euro.png":[["euro.392f81ce.png","img/euro.png"],"img/euro.png"],"./..\\img\\yandex.png":[["yandex.432f41f7.png","img/yandex.png"],"img/yandex.png"],"./..\\img\\uber.png":[["uber.e7662cc8.png","img/uber.png"],"img/uber.png"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/otziv.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\photo.png":[["photo.b906d612.png","img/photo.png"],"img/photo.png"],"./..\\img\\mid-photo.png":[["mid-photo.8885716d.png","img/mid-photo.png"],"img/mid-photo.png"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/friend.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\yandex.png":[["yandex.432f41f7.png","img/yandex.png"],"img/yandex.png"],"./..\\img\\laim.png":[["laim.e17c5566.png","img/laim.png"],"img/laim.png"],"./..\\img\\iq.png":[["iq.42b4fe66.png","img/iq.png"],"img/iq.png"],"./..\\img\\euro.png":[["euro.392f81ce.png","img/euro.png"],"img/euro.png"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/maps.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/footer.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\logo_footer.png":[["logo_footer.798d1207.png","img/logo_footer.png"],"img/logo_footer.png"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"../node_modules/owl.carousel/dist/assets/owl.carousel.css":"node_modules/owl.carousel/dist/assets/owl.carousel.css","../node_modules/owl.carousel/dist/assets/owl.theme.default.css":"node_modules/owl.carousel/dist/assets/owl.theme.default.css","../css/header.css":"css/header.css","../css/what.css":"css/what.css","../css/offer.css":"css/offer.css","../css/akcija.css":"css/akcija.css","../css/dohod.css":"css/dohod.css","../css/work.css":"css/work.css","../css/otziv.css":"css/otziv.css","../css/friend.css":"css/friend.css","../css/maps.css":"css/maps.css","../css/footer.css":"css/footer.css","./..\\fonts\\ProximaNova-Bold.woff":[["ProximaNova-Bold.95242004.woff","fonts/ProximaNova-Bold.woff"],"fonts/ProximaNova-Bold.woff"],"./..\\fonts\\ProximaNova-Black.woff":[["ProximaNova-Black.d423fd71.woff","fonts/ProximaNova-Black.woff"],"fonts/ProximaNova-Black.woff"],"./..\\fonts\\ProximaNova-Semibold.woff":[["ProximaNova-Semibold.4fb3007e.woff","fonts/ProximaNova-Semibold.woff"],"fonts/ProximaNova-Semibold.woff"],"./..\\fonts\\ProximaNova-Extrabld.woff":[["ProximaNova-Extrabld.ac522ce5.woff","fonts/ProximaNova-Extrabld.woff"],"fonts/ProximaNova-Extrabld.woff"],"_css_loader":"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63885" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/style.78032849.js.map