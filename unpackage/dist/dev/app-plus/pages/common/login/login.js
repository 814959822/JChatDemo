"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),

/***/ 11:
/*!******************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/store/modules/audio.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n  state: {\n    // 存放全局事件\n    events: [],\n    // 录音器\n    RECORD: null,\n    // 录音时间\n    RecordTime: 0,\n    // 计时器\n    RECORDTIMER: null,\n    sendVoice: null },\n\n\n  mutations: {\n    initRECORD: function initRECORD(state) {\n      state.RECORD = uni.getRecorderManager();\n      // 录音开始\n      state.RECORD.onStart(function () {\n        state.RecordTime = 0;\n        state.RECORDTIMER = setInterval(function () {\n          state.RecordTime++;\n        }, 1000);\n\n      }),\n\n      // 监听录音结束\n      state.RECORD.onStop(function (e) {\n        if (state.RECORDTIMER) {\n          clearInterval(state.RECORDTIMER);\n          state.RECORDTIMER = null;\n        }\n        // 执行发送\n        if (typeof state.sendVoice === 'function') {\n          state.sendVoice(e.tempFilePath);\n        }\n\n\n      });\n    },\n    // 注册发送音频事件\n    regSendVoiceEvent: function regSendVoiceEvent(state, event) {\n      state.sendVoice = event;\n    },\n    // 注册全局事件\n    regEvent: function regEvent(state, event) {\n      state.events.push(event);\n    },\n    // 执行\n    doEvent: function doEvent(state, params) {\n      state.events.forEach(function (e) {\n        e(params);\n      });\n    },\n    // 注销\n    removeEvent: function removeEvent(state, event) {\n      var index = state.events.findIndex(function (item) {\n        return item === event;\n      });\n      if (index !== -1) {\n        state.events.splice(index, 1);\n      }\n    } },\n\n  actions: {\n    // 分发注册全局事件\n    audioOn: function audioOn(_ref, event) {var commit = _ref.commit;\n      commit('regEvent', event);\n    },\n    // 分发执行全局事件\n    audioEmit: function audioEmit(_ref2, params) {var commit = _ref2.commit;\n      commit('doEvent', params);\n    },\n    // 分发注销全局事件\n    audioOff: function audioOff(_ref3, event) {var commit = _ref3.commit;\n      commit('removeEvent', event);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9hdWRpby5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImV2ZW50cyIsIlJFQ09SRCIsIlJlY29yZFRpbWUiLCJSRUNPUkRUSU1FUiIsInNlbmRWb2ljZSIsIm11dGF0aW9ucyIsImluaXRSRUNPUkQiLCJ1bmkiLCJnZXRSZWNvcmRlck1hbmFnZXIiLCJvblN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJvblN0b3AiLCJlIiwiY2xlYXJJbnRlcnZhbCIsInRlbXBGaWxlUGF0aCIsInJlZ1NlbmRWb2ljZUV2ZW50IiwiZXZlbnQiLCJyZWdFdmVudCIsInB1c2giLCJkb0V2ZW50IiwicGFyYW1zIiwiZm9yRWFjaCIsInJlbW92ZUV2ZW50IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwiYWN0aW9ucyIsImF1ZGlvT24iLCJjb21taXQiLCJhdWRpb0VtaXQiLCJhdWRpb09mZiJdLCJtYXBwaW5ncyI6InNHQUFlO0FBQ2RBLE9BQUssRUFBQztBQUNMO0FBQ0FDLFVBQU0sRUFBQyxFQUZGO0FBR0w7QUFDQUMsVUFBTSxFQUFDLElBSkY7QUFLTDtBQUNBQyxjQUFVLEVBQUMsQ0FOTjtBQU9MO0FBQ0FDLGVBQVcsRUFBQyxJQVJQO0FBU0xDLGFBQVMsRUFBQyxJQVRMLEVBRFE7OztBQWFkQyxXQUFTLEVBQUM7QUFDVEMsY0FEUyxzQkFDRVAsS0FERixFQUNRO0FBQ2hCQSxXQUFLLENBQUNFLE1BQU4sR0FBYU0sR0FBRyxDQUFDQyxrQkFBSixFQUFiO0FBQ0E7QUFDQVQsV0FBSyxDQUFDRSxNQUFOLENBQWFRLE9BQWIsQ0FBcUIsWUFBTTtBQUMxQlYsYUFBSyxDQUFDRyxVQUFOLEdBQW1CLENBQW5CO0FBQ0FILGFBQUssQ0FBQ0ksV0FBTixHQUFvQk8sV0FBVyxDQUFDLFlBQU07QUFDckNYLGVBQUssQ0FBQ0csVUFBTjtBQUNBLFNBRjhCLEVBRTVCLElBRjRCLENBQS9COztBQUlBLE9BTkQ7O0FBUUE7QUFDQUgsV0FBSyxDQUFDRSxNQUFOLENBQWFVLE1BQWIsQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQzFCLFlBQUliLEtBQUssQ0FBQ0ksV0FBVixFQUF1QjtBQUN0QlUsdUJBQWEsQ0FBQ2QsS0FBSyxDQUFDSSxXQUFQLENBQWI7QUFDQUosZUFBSyxDQUFDSSxXQUFOLEdBQW9CLElBQXBCO0FBQ0E7QUFDRDtBQUNBLFlBQUcsT0FBT0osS0FBSyxDQUFDSyxTQUFiLEtBQXlCLFVBQTVCLEVBQXVDO0FBQ3RDTCxlQUFLLENBQUNLLFNBQU4sQ0FBZ0JRLENBQUMsQ0FBQ0UsWUFBbEI7QUFDQTs7O0FBR0QsT0FYRCxDQVRBO0FBcUJBLEtBekJRO0FBMEJUO0FBQ0FDLHFCQTNCUyw2QkEyQlNoQixLQTNCVCxFQTJCZWlCLEtBM0JmLEVBMkJxQjtBQUM3QmpCLFdBQUssQ0FBQ0ssU0FBTixHQUFnQlksS0FBaEI7QUFDQSxLQTdCUTtBQThCVDtBQUNBQyxZQS9CUyxvQkErQkFsQixLQS9CQSxFQStCTWlCLEtBL0JOLEVBK0JZO0FBQ3BCakIsV0FBSyxDQUFDQyxNQUFOLENBQWFrQixJQUFiLENBQWtCRixLQUFsQjtBQUNBLEtBakNRO0FBa0NUO0FBQ0FHLFdBbkNTLG1CQW1DRHBCLEtBbkNDLEVBbUNLcUIsTUFuQ0wsRUFtQ1k7QUFDcEJyQixXQUFLLENBQUNDLE1BQU4sQ0FBYXFCLE9BQWIsQ0FBcUIsVUFBQVQsQ0FBQyxFQUFFO0FBQ3ZCQSxTQUFDLENBQUNRLE1BQUQsQ0FBRDtBQUNBLE9BRkQ7QUFHQSxLQXZDUTtBQXdDVDtBQUNBRSxlQXpDUyx1QkF5Q0d2QixLQXpDSCxFQXlDU2lCLEtBekNULEVBeUNlO0FBQ3ZCLFVBQUlPLEtBQUssR0FBR3hCLEtBQUssQ0FBQ0MsTUFBTixDQUFhd0IsU0FBYixDQUF1QixVQUFBQyxJQUFJLEVBQUU7QUFDeEMsZUFBT0EsSUFBSSxLQUFJVCxLQUFmO0FBQ0EsT0FGVyxDQUFaO0FBR0EsVUFBR08sS0FBSyxLQUFHLENBQUMsQ0FBWixFQUFjO0FBQ2J4QixhQUFLLENBQUNDLE1BQU4sQ0FBYTBCLE1BQWIsQ0FBb0JILEtBQXBCLEVBQTBCLENBQTFCO0FBQ0E7QUFDRCxLQWhEUSxFQWJJOztBQStEZEksU0FBTyxFQUFDO0FBQ1A7QUFDQUMsV0FGTyx5QkFFVVosS0FGVixFQUVnQixLQUFkYSxNQUFjLFFBQWRBLE1BQWM7QUFDdEJBLFlBQU0sQ0FBQyxVQUFELEVBQVliLEtBQVosQ0FBTjtBQUNBLEtBSk07QUFLUDtBQUNBYyxhQU5PLDRCQU1ZVixNQU5aLEVBTW1CLEtBQWZTLE1BQWUsU0FBZkEsTUFBZTtBQUN6QkEsWUFBTSxDQUFDLFNBQUQsRUFBV1QsTUFBWCxDQUFOO0FBQ0EsS0FSTTtBQVNQO0FBQ0FXLFlBVk8sMkJBVVdmLEtBVlgsRUFVaUIsS0FBZGEsTUFBYyxTQUFkQSxNQUFjO0FBQ3ZCQSxZQUFNLENBQUMsYUFBRCxFQUFlYixLQUFmLENBQU47QUFDQSxLQVpNLEVBL0RNLEUiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cdHN0YXRlOntcblx0XHQvLyDlrZjmlL7lhajlsYDkuovku7Zcblx0XHRldmVudHM6W10sXG5cdFx0Ly8g5b2V6Z+z5ZmoXG5cdFx0UkVDT1JEOm51bGwsXG5cdFx0Ly8g5b2V6Z+z5pe26Ze0XG5cdFx0UmVjb3JkVGltZTowLFxuXHRcdC8vIOiuoeaXtuWZqFxuXHRcdFJFQ09SRFRJTUVSOm51bGwsXG5cdFx0c2VuZFZvaWNlOm51bGxcblx0XHRcblx0fSxcblx0bXV0YXRpb25zOntcblx0XHRpbml0UkVDT1JEKHN0YXRlKXtcblx0XHRcdHN0YXRlLlJFQ09SRD11bmkuZ2V0UmVjb3JkZXJNYW5hZ2VyKClcblx0XHRcdC8vIOW9lemfs+W8gOWni1xuXHRcdFx0c3RhdGUuUkVDT1JELm9uU3RhcnQoKCkgPT4ge1xuXHRcdFx0XHRzdGF0ZS5SZWNvcmRUaW1lID0gMFxuXHRcdFx0XHRzdGF0ZS5SRUNPUkRUSU1FUiA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRzdGF0ZS5SZWNvcmRUaW1lKytcblx0XHRcdFx0fSwgMTAwMClcblx0XHRcdFxuXHRcdFx0fSksXG5cdFx0XHRcblx0XHRcdC8vIOebkeWQrOW9lemfs+e7k+adn1xuXHRcdFx0c3RhdGUuUkVDT1JELm9uU3RvcCgoZSkgPT4ge1xuXHRcdFx0XHRpZiAoc3RhdGUuUkVDT1JEVElNRVIpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHN0YXRlLlJFQ09SRFRJTUVSKVxuXHRcdFx0XHRcdHN0YXRlLlJFQ09SRFRJTUVSID0gbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIOaJp+ihjOWPkemAgVxuXHRcdFx0XHRpZih0eXBlb2Ygc3RhdGUuc2VuZFZvaWNlPT09J2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0c3RhdGUuc2VuZFZvaWNlKGUudGVtcEZpbGVQYXRoKVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDms6jlhozlj5HpgIHpn7PpopHkuovku7Zcblx0XHRyZWdTZW5kVm9pY2VFdmVudChzdGF0ZSxldmVudCl7XG5cdFx0XHRzdGF0ZS5zZW5kVm9pY2U9ZXZlbnRcblx0XHR9LFxuXHRcdC8vIOazqOWGjOWFqOWxgOS6i+S7tlxuXHRcdHJlZ0V2ZW50KHN0YXRlLGV2ZW50KXtcblx0XHRcdHN0YXRlLmV2ZW50cy5wdXNoKGV2ZW50KVxuXHRcdH0sXG5cdFx0Ly8g5omn6KGMXG5cdFx0ZG9FdmVudChzdGF0ZSxwYXJhbXMpe1xuXHRcdFx0c3RhdGUuZXZlbnRzLmZvckVhY2goZT0+e1xuXHRcdFx0XHRlKHBhcmFtcylcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDms6jplIBcblx0XHRyZW1vdmVFdmVudChzdGF0ZSxldmVudCl7XG5cdFx0XHRsZXQgaW5kZXggPSBzdGF0ZS5ldmVudHMuZmluZEluZGV4KGl0ZW09Pntcblx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09ZXZlbnRcblx0XHRcdH0pXG5cdFx0XHRpZihpbmRleCE9PS0xKXtcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnNwbGljZShpbmRleCwxKVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0YWN0aW9uczp7XG5cdFx0Ly8g5YiG5Y+R5rOo5YaM5YWo5bGA5LqL5Lu2XG5cdFx0YXVkaW9Pbih7Y29tbWl0fSxldmVudCl7XG5cdFx0XHRjb21taXQoJ3JlZ0V2ZW50JyxldmVudClcblx0XHR9LFxuXHRcdC8vIOWIhuWPkeaJp+ihjOWFqOWxgOS6i+S7tlxuXHRcdGF1ZGlvRW1pdCh7Y29tbWl0fSxwYXJhbXMpe1xuXHRcdFx0Y29tbWl0KCdkb0V2ZW50JyxwYXJhbXMpXG5cdFx0fSxcblx0XHQvLyDliIblj5Hms6jplIDlhajlsYDkuovku7Zcblx0XHRhdWRpb09mZih7Y29tbWl0fSxldmVudCl7XG5cdFx0XHRjb21taXQoJ3JlbW92ZUV2ZW50JyxldmVudClcblx0XHR9XG5cdH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),

/***/ 12:
/*!*****************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/store/modules/user.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _util = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/util.js */ 13));\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/request.js */ 15));\nvar _chat = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/chat.js */ 16));\nvar _config = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/config.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var _default =\n{\n  state: {\n    user: false,\n    apply: {\n      rows: [],\n      count: 0 },\n\n    mailList: [],\n    chat: null,\n    // 会话列表\n    chatList: [],\n    // 总未读数\n    totalNoreadnum: 0,\n    notice: {\n      avatar: \"\",\n      user_id: 0,\n      num: 0 } },\n\n\n  mutations: {\n    updateUser: function updateUser(state, _ref)\n\n\n    {var k = _ref.k,v = _ref.v;\n      if (state.user) {\n        state.user[k] = v;\n        _util.default.setStorage('user', JSON.stringify(state.user));\n      }\n    } },\n\n  actions: {\n    // 登陆后处理\n    login: function login(_ref2,\n\n\n    user) {var state = _ref2.state,dispatch = _ref2.dispatch;\n      // 存到状态中\n      state.user = user;\n      // 存储到本地存储中\n      _util.default.setStorage('token', user.token);\n      _util.default.setStorage('user', JSON.stringify(user));\n      _util.default.setStorage('user_id', user.id);\n      dispatch('getApply');\n      // 连接socket\n      state.chat = new _chat.default({\n        url: _config.default.socketUrl });\n\n      // 获取会话列表\n      dispatch('getChatList');\n      //初始化总未读数角标\n      dispatch('updateBadge');\n      // 获取朋友圈动态通知\n      dispatch('getNotice');\n    },\n    // 退出登陆\n    logout: function logout(_ref3)\n\n    {var state = _ref3.state;\n      // 清除状态\n      state.user = false;\n      // 清空存储\n      _util.default.removeStorage('token');\n      _util.default.removeStorage('user');\n      _util.default.removeStorage('user_id');\n      // 关闭socket连接\n      if (state.chat) {\n        state.chat.close();\n        state.chat = null;\n      }\n      // 跳转到登陆\n      uni.reLaunch({\n        url: '/pages/common/login/login' });\n\n      // 注销监听事件\n      uni.$off('onUpdateChatList');\n      uni.$off('momentNotice');\n      uni.$off('totalNoreadnum');\n    },\n    // 初始化登陆状态\n    initLogin: function initLogin(_ref4)\n\n\n    {var state = _ref4.state,dispatch = _ref4.dispatch;\n      // 拿到存储\n      var user = _util.default.getStorage('user');\n      if (user) {\n        // 初始化登陆状态\n        state.user = JSON.parse(user);\n        // 连接socket\n        state.chat = new _chat.default({\n          url: _config.default.socketUrl });\n\n        // 获取会话列表\n        dispatch('getChatList');\n        // 获取登陆状态\n        // 获取好友申请\n        dispatch('getApply');\n        //初始化总未读数角标\n        dispatch('updateBadge');\n        // 获取朋友圈动态通知\n        dispatch('getNotice');\n\n      }\n    },\n    // 获取好友申请列表\n    getApply: function getApply(_ref5)\n\n\n    {var state = _ref5.state,dispatch = _ref5.dispatch;var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n      // console.log('2')\n      _request.default.get('/apply/' + page).then(function (res) {\n        // console.log(res)\n        if (page === 1) {\n          state.apply = res;\n        } else {\n          state.apply.rows = [].concat(_toConsumableArray(state.apply.rows), _toConsumableArray(res.rows));\n          state.apply.count = res.count;\n        }\n        // 更新通讯录角标提示\n        dispatch('updateMailBagde');\n      });\n    },\n    // 更新通讯录角标提示\n    updateMailBagde: function updateMailBagde(_ref6)\n\n    {var state = _ref6.state;\n      var count = state.apply.count > 99 ? '99+' : state.apply.count.toString();\n      if (state.apply.count > 0) {\n        return uni.setTabBarBadge({\n          index: 1,\n          text: count });\n\n      }\n      uni.removeTabBarBadge({\n        index: 1 });\n\n    },\n    // 获取通讯录列表\n    getMailList: function getMailList(_ref7)\n\n    {var state = _ref7.state;\n      _request.default.get('/friend/list').then(function (res) {\n        state.mailList = res.rows.newList ? res.rows.newList : [];\n      });\n    },\n    // 获取会话列表\n    getChatList: function getChatList(_ref8)\n\n    {var state = _ref8.state;\n      state.chatList = state.chat.getChatList();\n      // 监听会话列表\n      uni.$on('onUpdateChatList', function (list) {\n        state.chatList = list;\n      });\n    },\n    // 获取朋友圈动态通知\n    getNotice: function getNotice(_ref9)\n\n    {var state = _ref9.state;\n      // console.log('11=====');\n\n      state.notice = state.chat.getNotice();\n      // console.log(state.notice)\n      if (state.notice.num > 0) {\n        uni.setTabBarBadge({\n          index: 2,\n          text: state.notice.num > 99 ? '···' : state.notice.num.toString() });\n\n      } else if (state.notice.user_id) {\n        uni.showTabBarRedDot({\n          index: 2 });\n\n      } else {\n        uni.removeTabBarBadge({\n          index: 2 });\n\n      }\n      uni.$on('momentNotice', function (notice) {\n        state.notice = notice;\n      });\n    },\n    //初始化总未读数角标\n    updateBadge: function updateBadge(_ref10)\n\n    {var state = _ref10.state;\n      // 开启监听总未读数变化\n      uni.$on('totalNoreadnum', function (num) {\n        state.totalNoreadnum = num;\n      });\n      state.chat.updateBadge();\n    },\n    // 断线自动重连\n    reconnect: function reconnect(_ref11)\n\n    {var state = _ref11.state;\n      if (state.user && state.chat) {\n        state.chat.reconnect();\n      }\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy91c2VyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwidXNlciIsImFwcGx5Iiwicm93cyIsImNvdW50IiwibWFpbExpc3QiLCJjaGF0IiwiY2hhdExpc3QiLCJ0b3RhbE5vcmVhZG51bSIsIm5vdGljZSIsImF2YXRhciIsInVzZXJfaWQiLCJudW0iLCJtdXRhdGlvbnMiLCJ1cGRhdGVVc2VyIiwiayIsInYiLCIkVSIsInNldFN0b3JhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiYWN0aW9ucyIsImxvZ2luIiwiZGlzcGF0Y2giLCJ0b2tlbiIsImlkIiwiQ2hhdCIsInVybCIsIiRDIiwic29ja2V0VXJsIiwibG9nb3V0IiwicmVtb3ZlU3RvcmFnZSIsImNsb3NlIiwidW5pIiwicmVMYXVuY2giLCIkb2ZmIiwiaW5pdExvZ2luIiwiZ2V0U3RvcmFnZSIsInBhcnNlIiwiZ2V0QXBwbHkiLCJwYWdlIiwiJEgiLCJnZXQiLCJ0aGVuIiwicmVzIiwidXBkYXRlTWFpbEJhZ2RlIiwidG9TdHJpbmciLCJzZXRUYWJCYXJCYWRnZSIsImluZGV4IiwidGV4dCIsInJlbW92ZVRhYkJhckJhZGdlIiwiZ2V0TWFpbExpc3QiLCJuZXdMaXN0IiwiZ2V0Q2hhdExpc3QiLCIkb24iLCJsaXN0IiwiZ2V0Tm90aWNlIiwic2hvd1RhYkJhclJlZERvdCIsInVwZGF0ZUJhZGdlIiwicmVjb25uZWN0Il0sIm1hcHBpbmdzIjoidUZBQUE7QUFDQTtBQUNBO0FBQ0EsaUc7QUFDZTtBQUNkQSxPQUFLLEVBQUU7QUFDTkMsUUFBSSxFQUFFLEtBREE7QUFFTkMsU0FBSyxFQUFFO0FBQ05DLFVBQUksRUFBRSxFQURBO0FBRU5DLFdBQUssRUFBRSxDQUZELEVBRkQ7O0FBTU5DLFlBQVEsRUFBRSxFQU5KO0FBT05DLFFBQUksRUFBRSxJQVBBO0FBUU47QUFDQUMsWUFBUSxFQUFFLEVBVEo7QUFVTjtBQUNBQyxrQkFBYyxFQUFFLENBWFY7QUFZTkMsVUFBTSxF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QUFHLENBQUN3QixnQkFBSixDQUFxQjtBQUNwQlQsZUFBSyxFQUFFLENBRGEsRUFBckI7O0FBR0EsT0FKTSxNQUlBO0FBQ05mLFdBQUcsQ0FBQ2lCLGlCQUFKLENBQXNCO0FBQ3JCRixlQUFLLEVBQUUsQ0FEYyxFQUF0Qjs7QUFHQTtBQUNEZixTQUFHLENBQUNxQixHQUFKLENBQVEsY0FBUixFQUF3QixVQUFDN0MsTUFBRCxFQUFZO0FBQ25DVCxhQUFLLENBQUNTLE1BQU4sR0FBZUEsTUFBZjtBQUNBLE9BRkQ7QUFHQSxLQXRKTztBQXVKUjtBQUNBaUQsZUF4SlE7O0FBMEpMLFNBREYxRCxLQUNFLFVBREZBLEtBQ0U7QUFDRjtBQUNBaUMsU0FBRyxDQUFDcUIsR0FBSixDQUFRLGdCQUFSLEVBQTBCLFVBQUMxQyxHQUFELEVBQVM7QUFDbENaLGFBQUssQ0FBQ1EsY0FBTixHQUF1QkksR0FBdkI7QUFDQSxPQUZEO0FBR0FaLFdBQUssQ0FBQ00sSUFBTixDQUFXb0QsV0FBWDtBQUNBLEtBaEtPO0FBaUtSO0FBQ0FDLGFBbEtROztBQW9LTCxTQURGM0QsS0FDRSxVQURGQSxLQUNFO0FBQ0YsVUFBSUEsS0FBSyxDQUFDQyxJQUFOLElBQWNELEtBQUssQ0FBQ00sSUFBeEIsRUFBOEI7QUFDN0JOLGFBQUssQ0FBQ00sSUFBTixDQUFXcUQsU0FBWDtBQUNBO0FBQ0QsS0F4S08sRUE5QkssRSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkVSBmcm9tIFwiQC9jb21tb24vZnJlZS1saWIvdXRpbC5qc1wiXG5pbXBvcnQgJEggZnJvbSBcIkAvY29tbW9uL2ZyZWUtbGliL3JlcXVlc3QuanNcIlxuaW1wb3J0IENoYXQgZnJvbSBcIkAvY29tbW9uL2ZyZWUtbGliL2NoYXQuanNcIlxuaW1wb3J0ICRDIGZyb20gXCJAL2NvbW1vbi9mcmVlLWxpYi9jb25maWcuanNcIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRzdGF0ZToge1xuXHRcdHVzZXI6IGZhbHNlLFxuXHRcdGFwcGx5OiB7XG5cdFx0XHRyb3dzOiBbXSxcblx0XHRcdGNvdW50OiAwXG5cdFx0fSxcblx0XHRtYWlsTGlzdDogW10sXG5cdFx0Y2hhdDogbnVsbCxcblx0XHQvLyDkvJror53liJfooahcblx0XHRjaGF0TGlzdDogW10sXG5cdFx0Ly8g5oC75pyq6K+75pWwXG5cdFx0dG90YWxOb3JlYWRudW06IDAsXG5cdFx0bm90aWNlOiB7XG5cdFx0XHRhdmF0YXI6IFwiXCIsXG5cdFx0XHR1c2VyX2lkOiAwLFxuXHRcdFx0bnVtOiAwXG5cdFx0fVxuXHR9LFxuXHRtdXRhdGlvbnM6IHtcblx0XHR1cGRhdGVVc2VyKHN0YXRlLCB7XG5cdFx0XHRrLFxuXHRcdFx0dlxuXHRcdH0pIHtcblx0XHRcdGlmIChzdGF0ZS51c2VyKSB7XG5cdFx0XHRcdHN0YXRlLnVzZXJba10gPSB2XG5cdFx0XHRcdCRVLnNldFN0b3JhZ2UoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShzdGF0ZS51c2VyKSlcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGFjdGlvbnM6IHtcblx0XHQvLyDnmbvpmYblkI7lpITnkIZcblx0XHRsb2dpbih7XG5cdFx0XHRzdGF0ZSxcblx0XHRcdGRpc3BhdGNoXG5cdFx0fSwgdXNlcikge1xuXHRcdFx0Ly8g5a2Y5Yiw54q25oCB5LitXG5cdFx0XHRzdGF0ZS51c2VyID0gdXNlclxuXHRcdFx0Ly8g5a2Y5YKo5Yiw5pys5Zyw5a2Y5YKo5LitXG5cdFx0XHQkVS5zZXRTdG9yYWdlKCd0b2tlbicsIHVzZXIudG9rZW4pXG5cdFx0XHQkVS5zZXRTdG9yYWdlKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG5cdFx0XHQkVS5zZXRTdG9yYWdlKCd1c2VyX2lkJywgdXNlci5pZClcblx0XHRcdGRpc3BhdGNoKCdnZXRBcHBseScpXG5cdFx0XHQvLyDov57mjqVzb2NrZXRcblx0XHRcdHN0YXRlLmNoYXQgPSBuZXcgQ2hhdCh7XG5cdFx0XHRcdHVybDogJEMuc29ja2V0VXJsXG5cdFx0XHR9KVxuXHRcdFx0Ly8g6I635Y+W5Lya6K+d5YiX6KGoXG5cdFx0XHRkaXNwYXRjaCgnZ2V0Q2hhdExpc3QnKVxuXHRcdFx0Ly/liJ3lp4vljJbmgLvmnKror7vmlbDop5LmoIdcblx0XHRcdGRpc3BhdGNoKCd1cGRhdGVCYWRnZScpXG5cdFx0XHQvLyDojrflj5bmnIvlj4vlnIjliqjmgIHpgJrnn6Vcblx0XHRcdGRpc3BhdGNoKCdnZXROb3RpY2UnKVxuXHRcdH0sXG5cdFx0Ly8g6YCA5Ye655m76ZmGXG5cdFx0bG9nb3V0KHtcblx0XHRcdHN0YXRlXG5cdFx0fSkge1xuXHRcdFx0Ly8g5riF6Zmk54q25oCBXG5cdFx0XHRzdGF0ZS51c2VyID0gZmFsc2Vcblx0XHRcdC8vIOa4heepuuWtmOWCqFxuXHRcdFx0JFUucmVtb3ZlU3RvcmFnZSgndG9rZW4nKVxuXHRcdFx0JFUucmVtb3ZlU3RvcmFnZSgndXNlcicpXG5cdFx0XHQkVS5yZW1vdmVTdG9yYWdlKCd1c2VyX2lkJylcblx0XHRcdC8vIOWFs+mXrXNvY2tldOi/nuaOpVxuXHRcdFx0aWYgKHN0YXRlLmNoYXQpIHtcblx0XHRcdFx0c3RhdGUuY2hhdC5jbG9zZSgpXG5cdFx0XHRcdHN0YXRlLmNoYXQgPSBudWxsXG5cdFx0XHR9XG5cdFx0XHQvLyDot7PovazliLDnmbvpmYZcblx0XHRcdHVuaS5yZUxhdW5jaCh7XG5cdFx0XHRcdHVybDogJy9wYWdlcy9jb21tb24vbG9naW4vbG9naW4nXG5cdFx0XHR9KVxuXHRcdFx0Ly8g5rOo6ZSA55uR5ZCs5LqL5Lu2XG5cdFx0XHR1bmkuJG9mZignb25VcGRhdGVDaGF0TGlzdCcpXG5cdFx0XHR1bmkuJG9mZignbW9tZW50Tm90aWNlJylcblx0XHRcdHVuaS4kb2ZmKCd0b3RhbE5vcmVhZG51bScpXG5cdFx0fSxcblx0XHQvLyDliJ3lp4vljJbnmbvpmYbnirbmgIFcblx0XHRpbml0TG9naW4oe1xuXHRcdFx0c3RhdGUsXG5cdFx0XHRkaXNwYXRjaFxuXHRcdH0pIHtcblx0XHRcdC8vIOaLv+WIsOWtmOWCqFxuXHRcdFx0bGV0IHVzZXIgPSAkVS5nZXRTdG9yYWdlKCd1c2VyJylcblx0XHRcdGlmICh1c2VyKSB7XG5cdFx0XHRcdC8vIOWIneWni+WMlueZu+mZhueKtuaAgVxuXHRcdFx0XHRzdGF0ZS51c2VyID0gSlNPTi5wYXJzZSh1c2VyKVxuXHRcdFx0XHQvLyDov57mjqVzb2NrZXRcblx0XHRcdFx0c3RhdGUuY2hhdCA9IG5ldyBDaGF0KHtcblx0XHRcdFx0XHR1cmw6ICRDLnNvY2tldFVybFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyDojrflj5bkvJror53liJfooahcblx0XHRcdFx0ZGlzcGF0Y2goJ2dldENoYXRMaXN0Jylcblx0XHRcdFx0Ly8g6I635Y+W55m76ZmG54q25oCBXG5cdFx0XHRcdC8vIOiOt+WPluWlveWPi+eUs+ivt1xuXHRcdFx0XHRkaXNwYXRjaCgnZ2V0QXBwbHknKVxuXHRcdFx0XHQvL+WIneWni+WMluaAu+acquivu+aVsOinkuagh1xuXHRcdFx0XHRkaXNwYXRjaCgndXBkYXRlQmFkZ2UnKVxuXHRcdFx0XHQvLyDojrflj5bmnIvlj4vlnIjliqjmgIHpgJrnn6Vcblx0XHRcdFx0ZGlzcGF0Y2goJ2dldE5vdGljZScpXG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIOiOt+WPluWlveWPi+eUs+ivt+WIl+ihqFxuXHRcdGdldEFwcGx5KHtcblx0XHRcdHN0YXRlLFxuXHRcdFx0ZGlzcGF0Y2hcblx0XHR9LCBwYWdlID0gMSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJzInKVxuXHRcdFx0JEguZ2V0KCcvYXBwbHkvJyArIHBhZ2UpLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKVxuXHRcdFx0XHRpZiAocGFnZSA9PT0gMSkge1xuXHRcdFx0XHRcdHN0YXRlLmFwcGx5ID0gcmVzXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3RhdGUuYXBwbHkucm93cyA9IFsuLi5zdGF0ZS5hcHBseS5yb3dzLCAuLi5yZXMucm93c11cblx0XHRcdFx0XHRzdGF0ZS5hcHBseS5jb3VudCA9IHJlcy5jb3VudFxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIOabtOaWsOmAmuiur+W9leinkuagh+aPkOekulxuXHRcdFx0XHRkaXNwYXRjaCgndXBkYXRlTWFpbEJhZ2RlJylcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDmm7TmlrDpgJrorq/lvZXop5LmoIfmj5DnpLpcblx0XHR1cGRhdGVNYWlsQmFnZGUoe1xuXHRcdFx0c3RhdGVcblx0XHR9KSB7XG5cdFx0XHRsZXQgY291bnQgPSBzdGF0ZS5hcHBseS5jb3VudCA+IDk5ID8gJzk5KycgOiBzdGF0ZS5hcHBseS5jb3VudC50b1N0cmluZygpXG5cdFx0XHRpZiAoc3RhdGUuYXBwbHkuY291bnQgPiAwKSB7XG5cdFx0XHRcdHJldHVybiB1bmkuc2V0VGFiQmFyQmFkZ2Uoe1xuXHRcdFx0XHRcdGluZGV4OiAxLFxuXHRcdFx0XHRcdHRleHQ6IGNvdW50XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHR1bmkucmVtb3ZlVGFiQmFyQmFkZ2Uoe1xuXHRcdFx0XHRpbmRleDogMVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOiOt+WPlumAmuiur+W9leWIl+ihqFxuXHRcdGdldE1haWxMaXN0KHtcblx0XHRcdHN0YXRlXG5cdFx0fSkge1xuXHRcdFx0JEguZ2V0KCcvZnJpZW5kL2xpc3QnKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdHN0YXRlLm1haWxMaXN0ID0gcmVzLnJvd3MubmV3TGlzdCA/IHJlcy5yb3dzLm5ld0xpc3QgOiBbXVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOiOt+WPluS8muivneWIl+ihqFxuXHRcdGdldENoYXRMaXN0KHtcblx0XHRcdHN0YXRlXG5cdFx0fSkge1xuXHRcdFx0c3RhdGUuY2hhdExpc3QgPSBzdGF0ZS5jaGF0LmdldENoYXRMaXN0KClcblx0XHRcdC8vIOebkeWQrOS8muivneWIl+ihqFxuXHRcdFx0dW5pLiRvbignb25VcGRhdGVDaGF0TGlzdCcsIChsaXN0KSA9PiB7XG5cdFx0XHRcdHN0YXRlLmNoYXRMaXN0ID0gbGlzdFxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOiOt+WPluaci+WPi+WciOWKqOaAgemAmuefpVxuXHRcdGdldE5vdGljZSh7XG5cdFx0XHRzdGF0ZVxuXHRcdH0pIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCcxMT09PT09Jyk7XG5cblx0XHRcdHN0YXRlLm5vdGljZSA9IHN0YXRlLmNoYXQuZ2V0Tm90aWNlKClcblx0XHRcdC8vIGNvbnNvbGUubG9nKHN0YXRlLm5vdGljZSlcblx0XHRcdGlmIChzdGF0ZS5ub3RpY2UubnVtID4gMCkge1xuXHRcdFx0XHR1bmkuc2V0VGFiQmFyQmFkZ2Uoe1xuXHRcdFx0XHRcdGluZGV4OiAyLFxuXHRcdFx0XHRcdHRleHQ6IHN0YXRlLm5vdGljZS5udW0gPiA5OSA/ICfCt8K3wrcnIDogc3RhdGUubm90aWNlLm51bS50b1N0cmluZygpXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRlLm5vdGljZS51c2VyX2lkKSB7XG5cdFx0XHRcdHVuaS5zaG93VGFiQmFyUmVkRG90KHtcblx0XHRcdFx0XHRpbmRleDogMlxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dW5pLnJlbW92ZVRhYkJhckJhZGdlKHtcblx0XHRcdFx0XHRpbmRleDogMlxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0dW5pLiRvbignbW9tZW50Tm90aWNlJywgKG5vdGljZSkgPT4ge1xuXHRcdFx0XHRzdGF0ZS5ub3RpY2UgPSBub3RpY2Vcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvL+WIneWni+WMluaAu+acquivu+aVsOinkuagh1xuXHRcdHVwZGF0ZUJhZGdlKHtcblx0XHRcdHN0YXRlXG5cdFx0fSkge1xuXHRcdFx0Ly8g5byA5ZCv55uR5ZCs5oC75pyq6K+75pWw5Y+Y5YyWXG5cdFx0XHR1bmkuJG9uKCd0b3RhbE5vcmVhZG51bScsIChudW0pID0+IHtcblx0XHRcdFx0c3RhdGUudG90YWxOb3JlYWRudW0gPSBudW1cblx0XHRcdH0pXG5cdFx0XHRzdGF0ZS5jaGF0LnVwZGF0ZUJhZGdlKClcblx0XHR9LFxuXHRcdC8vIOaWree6v+iHquWKqOmHjei/nlxuXHRcdHJlY29ubmVjdCh7XG5cdFx0XHRzdGF0ZVxuXHRcdH0pIHtcblx0XHRcdGlmIChzdGF0ZS51c2VyICYmIHN0YXRlLmNoYXQpIHtcblx0XHRcdFx0c3RhdGUuY2hhdC5yZWNvbm5lY3QoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),

/***/ 13:
/*!*******************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/common/free-lib/util.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =\n{\n  // 获取存储列表数据\n  getStorage: function getStorage(key) {\n    var data = null;\n\n\n\n\n\n\n\n\n    data = uni.getStorageSync(key);\n\n    return data;\n  },\n  // 设置存储\n  setStorage: function setStorage(key, data) {\n\n\n\n\n\n\n\n\n    return uni.setStorageSync(key, data);\n\n  },\n  // 删除存储\n  removeStorage: function removeStorage(key) {\n\n\n\n\n\n\n\n\n    return uni.removeStorageSync(key);\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ZyZWUtbGliL3V0aWwuanMiXSwibmFtZXMiOlsiZ2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2UiLCJzZXRTdG9yYWdlU3luYyIsInJlbW92ZVN0b3JhZ2UiLCJyZW1vdmVTdG9yYWdlU3luYyJdLCJtYXBwaW5ncyI6InVGQUFBLGlGO0FBQ2U7QUFDWDtBQUNBQSxZQUZXLHNCQUVBQyxHQUZBLEVBRUk7QUFDWCxRQUFJQyxJQUFJLEdBQUcsSUFBWDs7Ozs7Ozs7O0FBU0FBLFFBQUksR0FBR0MsR0FBRyxDQUFDQyxjQUFKLENBQW1CSCxHQUFuQixDQUFQOztBQUVBLFdBQU9DLElBQVA7QUFDSCxHQWZVO0FBZ0JYO0FBQ0FHLFlBakJXLHNCQWlCQUosR0FqQkEsRUFpQklDLElBakJKLEVBaUJTOzs7Ozs7Ozs7QUFTdEIsV0FBT0MsR0FBRyxDQUFDRyxjQUFKLENBQW1CTCxHQUFuQixFQUF1QkMsSUFBdkIsQ0FBUDs7QUFFRyxHQTVCVTtBQTZCWDtBQUNBSyxlQTlCVyx5QkE4QkdOLEdBOUJILEVBOEJPOzs7Ozs7Ozs7QUFTcEIsV0FBT0UsR0FBRyxDQUFDSyxpQkFBSixDQUFzQlAsR0FBdEIsQ0FBUDs7QUFFRyxHQXpDVSxFIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICRDIGZyb20gJy4vY29uZmlnLmpzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIOiOt+WPluWtmOWCqOWIl+ihqOaVsOaNrlxuICAgIGdldFN0b3JhZ2Uoa2V5KXtcbiAgICAgICAgbGV0IGRhdGEgPSBudWxsO1xuXG5cblxuXG5cblxuXG5cbiAgICAgICAgZGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYyhrZXkpXG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9LFxuICAgIC8vIOiuvue9ruWtmOWCqFxuICAgIHNldFN0b3JhZ2Uoa2V5LGRhdGEpe1xuXG5cblxuXG5cblxuXG5cblx0XHRyZXR1cm4gdW5pLnNldFN0b3JhZ2VTeW5jKGtleSxkYXRhKVxuXG4gICAgfSxcbiAgICAvLyDliKDpmaTlrZjlgqhcbiAgICByZW1vdmVTdG9yYWdlKGtleSl7XG5cblxuXG5cblxuXG5cblxuXHRcdHJldHVybiB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoa2V5KVxuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),

/***/ 14:
/*!*********************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/common/free-lib/config.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n\n  baseUrl: \"http://192.168.0.10:7001\",\n\n\n\n\n\n  socketUrl: \"ws://192.168.0.10:7001/ws\",\n\n  env: \"dev\",\n\n  codeUrl: \"http://192.168.0.10:7001\",\n\n  // 表情包线上路径\n  emoticonUrl: \"http://wechath5.dishait.cn/static/images/emoticon/5497/\" };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ZyZWUtbGliL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwic29ja2V0VXJsIiwiZW52IiwiY29kZVVybCIsImVtb3RpY29uVXJsIl0sIm1hcHBpbmdzIjoic0dBQWU7O0FBRVhBLFNBQU8sRUFBQywwQkFGRzs7Ozs7O0FBUVhDLFdBQVMsRUFBQywyQkFSQzs7QUFVWEMsS0FBRyxFQUFDLEtBVk87O0FBWWRDLFNBQU8sRUFBQywwQkFaTTs7QUFjZDtBQUNBQyxhQUFXLEVBQUMseURBZkUsRSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGJhc2VVcmw6XCJodHRwOi8vMTkyLjE2OC4wLjEwOjcwMDFcIixcblxuXG5cblxuXG4gICAgc29ja2V0VXJsOlwid3M6Ly8xOTIuMTY4LjAuMTA6NzAwMS93c1wiLFxuXHRcbiAgICBlbnY6XCJkZXZcIixcblx0XG5cdGNvZGVVcmw6XCJodHRwOi8vMTkyLjE2OC4wLjEwOjcwMDFcIixcblx0XG5cdC8vIOihqOaDheWMhee6v+S4iui3r+W+hFxuXHRlbW90aWNvblVybDpcImh0dHA6Ly93ZWNoYXRoNS5kaXNoYWl0LmNuL3N0YXRpYy9pbWFnZXMvZW1vdGljb24vNTQ5Ny9cIlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),

/***/ 15:
/*!**********************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/common/free-lib/request.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 14));\nvar _util = _interopRequireDefault(__webpack_require__(/*! ./util.js */ 13));\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n{\n  // 全局配置\n  common: {\n    baseUrl: _config.default.baseUrl,\n    header: {\n      'Content-Type': 'application/json;charset=UTF-8' },\n\n    data: {},\n    method: 'GET',\n    dataType: 'json',\n    token: true },\n\n  // 请求 返回promise\n  request: function request() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // 组织参数\n    options.url = this.common.baseUrl + options.url;\n    options.header = options.header || this.common.header;\n    options.data = options.data || this.common.data;\n    options.method = options.method || this.common.method;\n    options.dataType = options.dataType || this.common.dataType;\n    options.token = options.token === false ? false : this.common.token;\n\n    // 请求之前验证...\n    // token验证\n    if (options.token) {\n      var token = _util.default.getStorage('token');\n      // 二次验证\n      if (!token) {\n        uni.showToast({\n          title: '请先登录',\n          icon: 'none' });\n\n        // token不存在时跳转\n        return uni.reLaunch({\n          url: '/pages/common/login/login' });\n\n      }\n      // 往header头中添加token\n      options.header.token = token;\n    }\n\n    // 请求\n    return new Promise(function (res, rej) {\n      // 请求中...\n      uni.request(_objectSpread(_objectSpread({},\n      options), {}, {\n        success: function success(result) {\n          // console.log(result);\n          // 返回原始数据\n          if (options.native) {\n            return res(result);\n          }\n          // 服务端失败\n          if (result.statusCode !== 200) {\n            if (options.toast !== false) {\n              uni.showToast({\n                title: result.data.data || '服务端失败',\n                icon: 'none' });\n\n            }\n            // token不合法，直接退出登录\n            if (result.data.data === 'Token令牌不合法') {\n              uni.showModal({\n                title: \"设备登陆异常\",\n                content: \"您的微信账号在另一台设备登录，如果不是您操作，请修改密码\",\n                showCancel: false,\n                success: function success(res) {\n                  if (res.confirm) {\n                    _index.default.dispatch('logout');\n                  }\n                } });\n\n\n            }\n            return rej(result.data);\n          }\n          // 其他验证...\n          // 成功\n          var data = result.data.data;\n          res(data);\n        },\n        fail: function fail(error) {\n          uni.showToast({\n            title: error.errMsg || '请求失败',\n            icon: 'none' });\n\n          return rej(error);\n        } }));\n\n    });\n  },\n  // get请求\n  get: function get(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.url = url;\n    options.data = data;\n    options.method = 'GET';\n    return this.request(options);\n  },\n  // post请求\n  post: function post(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.url = url;\n    options.data = data;\n    options.method = 'POST';\n    return this.request(options);\n  },\n  // delete请求\n  del: function del(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.url = url;\n    options.data = data;\n    options.method = 'DELETE';\n    return this.request(options);\n  },\n  // 上传文件\n  upload: function upload(url, data) {var _this = this;var onProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    return new Promise(function (result, reject) {\n      // 上传\n      var token = _util.default.getStorage('token');\n      if (!token) {\n        uni.showToast({\n          title: '请先登录',\n          icon: 'none' });\n\n        // token不存在时跳转\n        return uni.reLaunch({\n          url: '/pages/common/login/login' });\n\n      }\n\n      var uploadTask = uni.uploadFile({\n        url: _this.common.baseUrl + url,\n        filePath: data.filePath,\n        name: data.name || \"files\",\n        header: {\n          token: token },\n\n        success: function success(res) {\n          if (res.statusCode !== 200) {\n            result(false);\n            return uni.showToast({\n              title: '上传失败',\n              icon: 'none' });\n\n          }\n          var message = JSON.parse(res.data);\n          result(message.data);\n        },\n        fail: function fail(err) {\n          // console.log(err);\n          reject(err);\n        } });\n\n\n      uploadTask.onProgressUpdate(function (res) {\n        if (typeof onProgress === 'function') {\n          onProgress(res.progress);\n        }\n      });\n\n    });\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ZyZWUtbGliL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiY29tbW9uIiwiYmFzZVVybCIsIiRDIiwiaGVhZGVyIiwiZGF0YSIsIm1ldGhvZCIsImRhdGFUeXBlIiwidG9rZW4iLCJyZXF1ZXN0Iiwib3B0aW9ucyIsInVybCIsIiRVIiwiZ2V0U3RvcmFnZSIsInVuaSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInJlTGF1bmNoIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuYXRpdmUiLCJzdGF0dXNDb2RlIiwidG9hc3QiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm0iLCIkc3RvcmUiLCJkaXNwYXRjaCIsImZhaWwiLCJlcnJvciIsImVyck1zZyIsImdldCIsInBvc3QiLCJkZWwiLCJ1cGxvYWQiLCJvblByb2dyZXNzIiwicmVqZWN0IiwidXBsb2FkVGFzayIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwib25Qcm9ncmVzc1VwZGF0ZSIsInByb2dyZXNzIl0sIm1hcHBpbmdzIjoidUZBQUE7QUFDQTtBQUNBLG9GO0FBQ2U7QUFDZDtBQUNBQSxRQUFNLEVBQUU7QUFDUEMsV0FBTyxFQUFFQyxnQkFBR0QsT0FETDtBQUVQRSxVQUFNLEVBQUU7QUFDUCxzQkFBZ0IsZ0NBRFQsRUFGRDs7QUFLUEMsUUFBSSxFQUFFLEVBTEM7QUFNUEMsVUFBTSxFQUFFLEtBTkQ7QUFPUEMsWUFBUSxFQUFFLE1BUEg7QUFRUEMsU0FBSyxFQUFFLElBUkEsRUFGTTs7QUFZZDtBQUNBQyxTQWJjLHFCQWFRLEtBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUNyQjtBQUNBQSxXQUFPLENBQUNDLEdBQVIsR0FBYyxLQUFLVixNQUFMLENBQVlDLE9BQVosR0FBc0JRLE9BQU8sQ0FBQ0MsR0FBNUM7QUFDQUQsV0FBTyxDQUFD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VUFBMUIsRUFBc0M7QUFDckNBLG9CQUFVLENBQUNwQixHQUFHLENBQUMrQixRQUFMLENBQVY7QUFDQTtBQUNELE9BSkQ7O0FBTUEsS0E1Q00sQ0FBUDtBQTZDQSxHQS9KYSxFIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICRDIGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCAkVSBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0ICRzdG9yZSBmcm9tICdAL3N0b3JlL2luZGV4LmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcblx0Ly8g5YWo5bGA6YWN572uXG5cdGNvbW1vbjoge1xuXHRcdGJhc2VVcmw6ICRDLmJhc2VVcmwsXG5cdFx0aGVhZGVyOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXG5cdFx0fSxcblx0XHRkYXRhOiB7fSxcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0dG9rZW46IHRydWVcblx0fSxcblx0Ly8g6K+35rGCIOi/lOWbnnByb21pc2Vcblx0cmVxdWVzdChvcHRpb25zID0ge30pIHtcblx0XHQvLyDnu4Tnu4flj4LmlbBcblx0XHRvcHRpb25zLnVybCA9IHRoaXMuY29tbW9uLmJhc2VVcmwgKyBvcHRpb25zLnVybFxuXHRcdG9wdGlvbnMuaGVhZGVyID0gb3B0aW9ucy5oZWFkZXIgfHwgdGhpcy5jb21tb24uaGVhZGVyXG5cdFx0b3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhIHx8IHRoaXMuY29tbW9uLmRhdGFcblx0XHRvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IHRoaXMuY29tbW9uLm1ldGhvZFxuXHRcdG9wdGlvbnMuZGF0YVR5cGUgPSBvcHRpb25zLmRhdGFUeXBlIHx8IHRoaXMuY29tbW9uLmRhdGFUeXBlXG5cdFx0b3B0aW9ucy50b2tlbiA9IG9wdGlvbnMudG9rZW4gPT09IGZhbHNlID8gZmFsc2UgOiB0aGlzLmNvbW1vbi50b2tlblxuXG5cdFx0Ly8g6K+35rGC5LmL5YmN6aqM6K+BLi4uXG5cdFx0Ly8gdG9rZW7pqozor4Fcblx0XHRpZiAob3B0aW9ucy50b2tlbikge1xuXHRcdFx0bGV0IHRva2VuID0gJFUuZ2V0U3RvcmFnZSgndG9rZW4nKVxuXHRcdFx0Ly8g5LqM5qyh6aqM6K+BXG5cdFx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdHRpdGxlOiAn6K+35YWI55m75b2VJyxcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIHRva2Vu5LiN5a2Y5Zyo5pe26Lez6L2sXG5cdFx0XHRcdHJldHVybiB1bmkucmVMYXVuY2goe1xuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9jb21tb24vbG9naW4vbG9naW4nLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIOW+gGhlYWRlcuWktOS4rea3u+WKoHRva2VuXG5cdFx0XHRvcHRpb25zLmhlYWRlci50b2tlbiA9IHRva2VuXG5cdFx0fVxuXG5cdFx0Ly8g6K+35rGCXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuXHRcdFx0Ly8g6K+35rGC5LitLi4uXG5cdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0XHRcdC8vIOi/lOWbnuWOn+Wni+aVsOaNrlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm5hdGl2ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlcyhyZXN1bHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIOacjeWKoeerr+Wksei0pVxuXHRcdFx0XHRcdGlmIChyZXN1bHQuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy50b2FzdCAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLmRhdGEgfHwgJ+acjeWKoeerr+Wksei0pScsXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gdG9rZW7kuI3lkIjms5XvvIznm7TmjqXpgIDlh7rnmbvlvZVcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5kYXRhID09PSAnVG9rZW7ku6TniYzkuI3lkIjms5UnKSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuiuvuWkh+eZu+mZhuW8guW4uFwiLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwi5oKo55qE5b6u5L+h6LSm5Y+35Zyo5Y+m5LiA5Y+w6K6+5aSH55m75b2V77yM5aaC5p6c5LiN5piv5oKo5pON5L2c77yM6K+35L+u5pS55a+G56CBXCIsXG5cdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRzdG9yZS5kaXNwYXRjaCgnbG9nb3V0Jylcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiByZWoocmVzdWx0LmRhdGEpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIOWFtuS7lumqjOivgS4uLlxuXHRcdFx0XHRcdC8vIOaIkOWKn1xuXHRcdFx0XHRcdGxldCBkYXRhID0gcmVzdWx0LmRhdGEuZGF0YVxuXHRcdFx0XHRcdHJlcyhkYXRhKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiBlcnJvci5lcnJNc2cgfHwgJ+ivt+axguWksei0pScsXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gcmVqKGVycm9yKVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9LFxuXHQvLyBnZXTor7fmsYJcblx0Z2V0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcblx0XHRvcHRpb25zLnVybCA9IHVybFxuXHRcdG9wdGlvbnMuZGF0YSA9IGRhdGFcblx0XHRvcHRpb25zLm1ldGhvZCA9ICdHRVQnXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKVxuXHR9LFxuXHQvLyBwb3N06K+35rGCXG5cdHBvc3QodXJsLCBkYXRhID0ge30sIG9wdGlvbnMgPSB7fSkge1xuXHRcdG9wdGlvbnMudXJsID0gdXJsXG5cdFx0b3B0aW9ucy5kYXRhID0gZGF0YVxuXHRcdG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKVxuXHR9LFxuXHQvLyBkZWxldGXor7fmsYJcblx0ZGVsKHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcblx0XHRvcHRpb25zLnVybCA9IHVybFxuXHRcdG9wdGlvbnMuZGF0YSA9IGRhdGFcblx0XHRvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKVxuXHR9LFxuXHQvLyDkuIrkvKDmlofku7Zcblx0dXBsb2FkKHVybCwgZGF0YSwgb25Qcm9ncmVzcyA9IGZhbHNlKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXN1bHQsIHJlamVjdCkgPT4ge1xuXHRcdFx0Ly8g5LiK5LygXG5cdFx0XHRsZXQgdG9rZW4gPSAkVS5nZXRTdG9yYWdlKCd0b2tlbicpXG5cdFx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdHRpdGxlOiAn6K+35YWI55m75b2VJyxcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0fSk7XG5cdFx0XHQgLy8gdG9rZW7kuI3lrZjlnKjml7bot7Povaxcblx0XHRcdFx0cmV0dXJuIHVuaS5yZUxhdW5jaCh7XG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2NvbW1vbi9sb2dpbi9sb2dpbicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB1cGxvYWRUYXNrID0gdW5pLnVwbG9hZEZpbGUoe1xuXHRcdFx0XHR1cmw6IHRoaXMuY29tbW9uLmJhc2VVcmwgKyB1cmwsXG5cdFx0XHRcdGZpbGVQYXRoOiBkYXRhLmZpbGVQYXRoLFxuXHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUgfHwgXCJmaWxlc1wiLFxuXHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHR0b2tlblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlICE9PSAyMDApIHtcblx0XHRcdFx0XHRcdHJlc3VsdChmYWxzZSlcblx0XHRcdFx0XHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuIrkvKDlpLHotKUnLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IEpTT04ucGFyc2UocmVzLmRhdGEpXG5cdFx0XHRcdFx0cmVzdWx0KG1lc3NhZ2UuZGF0YSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cblx0XHRcdHVwbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XG5cdFx0XHRcdGlmICh0eXBlb2Ygb25Qcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdG9uUHJvZ3Jlc3MocmVzLnByb2dyZXNzKVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),

/***/ 16:
/*!*******************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/common/free-lib/chat.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));var _util = _interopRequireDefault(__webpack_require__(/*! ./util.js */ 13));\nvar _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 15));\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var\n\nchat = /*#__PURE__*/function () {\n  function chat(arg) {_classCallCheck(this, chat);\n    this.url = arg.url;\n    this.isOnline = false;\n    this.socket = null;\n    this.reconnectTime = 0;\n    this.isOnpenReconnect = true;\n    // 获取当前用户相关信息\n    var user = _util.default.getStorage('user');\n    this.user = user ? JSON.parse(user) : {},\n    // 初始化聊天对象\n    this.TO = false;\n    this.platform = uni.getSystemInfoSync().platform;\n    // 创建提示音\n    this.bgAudioManager = uni.getBackgroundAudioManager();\n    // 连接监听\n    if (this.user.token) {\n      this.connectSocket();\n    }\n  }\n  // 断线重连\n  _createClass(chat, [{ key: \"reconnect\", value: function reconnect() {\n      if (this.isOnline) {\n        return;\n      }\n      if (this.reconnectTime > 3) {\n        return this.reconnectConfirm();\n      }\n      this.reconnectTime += 1;\n      this.connectSocket();\n    }\n    // 连接socket\n  }, { key: \"connectSocket\", value: function connectSocket() {var _this = this;\n      this.socket = uni.connectSocket({\n        url: this.url + \"?token=\" + this.user.token,\n        complete: function complete() {\n\n        } });\n\n      // 监听连接成功\n      this.socket.onOpen(function () {return _this.onOpen();});\n      // 监听接收信息\n      this.socket.onMessage(function (res) {return _this.onMessage(res);});\n      // 监听断开\n      this.socket.onClose(function () {return _this.onClose();});\n      // 监听错误\n      this.socket.onError(function () {return _this.onError();});\n\n    }\n    // 监听打开\n  }, { key: \"onOpen\", value: function onOpen() {\n      // 用户上线\n      this.isOnline = true;\n      // console.log('socket连接成功')\n      this.isOnpenReconnect = true;\n      // 获取用户离线消息\n      this.getMessage();\n    }\n    // 获取离线消息\n  }, { key: \"getMessage\", value: function getMessage() {\n      _request.default.post('/chat/getmessage');\n    }\n    // 监听关闭\n  }, { key: \"onClose\", value: function onClose() {\n      // 用户下线\n      this.isOnline = false;\n      this.socket = null;\n      if (this.isOnpenReconnect) {\n        this.reconnect();\n      }\n      // this.isOnpenReconnect = false\n      // console.log('socket连接关闭')\n    }\n    // 监听接收消息\n  }, { key: \"onMessage\", value: function onMessage(data) {\n      var res = JSON.parse(data.data);\n      // console.log('监听接收消息', res)\n      // 错误\n      switch (res.msg) {\n        case 'fail':\n          return uni.showToast({\n            title: res.data,\n            icon: 'none' });\n\n          break;\n        case 'recall': //撤回\n          this.handleOnRecall(res.data);\n          break;\n        case 'updateApplyList': //新的好友申请\n          _index.default.dispatch('getApply');\n          break;\n        case 'moment': //朋友圈更新\n          this.handleMoment(res.data);\n          break;\n        default:\n          // 处理消息\n          this.handleOnMessage(res.data);\n          break;}\n\n\n    }\n    // 获取本地存储中的朋友圈动态通知\n  }, { key: \"getNotice\", value: function getNotice() {\n      var notice = _util.default.getStorage('moment_' + this.user.id);\n      return notice ? JSON.parse(notice) : {\n        avatar: \"\",\n        user_id: 0,\n        num: 0 };\n\n    }\n    // 朋友圈通知\n  }, { key: \"handleMoment\", value: function handleMoment(message) {\n\n      var notice = this.getNotice();\n      // console.log(message);\n      switch (message.type) {\n        case 'new':\n          if (message.user_id !== this.user_id) {\n            notice.avatar = message.avatar;\n            notice.user_id = message.user_id;\n            uni.showTabBarRedDot({\n              index: 2 });\n\n          }\n\n          break;\n        default:\n          if (message.user_id !== this.user_id) {\n            notice.avatar = message.avatar;\n            notice.user_id = message.user_id;\n            notice.num += 1;\n          }\n          if (notice.num > 0) {\n            uni.setTabBarBadge({\n              index: 2,\n              text: notice.num > 99 ? '···' : notice.num.toString() });\n\n          } else {\n            uni.removeTabBarBadge({\n              index: 2 });\n\n          }\n          break;}\n\n      uni.$emit('momentNotice', notice);\n      // console.log('32131');\n      _util.default.setStorage('moment_' + this.user.id, JSON.stringify(notice));\n    }\n    // 读取朋友圈动态\n  }, { key: \"readMoments\", value: function () {var _readMoments = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var notice;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                notice = {\n                  avatar: '',\n                  user_id: 0,\n                  num: 0 };\n\n                _util.default.setStorage('moment_' + this.user.id, JSON.stringify(notice));\n                uni.hideTabBarRedDot({\n                  index: 2 });\n\n                uni.removeTabBarBadge({\n                  index: 2 });\n\n                uni.$emit('momentNotice', notice);case 5:case \"end\":return _context.stop();}}}, _callee, this);}));function readMoments() {return _readMoments.apply(this, arguments);}return readMoments;}()\n\n    // 监听撤回消息处理\n  }, { key: \"handleOnRecall\", value: function () {var _handleOnRecall = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(message) {var id, key, list, index, name;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                // 通知聊天页\n                // 全局通知\n                uni.$emit('onMessage', _objectSpread(_objectSpread({},\n                message), {}, {\n                  isremove: 1 }));\n\n\n\n                // 修改聊天记录\n                id = message.chat_type === 'group' ? message.to_id : message.from_id;\n                // key值：chatDetail_当前用户id_会话类型_接收人/群id\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n                // 获取原来的聊天记录\n                list = this.getChatDetail(key);\n                // 根据k查找对应聊天记录\n                index = list.findIndex(function (item) {return item.id === message.id;});if (!(\n\n                index === -1)) {_context2.next = 7;break;}return _context2.abrupt(\"return\");case 7:\n                list[index].isremove = 1;\n                // console.log(list[index])\n                name = message.chat_type !== 'group' ? '对方' : \"\\\"\".concat(list[index].from_name, \"\\\" \");\n\n                // 存储\n                this.setStorage(key, list);\n                // 当前会话最后一条消息显示\n                this.updateChatItem({\n                  id: id,\n                  chat_type: message.chat_type,\n                  chatId: list[index].id,\n                  list: list },\n\n                function (item, isNoreadnum, isNewdata) {\n                  // console.log(item, isNewdata);\n\n                  if (isNoreadnum !== -1 && item.noreadnum > 0) {\n                    item.noreadnum -= 1;\n                  }\n                  if (isNewdata) {\n                    item.data = name + '撤回了一条消息';\n                    item.update_time = new Date().getTime();\n                  }\n                  return item;\n\n                });case 11:case \"end\":return _context2.stop();}}}, _callee2, this);}));function handleOnRecall(_x) {return _handleOnRecall.apply(this, arguments);}return handleOnRecall;}()\n\n\n    // 处理消息\n  }, { key: \"handleOnMessage\", value: function () {var _handleOnMessage = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(message) {var _this$addChatDetail, data;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                // 添加消息记录到本地存储中\n                _this$addChatDetail =\n\n                this.addChatDetail(message, false), data = _this$addChatDetail.data;\n                // 更新会话列表\n                this.updateChatList(data, false);\n                // 全局通知\n                uni.$emit('onMessage', data);\n                // 消息提示\n                this.messageNotice();case 4:case \"end\":return _context3.stop();}}}, _callee3, this);}));function handleOnMessage(_x2) {return _handleOnMessage.apply(this, arguments);}return handleOnMessage;}()\n\n    // 监听错误\n  }, { key: \"onError\", value: function onError() {\n      // 用户下线\n      this.isOnline = false;\n      this.socket = null;\n      if (this.isOnpenReconnect) {\n        this.reconnect();\n      }\n      // console.log('socket连接错误')\n    }\n    // 消息提示\n  }, { key: \"messageNotice\", value: function messageNotice() {\n      if (this.platform == 'android') {\n        uni.vibrateShort();\n      } else {\n        uni.vibrateLong();\n      }\n      // 提示音\n      if (this.bgAudioManager.src) {\n        this.bgAudioManager.play();\n      } else {\n        this.bgAudioManager.src = '/static/notice.mp3';\n      }\n\n    }\n    // 关闭连接\n  }, { key: \"close\", value: function close() {\n      if (this.socket) {\n        this.socket.close();\n      }\n      this.isOnpenReconnect = false;\n    }\n    // 创建聊天对象\n  }, { key: \"createChatObject\", value: function createChatObject(detail) {\n      this.TO = detail;\n      // console.log('创建聊天对象', this.TO)\n    }\n    // 销毁聊天对象\n  }, { key: \"destoryChatObject\", value: function destoryChatObject() {\n      this.TO = false;\n      // console.log('摧毁聊天对象')\n    }\n    // 断线重联提示\t\n  }, { key: \"reconnectConfirm\", value: function reconnectConfirm() {var _this2 = this;\n      this.reconnectTime = 0;\n      uni.showModal({\n        content: '你已经断线，是否重新连接？',\n        confirmText: \"重新连接\",\n        success: function success(res) {\n          if (res.confirm) {\n            _this2.connectSocket();\n          }\n        } });\n\n    }\n    // 验证是否上线\n  }, { key: \"checkOnline\", value: function checkOnline() {\n      if (!this.isOnline) {\n        // 断线重联提示\n        this.reconnectConfirm();\n        return false;\n      }\n      return true;\n    }\n    // 组织发送信息格式\n  }, { key: \"formatSendData\", value: function formatSendData(params) {\n      return {\n        id: 0, // 唯一id，后端生成，用于撤回指定消息\n        from_avatar: this.user.avatar, // 发送者头像\n        from_name: this.user.nickname || this.user.username, // 发送者昵称\n        from_id: this.user.id, // 发送者id\n        to_id: params.to_id || this.TO.id, // 接收人/群 id\n        to_name: params.to_name || this.TO.name, // 接收人/群 名称\n        to_avatar: params.to_avatar || this.TO.avatar, // 接收人/群 头像\n        chat_type: params.chat_type || this.TO.chat_type, // 接收类型\n        type: params.type, // 消息类型\n        data: params.data, // 消息内容\n        options: params.options ? params.options : {}, // 其他参数\n        create_time: new Date().getTime(), // 创建时间\n        isremove: 0, // 是否撤回\n        sendStatus: params.sendStatus ? params.sendStatus : \"pending\" // 发送状态，success发送成功,fail发送失败,pending发送中\n      };\n    }\n    // 撤回消息\n  }, { key: \"recall\", value: function recall(message) {var _this3 = this;\n      return new Promise(function (result, reject) {\n        _request.default.post('/chat/recall', {\n          to_id: message.to_id,\n          chat_type: message.chat_type,\n          id: message.id }).\n        then(function (res) {\n          // key值：chatDetail_当前用户id_会话类型_接收人/群id\n          var key = \"chatDetail_\".concat(_this3.user.id, \"_\").concat(message.chat_type, \"_\").concat(message.to_id);\n          // 获取原来的聊天记录\n          var list = _this3.getChatDetail(key);\n          // 根据k查找对应聊天记录\n          var index = list.findIndex(function (item) {return item.id === message.id;});\n          if (index === -1) return;\n          list[index].isremove = 1;\n          // 存储\n          _this3.setStorage(key, list);\n          result(res);\n          // 更新会话最后一条消息显示\n          _this3.updateChatItem({\n            id: message.to_id,\n            chat_type: message.chat_type,\n            chatId: list[index].id,\n            list: list },\n          function (item, isNoreadnum, isNewdata) {\n            if (isNewdata) {\n              item.data = '你撤回了一条消息';\n              item.update_time = new Date().getTime();\n            }\n            return item;\n          });\n        }).catch(function (err) {\n          reject(err);\n        });\n      });\n    }\n    // 发送消息\n  }, { key: \"send\", value: function send(message) {var _this4 = this;var onProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(result, rejects) {var _this4$addChatDetail, k, isUpload, uploadResult, data;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                  // 添加到消息历史记录\n                  _this4$addChatDetail =\n\n                  _this4.addChatDetail(message), k = _this4$addChatDetail.k;\n\n                  // 验证是否上线\n                  if (_this4.checkOnline()) {_context4.next = 3;break;}return _context4.abrupt(\"return\", rejects('未上线'));case 3:\n                  // 上传文件\n                  isUpload = message.type !== 'text' && message.type !== 'emoticon' && message.type !==\n                  'card' && !message.data.startsWith('http://wechatjhq');\n\n                  uploadResult = '';if (!\n                  isUpload) {_context4.next = 13;break;}_context4.next = 8;return (\n                    _request.default.upload('/upload', {\n                      filePath: message.data },\n                    onProgress));case 8:uploadResult = _context4.sent;if (\n                  uploadResult) {_context4.next = 13;break;}\n                  // 发送失败\n                  message.sendStatus = 'fail';\n                  // 更新指定历史记录\n                  _this4.updateChatDetail(message, k);\n                  // 断线重连提示\n                  return _context4.abrupt(\"return\", reject(err));case 13:\n\n\n\n                  // 提交到后端\n                  data = isUpload ? uploadResult : message.data;\n                  _request.default.post('/chat/send', {\n                    to_id: message.to_id || _this4.TO.id,\n                    chat_type: message.chat_type || _this4.TO.chat_type,\n                    type: message.type,\n                    data: data,\n                    options: JSON.stringify(message.options) }).\n                  then(function (res) {\n                    // 发生成功\n                    message.id = res.id;\n                    message.sendStatus = 'success';\n                    if (message.type === 'video') {\n                      message.options = res.options;\n                    }\n                    // 更新指定历史记录\n                    _this4.updateChatDetail(message, k);\n                    // console.log('更新指定历史记录', message)\n                    // console.log('发送成功',res)\n                    // 更新会话列表\n                    _this4.updateChatList(message);\n                    result(res);\n                  }).catch(function (err) {\n                    // 发送失败\n                    message.sendStatus = 'fail';\n                    // 更新指定历史记录\n                    _this4.updateChatDetail(message, k);\n                    // 断线重连提示\n                    reject(err);\n                  });case 15:case \"end\":return _context4.stop();}}}, _callee4);}));return function (_x3, _x4) {return _ref.apply(this, arguments);};}());\n\n    }\n    // 添加聊天记录\n  }, { key: \"addChatDetail\", value: function addChatDetail(message) {var isSend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      // console.log('添加聊天记录')\n      // 获取对方id\n      var id = message.chat_type === 'user' ? isSend ? message.to_id : message.from_id : message.to_id;\n\n      // key值：chatDetail_当前用户id_会话类型_接收人/群id\n      var key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n      // 获取原来聊天记录\n      var list = this.getChatDetail(key);\n      // console.log('获取原来聊天记录', list)\n      // 标识\n      message.k = 'k' + new Date().getTime();\n      list.push(message);\n      // 加入缓存\n      // console.log('加入缓存', key)\n      this.setStorage(key, list);\n      // 返回\n      return {\n        data: message,\n        k: message.k };\n\n    }\n    // 删除指定聊天记录\n  }, { key: \"deleteChatDetailIten\", value: function () {var _deleteChatDetailIten = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(message) {var isSend,id,key,list,index,_args5 = arguments;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:isSend = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : true;\n                // 获取对方id\n                id = message.chat_type === 'user' ? isSend ? message.to_id : message.from_id : message.to_id;\n                // key值：chatDetail_当前用户id_会话类型_接收人/群id\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n                // 获取原来聊天记录\n                list = this.getChatDetail(key);\n                // 根据k查找对应历史记录\n                index = list.findIndex(function (item) {return item.k === message.k || item.id === message.id;});if (!(\n                index === -1)) {_context5.next = 7;break;}return _context5.abrupt(\"return\");case 7:\n                list.splice(index, 1);\n                // 存储\n                this.setStorage(key, list);case 9:case \"end\":return _context5.stop();}}}, _callee5, this);}));function deleteChatDetailIten(_x5) {return _deleteChatDetailIten.apply(this, arguments);}return deleteChatDetailIten;}()\n\n    // 更新指定历史记录\n  }, { key: \"updateChatDetail\", value: function () {var _updateChatDetail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(message, k) {var isSend,id,key,list,index,_args6 = arguments;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:isSend = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : true;\n                // 获取对方id\n                id = message.chat_type === 'user' ? isSend ? message.to_id : message.from_id : message.to_id;\n                // key值：chatDetail_当前用户id_会话类型_接收人/群id\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n                // console.log('key值', key)\n                // 获取原来聊天记录\n                list = this.getChatDetail(key);\n                // 根据k查找对应历史记录\n                index = list.findIndex(function (item) {return item.k === k;});if (!(\n                index === -1)) {_context6.next = 7;break;}return _context6.abrupt(\"return\");case 7:\n                list[index] = message;\n                // 存储\n                // console.log('更新指定历史记录', list, index, list[index]);\n                this.setStorage(key, list);case 9:case \"end\":return _context6.stop();}}}, _callee6, this);}));function updateChatDetail(_x6, _x7) {return _updateChatDetail.apply(this, arguments);}return updateChatDetail;}()\n\n    // 获取聊天记录\n  }, { key: \"getChatDetail\", value: function getChatDetail() {var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      key = key ? key : \"chatDetail_\".concat(this.user.id, \"_\").concat(this.TO.chat_type, \"_\").concat(this.TO.id);\n      return this.getStorage(key);\n    }\n    // 初始化会话列表\n  }, { key: \"initChatListItem\", value: function initChatListItem(message) {\n      // 获取到本地存储会话列表\n      var list = this.getChatList();\n      // 会话是否存在\n      var index = list.findIndex(function (item) {\n        return item.chat_type === message.chat_type && item.id === message.to_id;\n      });\n      // 最后一条消息展现形式\n      var data = this.formatChatItemData(message, true);\n\n      // 会话不存在，创建会话\n      if (index === -1) {\n        var chatItem = {\n          id: message.to_id, // 接收人/群 id\n          chat_type: message.chat_type, // 接收类型 user单聊 group群聊\n          avatar: message.to_avatar, // 接收人/群 头像\n          name: message.to_name, // 接收人/群 昵称\n          update_time: new Date().getTime(), // 最后一条消息的时间戳\n          data: message.data, // 最后一条消息内容\n          type: 'system', // 最后一条消息类型\n          noreadnum: 0, // 未读数\n          istop: false, // 是否置顶\n          shownickname: false, // 是否显示昵称\n          nowarn: false, // 消息免打扰\n          strongwarn: false // 是否开启强提醒\n        };\n        // 群聊\n        if (message.chat_type === 'group' && message.group) {\n          chatItem = _objectSpread(_objectSpread({},\n          chatItem), {}, {\n            user_id: message.group.user_id, // 群管理员id\n            remark: '', // 群公告\n            invite_confirm: message.group.invite_confirm // 邀请确认\n          });\n        }\n        list.unshift(chatItem);\n        // 存储\n        var key = \"chatlist_\".concat(this.user.id);\n        this.setStorage(key, list);\n        // 通知更新vuex中的聊天会话列表\n        uni.$emit('onUpdateChatList', list);\n      }\n    }\n    // 更新会话列表\n  }, { key: \"updateChatList\", value: function updateChatList(message) {var isSend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      // 获取到本地存储会话列表\n      var list = this.getChatList();\n      // 是否处于当前聊天中\n      var isCurrentChat = false;\n      // 获取接收人/群id/头像/昵称\n      var id = 0;\n      var avatar = '';\n      var name = '';\n      // 判断私聊/群聊\n      if (message.chat_type === 'user') {\n        // 私聊\n        // 聊天对象是否存在\n        isCurrentChat = this.TO ? isSend ? this.TO.id === message.to_id : this.TO.id === message.from_id :\n        false;\n        id = isSend ? message.to_id : message.from_id;\n        avatar = isSend ? message.to_avatar : message.from_avatar;\n        name = isSend ? message.to_name : message.from_name;\n        // isCurrentChat=isSend?this.TO\n      } else {\n        //群聊\n        isCurrentChat = this.TO.id && this.TO.id === message.to_id;\n        id = message.to_id;\n        avatar = message.to_avatar;\n        name = message.to_name;\n      }\n\n      // 会话是否存在\n      var index = list.findIndex(function (item) {\n        return item.chat_type === message.chat_type && item.id === id;\n      });\n      // 最后一条消息展现形式\n      // data = message.data.length > 18 ? message.data.slice(0, 17) + '...' : message.data\n      var data = this.formatChatItemData(message, isSend);\n      // 会话不存在，创建会话\n      // 未读数是否+1\n      var noreadnum = isSend || isCurrentChat ? 0 : 1;\n      if (index === -1) {\n        var chatItem = {\n          id: id, // 接收人/群 id\n          chat_type: message.chat_type, // 接收类型 user单聊 group群聊\n          avatar: avatar, // 接收人/群 头像\n          name: name, // 接收人/群 昵称\n          update_time: new Date().getTime(), // 最后一条消息的时间戳\n          data: data, // 最后一条消息内容\n          type: message.type, // 最后一条消息类型\n          noreadnum: noreadnum, // 未读数\n          istop: false, // 是否置顶\n          shownickname: false, // 是否显示昵称\n          nowarn: false, // 消息免打扰\n          strongwarn: false, // 是否开启强提醒\n          noreadnumAll: [] //未读数列表\n        };\n        // 群聊\n        if (message.chat_type === 'group' && message.group) {\n          chatItem.shownickname = true;\n          chatItem.name = message.to_name;\n          chatItem = _objectSpread(_objectSpread({},\n          chatItem), {}, {\n            user_id: message.group.user_id, // 群管理员id\n            remark: '', // 群公告\n            invite_confirm: 1 // 邀请确认\n          });\n        }\n        list.unshift(chatItem);\n      } else {\n        // \t存在更新会话\n        // 拿到当前会话\n        var item = list[index];\n        // 更新最后一天消息时间，内容，类型\n        item.update_time = new Date().getTime();\n        item.name = message.to_name;\n        item.name = name;\n        item.data = data;\n        item.type = message.type;\n        // 未读数更新\n\n        item.noreadnumAll.push(message.id);\n        item.noreadnum += noreadnum;\n        // 置顶会话\n        list = this.listToFirst(list, index);\n      }\n      // 存储\n      var key = \"chatlist_\".concat(this.user.id);\n      this.setStorage(key, list);\n      // 更新未读数\n      this.updateBadge(list);\n      // 通知更新vuex中的聊天会话列表\n      uni.$emit('onUpdateChatList', list);\n\n      return list;\n\n    }\n    // 更新未读数\n  }, { key: \"updateBadge\", value: function () {var _updateBadge = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var list,total,_args7 = arguments;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:list = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : false;\n                // 获取所有会话列表\n                list = list ? list : this.getChatList();\n                // 统计所有未读数\n                total = 0;\n                list.forEach(function (item) {\n                  total += item.noreadnum;\n                });\n                // 设置底部导航栏角标\n                if (total > 0) {\n                  uni.setTabBarBadge({\n                    index: 0,\n                    text: total <= 99 ? total.toString() : '···' });\n\n                } else {\n                  uni.removeTabBarBadge({\n                    index: 0 });\n\n                }\n                // console.log(total);\n                uni.$emit('totalNoreadnum', total);case 6:case \"end\":return _context7.stop();}}}, _callee7, this);}));function updateBadge() {return _updateBadge.apply(this, arguments);}return updateBadge;}()\n\n\n    // 更新指定会话列表\n  }, { key: \"updateChatItem\", value: function () {var _updateChatItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(where, data) {var list, index, isNewdata, newdata, isNoreadnum, key;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:\n                // console.log(where.chatId)\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === where.id && item.chat_type === where.chat_type;});if (!(\n\n                index === -1)) {_context8.next = 4;break;}return _context8.abrupt(\"return\");case 4:\n                //未读数列表\n                isNewdata = -1;\n                if (where.list) {\n                  newdata = where.list[where.list.length - 1].id;\n                  isNewdata = newdata === where.chatId;\n                }\n\n                isNoreadnum = list[index].noreadnumAll.indexOf(where.chatId);\n                if (list[index].noreadnum > 500) {\n                  isNoreadnum = -1;\n                }\n                // 更新数据\n                if (typeof data === 'function') {\n                  list[index] = data(list[index], isNoreadnum, isNewdata);\n                } else {\n                  list[index] = data;\n                }\n                key = \"chatlist_\".concat(this.user.id);\n                this.setStorage(key, list);\n\n                // 更新会话列表状态\n                uni.$emit('onUpdateChatList', list);case 12:case \"end\":return _context8.stop();}}}, _callee8, this);}));function updateChatItem(_x8, _x9) {return _updateChatItem.apply(this, arguments);}return updateChatItem;}()\n\n\n    // 读取会话\n  }, { key: \"readChatItem\", value: function () {var _readChatItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(id, chat_type) {var list, index, key;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n                if (index !== -1) {\n                  list[index].noreadnum = 0;\n                  list[index].noreadnumAll = [];\n                  key = \"chatlist_\".concat(this.user.id);\n                  this.setStorage(key, list);\n                  // 重新获取总未读数\n                  this.updateBadge();\n                  // 更新会话列表状态\n                  uni.$emit('onUpdateChatList', list);\n                }case 3:case \"end\":return _context9.stop();}}}, _callee9, this);}));function readChatItem(_x10, _x11) {return _readChatItem.apply(this, arguments);}return readChatItem;}()\n\n    // 删除指定会话\n  }, { key: \"removeChatItem\", value: function () {var _removeChatItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(id, chat_type) {var list, index, key;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n                if (index !== -1) {\n                  list.splice(index, 1);\n\n                  key = \"chatlist_\".concat(this.user.id);\n                  this.setStorage(key, list);\n                  // 重新获取总未读数\n                  this.updateBadge();\n                  // 更新会话列表状态\n                  uni.$emit('onUpdateChatList', list);\n                }case 3:case \"end\":return _context10.stop();}}}, _callee10, this);}));function removeChatItem(_x12, _x13) {return _removeChatItem.apply(this, arguments);}return removeChatItem;}()\n\n    // 清空聊天记录\n  }, { key: \"clearChatDetail\", value: function () {var _clearChatDetail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(id, chat_type) {var key, list, index, _key;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(chat_type, \"_\").concat(id);\n                _util.default.removeStorage(key);\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n                if (index !== -1) {\n                  list[index].data = '';\n\n                  _key = \"chatlist_\".concat(this.user.id);\n                  this.setStorage(_key, list);\n                  this.updateBadge();\n                  // 更新会话列表状态\n                  uni.$emit('onUpdateChatList', list);\n                }case 5:case \"end\":return _context11.stop();}}}, _callee11, this);}));function clearChatDetail(_x14, _x15) {return _clearChatDetail.apply(this, arguments);}return clearChatDetail;}()\n\n\n    // 获取到本地存储会话列表\n  }, { key: \"getChatList\", value: function getChatList() {\n      var key = \"chatlist_\".concat(this.user.id);\n      return this.getStorage(key);\n    }\n    // 获取指定会话\n  }, { key: \"getChatListItem\", value: function getChatListItem(id, chat_type) {\n      // 获取所有会话列表\n      var list = this.getChatList();\n      // 找到当前会话\n      var index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n      if (index !== -1) {\n        return list[index];\n      }\n      return false;\n    }\n    // 获取存储\n  }, { key: \"getStorage\", value: function getStorage(key) {\n      var list = _util.default.getStorage(key);\n      return list ? JSON.parse(list) : [];\n    }\n    // 设置存储\n  }, { key: \"setStorage\", value: function setStorage(key, value) {\n      return _util.default.setStorage(key, JSON.stringify(value));\n    }\n    // 数组置顶\n  }, { key: \"listToFirst\", value: function listToFirst(arr, index) {\n      if (index != 0) {\n        arr.unshift(arr.splice(index, 1)[0]);\n      }\n      return arr;\n    }\n    //格式化会话最后一条消息显示\n  }, { key: \"formatChatItemData\", value: function formatChatItemData(message, isSend) {\n      var data = message.data;\n      switch (message.type) {\n        case 'emoticon':\n          data = '[表情]';\n          break;\n        case 'image':\n          data = '[图片]';\n          break;\n        case 'audio':\n          data = '[语音]';\n          break;\n        case 'video':\n          data = '[视频]';\n          break;\n        case 'card':\n          data = '[名片]';\n          break;\n        default:\n          break;}\n\n      data = isSend || message.chat_type !== 'group' || message.type === 'system' ? data : \"\".concat(\n      message.from_name, \":\").concat(data);\n      return data;\n    } }]);return chat;}();var _default =\n\n\nchat;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ZyZWUtbGliL2NoYXQuanMiXSwibmFtZXMiOlsiY2hhdCIsImFyZyIsInVybCIsImlzT25saW5lIiwic29ja2V0IiwicmVjb25uZWN0VGltZSIsImlzT25wZW5SZWNvbm5lY3QiLCJ1c2VyIiwiJFUiLCJnZXRTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwiVE8iLCJwbGF0Zm9ybSIsInVuaSIsImdldFN5c3RlbUluZm9TeW5jIiwiYmdBdWRpb01hbmFnZXIiLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwidG9rZW4iLCJjb25uZWN0U29ja2V0IiwicmVjb25uZWN0Q29uZmlybSIsImNvbXBsZXRlIiwib25PcGVuIiwib25NZXNzYWdlIiwicmVzIiwib25DbG9zZSIsIm9uRXJyb3IiLCJnZXRNZXNzYWdlIiwiJEgiLCJwb3N0IiwicmVjb25uZWN0IiwiZGF0YSIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImhhbmRsZU9uUmVjYWxsIiwiJHN0b3JlIiwiZGlzcGF0Y2giLCJoYW5kbGVNb21lbnQiLCJoYW5kbGVPbk1lc3NhZ2UiLCJub3RpY2UiLCJpZCIsImF2YXRhciIsInVzZXJfaWQiLCJudW0iLCJtZXNzYWdlIiwiZ2V0Tm90aWNlIiwidHlwZSIsInNob3dUYWJCYXJSZWREb3QiLCJpbmRleCIsInNldFRhYkJhckJhZGdlIiwidGV4dCIsInRvU3RyaW5nIiwicmVtb3ZlVGFiQmFyQmFkZ2UiLCIkZW1pdCIsInNldFN0b3JhZ2UiLCJzdHJpbmdpZnkiLCJoaWRlVGFiQmFyUmVkRG90IiwiaXNyZW1vdmUiLCJjaGF0X3R5cGUiLCJ0b19pZCIsImZyb21faWQiLCJrZXkiLCJsaXN0IiwiZ2V0Q2hhdERldGFpbCIsImZpbmRJbmRleCIsIml0ZW0iLCJuYW1lIiwiZnJvbV9uYW1lIiwidXBkYXRlQ2hhdEl0ZW0iLCJjaGF0SWQiLCJpc05vcmVhZG51bSIsImlzTmV3ZGF0YSIsIm5vcmVhZG51bSIsInVwZGF0ZV90aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhZGRDaGF0RGV0YWlsIiwidXBkYXRlQ2hhdExpc3QiLCJtZXNzYWdlTm90aWNlIiwidmlicmF0ZVNob3J0IiwidmlicmF0ZUxvbmciLCJzcmMiLCJwbGF5IiwiY2xvc2UiLCJkZXRhaWwiLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwiY29uZmlybSIsInBhcmFtcyIsImZyb21fYXZhdGFyIiwibmlja25hbWUiLCJ1c2VybmFtZSIsInRvX25hbWUiLCJ0b19hdmF0YXIiLCJvcHRpb25zIiwiY3JlYXRlX3RpbWUiLCJzZW5kU3RhdHVzIiwiUHJvbWlzZSIsInJlc3VsdCIsInJlamVjdCIsInRoZW4iLCJjYXRjaCIsImVyciIsIm9uUHJvZ3Jlc3MiLCJyZWplY3RzIiwiayIsImNoZWNrT25saW5lIiwiaXNVcGxvYWQiLCJzdGFydHNXaXRoIiwidXBsb2FkUmVzdWx0IiwidXBsb2FkIiwiZmlsZVBhdGgiLCJ1cGRhdGVDaGF0RGV0YWlsIiwiaXNTZW5kIiwicHVzaCIsInNwbGljZSIsImdldENoYXRMaXN0IiwiZm9ybWF0Q2hhdEl0ZW1EYXRhIiwiY2hhdEl0ZW0iLCJpc3RvcCIsInNob3duaWNrbmFtZSIsIm5vd2FybiIsInN0cm9uZ3dhcm4iLCJncm91cCIsInJlbWFyayIsImludml0ZV9jb25maXJtIiwidW5zaGlmdCIsImlzQ3VycmVudENoYXQiLCJub3JlYWRudW1BbGwiLCJsaXN0VG9GaXJzdCIsInVwZGF0ZUJhZGdlIiwidG90YWwiLCJmb3JFYWNoIiwid2hlcmUiLCJuZXdkYXRhIiwibGVuZ3RoIiwiaW5kZXhPZiIsInJlbW92ZVN0b3JhZ2UiLCJ2YWx1ZSIsImFyciJdLCJtYXBwaW5ncyI6IjJNQUFBO0FBQ0E7QUFDQSxvRjs7QUFFTUEsSTtBQUNMLGdCQUFZQyxHQUFaLEVBQWlCO0FBQ2hCLFNBQUtDLEdBQUwsR0FBV0QsR0FBRyxDQUFDQyxHQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICRVIGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQgJEggZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCAkc3RvcmUgZnJvbSAnQC9zdG9yZS9pbmRleC5qcyc7XG5cbmNsYXNzIGNoYXQge1xuXHRjb25zdHJ1Y3RvcihhcmcpIHtcblx0XHR0aGlzLnVybCA9IGFyZy51cmxcblx0XHR0aGlzLmlzT25saW5lID0gZmFsc2Vcblx0XHR0aGlzLnNvY2tldCA9IG51bGxcblx0XHR0aGlzLnJlY29ubmVjdFRpbWUgPSAwXG5cdFx0dGhpcy5pc09ucGVuUmVjb25uZWN0ID0gdHJ1ZVxuXHRcdC8vIOiOt+WPluW9k+WJjeeUqOaIt+ebuOWFs+S/oeaBr1xuXHRcdGxldCB1c2VyID0gJFUuZ2V0U3RvcmFnZSgndXNlcicpXG5cdFx0dGhpcy51c2VyID0gdXNlciA/IEpTT04ucGFyc2UodXNlcikgOiB7fSxcblx0XHRcdC8vIOWIneWni+WMluiBiuWkqeWvueixoVxuXHRcdFx0dGhpcy5UTyA9IGZhbHNlO1xuXHRcdHRoaXMucGxhdGZvcm0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybVxuXHRcdC8vIOWIm+W7uuaPkOekuumfs1xuXHRcdHRoaXMuYmdBdWRpb01hbmFnZXIgPSB1bmkuZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpXG5cdFx0Ly8g6L+e5o6l55uR5ZCsXG5cdFx0aWYgKHRoaXMudXNlci50b2tlbikge1xuXHRcdFx0dGhpcy5jb25uZWN0U29ja2V0KClcblx0XHR9XG5cdH1cblx0Ly8g5pat57q/6YeN6L+eXG5cdHJlY29ubmVjdCgpIHtcblx0XHRpZiAodGhpcy5pc09ubGluZSkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGlmICh0aGlzLnJlY29ubmVjdFRpbWUgPiAzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZWNvbm5lY3RDb25maXJtKClcblx0XHR9XG5cdFx0dGhpcy5yZWNvbm5lY3RUaW1lICs9IDFcblx0XHR0aGlzLmNvbm5lY3RTb2NrZXQoKVxuXHR9XG5cdC8vIOi/nuaOpXNvY2tldFxuXHRjb25uZWN0U29ja2V0KCkge1xuXHRcdHRoaXMuc29ja2V0ID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xuXHRcdFx0dXJsOiB0aGlzLnVybCArIFwiP3Rva2VuPVwiICsgdGhpcy51c2VyLnRva2VuLFxuXHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0Ly8g55uR5ZCs6L+e5o6l5oiQ5YqfXG5cdFx0dGhpcy5zb2NrZXQub25PcGVuKCgpID0+IHRoaXMub25PcGVuKCkpXG5cdFx0Ly8g55uR5ZCs5o6l5pS25L+h5oGvXG5cdFx0dGhpcy5zb2NrZXQub25NZXNzYWdlKChyZXMpID0+IHRoaXMub25NZXNzYWdlKHJlcykpXG5cdFx0Ly8g55uR5ZCs5pat5byAXG5cdFx0dGhpcy5zb2NrZXQub25DbG9zZSgoKSA9PiB0aGlzLm9uQ2xvc2UoKSlcblx0XHQvLyDnm5HlkKzplJnor69cblx0XHR0aGlzLnNvY2tldC5vbkVycm9yKCgpID0+IHRoaXMub25FcnJvcigpKVxuXG5cdH1cblx0Ly8g55uR5ZCs5omT5byAXG5cdG9uT3BlbigpIHtcblx0XHQvLyDnlKjmiLfkuIrnur9cblx0XHR0aGlzLmlzT25saW5lID0gdHJ1ZVxuXHRcdC8vIGNvbnNvbGUubG9nKCdzb2NrZXTov57mjqXmiJDlip8nKVxuXHRcdHRoaXMuaXNPbnBlblJlY29ubmVjdCA9IHRydWVcblx0XHQvLyDojrflj5bnlKjmiLfnprvnur/mtojmga9cblx0XHR0aGlzLmdldE1lc3NhZ2UoKVxuXHR9XG5cdC8vIOiOt+WPluemu+e6v+a2iOaBr1xuXHRnZXRNZXNzYWdlKCkge1xuXHRcdCRILnBvc3QoJy9jaGF0L2dldG1lc3NhZ2UnKVxuXHR9XG5cdC8vIOebkeWQrOWFs+mXrVxuXHRvbkNsb3NlKCkge1xuXHRcdC8vIOeUqOaIt+S4i+e6v1xuXHRcdHRoaXMuaXNPbmxpbmUgPSBmYWxzZVxuXHRcdHRoaXMuc29ja2V0ID0gbnVsbFxuXHRcdGlmICh0aGlzLmlzT25wZW5SZWNvbm5lY3QpIHtcblx0XHRcdHRoaXMucmVjb25uZWN0KClcblx0XHR9XG5cdFx0Ly8gdGhpcy5pc09ucGVuUmVjb25uZWN0ID0gZmFsc2Vcblx0XHQvLyBjb25zb2xlLmxvZygnc29ja2V06L+e5o6l5YWz6ZetJylcblx0fVxuXHQvLyDnm5HlkKzmjqXmlLbmtojmga9cblx0b25NZXNzYWdlKGRhdGEpIHtcblx0XHRsZXQgcmVzID0gSlNPTi5wYXJzZShkYXRhLmRhdGEpXG5cdFx0Ly8gY29uc29sZS5sb2coJ+ebkeWQrOaOpeaUtua2iOaBrycsIHJlcylcblx0XHQvLyDplJnor69cblx0XHRzd2l0Y2ggKHJlcy5tc2cpIHtcblx0XHRcdGNhc2UgJ2ZhaWwnOlxuXHRcdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6IHJlcy5kYXRhLFxuXHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHR9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JlY2FsbCc6IC8v5pKk5ZueXG5cdFx0XHRcdHRoaXMuaGFuZGxlT25SZWNhbGwocmVzLmRhdGEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndXBkYXRlQXBwbHlMaXN0JzogLy/mlrDnmoTlpb3lj4vnlLPor7dcblx0XHRcdFx0JHN0b3JlLmRpc3BhdGNoKCdnZXRBcHBseScpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbW9tZW50JzogLy/mnIvlj4vlnIjmm7TmlrBcblx0XHRcdFx0dGhpcy5oYW5kbGVNb21lbnQocmVzLmRhdGEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Ly8g5aSE55CG5raI5oGvXG5cdFx0XHRcdHRoaXMuaGFuZGxlT25NZXNzYWdlKHJlcy5kYXRhKVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0fVxuXHQvLyDojrflj5bmnKzlnLDlrZjlgqjkuK3nmoTmnIvlj4vlnIjliqjmgIHpgJrnn6Vcblx0Z2V0Tm90aWNlKCkge1xuXHRcdGxldCBub3RpY2UgPSAkVS5nZXRTdG9yYWdlKCdtb21lbnRfJyArIHRoaXMudXNlci5pZClcblx0XHRyZXR1cm4gbm90aWNlID8gSlNPTi5wYXJzZShub3RpY2UpIDoge1xuXHRcdFx0YXZhdGFyOiBcIlwiLFxuXHRcdFx0dXNlcl9pZDogMCxcblx0XHRcdG51bTogMCxcblx0XHR9XG5cdH1cblx0Ly8g5pyL5Y+L5ZyI6YCa55+lXG5cdGhhbmRsZU1vbWVudChtZXNzYWdlKSB7XG5cdFx0XG5cdFx0bGV0IG5vdGljZSA9IHRoaXMuZ2V0Tm90aWNlKClcblx0XHQvLyBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0XHRzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuXHRcdFx0Y2FzZSAnbmV3Jzpcblx0XHRcdFx0aWYgKG1lc3NhZ2UudXNlcl9pZCAhPT0gdGhpcy51c2VyX2lkKSB7XG5cdFx0XHRcdFx0bm90aWNlLmF2YXRhciA9IG1lc3NhZ2UuYXZhdGFyXG5cdFx0XHRcdFx0bm90aWNlLnVzZXJfaWQgPSBtZXNzYWdlLnVzZXJfaWRcblx0XHRcdFx0XHR1bmkuc2hvd1RhYkJhclJlZERvdCh7XG5cdFx0XHRcdFx0XHRpbmRleDogMlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGlmIChtZXNzYWdlLnVzZXJfaWQgIT09IHRoaXMudXNlcl9pZCkge1xuXHRcdFx0XHRcdG5vdGljZS5hdmF0YXIgPSBtZXNzYWdlLmF2YXRhclxuXHRcdFx0XHRcdG5vdGljZS51c2VyX2lkID0gbWVzc2FnZS51c2VyX2lkXG5cdFx0XHRcdFx0bm90aWNlLm51bSArPSAxXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5vdGljZS5udW0gPiAwKSB7XG5cdFx0XHRcdFx0dW5pLnNldFRhYkJhckJhZGdlKHtcblx0XHRcdFx0XHRcdGluZGV4OiAyLFxuXHRcdFx0XHRcdFx0dGV4dDogbm90aWNlLm51bSA+IDk5ID8gJ8K3wrfCtycgOiBub3RpY2UubnVtLnRvU3RyaW5nKClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHVuaS5yZW1vdmVUYWJCYXJCYWRnZSh7XG5cdFx0XHRcdFx0XHRpbmRleDogMlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHVuaS4kZW1pdCgnbW9tZW50Tm90aWNlJywgbm90aWNlKVxuXHRcdC8vIGNvbnNvbGUubG9nKCczMjEzMScpO1xuXHRcdCRVLnNldFN0b3JhZ2UoJ21vbWVudF8nICsgdGhpcy51c2VyLmlkLCBKU09OLnN0cmluZ2lmeShub3RpY2UpKVxuXHR9XG5cdC8vIOivu+WPluaci+WPi+WciOWKqOaAgVxuXHRhc3luYyByZWFkTW9tZW50cygpIHtcblx0XHRsZXQgbm90aWNlID0ge1xuXHRcdFx0YXZhdGFyOiAnJyxcblx0XHRcdHVzZXJfaWQ6IDAsXG5cdFx0XHRudW06IDBcblx0XHR9XG5cdFx0JFUuc2V0U3RvcmFnZSgnbW9tZW50XycgKyB0aGlzLnVzZXIuaWQsIEpTT04uc3RyaW5naWZ5KG5vdGljZSkpXG5cdFx0dW5pLmhpZGVUYWJCYXJSZWREb3Qoe1xuXHRcdFx0aW5kZXg6IDJcblx0XHR9KVxuXHRcdHVuaS5yZW1vdmVUYWJCYXJCYWRnZSh7XG5cdFx0XHRpbmRleDogMlxuXHRcdH0pXG5cdFx0dW5pLiRlbWl0KCdtb21lbnROb3RpY2UnLCBub3RpY2UpXG5cdH1cblx0Ly8g55uR5ZCs5pKk5Zue5raI5oGv5aSE55CGXG5cdGFzeW5jIGhhbmRsZU9uUmVjYWxsKG1lc3NhZ2UpIHtcblx0XHQvLyDpgJrnn6XogYrlpKnpobVcblx0XHQvLyDlhajlsYDpgJrnn6Vcblx0XHR1bmkuJGVtaXQoJ29uTWVzc2FnZScsIHtcblx0XHRcdC4uLm1lc3NhZ2UsXG5cdFx0XHRpc3JlbW92ZTogMVxuXHRcdH0pXG5cblxuXHRcdC8vIOS/ruaUueiBiuWkqeiusOW9lVxuXHRcdGxldCBpZCA9IG1lc3NhZ2UuY2hhdF90eXBlID09PSAnZ3JvdXAnID8gbWVzc2FnZS50b19pZCA6IG1lc3NhZ2UuZnJvbV9pZFxuXHRcdC8vIGtleeWAvO+8mmNoYXREZXRhaWxf5b2T5YmN55So5oi3aWRf5Lya6K+d57G75Z6LX+aOpeaUtuS6ui/nvqRpZFxuXHRcdGxldCBrZXkgPSBgY2hhdERldGFpbF8ke3RoaXMudXNlci5pZH1fJHttZXNzYWdlLmNoYXRfdHlwZX1fJHtpZH1gXG5cdFx0Ly8g6I635Y+W5Y6f5p2l55qE6IGK5aSp6K6w5b2VXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXREZXRhaWwoa2V5KVxuXHRcdC8vIOagueaNrmvmn6Xmib7lr7nlupTogYrlpKnorrDlvZVcblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IG1lc3NhZ2UuaWQpXG5cblx0XHRpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG5cdFx0bGlzdFtpbmRleF0uaXNyZW1vdmUgPSAxXG5cdFx0Ly8gY29uc29sZS5sb2cobGlzdFtpbmRleF0pXG5cdFx0bGV0IG5hbWUgPSBtZXNzYWdlLmNoYXRfdHlwZSAhPT0gJ2dyb3VwJyA/ICflr7nmlrknIDogYFwiJHtsaXN0W2luZGV4XS5mcm9tX25hbWV9XCIgYFxuXG5cdFx0Ly8g5a2Y5YKoXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGtleSwgbGlzdClcblx0XHQvLyDlvZPliY3kvJror53mnIDlkI7kuIDmnaHmtojmga/mmL7npLpcblx0XHR0aGlzLnVwZGF0ZUNoYXRJdGVtKHtcblx0XHRcdGlkLFxuXHRcdFx0Y2hhdF90eXBlOiBtZXNzYWdlLmNoYXRfdHlwZSxcblx0XHRcdGNoYXRJZDogbGlzdFtpbmRleF0uaWQsXG5cdFx0XHRsaXN0XG5cblx0XHR9LCAoaXRlbSwgaXNOb3JlYWRudW0sIGlzTmV3ZGF0YSkgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coaXRlbSwgaXNOZXdkYXRhKTtcblxuXHRcdFx0aWYgKGlzTm9yZWFkbnVtICE9PSAtMSAmJiBpdGVtLm5vcmVhZG51bSA+IDApIHtcblx0XHRcdFx0aXRlbS5ub3JlYWRudW0gLT0gMVxuXHRcdFx0fVxuXHRcdFx0aWYgKGlzTmV3ZGF0YSkge1xuXHRcdFx0XHRpdGVtLmRhdGEgPSBuYW1lICsgJ+aSpOWbnuS6huS4gOadoea2iOaBrydcblx0XHRcdFx0aXRlbS51cGRhdGVfdGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cblx0XHR9KVxuXG5cdH1cblx0Ly8g5aSE55CG5raI5oGvXG5cdGFzeW5jIGhhbmRsZU9uTWVzc2FnZShtZXNzYWdlKSB7XG5cdFx0Ly8g5re75Yqg5raI5oGv6K6w5b2V5Yiw5pys5Zyw5a2Y5YKo5LitXG5cdFx0bGV0IHtcblx0XHRcdGRhdGFcblx0XHR9ID0gdGhpcy5hZGRDaGF0RGV0YWlsKG1lc3NhZ2UsIGZhbHNlKVxuXHRcdC8vIOabtOaWsOS8muivneWIl+ihqFxuXHRcdHRoaXMudXBkYXRlQ2hhdExpc3QoZGF0YSwgZmFsc2UpXG5cdFx0Ly8g5YWo5bGA6YCa55+lXG5cdFx0dW5pLiRlbWl0KCdvbk1lc3NhZ2UnLCBkYXRhKVxuXHRcdC8vIOa2iOaBr+aPkOekulxuXHRcdHRoaXMubWVzc2FnZU5vdGljZSgpXG5cdH1cblx0Ly8g55uR5ZCs6ZSZ6K+vXG5cdG9uRXJyb3IoKSB7XG5cdFx0Ly8g55So5oi35LiL57q/XG5cdFx0dGhpcy5pc09ubGluZSA9IGZhbHNlXG5cdFx0dGhpcy5zb2NrZXQgPSBudWxsXG5cdFx0aWYgKHRoaXMuaXNPbnBlblJlY29ubmVjdCkge1xuXHRcdFx0dGhpcy5yZWNvbm5lY3QoKVxuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnc29ja2V06L+e5o6l6ZSZ6K+vJylcblx0fVxuXHQvLyDmtojmga/mj5DnpLpcblx0bWVzc2FnZU5vdGljZSgpIHtcblx0XHRpZiAodGhpcy5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcblx0XHRcdHVuaS52aWJyYXRlU2hvcnQoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR1bmkudmlicmF0ZUxvbmcoKVxuXHRcdH1cblx0XHQvLyDmj5DnpLrpn7Ncblx0XHRpZiAodGhpcy5iZ0F1ZGlvTWFuYWdlci5zcmMpIHtcblx0XHRcdHRoaXMuYmdBdWRpb01hbmFnZXIucGxheSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYmdBdWRpb01hbmFnZXIuc3JjID0gJy9zdGF0aWMvbm90aWNlLm1wMyc7XG5cdFx0fVxuXG5cdH1cblx0Ly8g5YWz6Zet6L+e5o6lXG5cdGNsb3NlKCkge1xuXHRcdGlmICh0aGlzLnNvY2tldCkge1xuXHRcdFx0dGhpcy5zb2NrZXQuY2xvc2UoKVxuXHRcdH1cblx0XHR0aGlzLmlzT25wZW5SZWNvbm5lY3QgPSBmYWxzZVxuXHR9XG5cdC8vIOWIm+W7uuiBiuWkqeWvueixoVxuXHRjcmVhdGVDaGF0T2JqZWN0KGRldGFpbCkge1xuXHRcdHRoaXMuVE8gPSBkZXRhaWxcblx0XHQvLyBjb25zb2xlLmxvZygn5Yib5bu66IGK5aSp5a+56LGhJywgdGhpcy5UTylcblx0fVxuXHQvLyDplIDmr4HogYrlpKnlr7nosaFcblx0ZGVzdG9yeUNoYXRPYmplY3QoKSB7XG5cdFx0dGhpcy5UTyA9IGZhbHNlXG5cdFx0Ly8gY29uc29sZS5sb2coJ+aRp+avgeiBiuWkqeWvueixoScpXG5cdH1cblx0Ly8g5pat57q/6YeN6IGU5o+Q56S6XHRcblx0cmVjb25uZWN0Q29uZmlybSgpIHtcblx0XHR0aGlzLnJlY29ubmVjdFRpbWUgPSAwXG5cdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRjb250ZW50OiAn5L2g5bey57uP5pat57q/77yM5piv5ZCm6YeN5paw6L+e5o6l77yfJyxcblx0XHRcdGNvbmZpcm1UZXh0OiBcIumHjeaWsOi/nuaOpVwiLFxuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHR0aGlzLmNvbm5lY3RTb2NrZXQoKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHQvLyDpqozor4HmmK/lkKbkuIrnur9cblx0Y2hlY2tPbmxpbmUoKSB7XG5cdFx0aWYgKCF0aGlzLmlzT25saW5lKSB7XG5cdFx0XHQvLyDmlq3nur/ph43ogZTmj5DnpLpcblx0XHRcdHRoaXMucmVjb25uZWN0Q29uZmlybSgpXG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXHQvLyDnu4Tnu4flj5HpgIHkv6Hmga/moLzlvI9cblx0Zm9ybWF0U2VuZERhdGEocGFyYW1zKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiAwLCAvLyDllK/kuIBpZO+8jOWQjuerr+eUn+aIkO+8jOeUqOS6juaSpOWbnuaMh+Wumua2iOaBr1xuXHRcdFx0ZnJvbV9hdmF0YXI6IHRoaXMudXNlci5hdmF0YXIsIC8vIOWPkemAgeiAheWktOWDj1xuXHRcdFx0ZnJvbV9uYW1lOiB0aGlzLnVzZXIubmlja25hbWUgfHwgdGhpcy51c2VyLnVzZXJuYW1lLCAvLyDlj5HpgIHogIXmmLXnp7Bcblx0XHRcdGZyb21faWQ6IHRoaXMudXNlci5pZCwgLy8g5Y+R6YCB6ICFaWRcblx0XHRcdHRvX2lkOiBwYXJhbXMudG9faWQgfHwgdGhpcy5UTy5pZCwgLy8g5o6l5pS25Lq6L+e+pCBpZFxuXHRcdFx0dG9fbmFtZTogcGFyYW1zLnRvX25hbWUgfHwgdGhpcy5UTy5uYW1lLCAvLyDmjqXmlLbkurov576kIOWQjeensFxuXHRcdFx0dG9fYXZhdGFyOiBwYXJhbXMudG9fYXZhdGFyIHx8IHRoaXMuVE8uYXZhdGFyLCAvLyDmjqXmlLbkurov576kIOWktOWDj1xuXHRcdFx0Y2hhdF90eXBlOiBwYXJhbXMuY2hhdF90eXBlIHx8IHRoaXMuVE8uY2hhdF90eXBlLCAvLyDmjqXmlLbnsbvlnotcblx0XHRcdHR5cGU6IHBhcmFtcy50eXBlLCAvLyDmtojmga/nsbvlnotcblx0XHRcdGRhdGE6IHBhcmFtcy5kYXRhLCAvLyDmtojmga/lhoXlrrlcblx0XHRcdG9wdGlvbnM6IHBhcmFtcy5vcHRpb25zID8gcGFyYW1zLm9wdGlvbnMgOiB7fSwgLy8g5YW25LuW5Y+C5pWwXG5cdFx0XHRjcmVhdGVfdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSwgLy8g5Yib5bu65pe26Ze0XG5cdFx0XHRpc3JlbW92ZTogMCwgLy8g5piv5ZCm5pKk5ZueXG5cdFx0XHRzZW5kU3RhdHVzOiBwYXJhbXMuc2VuZFN0YXR1cyA/IHBhcmFtcy5zZW5kU3RhdHVzIDogXCJwZW5kaW5nXCIgLy8g5Y+R6YCB54q25oCB77yMc3VjY2Vzc+WPkemAgeaIkOWKnyxmYWls5Y+R6YCB5aSx6LSlLHBlbmRpbmflj5HpgIHkuK1cblx0XHR9XG5cdH1cblx0Ly8g5pKk5Zue5raI5oGvXG5cdHJlY2FsbChtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXN1bHQsIHJlamVjdCkgPT4ge1xuXHRcdFx0JEgucG9zdCgnL2NoYXQvcmVjYWxsJywge1xuXHRcdFx0XHR0b19pZDogbWVzc2FnZS50b19pZCxcblx0XHRcdFx0Y2hhdF90eXBlOiBtZXNzYWdlLmNoYXRfdHlwZSxcblx0XHRcdFx0aWQ6IG1lc3NhZ2UuaWQsXG5cdFx0XHR9KS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdC8vIGtleeWAvO+8mmNoYXREZXRhaWxf5b2T5YmN55So5oi3aWRf5Lya6K+d57G75Z6LX+aOpeaUtuS6ui/nvqRpZFxuXHRcdFx0XHRsZXQga2V5ID0gYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7bWVzc2FnZS5jaGF0X3R5cGV9XyR7bWVzc2FnZS50b19pZH1gXG5cdFx0XHRcdC8vIOiOt+WPluWOn+adpeeahOiBiuWkqeiusOW9lVxuXHRcdFx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdERldGFpbChrZXkpXG5cdFx0XHRcdC8vIOagueaNrmvmn6Xmib7lr7nlupTogYrlpKnorrDlvZVcblx0XHRcdFx0bGV0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBtZXNzYWdlLmlkKVxuXHRcdFx0XHRpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG5cdFx0XHRcdGxpc3RbaW5kZXhdLmlzcmVtb3ZlID0gMVxuXHRcdFx0XHQvLyDlrZjlgqhcblx0XHRcdFx0dGhpcy5zZXRTdG9yYWdlKGtleSwgbGlzdClcblx0XHRcdFx0cmVzdWx0KHJlcylcblx0XHRcdFx0Ly8g5pu05paw5Lya6K+d5pyA5ZCO5LiA5p2h5raI5oGv5pi+56S6XG5cdFx0XHRcdHRoaXMudXBkYXRlQ2hhdEl0ZW0oe1xuXHRcdFx0XHRcdGlkOiBtZXNzYWdlLnRvX2lkLFxuXHRcdFx0XHRcdGNoYXRfdHlwZTogbWVzc2FnZS5jaGF0X3R5cGUsXG5cdFx0XHRcdFx0Y2hhdElkOiBsaXN0W2luZGV4XS5pZCxcblx0XHRcdFx0XHRsaXN0XG5cdFx0XHRcdH0sIChpdGVtLCBpc05vcmVhZG51bSwgaXNOZXdkYXRhKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGlzTmV3ZGF0YSkge1xuXHRcdFx0XHRcdFx0aXRlbS5kYXRhID0gJ+S9oOaSpOWbnuS6huS4gOadoea2iOaBrydcblx0XHRcdFx0XHRcdGl0ZW0udXBkYXRlX3RpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBpdGVtXG5cdFx0XHRcdH0pXG5cdFx0XHR9KS5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRyZWplY3QoZXJyKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdC8vIOWPkemAgea2iOaBr1xuXHRzZW5kKG1lc3NhZ2UsIG9uUHJvZ3Jlc3MgPSBmYWxzZSkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzdWx0LCByZWplY3RzKSA9PiB7XG5cdFx0XHQvLyDmt7vliqDliLDmtojmga/ljoblj7LorrDlvZVcblx0XHRcdGxldCB7XG5cdFx0XHRcdGtcblx0XHRcdH0gPSB0aGlzLmFkZENoYXREZXRhaWwobWVzc2FnZSlcblxuXHRcdFx0Ly8g6aqM6K+B5piv5ZCm5LiK57q/XG5cdFx0XHRpZiAoIXRoaXMuY2hlY2tPbmxpbmUoKSkgcmV0dXJuIHJlamVjdHMoJ+acquS4iue6vycpXG5cdFx0XHQvLyDkuIrkvKDmlofku7Zcblx0XHRcdGxldCBpc1VwbG9hZCA9IChtZXNzYWdlLnR5cGUgIT09ICd0ZXh0JyAmJiBtZXNzYWdlLnR5cGUgIT09ICdlbW90aWNvbicgJiYgbWVzc2FnZS50eXBlICE9PVxuXHRcdFx0XHQnY2FyZCcgJiYgIW1lc3NhZ2UuZGF0YS5zdGFydHNXaXRoKCdodHRwOi8vd2VjaGF0amhxJykpXG5cblx0XHRcdGxldCB1cGxvYWRSZXN1bHQgPSAnJ1xuXHRcdFx0aWYgKGlzVXBsb2FkKSB7XG5cdFx0XHRcdHVwbG9hZFJlc3VsdCA9IGF3YWl0ICRILnVwbG9hZCgnL3VwbG9hZCcsIHtcblx0XHRcdFx0XHRmaWxlUGF0aDogbWVzc2FnZS5kYXRhXG5cdFx0XHRcdH0sIG9uUHJvZ3Jlc3MpXG5cdFx0XHRcdGlmICghdXBsb2FkUmVzdWx0KSB7XG5cdFx0XHRcdFx0Ly8g5Y+R6YCB5aSx6LSlXG5cdFx0XHRcdFx0bWVzc2FnZS5zZW5kU3RhdHVzID0gJ2ZhaWwnXG5cdFx0XHRcdFx0Ly8g5pu05paw5oyH5a6a5Y6G5Y+y6K6w5b2VXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDaGF0RGV0YWlsKG1lc3NhZ2UsIGspXG5cdFx0XHRcdFx0Ly8g5pat57q/6YeN6L+e5o+Q56S6XG5cdFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8g5o+Q5Lqk5Yiw5ZCO56uvXG5cdFx0XHRsZXQgZGF0YSA9IGlzVXBsb2FkID8gdXBsb2FkUmVzdWx0IDogbWVzc2FnZS5kYXRhXG5cdFx0XHQkSC5wb3N0KCcvY2hhdC9zZW5kJywge1xuXHRcdFx0XHR0b19pZDogbWVzc2FnZS50b19pZCB8fCB0aGlzLlRPLmlkLFxuXHRcdFx0XHRjaGF0X3R5cGU6IG1lc3NhZ2UuY2hhdF90eXBlIHx8IHRoaXMuVE8uY2hhdF90eXBlLFxuXHRcdFx0XHR0eXBlOiBtZXNzYWdlLnR5cGUsXG5cdFx0XHRcdGRhdGEsXG5cdFx0XHRcdG9wdGlvbnM6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2Uub3B0aW9ucylcblx0XHRcdH0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0Ly8g5Y+R55Sf5oiQ5YqfXG5cdFx0XHRcdG1lc3NhZ2UuaWQgPSByZXMuaWRcblx0XHRcdFx0bWVzc2FnZS5zZW5kU3RhdHVzID0gJ3N1Y2Nlc3MnXG5cdFx0XHRcdGlmIChtZXNzYWdlLnR5cGUgPT09ICd2aWRlbycpIHtcblx0XHRcdFx0XHRtZXNzYWdlLm9wdGlvbnMgPSByZXMub3B0aW9uc1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIOabtOaWsOaMh+WumuWOhuWPsuiusOW9lVxuXHRcdFx0XHR0aGlzLnVwZGF0ZUNoYXREZXRhaWwobWVzc2FnZSwgaylcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+abtOaWsOaMh+WumuWOhuWPsuiusOW9lScsIG1lc3NhZ2UpXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCflj5HpgIHmiJDlip8nLHJlcylcblx0XHRcdFx0Ly8g5pu05paw5Lya6K+d5YiX6KGoXG5cdFx0XHRcdHRoaXMudXBkYXRlQ2hhdExpc3QobWVzc2FnZSlcblx0XHRcdFx0cmVzdWx0KHJlcylcblx0XHRcdH0pLmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdC8vIOWPkemAgeWksei0pVxuXHRcdFx0XHRtZXNzYWdlLnNlbmRTdGF0dXMgPSAnZmFpbCdcblx0XHRcdFx0Ly8g5pu05paw5oyH5a6a5Y6G5Y+y6K6w5b2VXG5cdFx0XHRcdHRoaXMudXBkYXRlQ2hhdERldGFpbChtZXNzYWdlLCBrKVxuXHRcdFx0XHQvLyDmlq3nur/ph43ov57mj5DnpLpcblx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHQvLyDmt7vliqDogYrlpKnorrDlvZVcblx0YWRkQ2hhdERldGFpbChtZXNzYWdlLCBpc1NlbmQgPSB0cnVlKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ+a3u+WKoOiBiuWkqeiusOW9lScpXG5cdFx0Ly8g6I635Y+W5a+55pa5aWRcblx0XHRsZXQgaWQgPSBtZXNzYWdlLmNoYXRfdHlwZSA9PT0gJ3VzZXInID8gKGlzU2VuZCA/IG1lc3NhZ2UudG9faWQgOiBtZXNzYWdlLmZyb21faWQpIDogbWVzc2FnZS50b19pZFxuXG5cdFx0Ly8ga2V55YC877yaY2hhdERldGFpbF/lvZPliY3nlKjmiLdpZF/kvJror53nsbvlnotf5o6l5pS25Lq6L+e+pGlkXG5cdFx0bGV0IGtleSA9IGBjaGF0RGV0YWlsXyR7dGhpcy51c2VyLmlkfV8ke21lc3NhZ2UuY2hhdF90eXBlfV8ke2lkfWBcblx0XHQvLyDojrflj5bljp/mnaXogYrlpKnorrDlvZVcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdERldGFpbChrZXkpXG5cdFx0Ly8gY29uc29sZS5sb2coJ+iOt+WPluWOn+adpeiBiuWkqeiusOW9lScsIGxpc3QpXG5cdFx0Ly8g5qCH6K+GXG5cdFx0bWVzc2FnZS5rID0gJ2snICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuXHRcdGxpc3QucHVzaChtZXNzYWdlKVxuXHRcdC8vIOWKoOWFpee8k+WtmFxuXHRcdC8vIGNvbnNvbGUubG9nKCfliqDlhaXnvJPlrZgnLCBrZXkpXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGtleSwgbGlzdClcblx0XHQvLyDov5Tlm55cblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogbWVzc2FnZSxcblx0XHRcdGs6IG1lc3NhZ2Uua1xuXHRcdH1cblx0fVxuXHQvLyDliKDpmaTmjIflrprogYrlpKnorrDlvZVcblx0YXN5bmMgZGVsZXRlQ2hhdERldGFpbEl0ZW4obWVzc2FnZSwgaXNTZW5kID0gdHJ1ZSkge1xuXHRcdC8vIOiOt+WPluWvueaWuWlkXG5cdFx0bGV0IGlkID0gbWVzc2FnZS5jaGF0X3R5cGUgPT09ICd1c2VyJyA/IChpc1NlbmQgPyBtZXNzYWdlLnRvX2lkIDogbWVzc2FnZS5mcm9tX2lkKSA6IG1lc3NhZ2UudG9faWRcblx0XHQvLyBrZXnlgLzvvJpjaGF0RGV0YWlsX+W9k+WJjeeUqOaIt2lkX+S8muivneexu+Wei1/mjqXmlLbkurov576kaWRcblx0XHRsZXQga2V5ID0gYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7bWVzc2FnZS5jaGF0X3R5cGV9XyR7aWR9YFxuXHRcdC8vIOiOt+WPluWOn+adpeiBiuWkqeiusOW9lVxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0RGV0YWlsKGtleSlcblx0XHQvLyDmoLnmja5r5p+l5om+5a+55bqU5Y6G5Y+y6K6w5b2VXG5cdFx0bGV0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmsgPT09IG1lc3NhZ2UuayB8fCBpdGVtLmlkID09PSBtZXNzYWdlLmlkKVxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxuXHRcdGxpc3Quc3BsaWNlKGluZGV4LCAxKVxuXHRcdC8vIOWtmOWCqFxuXHRcdHRoaXMuc2V0U3RvcmFnZShrZXksIGxpc3QpXG5cdH1cblx0Ly8g5pu05paw5oyH5a6a5Y6G5Y+y6K6w5b2VXG5cdGFzeW5jIHVwZGF0ZUNoYXREZXRhaWwobWVzc2FnZSwgaywgaXNTZW5kID0gdHJ1ZSkge1xuXHRcdC8vIOiOt+WPluWvueaWuWlkXG5cdFx0bGV0IGlkID0gbWVzc2FnZS5jaGF0X3R5cGUgPT09ICd1c2VyJyA/IChpc1NlbmQgPyBtZXNzYWdlLnRvX2lkIDogbWVzc2FnZS5mcm9tX2lkKSA6IG1lc3NhZ2UudG9faWRcblx0XHQvLyBrZXnlgLzvvJpjaGF0RGV0YWlsX+W9k+WJjeeUqOaIt2lkX+S8muivneexu+Wei1/mjqXmlLbkurov576kaWRcblx0XHRsZXQga2V5ID0gYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7bWVzc2FnZS5jaGF0X3R5cGV9XyR7aWR9YFxuXHRcdC8vIGNvbnNvbGUubG9nKCdrZXnlgLwnLCBrZXkpXG5cdFx0Ly8g6I635Y+W5Y6f5p2l6IGK5aSp6K6w5b2VXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXREZXRhaWwoa2V5KVxuXHRcdC8vIOagueaNrmvmn6Xmib7lr7nlupTljoblj7LorrDlvZVcblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uayA9PT0gaylcblx0XHRpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cblx0XHRsaXN0W2luZGV4XSA9IG1lc3NhZ2Vcblx0XHQvLyDlrZjlgqhcblx0XHQvLyBjb25zb2xlLmxvZygn5pu05paw5oyH5a6a5Y6G5Y+y6K6w5b2VJywgbGlzdCwgaW5kZXgsIGxpc3RbaW5kZXhdKTtcblx0XHR0aGlzLnNldFN0b3JhZ2Uoa2V5LCBsaXN0KVxuXHR9XG5cdC8vIOiOt+WPluiBiuWkqeiusOW9lVxuXHRnZXRDaGF0RGV0YWlsKGtleSA9IGZhbHNlKSB7XG5cdFx0a2V5ID0ga2V5ID8ga2V5IDogYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7dGhpcy5UTy5jaGF0X3R5cGV9XyR7dGhpcy5UTy5pZH1gXG5cdFx0cmV0dXJuIHRoaXMuZ2V0U3RvcmFnZShrZXkpXG5cdH1cblx0Ly8g5Yid5aeL5YyW5Lya6K+d5YiX6KGoXG5cdGluaXRDaGF0TGlzdEl0ZW0obWVzc2FnZSkge1xuXHRcdC8vIOiOt+WPluWIsOacrOWcsOWtmOWCqOS8muivneWIl+ihqFxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0TGlzdCgpXG5cdFx0Ly8g5Lya6K+d5piv5ZCm5a2Y5ZyoXG5cdFx0bGV0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoaXRlbSA9PiB7XG5cdFx0XHRyZXR1cm4gaXRlbS5jaGF0X3R5cGUgPT09IG1lc3NhZ2UuY2hhdF90eXBlICYmIGl0ZW0uaWQgPT09IG1lc3NhZ2UudG9faWRcblx0XHR9KVxuXHRcdC8vIOacgOWQjuS4gOadoea2iOaBr+WxleeOsOW9ouW8j1xuXHRcdGxldCBkYXRhID0gdGhpcy5mb3JtYXRDaGF0SXRlbURhdGEobWVzc2FnZSwgdHJ1ZSlcblxuXHRcdC8vIOS8muivneS4jeWtmOWcqO+8jOWIm+W7uuS8muivnVxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdGxldCBjaGF0SXRlbSA9IHtcblx0XHRcdFx0aWQ6IG1lc3NhZ2UudG9faWQsIC8vIOaOpeaUtuS6ui/nvqQgaWRcblx0XHRcdFx0Y2hhdF90eXBlOiBtZXNzYWdlLmNoYXRfdHlwZSwgLy8g5o6l5pS257G75Z6LIHVzZXLljZXogYogZ3JvdXDnvqTogYpcblx0XHRcdFx0YXZhdGFyOiBtZXNzYWdlLnRvX2F2YXRhciwgLy8g5o6l5pS25Lq6L+e+pCDlpLTlg49cblx0XHRcdFx0bmFtZTogbWVzc2FnZS50b19uYW1lLCAvLyDmjqXmlLbkurov576kIOaYteensFxuXHRcdFx0XHR1cGRhdGVfdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSwgLy8g5pyA5ZCO5LiA5p2h5raI5oGv55qE5pe26Ze05oizXG5cdFx0XHRcdGRhdGE6IG1lc3NhZ2UuZGF0YSwgLy8g5pyA5ZCO5LiA5p2h5raI5oGv5YaF5a65XG5cdFx0XHRcdHR5cGU6ICdzeXN0ZW0nLCAvLyDmnIDlkI7kuIDmnaHmtojmga/nsbvlnotcblx0XHRcdFx0bm9yZWFkbnVtOiAwLCAvLyDmnKror7vmlbBcblx0XHRcdFx0aXN0b3A6IGZhbHNlLCAvLyDmmK/lkKbnva7pobZcblx0XHRcdFx0c2hvd25pY2tuYW1lOiBmYWxzZSwgLy8g5piv5ZCm5pi+56S65pi156ewXG5cdFx0XHRcdG5vd2FybjogZmFsc2UsIC8vIOa2iOaBr+WFjeaJk+aJsFxuXHRcdFx0XHRzdHJvbmd3YXJuOiBmYWxzZSwgLy8g5piv5ZCm5byA5ZCv5by65o+Q6YaSXG5cdFx0XHR9XG5cdFx0XHQvLyDnvqTogYpcblx0XHRcdGlmIChtZXNzYWdlLmNoYXRfdHlwZSA9PT0gJ2dyb3VwJyAmJiBtZXNzYWdlLmdyb3VwKSB7XG5cdFx0XHRcdGNoYXRJdGVtID0ge1xuXHRcdFx0XHRcdC4uLmNoYXRJdGVtLFxuXHRcdFx0XHRcdHVzZXJfaWQ6IG1lc3NhZ2UuZ3JvdXAudXNlcl9pZCwgLy8g576k566h55CG5ZGYaWRcblx0XHRcdFx0XHRyZW1hcms6ICcnLCAvLyDnvqTlhazlkYpcblx0XHRcdFx0XHRpbnZpdGVfY29uZmlybTogbWVzc2FnZS5ncm91cC5pbnZpdGVfY29uZmlybSwgLy8g6YKA6K+356Gu6K6kXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxpc3QudW5zaGlmdChjaGF0SXRlbSlcblx0XHRcdC8vIOWtmOWCqFxuXHRcdFx0bGV0IGtleSA9IGBjaGF0bGlzdF8ke3RoaXMudXNlci5pZH1gXG5cdFx0XHR0aGlzLnNldFN0b3JhZ2Uoa2V5LCBsaXN0KVxuXHRcdFx0Ly8g6YCa55+l5pu05pawdnVleOS4reeahOiBiuWkqeS8muivneWIl+ihqFxuXHRcdFx0dW5pLiRlbWl0KCdvblVwZGF0ZUNoYXRMaXN0JywgbGlzdClcblx0XHR9XG5cdH1cblx0Ly8g5pu05paw5Lya6K+d5YiX6KGoXG5cdHVwZGF0ZUNoYXRMaXN0KG1lc3NhZ2UsIGlzU2VuZCA9IHRydWUpIHtcblx0XHQvLyDojrflj5bliLDmnKzlnLDlrZjlgqjkvJror53liJfooahcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdExpc3QoKVxuXHRcdC8vIOaYr+WQpuWkhOS6juW9k+WJjeiBiuWkqeS4rVxuXHRcdGxldCBpc0N1cnJlbnRDaGF0ID0gZmFsc2Vcblx0XHQvLyDojrflj5bmjqXmlLbkurov576kaWQv5aS05YOPL+aYteensFxuXHRcdGxldCBpZCA9IDBcblx0XHRsZXQgYXZhdGFyID0gJydcblx0XHRsZXQgbmFtZSA9ICcnXG5cdFx0Ly8g5Yik5pat56eB6IGKL+e+pOiBilxuXHRcdGlmIChtZXNzYWdlLmNoYXRfdHlwZSA9PT0gJ3VzZXInKSB7XG5cdFx0XHQvLyDnp4HogYpcblx0XHRcdC8vIOiBiuWkqeWvueixoeaYr+WQpuWtmOWcqFxuXHRcdFx0aXNDdXJyZW50Q2hhdCA9IHRoaXMuVE8gPyAoaXNTZW5kID8gdGhpcy5UTy5pZCA9PT0gbWVzc2FnZS50b19pZCA6IHRoaXMuVE8uaWQgPT09IG1lc3NhZ2UuZnJvbV9pZCkgOlxuXHRcdFx0XHRmYWxzZVxuXHRcdFx0aWQgPSBpc1NlbmQgPyBtZXNzYWdlLnRvX2lkIDogbWVzc2FnZS5mcm9tX2lkXG5cdFx0XHRhdmF0YXIgPSBpc1NlbmQgPyBtZXNzYWdlLnRvX2F2YXRhciA6IG1lc3NhZ2UuZnJvbV9hdmF0YXJcblx0XHRcdG5hbWUgPSBpc1NlbmQgPyBtZXNzYWdlLnRvX25hbWUgOiBtZXNzYWdlLmZyb21fbmFtZVxuXHRcdFx0Ly8gaXNDdXJyZW50Q2hhdD1pc1NlbmQ/dGhpcy5UT1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL+e+pOiBilxuXHRcdFx0aXNDdXJyZW50Q2hhdCA9IHRoaXMuVE8uaWQgJiYgKHRoaXMuVE8uaWQgPT09IG1lc3NhZ2UudG9faWQpXG5cdFx0XHRpZCA9IG1lc3NhZ2UudG9faWRcblx0XHRcdGF2YXRhciA9IG1lc3NhZ2UudG9fYXZhdGFyXG5cdFx0XHRuYW1lID0gbWVzc2FnZS50b19uYW1lXG5cdFx0fVxuXG5cdFx0Ly8g5Lya6K+d5piv5ZCm5a2Y5ZyoXG5cdFx0bGV0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoaXRlbSA9PiB7XG5cdFx0XHRyZXR1cm4gaXRlbS5jaGF0X3R5cGUgPT09IG1lc3NhZ2UuY2hhdF90eXBlICYmIGl0ZW0uaWQgPT09IGlkXG5cdFx0fSlcblx0XHQvLyDmnIDlkI7kuIDmnaHmtojmga/lsZXnjrDlvaLlvI9cblx0XHQvLyBkYXRhID0gbWVzc2FnZS5kYXRhLmxlbmd0aCA+IDE4ID8gbWVzc2FnZS5kYXRhLnNsaWNlKDAsIDE3KSArICcuLi4nIDogbWVzc2FnZS5kYXRhXG5cdFx0bGV0IGRhdGEgPSB0aGlzLmZvcm1hdENoYXRJdGVtRGF0YShtZXNzYWdlLCBpc1NlbmQpXG5cdFx0Ly8g5Lya6K+d5LiN5a2Y5Zyo77yM5Yib5bu65Lya6K+dXG5cdFx0Ly8g5pyq6K+75pWw5piv5ZCmKzFcblx0XHRsZXQgbm9yZWFkbnVtID0gKGlzU2VuZCB8fCBpc0N1cnJlbnRDaGF0KSA/IDAgOiAxXG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0bGV0IGNoYXRJdGVtID0ge1xuXHRcdFx0XHRpZCwgLy8g5o6l5pS25Lq6L+e+pCBpZFxuXHRcdFx0XHRjaGF0X3R5cGU6IG1lc3NhZ2UuY2hhdF90eXBlLCAvLyDmjqXmlLbnsbvlnosgdXNlcuWNleiBiiBncm91cOe+pOiBilxuXHRcdFx0XHRhdmF0YXIsIC8vIOaOpeaUtuS6ui/nvqQg5aS05YOPXG5cdFx0XHRcdG5hbWUsIC8vIOaOpeaUtuS6ui/nvqQg5pi156ewXG5cdFx0XHRcdHVwZGF0ZV90aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLCAvLyDmnIDlkI7kuIDmnaHmtojmga/nmoTml7bpl7TmiLNcblx0XHRcdFx0ZGF0YSwgLy8g5pyA5ZCO5LiA5p2h5raI5oGv5YaF5a65XG5cdFx0XHRcdHR5cGU6IG1lc3NhZ2UudHlwZSwgLy8g5pyA5ZCO5LiA5p2h5raI5oGv57G75Z6LXG5cdFx0XHRcdG5vcmVhZG51bSwgLy8g5pyq6K+75pWwXG5cdFx0XHRcdGlzdG9wOiBmYWxzZSwgLy8g5piv5ZCm572u6aG2XG5cdFx0XHRcdHNob3duaWNrbmFtZTogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuaYteensFxuXHRcdFx0XHRub3dhcm46IGZhbHNlLCAvLyDmtojmga/lhY3miZPmibBcblx0XHRcdFx0c3Ryb25nd2FybjogZmFsc2UsIC8vIOaYr+WQpuW8gOWQr+W8uuaPkOmGklxuXHRcdFx0XHRub3JlYWRudW1BbGw6IFtdLCAvL+acquivu+aVsOWIl+ihqFxuXHRcdFx0fVxuXHRcdFx0Ly8g576k6IGKXG5cdFx0XHRpZiAobWVzc2FnZS5jaGF0X3R5cGUgPT09ICdncm91cCcgJiYgbWVzc2FnZS5ncm91cCkge1xuXHRcdFx0XHRjaGF0SXRlbS5zaG93bmlja25hbWUgPSB0cnVlXG5cdFx0XHRcdGNoYXRJdGVtLm5hbWUgPSBtZXNzYWdlLnRvX25hbWVcblx0XHRcdFx0Y2hhdEl0ZW0gPSB7XG5cdFx0XHRcdFx0Li4uY2hhdEl0ZW0sXG5cdFx0XHRcdFx0dXNlcl9pZDogbWVzc2FnZS5ncm91cC51c2VyX2lkLCAvLyDnvqTnrqHnkIblkZhpZFxuXHRcdFx0XHRcdHJlbWFyazogJycsIC8vIOe+pOWFrOWRilxuXHRcdFx0XHRcdGludml0ZV9jb25maXJtOiAxLCAvLyDpgoDor7fnoa7orqRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGlzdC51bnNoaWZ0KGNoYXRJdGVtKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBcdOWtmOWcqOabtOaWsOS8muivnVxuXHRcdFx0Ly8g5ou/5Yiw5b2T5YmN5Lya6K+dXG5cdFx0XHRsZXQgaXRlbSA9IGxpc3RbaW5kZXhdXG5cdFx0XHQvLyDmm7TmlrDmnIDlkI7kuIDlpKnmtojmga/ml7bpl7TvvIzlhoXlrrnvvIznsbvlnotcblx0XHRcdGl0ZW0udXBkYXRlX3RpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG5cdFx0XHRpdGVtLm5hbWUgPSBtZXNzYWdlLnRvX25hbWVcblx0XHRcdGl0ZW0ubmFtZSA9IG5hbWVcblx0XHRcdGl0ZW0uZGF0YSA9IGRhdGFcblx0XHRcdGl0ZW0udHlwZSA9IG1lc3NhZ2UudHlwZVxuXHRcdFx0Ly8g5pyq6K+75pWw5pu05pawXG5cblx0XHRcdGl0ZW0ubm9yZWFkbnVtQWxsLnB1c2gobWVzc2FnZS5pZClcblx0XHRcdGl0ZW0ubm9yZWFkbnVtICs9IG5vcmVhZG51bVxuXHRcdFx0Ly8g572u6aG25Lya6K+dXG5cdFx0XHRsaXN0ID0gdGhpcy5saXN0VG9GaXJzdChsaXN0LCBpbmRleClcblx0XHR9XG5cdFx0Ly8g5a2Y5YKoXG5cdFx0bGV0IGtleSA9IGBjaGF0bGlzdF8ke3RoaXMudXNlci5pZH1gXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGtleSwgbGlzdClcblx0XHQvLyDmm7TmlrDmnKror7vmlbBcblx0XHR0aGlzLnVwZGF0ZUJhZGdlKGxpc3QpXG5cdFx0Ly8g6YCa55+l5pu05pawdnVleOS4reeahOiBiuWkqeS8muivneWIl+ihqFxuXHRcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsIGxpc3QpXG5cblx0XHRyZXR1cm4gbGlzdFxuXG5cdH1cblx0Ly8g5pu05paw5pyq6K+75pWwXG5cdGFzeW5jIHVwZGF0ZUJhZGdlKGxpc3QgPSBmYWxzZSkge1xuXHRcdC8vIOiOt+WPluaJgOacieS8muivneWIl+ihqFxuXHRcdGxpc3QgPSBsaXN0ID8gbGlzdCA6IHRoaXMuZ2V0Q2hhdExpc3QoKVxuXHRcdC8vIOe7n+iuoeaJgOacieacquivu+aVsFxuXHRcdGxldCB0b3RhbCA9IDBcblx0XHRsaXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHR0b3RhbCArPSBpdGVtLm5vcmVhZG51bVxuXHRcdH0pXG5cdFx0Ly8g6K6+572u5bqV6YOo5a+86Iiq5qCP6KeS5qCHXG5cdFx0aWYgKHRvdGFsID4gMCkge1xuXHRcdFx0dW5pLnNldFRhYkJhckJhZGdlKHtcblx0XHRcdFx0aW5kZXg6IDAsXG5cdFx0XHRcdHRleHQ6IHRvdGFsIDw9IDk5ID8gdG90YWwudG9TdHJpbmcoKSA6ICfCt8K3wrcnXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR1bmkucmVtb3ZlVGFiQmFyQmFkZ2Uoe1xuXHRcdFx0XHRpbmRleDogMFxuXHRcdFx0fSlcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2codG90YWwpO1xuXHRcdHVuaS4kZW1pdCgndG90YWxOb3JlYWRudW0nLCB0b3RhbClcblx0fVxuXG5cdC8vIOabtOaWsOaMh+WumuS8muivneWIl+ihqFxuXHRhc3luYyB1cGRhdGVDaGF0SXRlbSh3aGVyZSwgZGF0YSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHdoZXJlLmNoYXRJZClcblx0XHQvLyDojrflj5bmiYDmnInkvJror53liJfooahcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdExpc3QoKVxuXHRcdC8vIOaJvuWIsOW9k+WJjeS8muivnVxuXHRcdGxldCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gd2hlcmUuaWQgJiYgaXRlbS5jaGF0X3R5cGUgPT09IHdoZXJlLmNoYXRfdHlwZSlcblxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxuXHRcdC8v5pyq6K+75pWw5YiX6KGoXG5cdFx0bGV0IGlzTmV3ZGF0YSA9IC0xXG5cdFx0aWYgKHdoZXJlLmxpc3QpIHtcblx0XHRcdGxldCBuZXdkYXRhID0gd2hlcmUubGlzdFt3aGVyZS5saXN0Lmxlbmd0aCAtIDFdLmlkXG5cdFx0XHRpc05ld2RhdGEgPSBuZXdkYXRhID09PSB3aGVyZS5jaGF0SWRcblx0XHR9XG5cblx0XHRsZXQgaXNOb3JlYWRudW0gPSBsaXN0W2luZGV4XS5ub3JlYWRudW1BbGwuaW5kZXhPZih3aGVyZS5jaGF0SWQpXG5cdFx0aWYgKGxpc3RbaW5kZXhdLm5vcmVhZG51bSA+IDUwMCkge1xuXHRcdFx0aXNOb3JlYWRudW0gPSAtMVxuXHRcdH1cblx0XHQvLyDmm7TmlrDmlbDmja5cblx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGxpc3RbaW5kZXhdID0gZGF0YShsaXN0W2luZGV4XSwgaXNOb3JlYWRudW0sIGlzTmV3ZGF0YSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGlzdFtpbmRleF0gPSBkYXRhXG5cdFx0fVxuXHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxuXHRcdHRoaXMuc2V0U3RvcmFnZShrZXksIGxpc3QpXG5cblx0XHQvLyDmm7TmlrDkvJror53liJfooajnirbmgIFcblx0XHR1bmkuJGVtaXQoJ29uVXBkYXRlQ2hhdExpc3QnLCBsaXN0KVxuXG5cdH1cblx0Ly8g6K+75Y+W5Lya6K+dXG5cdGFzeW5jIHJlYWRDaGF0SXRlbShpZCwgY2hhdF90eXBlKSB7XG5cdFx0Ly8g6I635Y+W5omA5pyJ5Lya6K+d5YiX6KGoXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXRMaXN0KClcblx0XHQvLyDmib7liLDlvZPliY3kvJror51cblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGlkICYmIGl0ZW0uY2hhdF90eXBlID09PSBjaGF0X3R5cGUpXG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0bGlzdFtpbmRleF0ubm9yZWFkbnVtID0gMFxuXHRcdFx0bGlzdFtpbmRleF0ubm9yZWFkbnVtQWxsID0gW11cblx0XHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxuXHRcdFx0dGhpcy5zZXRTdG9yYWdlKGtleSwgbGlzdClcblx0XHRcdC8vIOmHjeaWsOiOt+WPluaAu+acquivu+aVsFxuXHRcdFx0dGhpcy51cGRhdGVCYWRnZSgpXG5cdFx0XHQvLyDmm7TmlrDkvJror53liJfooajnirbmgIFcblx0XHRcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsIGxpc3QpXG5cdFx0fVxuXHR9XG5cdC8vIOWIoOmZpOaMh+WumuS8muivnVxuXHRhc3luYyByZW1vdmVDaGF0SXRlbShpZCwgY2hhdF90eXBlKSB7XG5cdFx0Ly8g6I635Y+W5omA5pyJ5Lya6K+d5YiX6KGoXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXRMaXN0KClcblx0XHQvLyDmib7liLDlvZPliY3kvJror51cblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGlkICYmIGl0ZW0uY2hhdF90eXBlID09PSBjaGF0X3R5cGUpXG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpXG5cblx0XHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxuXHRcdFx0dGhpcy5zZXRTdG9yYWdlKGtleSwgbGlzdClcblx0XHRcdC8vIOmHjeaWsOiOt+WPluaAu+acquivu+aVsFxuXHRcdFx0dGhpcy51cGRhdGVCYWRnZSgpXG5cdFx0XHQvLyDmm7TmlrDkvJror53liJfooajnirbmgIFcblx0XHRcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsIGxpc3QpXG5cdFx0fVxuXHR9XG5cdC8vIOa4heepuuiBiuWkqeiusOW9lVxuXHRhc3luYyBjbGVhckNoYXREZXRhaWwoaWQsIGNoYXRfdHlwZSkge1xuXHRcdGxldCBrZXkgPSBgY2hhdERldGFpbF8ke3RoaXMudXNlci5pZH1fJHtjaGF0X3R5cGV9XyR7aWR9YFxuXHRcdCRVLnJlbW92ZVN0b3JhZ2Uoa2V5KVxuXHRcdC8vIOiOt+WPluaJgOacieS8muivneWIl+ihqFxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0TGlzdCgpXG5cdFx0Ly8g5om+5Yiw5b2T5YmN5Lya6K+dXG5cdFx0bGV0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBpZCAmJiBpdGVtLmNoYXRfdHlwZSA9PT0gY2hhdF90eXBlKVxuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdGxpc3RbaW5kZXhdLmRhdGEgPSAnJ1xuXG5cdFx0XHRsZXQga2V5ID0gYGNoYXRsaXN0XyR7dGhpcy51c2VyLmlkfWBcblx0XHRcdHRoaXMuc2V0U3RvcmFnZShrZXksbGlzdClcblx0XHRcdHRoaXMudXBkYXRlQmFkZ2UoKVxuXHRcdFx0Ly8g5pu05paw5Lya6K+d5YiX6KGo54q25oCBXG5cdFx0XHR1bmkuJGVtaXQoJ29uVXBkYXRlQ2hhdExpc3QnLCBsaXN0KVxuXHRcdH1cblx0fVxuXG5cdC8vIOiOt+WPluWIsOacrOWcsOWtmOWCqOS8muivneWIl+ihqFxuXHRnZXRDaGF0TGlzdCgpIHtcblx0XHRsZXQga2V5ID0gYGNoYXRsaXN0XyR7dGhpcy51c2VyLmlkfWBcblx0XHRyZXR1cm4gdGhpcy5nZXRTdG9yYWdlKGtleSlcblx0fVxuXHQvLyDojrflj5bmjIflrprkvJror51cblx0Z2V0Q2hhdExpc3RJdGVtKGlkLCBjaGF0X3R5cGUpIHtcblx0XHQvLyDojrflj5bmiYDmnInkvJror53liJfooahcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdExpc3QoKVxuXHRcdC8vIOaJvuWIsOW9k+WJjeS8muivnVxuXHRcdGxldCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQgJiYgaXRlbS5jaGF0X3R5cGUgPT09IGNoYXRfdHlwZSlcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRyZXR1cm4gbGlzdFtpbmRleF1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblx0Ly8g6I635Y+W5a2Y5YKoXG5cdGdldFN0b3JhZ2Uoa2V5KSB7XG5cdFx0bGV0IGxpc3QgPSAkVS5nZXRTdG9yYWdlKGtleSlcblx0XHRyZXR1cm4gbGlzdCA/IEpTT04ucGFyc2UobGlzdCkgOiBbXVxuXHR9XG5cdC8vIOiuvue9ruWtmOWCqFxuXHRzZXRTdG9yYWdlKGtleSwgdmFsdWUpIHtcblx0XHRyZXR1cm4gJFUuc2V0U3RvcmFnZShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcblx0fVxuXHQvLyDmlbDnu4Tnva7pobZcblx0bGlzdFRvRmlyc3QoYXJyLCBpbmRleCkge1xuXHRcdGlmIChpbmRleCAhPSAwKSB7XG5cdFx0XHRhcnIudW5zaGlmdChhcnIuc3BsaWNlKGluZGV4LCAxKVswXSlcblx0XHR9XG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cdC8v5qC85byP5YyW5Lya6K+d5pyA5ZCO5LiA5p2h5raI5oGv5pi+56S6XG5cdGZvcm1hdENoYXRJdGVtRGF0YShtZXNzYWdlLCBpc1NlbmQpIHtcblx0XHRsZXQgZGF0YSA9IG1lc3NhZ2UuZGF0YVxuXHRcdHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG5cdFx0XHRjYXNlICdlbW90aWNvbic6XG5cdFx0XHRcdGRhdGEgPSAnW+ihqOaDhV0nXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0XHRkYXRhID0gJ1vlm77niYddJ1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2F1ZGlvJzpcblx0XHRcdFx0ZGF0YSA9ICdb6K+t6Z+zXSdcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRcdGRhdGEgPSAnW+inhumikV0nXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnY2FyZCc6XG5cdFx0XHRcdGRhdGEgPSAnW+WQjeeJh10nXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGRhdGEgPSAoaXNTZW5kIHx8IG1lc3NhZ2UuY2hhdF90eXBlICE9PSAnZ3JvdXAnIHx8IG1lc3NhZ2UudHlwZSA9PT0gJ3N5c3RlbScpID8gZGF0YSA6XG5cdFx0XHRgJHttZXNzYWdlLmZyb21fbmFtZX06JHtkYXRhfWBcblx0XHRyZXR1cm4gZGF0YVxuXHR9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IGNoYXRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),

/***/ 17:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 18);

/***/ }),

/***/ 18:
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ 20:
/*!***********************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/main.js?{"type":"appStyle"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 21).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTJDIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),

/***/ 21:
/*!***********************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 22);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 22:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/jhq/WeChatProjects/weixinApp/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".iconfont": {
    "": {
      "fontFamily": [
        "iconfont",
        0,
        0,
        1
      ]
    }
  },
  ".view": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        2
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        2
      ],
      "color": [
        "#0E151D",
        0,
        0,
        2
      ]
    }
  },
  ".text": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        2
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        2
      ],
      "color": [
        "#0E151D",
        0,
        0,
        2
      ]
    }
  },
  ".w-100": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        4
      ]
    }
  },
  ".row": {
    "": {
      "marginRight": [
        "-20rpx",
        0,
        0,
        5
      ],
      "marginLeft": [
        "-20rpx",
        0,
        0,
        5
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        5
      ],
      "flexDirection": [
        "row",
        0,
        0,
        5
      ]
    }
  },
  ".col-1": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "62.5rpx",
        0,
        0,
        18
      ]
    }
  },
  ".col-2": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "125rpx",
        0,
        0,
        17
      ]
    }
  },
  ".col-3": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "187.5rpx",
        0,
        0,
        16
      ]
    }
  },
  ".col-4": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "250rpx",
        0,
        0,
        15
      ]
    }
  },
  ".col-5": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "312.5rpx",
        0,
        0,
        14
      ]
    }
  },
  ".col-6": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "375rpx",
        0,
        0,
        13
      ]
    }
  },
  ".col-7": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "437.5rpx",
        0,
        0,
        12
      ]
    }
  },
  ".col-8": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "500rpx",
        0,
        0,
        11
      ]
    }
  },
  ".col-9": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "562.5rpx",
        0,
        0,
        10
      ]
    }
  },
  ".col-10": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "625rpx",
        0,
        0,
        9
      ]
    }
  },
  ".col-11": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "687.5rpx",
        0,
        0,
        8
      ]
    }
  },
  ".col-12": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "750rpx",
        0,
        0,
        7
      ]
    }
  },
  ".col-offset-12": {
    "": {
      "marginLeft": [
        "750rpx",
        0,
        0,
        19
      ]
    }
  },
  ".col-offset-11": {
    "": {
      "marginLeft": [
        "687.5rpx",
        0,
        0,
        20
      ]
    }
  },
  ".col-offset-10": {
    "": {
      "marginLeft": [
        "625rpx",
        0,
        0,
        21
      ]
    }
  },
  ".col-offset-9": {
    "": {
      "marginLeft": [
        "562.5rpx",
        0,
        0,
        22
      ]
    }
  },
  ".col-offset-8": {
    "": {
      "marginLeft": [
        "500rpx",
        0,
        0,
        23
      ]
    }
  },
  ".col-offset-7": {
    "": {
      "marginLeft": [
        "437.5rpx",
        0,
        0,
        24
      ]
    }
  },
  ".col-offset-6": {
    "": {
      "marginLeft": [
        "375rpx",
        0,
        0,
        25
      ]
    }
  },
  ".col-offset-5": {
    "": {
      "marginLeft": [
        "312.5rpx",
        0,
        0,
        26
      ]
    }
  },
  ".col-offset-4": {
    "": {
      "marginLeft": [
        "250rpx",
        0,
        0,
        27
      ]
    }
  },
  ".col-offset-3": {
    "": {
      "marginLeft": [
        "187.5rpx",
        0,
        0,
        28
      ]
    }
  },
  ".col-offset-2": {
    "": {
      "marginLeft": [
        "125rpx",
        0,
        0,
        29
      ]
    }
  },
  ".col-offset-1": {
    "": {
      "marginLeft": [
        "62.5rpx",
        0,
        0,
        30
      ]
    }
  },
  ".col-offset-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        31
      ]
    }
  },
  ".flex": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        33
      ]
    }
  },
  ".flex-row": {
    "": {
      "flexDirection": [
        "row",
        1,
        0,
        34
      ]
    }
  },
  ".flex-column": {
    "": {
      "flexDirection": [
        "column",
        1,
        0,
        35
      ]
    }
  },
  ".flex-row-reverse": {
    "": {
      "flexDirection": [
        "row-reverse",
        1,
        0,
        36
      ]
    }
  },
  ".flex-column-reverse": {
    "": {
      "flexDirection": [
        "column-reverse",
        1,
        0,
        37
      ]
    }
  },
  ".flex-wrap": {
    "": {
      "flexWrap": [
        "wrap",
        0,
        0,
        38
      ]
    }
  },
  ".flex-nowrap": {
    "": {
      "flexWrap": [
        "nowrap",
        0,
        0,
        39
      ]
    }
  },
  ".justify-start": {
    "": {
      "justifyContent": [
        "flex-start",
        0,
        0,
        40
      ]
    }
  },
  ".justify-end": {
    "": {
      "justifyContent": [
        "flex-end",
        0,
        0,
        41
      ]
    }
  },
  ".justify-around": {
    "": {
      "justifyContent": [
        "space-around",
        0,
        0,
        42
      ]
    }
  },
  ".justify-between": {
    "": {
      "justifyContent": [
        "space-between",
        0,
        0,
        43
      ]
    }
  },
  ".justify-center": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        44
      ]
    }
  },
  ".align-center": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        45
      ]
    }
  },
  ".align-stretch": {
    "": {
      "alignItems": [
        "stretch",
        0,
        0,
        46
      ]
    }
  },
  ".align-start": {
    "": {
      "alignItems": [
        "flex-start",
        0,
        0,
        47
      ]
    }
  },
  ".align-end": {
    "": {
      "alignItems": [
        "flex-end",
        0,
        0,
        48
      ]
    }
  },
  ".flex-1": {
    "": {
      "flex": [
        1,
        0,
        0,
        49
      ]
    }
  },
  ".flex-2": {
    "": {
      "flex": [
        2,
        0,
        0,
        50
      ]
    }
  },
  ".flex-3": {
    "": {
      "flex": [
        3,
        0,
        0,
        51
      ]
    }
  },
  ".flex-4": {
    "": {
      "flex": [
        4,
        0,
        0,
        52
      ]
    }
  },
  ".flex-5": {
    "": {
      "flex": [
        5,
        0,
        0,
        53
      ]
    }
  },
  ".container": {
    "": {
      "paddingRight": [
        "20rpx",
        0,
        0,
        54
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        54
      ]
    }
  },
  ".m-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        56
      ],
      "marginRight": [
        0,
        0,
        0,
        56
      ],
      "marginBottom": [
        0,
        0,
        0,
        56
      ],
      "marginLeft": [
        0,
        0,
        0,
        56
      ]
    }
  },
  ".m-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        57
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        57
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        57
      ],
      "marginLeft": [
        "10rpx",
        0,
        0,
        57
      ]
    }
  },
  ".m-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        58
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        58
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        58
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        58
      ]
    }
  },
  ".m-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        59
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        59
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        59
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        59
      ]
    }
  },
  ".m-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        60
      ],
      "marginRight": [
        "40rpx",
        0,
        0,
        60
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        60
      ],
      "marginLeft": [
        "40rpx",
        0,
        0,
        60
      ]
    }
  },
  ".m-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        61
      ],
      "marginRight": [
        "50rpx",
        0,
        0,
        61
      ],
      "marginBottom": [
        "50rpx",
        0,
        0,
        61
      ],
      "marginLeft": [
        "50rpx",
        0,
        0,
        61
      ]
    }
  },
  ".mt-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        62
      ]
    }
  },
  ".mt-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        63
      ]
    }
  },
  ".mt-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        64
      ]
    }
  },
  ".mt-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        65
      ]
    }
  },
  ".mt-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        66
      ]
    }
  },
  ".mt-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        67
      ]
    }
  },
  ".mb-0": {
    "": {
      "marginBottom": [
        0,
        0,
        0,
        68
      ]
    }
  },
  ".mb-1": {
    "": {
      "marginBottom": [
        "10rpx",
        0,
        0,
        69
      ]
    }
  },
  ".mb-2": {
    "": {
      "marginBottom": [
        "20rpx",
        0,
        0,
        70
      ]
    }
  },
  ".mb-3": {
    "": {
      "marginBottom": [
        "30rpx",
        0,
        0,
        71
      ]
    }
  },
  ".mb-4": {
    "": {
      "marginBottom": [
        "40rpx",
        0,
        0,
        72
      ]
    }
  },
  ".mb-5": {
    "": {
      "marginBottom": [
        "50rpx",
        0,
        0,
        73
      ]
    }
  },
  ".ml-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        74
      ]
    }
  },
  ".ml-1": {
    "": {
      "marginLeft": [
        "10rpx",
        0,
        0,
        75
      ]
    }
  },
  ".ml-2": {
    "": {
      "marginLeft": [
        "20rpx",
        0,
        0,
        76
      ]
    }
  },
  ".ml-3": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        77
      ]
    }
  },
  ".ml-4": {
    "": {
      "marginLeft": [
        "40rpx",
        0,
        0,
        78
      ]
    }
  },
  ".ml-5": {
    "": {
      "marginLeft": [
        "50rpx",
        0,
        0,
        79
      ]
    }
  },
  ".mr-0": {
    "": {
      "marginRight": [
        0,
        0,
        0,
        80
      ]
    }
  },
  ".mr-1": {
    "": {
      "marginRight": [
        "10rpx",
        0,
        0,
        81
      ]
    }
  },
  ".mr-2": {
    "": {
      "marginRight": [
        "20rpx",
        0,
        0,
        82
      ]
    }
  },
  ".mr-3": {
    "": {
      "marginRight": [
        "30rpx",
        0,
        0,
        83
      ]
    }
  },
  ".mr-4": {
    "": {
      "marginRight": [
        "40rpx",
        0,
        0,
        84
      ]
    }
  },
  ".mr-5": {
    "": {
      "marginRight": [
        "50rpx",
        0,
        0,
        85
      ]
    }
  },
  ".my-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        86
      ],
      "marginBottom": [
        0,
        0,
        0,
        86
      ]
    }
  },
  ".my-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        87
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        87
      ]
    }
  },
  ".my-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        88
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        88
      ]
    }
  },
  ".my-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        89
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        89
      ]
    }
  },
  ".my-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        90
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        90
      ]
    }
  },
  ".my-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        91
      ],
      "marginBottom": [
        "50rpx",
        0,
        0,
        91
      ]
    }
  },
  ".mx-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        92
      ],
      "marginRight": [
        0,
        0,
        0,
        92
      ]
    }
  },
  ".mx-1": {
    "": {
      "marginLeft": [
        "10rpx",
        0,
        0,
        93
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        93
      ]
    }
  },
  ".mx-2": {
    "": {
      "marginLeft": [
        "20rpx",
        0,
        0,
        94
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        94
      ]
    }
  },
  ".mx-3": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        95
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        95
      ]
    }
  },
  ".mx-4": {
    "": {
      "marginLeft": [
        "40rpx",
        0,
        0,
        96
      ],
      "marginRight": [
        "40rpx",
        0,
        0,
        96
      ]
    }
  },
  ".mx-5": {
    "": {
      "marginLeft": [
        "50rpx",
        0,
        0,
        97
      ],
      "marginRight": [
        "50rpx",
        0,
        0,
        97
      ]
    }
  },
  ".p-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        98
      ],
      "paddingRight": [
        0,
        0,
        0,
        98
      ],
      "paddingBottom": [
        0,
        0,
        0,
        98
      ],
      "paddingLeft": [
        0,
        0,
        0,
        98
      ]
    }
  },
  ".p": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        99
      ],
      "paddingRight": [
        "5rpx",
        0,
        0,
        99
      ],
      "paddingBottom": [
        "5rpx",
        0,
        0,
        99
      ],
      "paddingLeft": [
        "5rpx",
        0,
        0,
        99
      ]
    }
  },
  ".p-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        100
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        100
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        100
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        100
      ]
    }
  },
  ".p-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        101
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        101
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        101
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        101
      ]
    }
  },
  ".p-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        102
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        102
      ],
      "paddingBottom": [
        "30rpx",
        0,
        0,
        102
      ],
      "paddingLeft": [
        "30rpx",
        0,
        0,
        102
      ]
    }
  },
  ".p-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        103
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        103
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        103
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        103
      ]
    }
  },
  ".p-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        104
      ],
      "paddingRight": [
        "50rpx",
        0,
        0,
        104
      ],
      "paddingBottom": [
        "50rpx",
        0,
        0,
        104
      ],
      "paddingLeft": [
        "50rpx",
        0,
        0,
        104
      ]
    }
  },
  ".pt-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        105
      ]
    }
  },
  ".pt": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        106
      ]
    }
  },
  ".pt-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        107
      ]
    }
  },
  ".pt-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        108
      ]
    }
  },
  ".pt-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        109
      ]
    }
  },
  ".pt-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        110
      ]
    }
  },
  ".pt-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        111
      ]
    }
  },
  ".pb-0": {
    "": {
      "paddingBottom": [
        0,
        0,
        0,
        112
      ]
    }
  },
  ".pb-1": {
    "": {
      "paddingBottom": [
        "10rpx",
        0,
        0,
        113
      ]
    }
  },
  ".pb": {
    "": {
      "paddingBottom": [
        "5rpx",
        0,
        0,
        114
      ]
    }
  },
  ".pb-2": {
    "": {
      "paddingBottom": [
        "20rpx",
        0,
        0,
        115
      ]
    }
  },
  ".pb-3": {
    "": {
      "paddingBottom": [
        "30rpx",
        0,
        0,
        116
      ]
    }
  },
  ".pb-4": {
    "": {
      "paddingBottom": [
        "40rpx",
        0,
        0,
        117
      ]
    }
  },
  ".pb-5": {
    "": {
      "paddingBottom": [
        "50rpx",
        0,
        0,
        118
      ]
    }
  },
  ".pl-0": {
    "": {
      "paddingLeft": [
        0,
        0,
        0,
        119
      ]
    }
  },
  ".pl": {
    "": {
      "paddingLeft": [
        "5rpx",
        0,
        0,
        120
      ]
    }
  },
  ".pl-1": {
    "": {
      "paddingLeft": [
        "10rpx",
        0,
        0,
        121
      ]
    }
  },
  ".pl-2": {
    "": {
      "paddingLeft": [
        "20rpx",
        0,
        0,
        122
      ]
    }
  },
  ".pl-3": {
    "": {
      "paddingLeft": [
        "30rpx",
        0,
        0,
        123
      ]
    }
  },
  ".pl-4": {
    "": {
      "paddingLeft": [
        "40rpx",
        0,
        0,
        124
      ]
    }
  },
  ".pl-5": {
    "": {
      "paddingLeft": [
        "50rpx",
        0,
        0,
        125
      ]
    }
  },
  ".pr-0": {
    "": {
      "paddingRight": [
        0,
        0,
        0,
        126
      ]
    }
  },
  ".pr": {
    "": {
      "paddingRight": [
        "5rpx",
        0,
        0,
        127
      ]
    }
  },
  ".pr-1": {
    "": {
      "paddingRight": [
        "10rpx",
        0,
        0,
        128
      ]
    }
  },
  ".pr-2": {
    "": {
      "paddingRight": [
        "20rpx",
        0,
        0,
        129
      ]
    }
  },
  ".pr-3": {
    "": {
      "paddingRight": [
        "30rpx",
        0,
        0,
        130
      ]
    }
  },
  ".pr-4": {
    "": {
      "paddingRight": [
        "40rpx",
        0,
        0,
        131
      ]
    }
  },
  ".pr-5": {
    "": {
      "paddingRight": [
        "50rpx",
        0,
        0,
        132
      ]
    }
  },
  ".py-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        133
      ],
      "paddingBottom": [
        0,
        0,
        0,
        133
      ]
    }
  },
  ".py": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        134
      ],
      "paddingBottom": [
        "5rpx",
        0,
        0,
        134
      ]
    }
  },
  ".py-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        135
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        135
      ]
    }
  },
  ".py-15": {
    "": {
      "paddingTop": [
        "15rpx",
        0,
        0,
        136
      ],
      "paddingBottom": [
        "15rpx",
        0,
        0,
        136
      ]
    }
  },
  ".py-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        137
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        137
      ]
    }
  },
  ".py-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        138
      ],
      "paddingBottom": [
        "30rpx",
        0,
        0,
        138
      ]
    }
  },
  ".py-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        139
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        139
      ]
    }
  },
  ".py-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        140
      ],
      "paddingBottom": [
        "50rpx",
        0,
        0,
        140
      ]
    }
  },
  ".px-0": {
    "": {
      "paddingLeft": [
        0,
        0,
        0,
        141
      ],
      "paddingRight": [
        0,
        0,
        0,
        141
      ]
    }
  },
  ".px-1": {
    "": {
      "paddingLeft": [
        "10rpx",
        0,
        0,
        142
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        142
      ]
    }
  },
  ".px": {
    "": {
      "paddingLeft": [
        "5rpx",
        0,
        0,
        143
      ],
      "paddingRight": [
        "5rpx",
        0,
        0,
        143
      ]
    }
  },
  ".px-2": {
    "": {
      "paddingLeft": [
        "20rpx",
        0,
        0,
        144
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        144
      ]
    }
  },
  ".px-25": {
    "": {
      "paddingLeft": [
        "25rpx",
        0,
        0,
        145
      ],
      "paddingRight": [
        "25rpx",
        0,
        0,
        145
      ]
    }
  },
  ".px-3": {
    "": {
      "paddingLeft": [
        "30rpx",
        0,
        0,
        146
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        146
      ]
    }
  },
  ".px-4": {
    "": {
      "paddingLeft": [
        "40rpx",
        0,
        0,
        147
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        147
      ]
    }
  },
  ".px-5": {
    "": {
      "paddingLeft": [
        "50rpx",
        0,
        0,
        148
      ],
      "paddingRight": [
        "50rpx",
        0,
        0,
        148
      ]
    }
  },
  ".font-small": {
    "": {
      "fontSize": [
        "20rpx",
        0,
        0,
        150
      ]
    }
  },
  ".font-sm": {
    "": {
      "fontSize": [
        "25rpx",
        0,
        0,
        151
      ]
    }
  },
  ".font": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        152
      ]
    }
  },
  ".font-md": {
    "": {
      "fontSize": [
        "35rpx",
        0,
        0,
        153
      ]
    }
  },
  ".font-lg": {
    "": {
      "fontSize": [
        "40rpx",
        0,
        0,
        154
      ]
    }
  },
  ".font-max": {
    "": {
      "fontSize": [
        "50rpx",
        0,
        0,
        155
      ]
    }
  },
  ".h1": {
    "": {
      "fontSize": [
        "80rpx",
        0,
        0,
        156
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        156
      ]
    }
  },
  ".h2": {
    "": {
      "fontSize": [
        "60rpx",
        0,
        0,
        157
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        157
      ]
    }
  },
  ".h3": {
    "": {
      "fontSize": [
        "45rpx",
        0,
        0,
        158
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        158
      ]
    }
  },
  ".h4": {
    "": {
      "fontSize": [
        "32rpx",
        0,
        0,
        159
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        159
      ]
    }
  },
  ".h5": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        160
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        160
      ]
    }
  },
  ".h6": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        161
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        161
      ]
    }
  },
  ".text-through": {
    "": {
      "textDecoration": [
        "line-through",
        0,
        0,
        164
      ]
    }
  },
  ".text-left": {
    "": {
      "textAlign": [
        "left",
        0,
        0,
        166
      ]
    }
  },
  ".text-right": {
    "": {
      "textAlign": [
        "right",
        0,
        0,
        167
      ]
    }
  },
  ".text-center": {
    "": {
      "textAlign": [
        "center",
        0,
        0,
        168
      ]
    }
  },
  ".text-ellipsis": {
    "": {
      "lines": [
        1,
        0,
        0,
        170
      ]
    }
  },
  ".font-weight-light": {
    "": {
      "fontWeight": [
        "300",
        0,
        0,
        172
      ]
    }
  },
  ".font-weight-lighter": {
    "": {
      "fontWeight": [
        "100",
        0,
        0,
        174
      ]
    }
  },
  ".font-weight-normal": {
    "": {
      "fontWeight": [
        "400",
        0,
        0,
        176
      ]
    }
  },
  ".font-weight-bold": {
    "": {
      "fontWeight": [
        "700",
        0,
        0,
        178
      ]
    }
  },
  ".font-weight-bolder": {
    "": {
      "fontWeight": [
        "bold",
        0,
        0,
        180
      ]
    }
  },
  ".font-italic": {
    "": {
      "fontStyle": [
        "italic",
        0,
        0,
        182
      ]
    }
  },
  ".text-white": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        185
      ]
    }
  },
  ".text-primary": {
    "": {
      "color": [
        "#407fc6",
        0,
        0,
        186
      ]
    }
  },
  ".text-hover-primary": {
    "": {
      "color": [
        "#576d96",
        0,
        0,
        187
      ]
    }
  },
  ".text-secondary": {
    "": {
      "color": [
        "#b0b0b0",
        0,
        0,
        188
      ]
    }
  },
  ".text-hover-secondary": {
    "": {
      "color": [
        "#494f54",
        0,
        0,
        189
      ]
    }
  },
  ".text-success": {
    "": {
      "color": [
        "#28a745",
        0,
        0,
        190
      ]
    }
  },
  ".text-hover-success": {
    "": {
      "color": [
        "#19692c",
        0,
        0,
        191
      ]
    }
  },
  ".text-find": {
    "": {
      "color": [
        "#e65c69",
        0,
        0,
        192
      ]
    }
  },
  ".text-hover-info": {
    "": {
      "color": [
        "#0f6674",
        0,
        0,
        193
      ]
    }
  },
  ".text-warning": {
    "": {
      "color": [
        "#f9c400",
        0,
        0,
        194
      ]
    }
  },
  ".text-orange": {
    "": {
      "color": [
        "#f3932f",
        0,
        0,
        195
      ]
    }
  },
  ".text-hover-warning": {
    "": {
      "color": [
        "#ba8b00",
        0,
        0,
        196
      ]
    }
  },
  ".text-danger": {
    "": {
      "color": [
        "#dc3545",
        0,
        0,
        197
      ]
    }
  },
  ".text-hover-danger": {
    "": {
      "color": [
        "#a71d2a",
        0,
        0,
        198
      ]
    }
  },
  ".text-light": {
    "": {
      "color": [
        "#f8f9fa",
        0,
        0,
        199
      ]
    }
  },
  ".text-hover-light": {
    "": {
      "color": [
        "#cbd3da",
        0,
        0,
        200
      ]
    }
  },
  ".text-dark": {
    "": {
      "color": [
        "#343a40",
        0,
        0,
        201
      ]
    }
  },
  ".text-light-dark": {
    "": {
      "color": [
        "#4c4c4c",
        0,
        0,
        202
      ]
    }
  },
  ".text-hover-dark": {
    "": {
      "color": [
        "#121416",
        0,
        0,
        203
      ]
    }
  },
  ".text-body": {
    "": {
      "color": [
        "#212529",
        0,
        0,
        204
      ]
    }
  },
  ".text-muted": {
    "": {
      "color": [
        "#7b7b7b",
        0,
        0,
        205
      ]
    }
  },
  ".text-light-muted": {
    "": {
      "color": [
        "#A9A5A0",
        0,
        0,
        206
      ]
    }
  },
  ".text-light-black": {
    "": {
      "color": [
        "rgba(0,0,0,0.5)",
        0,
        0,
        207
      ]
    }
  },
  ".text-light-white": {
    "": {
      "color": [
        "rgba(255,255,255,0.5)",
        0,
        0,
        208
      ]
    }
  },
  ".bg-primary": {
    "": {
      "backgroundColor": [
        "#407fc6",
        0,
        0,
        210
      ]
    }
  },
  ".bg-hover-primary": {
    "": {
      "backgroundColor:hover": [
        "#0062cc",
        0,
        0,
        211
      ]
    }
  },
  ".bg-secondary": {
    "": {
      "backgroundColor": [
        "#e2e2e2",
        0,
        0,
        212
      ]
    }
  },
  ".bg-hover-secondary": {
    "": {
      "backgroundColor:hover": [
        "#545b62",
        0,
        0,
        213
      ]
    }
  },
  ".bg-success": {
    "": {
      "backgroundColor": [
        "#28a745",
        0,
        0,
        214
      ]
    }
  },
  ".bg-hover-success": {
    "": {
      "backgroundColor": [
        "#1e7e34",
        0,
        0,
        215
      ]
    }
  },
  ".bg-info": {
    "": {
      "backgroundColor": [
        "#17a2b8",
        0,
        0,
        216
      ]
    }
  },
  ".bg-hover-info": {
    "": {
      "backgroundColor": [
        "#117a8b",
        0,
        0,
        217
      ]
    }
  },
  ".bg-warning": {
    "": {
      "backgroundColor": [
        "#ffc107",
        0,
        0,
        218
      ]
    }
  },
  ".bg-hover-warning": {
    "": {
      "backgroundColor": [
        "#d39e00",
        0,
        0,
        219
      ]
    }
  },
  ".bg-light-danger": {
    "": {
      "backgroundColor": [
        "#fdeded",
        0,
        0,
        220
      ]
    }
  },
  ".bg-danger": {
    "": {
      "backgroundColor": [
        "#fa5251",
        0,
        0,
        221
      ]
    }
  },
  ".bg-hover-danger": {
    "": {
      "backgroundColor": [
        "#bd2130",
        0,
        0,
        222
      ]
    }
  },
  ".bg-light": {
    "": {
      "backgroundColor": [
        "#ededed",
        0,
        0,
        223
      ]
    }
  },
  ".bg-hover-light": {
    "": {
      "backgroundColor": [
        "#d5d5d5",
        0,
        0,
        224
      ]
    }
  },
  ".bg-dark": {
    "": {
      "backgroundColor": [
        "#343a40",
        0,
        0,
        225
      ]
    }
  },
  ".bg-light-dark": {
    "": {
      "backgroundColor": [
        "#4c4c4c",
        0,
        0,
        226
      ]
    }
  },
  ".bg-hover-dark": {
    "": {
      "backgroundColor": [
        "#1d2124",
        0,
        0,
        227
      ]
    }
  },
  ".bg-white": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        228
      ]
    }
  },
  ".bg-transparent": {
    "": {
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        229
      ]
    }
  },
  ".border": {
    "": {
      "borderWidth": [
        "1rpx",
        0,
        0,
        231
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        231
      ],
      "borderColor": [
        "#dee2e6",
        0,
        0,
        231
      ]
    }
  },
  ".border-2": {
    "": {
      "borderWidth": [
        "2rpx",
        0,
        0,
        232
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        232
      ],
      "borderColor": [
        "#dee2e6",
        0,
        0,
        232
      ]
    }
  },
  ".border-top": {
    "": {
      "borderTopWidth": [
        "1rpx",
        0,
        0,
        233
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        233
      ],
      "borderTopColor": [
        "#dee2e6",
        0,
        0,
        233
      ]
    }
  },
  ".border-right": {
    "": {
      "borderRightWidth": [
        "1rpx",
        0,
        0,
        234
      ],
      "borderRightStyle": [
        "solid",
        0,
        0,
        234
      ],
      "borderRightColor": [
        "#dee2e6",
        0,
        0,
        234
      ]
    }
  },
  ".border-bottom": {
    "": {
      "borderBottomWidth": [
        "1rpx",
        0,
        0,
        235
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        235
      ],
      "borderBottomColor": [
        "#dee2e6",
        0,
        0,
        235
      ]
    }
  },
  ".border-left": {
    "": {
      "borderLeftWidth": [
        "1rpx",
        0,
        0,
        236
      ],
      "borderLeftStyle": [
        "solid",
        0,
        0,
        236
      ],
      "borderLeftColor": [
        "#dee2e6",
        0,
        0,
        236
      ]
    }
  },
  ".border-0": {
    "": {
      "borderWidth": [
        0,
        1,
        0,
        237
      ]
    }
  },
  ".border-top-0": {
    "": {
      "borderTopWidth": [
        0,
        1,
        0,
        238
      ]
    }
  },
  ".border-right-0": {
    "": {
      "borderRightWidth": [
        0,
        1,
        0,
        239
      ]
    }
  },
  ".border-bottom-0": {
    "": {
      "borderBottomWidth": [
        0,
        1,
        0,
        240
      ]
    }
  },
  ".border-left-0": {
    "": {
      "borderLeftWidth": [
        0,
        1,
        0,
        241
      ]
    }
  },
  ".border-primary": {
    "": {
      "borderColor": [
        "#007bff",
        0,
        0,
        242
      ]
    }
  },
  ".border-secondary": {
    "": {
      "borderColor": [
        "#6c757d",
        0,
        0,
        243
      ]
    }
  },
  ".border-light-secondary": {
    "": {
      "borderColor": [
        "#e5e5e5",
        0,
        0,
        244
      ]
    }
  },
  ".border-success": {
    "": {
      "borderColor": [
        "#28a745",
        0,
        0,
        245
      ]
    }
  },
  ".border-bg": {
    "": {
      "borderColor": [
        "#EDEDED",
        0,
        0,
        246
      ]
    }
  },
  ".border-info": {
    "": {
      "borderColor": [
        "#17a2b8",
        0,
        0,
        247
      ]
    }
  },
  ".border-warning": {
    "": {
      "borderColor": [
        "#ffc107",
        0,
        0,
        248
      ]
    }
  },
  ".border-danger": {
    "": {
      "borderColor": [
        "#dc3545",
        0,
        0,
        249
      ]
    }
  },
  ".border-light": {
    "": {
      "borderColor": [
        "#f8f9fa",
        0,
        0,
        250
      ]
    }
  },
  ".border-dark": {
    "": {
      "borderColor": [
        "#343a40",
        0,
        0,
        251
      ]
    }
  },
  ".border-white": {
    "": {
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        252
      ]
    }
  },
  ".rounded": {
    "": {
      "borderRadius": [
        "8rpx",
        0,
        0,
        254
      ]
    }
  },
  ".rounded-2": {
    "": {
      "borderRadius": [
        "20rpx",
        0,
        0,
        255
      ]
    }
  },
  ".rounded-top": {
    "": {
      "borderTopLeftRadius": [
        "8rpx",
        0,
        0,
        256
      ],
      "borderTopRightRadius": [
        "8rpx",
        0,
        0,
        256
      ]
    }
  },
  ".rounded-right": {
    "": {
      "borderTopRightRadius": [
        "8rpx",
        0,
        0,
        257
      ],
      "borderBottomRightRadius": [
        "8rpx",
        0,
        0,
        257
      ]
    }
  },
  ".rounded-bottom": {
    "": {
      "borderBottomRightRadius": [
        "8rpx",
        0,
        0,
        258
      ],
      "borderBottomLeftRadius": [
        "8rpx",
        0,
        0,
        258
      ]
    }
  },
  ".rounded-left": {
    "": {
      "borderTopLeftRadius": [
        "8rpx",
        0,
        0,
        259
      ],
      "borderBottomLeftRadius": [
        "8rpx",
        0,
        0,
        259
      ]
    }
  },
  ".rounded-circle": {
    "": {
      "borderRadius": [
        "100rpx",
        0,
        0,
        260
      ]
    }
  },
  ".rounded-0": {
    "": {
      "borderRadius": [
        0,
        0,
        0,
        261
      ]
    }
  },
  ".overflow-hidden": {
    "": {
      "overflow": [
        "hidden",
        0,
        0,
        264
      ]
    }
  },
  ".position-relative": {
    "": {
      "position": [
        "relative",
        0,
        0,
        266
      ]
    }
  },
  ".position-absolute": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        267
      ]
    }
  },
  ".position-fixed": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        268
      ]
    }
  },
  ".fixed-top": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        270
      ],
      "top": [
        0,
        0,
        0,
        270
      ],
      "right": [
        0,
        0,
        0,
        270
      ],
      "left": [
        0,
        0,
        0,
        270
      ],
      "zIndex": [
        1030,
        0,
        0,
        270
      ]
    }
  },
  ".fixed-bottom": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        272
      ],
      "right": [
        0,
        0,
        0,
        272
      ],
      "bottom": [
        0,
        0,
        0,
        272
      ],
      "left": [
        0,
        0,
        0,
        272
      ],
      "zIndex": [
        1030,
        0,
        0,
        272
      ]
    }
  },
  ".top-0": {
    "": {
      "top": [
        0,
        0,
        0,
        273
      ]
    }
  },
  ".left-0": {
    "": {
      "left": [
        0,
        0,
        0,
        274
      ]
    }
  },
  ".right-0": {
    "": {
      "right": [
        0,
        0,
        0,
        275
      ]
    }
  },
  ".bottom-0": {
    "": {
      "bottom": [
        0,
        0,
        0,
        276
      ]
    }
  },
  ".page": {
    "": {
      "backgroundColor": [
        "#ededed",
        0,
        0,
        279
      ],
      "flex": [
        1,
        0,
        0,
        279
      ]
    }
  },
  ".main-bg-color": {
    "": {
      "backgroundColor": [
        "#06bd5d",
        0,
        0,
        281
      ]
    }
  },
  ".bg-chat": {
    "": {
      "backgroundColor": [
        "#f7f7f7",
        0,
        0,
        282
      ]
    }
  },
  ".main-bg-rgba-color": {
    "": {
      "backgroundColor": [
        "rgba(6,189,93,0.1)",
        0,
        0,
        283
      ]
    }
  },
  ".border-main": {
    "": {
      "borderColor": [
        "#06BD5D",
        1,
        0,
        284
      ]
    }
  },
  ".main-text-color": {
    "": {
      "color": [
        "#06bd5d",
        0,
        0,
        286
      ]
    }
  },
  ".bg-chat-item": {
    "": {
      "backgroundColor": [
        "#99eb6b",
        0,
        0,
        287
      ]
    }
  },
  ".bg-main-rgba": {
    "": {
      "backgroundColor": [
        "rgba(6,189,93,0.5)",
        0,
        0,
        288
      ]
    }
  },
  ".text-chat-item": {
    "": {
      "color": [
        "#99eb6b",
        0,
        0,
        289
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 23:
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),

/***/ 333:
/*!*********************************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/main.js?{"page":"pages%2Fcommon%2Flogin%2Flogin"} ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 20);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 23);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_common_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/common/login/login.nvue?mpType=page */ 334);\n\n        \n        \n        \n        \n        _pages_common_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_common_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/common/login/login'\n        _pages_common_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_common_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBcUU7QUFDckUsUUFBUSxrRkFBRztBQUNYLFFBQVEsa0ZBQUc7QUFDWCxRQUFRLGtGQUFHO0FBQ1gsZ0JBQWdCLGtGQUFHIiwiZmlsZSI6IjMzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2NvbW1vbi9sb2dpbi9sb2dpbi5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9jb21tb24vbG9naW4vbG9naW4nXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///333\n");

/***/ }),

/***/ 334:
/*!*************************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/pages/common/login/login.nvue?mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_nvue_vue_type_template_id_5c4e6296_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.nvue?vue&type=template&id=5c4e6296&mpType=page */ 335);\n/* harmony import */ var _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.nvue?vue&type=script&lang=js&mpType=page */ 337);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./login.nvue?vue&type=style&index=0&lang=css&mpType=page */ 339).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./login.nvue?vue&type=style&index=0&lang=css&mpType=page */ 339).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_nvue_vue_type_template_id_5c4e6296_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_nvue_vue_type_template_id_5c4e6296_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"160b881a\",\n  false,\n  _login_nvue_vue_type_template_id_5c4e6296_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/common/login/login.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2xvZ2luLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM0ZTYyOTYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xvZ2luLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbG9naW4ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2xvZ2luLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjE2MGI4ODFhXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbW1vbi9sb2dpbi9sb2dpbi5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///334\n");

/***/ }),

/***/ 335:
/*!*******************************************************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/pages/common/login/login.nvue?vue&type=template&id=5c4e6296&mpType=page ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_5c4e6296_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.nvue?vue&type=template&id=5c4e6296&mpType=page */ 336);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_5c4e6296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_5c4e6296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_5c4e6296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_5c4e6296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 336:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/jhq/WeChatProjects/weixinApp/pages/common/login/login.nvue?vue&type=template&id=5c4e6296&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: false,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        {
          staticStyle: { flex: "1" },
          on: { touchstart: _vm.voiceTouchStart, touchmove: _vm.voiceTouchMove }
        },
        [
          !_vm.show
            ? _c(
                "view",
                {
                  staticClass: [
                    "position-fixed",
                    "top-0",
                    "bottom-0",
                    "left-0",
                    "right-0",
                    "bg-light",
                    "flex",
                    "justify-center",
                    "align-center"
                  ]
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["text-muted", "font"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v("正在加载...")]
                  )
                ]
              )
            : _c("view", [
                _c(
                  "view",
                  {
                    staticClass: [
                      "flex",
                      "",
                      "align-center",
                      "justify-center",
                      "mt-5",
                      "mb-3"
                    ],
                    staticStyle: { height: "350rpx" }
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["mx-2"],
                        class:
                          _vm.type === "reg"
                            ? "text-muted"
                            : "font-weight-bold border-dark border-bottom",
                        staticStyle: {
                          fontSize: "50rpx",
                          transitionProperty: "all",
                          transitionDuration: ".4s"
                        },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                        on: {
                          click: function($event) {
                            _vm.change("login")
                          }
                        }
                      },
                      [_vm._v("登陆")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["mx-2"],
                        class:
                          _vm.type !== "reg"
                            ? "text-muted"
                            : "font-weight-bold border-dark border-bottom",
                        staticStyle: {
                          fontSize: "50rpx",
                          transitionProperty: "all",
                          transitionDuration: ".4s"
                        },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                        on: {
                          click: function($event) {
                            _vm.change("reg")
                          }
                        }
                      },
                      [_vm._v("注册")]
                    )
                  ]
                ),
                _c(
                  "view",
                  { staticClass: ["px-5"] },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["font", "text-muted", "px-2", "pb-2"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("JChat账号")]
                    ),
                    _c("u-input", {
                      staticClass: [
                        "bg-light",
                        "rounded",
                        "font",
                        "px-3",
                        "mb-3"
                      ],
                      staticStyle: { height: "100rpx" },
                      attrs: {
                        type: "text",
                        placeholder:
                          _vm.type === "reg"
                            ? "目前账号不可更改,请用心填写"
                            : "请输入账号",
                        value: _vm.form.username
                      },
                      on: {
                        input: function($event) {
                          _vm.$set(_vm.form, "username", $event.detail.value)
                        }
                      }
                    }),
                    _c(
                      "u-text",
                      {
                        staticClass: ["font", "text-muted", "pb-2", "px-2"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v("密码")]
                    ),
                    _c("u-input", {
                      staticClass: [
                        "bg-light",
                        "rounded",
                        "font",
                        "px-3",
                        "mb-3"
                      ],
                      staticStyle: { height: "100rpx" },
                      attrs: {
                        type: "text",
                        placeholder: "请输入密码",
                        value: _vm.form.password
                      },
                      on: {
                        input: function($event) {
                          _vm.$set(_vm.form, "password", $event.detail.value)
                        }
                      }
                    }),
                    _c(
                      "view",
                      { class: _vm.type === "reg" ? "origin" : "target" },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: [
                              "font",
                              "text-muted",
                              "",
                              "pb-2",
                              "px-2"
                            ],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("确认密码")]
                        ),
                        _c("u-input", {
                          staticClass: [
                            "bg-light",
                            "rounded",
                            "font",
                            "px-3",
                            "mb-3"
                          ],
                          staticStyle: { height: "100rpx" },
                          attrs: {
                            type: "text",
                            placeholder: "确认密码",
                            value: _vm.form.repassword
                          },
                          on: {
                            input: function($event) {
                              _vm.$set(
                                _vm.form,
                                "repassword",
                                $event.detail.value
                              )
                            }
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _c(
                  "view",
                  {
                    staticClass: [
                      "position-fixed",
                      "bottom-0",
                      "left-0",
                      "right-0"
                    ]
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: [
                          "flex",
                          "flex-1",
                          "p-5",
                          "align-center",
                          "justify-center"
                        ]
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: [
                              "flex-1",
                              "main-bg-color",
                              "rounded",
                              "p-3",
                              "flex",
                              "align-center",
                              "justify-center"
                            ],
                            on: { click: _vm.submit }
                          },
                          [
                            _c(
                              "u-text",
                              {
                                staticClass: ["text-white", "font-md"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.type === "login" ? "登 陆" : "注 册"
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: [
                          "flex",
                          "align-center",
                          "mb-5",
                          "justify-center"
                        ]
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["text-muted", "font", "p-2"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                            on: { click: _vm.changeType }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.type === "login" ? "注册账号" : "马上登陆"
                              )
                            )
                          ]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["text-muted", "font"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("｜")]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["text-muted", "font", "p-2s"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("忘记密码")]
                        )
                      ]
                    )
                  ]
                )
              ])
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 337:
/*!*************************************************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/pages/common/login/login.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.nvue?vue&type=script&lang=js&mpType=page */ 338);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVqQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIzMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///337\n");

/***/ }),

/***/ 338:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/jhq/WeChatProjects/weixinApp/pages/common/login/login.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/request.js */ 15));\nvar _util = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/util.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { type: 'login', show: false, form: { username: '', password: \"\", repassword: '' }, RecordingStartX: 0 };}, created: function created() {var token = _util.default.getStorage('token');if (!token) {// 用户未登录\n      // uni.showToast({\n      // \t title:'请先登录', \n      // \t icon:'none'\n      // })\n      return this.show = true;}uni.switchTab({ url: '../../tabber/index/index' });}, methods: { // 录音相关\n    voiceTouchStart: function voiceTouchStart(e) {this.RecordingStartX = e.changedTouches[0].screenX;}, // 主动取消\n    voiceTouchMove: function voiceTouchMove(e) {var X = e.changedTouches[0].screenX - this.RecordingStartX;if (X >= 100) {this.type = 'reg';} else if (X <= -100) {this.type = 'login';}}, change: function change(e) {this.type = e;this.form = { username: '', password: \"\", repassword: '' };animation.transition(this.$refs.popup, { styles: {\n          opacity: 1 },\n\n        duration: 100,\n        timingFunction: 'ease-in-out' },\n      function () {\n\n      });\n    },\n    changeType: function changeType() {\n\n\n      this.type = this.type === 'login' ? 'reg' : 'login';\n\n      this.form = {\n        username: '',\n        password: \"\",\n        repassword: '' };\n\n    },\n    submit: function submit() {var _this = this;\n      _request.default.post('/' + this.type, this.form, {\n        token: false }).\n      then(function (res) {\n        if (_this.type === 'login') {\n          _this.$store.dispatch('login', res);\n          uni.showToast({\n            title: '登录成功',\n            icon: 'none' });\n\n          return uni.switchTab({\n            url: '/pages/tabber/index/index' });\n\n        }\n        // 注册\n        _this.changeType();\n        uni.showToast({\n          title: '注册成功，去登陆',\n          icon: 'none' });\n\n      });\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29tbW9uL2xvZ2luL2xvZ2luLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEQTtBQUNBLDZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLGFBREEsRUFFQSxXQUZBLEVBR0EsUUFDQSxZQURBLEVBRUEsWUFGQSxFQUdBLGNBSEEsRUFIQSxFQVFBLGtCQVJBLEdBVUEsQ0FaQSxFQWFBLE9BYkEscUJBYUEsQ0FDQSw4Q0FDQSxhQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFDQSxDQUNBLGdCQUNBLCtCQURBLElBR0EsQ0ExQkEsRUE0QkEsV0FDQTtBQUNBLG1CQUZBLDJCQUVBLENBRkEsRUFFQSxDQUNBLG1EQUNBLENBSkEsRUFNQTtBQUNBLGtCQVBBLDBCQU9BLENBUEEsRUFPQSxDQUVBLDJEQUNBLGVBQ0Esa0JBRUEsQ0FIQSxNQUdBLGdCQUNBLG9CQUNBLENBRUEsQ0FqQkEsRUFrQkEsTUFsQkEsa0JBa0JBLENBbEJBLEVBa0JBLENBQ0EsY0FDQSxjQUNBLFlBREEsRUFFQSxZQUZBLEVBR0EsY0FIQSxHQUtBLHlDQUNBO0FBQ0Esb0JBREEsRUFEQTs7QUFJQSxxQkFKQTtBQUtBLHFDQUxBO0FBTUE7O0FBRUEsT0FSQTtBQVNBLEtBbENBO0FBbUNBLGNBbkNBLHdCQW1DQTs7O0FBR0E7O0FBRUE7QUFDQSxvQkFEQTtBQUVBLG9CQUZBO0FBR0Esc0JBSEE7O0FBS0EsS0E3Q0E7QUE4Q0EsVUE5Q0Esb0JBOENBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLFVBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQSw0Q0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsc0JBRkE7O0FBSUEsT0FuQkE7QUFvQkEsS0FuRUEsRUE1QkEsRSIsImZpbGUiOiIzMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgc3R5bGU9XCJmbGV4OiAxO1wiIEB0b3VjaHN0YXJ0PVwidm9pY2VUb3VjaFN0YXJ0XCIgQHRvdWNobW92ZT1cInZvaWNlVG91Y2hNb3ZlXCI+XHJcblx0XHQ8dmlldyB2LWlmPVwiIXNob3dcIlxyXG5cdFx0XHRjbGFzcz1cInBvc2l0aW9uLWZpeGVkIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGJnLWxpZ2h0IGZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1tdXRlZCBmb250XCI+5q2j5Zyo5Yqg6L29Li4uPC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IHYtZWxzZT5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDM1MHJweDtcIiBjbGFzcz1cImZsZXggIGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01IG1iLTNcIj5cclxuXHRcdFx0XHQ8dGV4dCBAY2xpY2suc3RvcD1cImNoYW5nZSgnbG9naW4nKVwiXHJcblx0XHRcdFx0XHQ6Y2xhc3M9XCJ0eXBlPT09J3JlZyc/J3RleHQtbXV0ZWQnOidmb250LXdlaWdodC1ib2xkIGJvcmRlci1kYXJrIGJvcmRlci1ib3R0b20nXCIgY2xhc3M9XCJteC0yXCJcclxuXHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiA1MHJweDt0cmFuc2l0aW9uLXByb3BlcnR5OmFsbDt0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNHM7XCI+55m76ZmGPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IEBjbGljay5zdG9wPVwiY2hhbmdlKCdyZWcnKVwiXHJcblx0XHRcdFx0XHQ6Y2xhc3M9XCJ0eXBlIT09J3JlZyc/J3RleHQtbXV0ZWQnOidmb250LXdlaWdodC1ib2xkIGJvcmRlci1kYXJrIGJvcmRlci1ib3R0b20nXCIgY2xhc3M9XCJteC0yXCJcclxuXHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiA1MHJweDt0cmFuc2l0aW9uLXByb3BlcnR5OmFsbDt0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNHM7XCI+5rOo5YaMPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicHgtNVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udCB0ZXh0LW11dGVkIHB4LTIgcGItMlwiPkpDaGF06LSm5Y+3PC90ZXh0PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtLnVzZXJuYW1lXCIgY2xhc3M9XCJiZy1saWdodCByb3VuZGVkIGZvbnQgcHgtMyBtYi0zXCJcclxuXHRcdFx0XHRcdDpwbGFjZWhvbGRlcj1cInR5cGU9PT0ncmVnJz8n55uu5YmN6LSm5Y+35LiN5Y+v5pu05pS5LOivt+eUqOW/g+Whq+WGmSc6J+ivt+i+k+WFpei0puWPtydcIiBzdHlsZT1cImhlaWdodDogMTAwcnB4O1wiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udCB0ZXh0LW11dGVkIHBiLTIgcHgtMlwiPuWvhueggTwvdGV4dD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIGNsYXNzPVwiYmctbGlnaHQgcm91bmRlZCBmb250IHB4LTMgbWItM1wiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5a+G56CBXCJcclxuXHRcdFx0XHRcdHN0eWxlPVwiaGVpZ2h0OiAxMDBycHg7XCI+XHJcblx0XHRcdFx0PHZpZXcgOmNsYXNzPVwidHlwZT09PSdyZWcnPydvcmlnaW4nOid0YXJnZXQnXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQgdGV4dC1tdXRlZCAgcGItMiBweC0yXCI+56Gu6K6k5a+G56CBPC90ZXh0PlxyXG5cdFx0XHRcdFx0PGlucHV0IHYtbW9kZWw9XCJmb3JtLnJlcGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYmctbGlnaHQgcm91bmRlZCBmb250IHB4LTMgbWItM1wiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi56Gu6K6k5a+G56CBXCIgc3R5bGU9XCJoZWlnaHQ6IDEwMHJweDtcIj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGZsZXgtMSBwLTUgYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgbWFpbi1iZy1jb2xvciByb3VuZGVkIHAtMyBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcblx0XHRcdFx0XHRcdEBjbGljay5zdG9wPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZSBmb250LW1kXCI+e3t0eXBlPT09J2xvZ2luJz8n55m7IOmZhic6J+azqCDlhownfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIgbWItNSBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9J3RleHQtbXV0ZWQgZm9udCBwLTInIEBjbGljay5zdG9wPVwiY2hhbmdlVHlwZVwiPnt7dHlwZT09PSdsb2dpbic/J+azqOWGjOi0puWPtyc6J+mprOS4iueZu+mZhid9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPSd0ZXh0LW11dGVkIGZvbnQnPu+9nDwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPSd0ZXh0LW11dGVkIGZvbnQgcC0ycyc+5b+Y6K6w5a+G56CBPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCAkSCBmcm9tIFwiQC9jb21tb24vZnJlZS1saWIvcmVxdWVzdC5qc1wiXHJcblx0aW1wb3J0ICRVIGZyb20gXCJAL2NvbW1vbi9mcmVlLWxpYi91dGlsLmpzXCJcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHR5cGU6ICdsb2dpbicsXHJcblx0XHRcdFx0c2hvdzogZmFsc2UsXHJcblx0XHRcdFx0Zm9ybToge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6ICcnLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IFwiXCIsXHJcblx0XHRcdFx0XHRyZXBhc3N3b3JkOiAnJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0UmVjb3JkaW5nU3RhcnRYOiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRsZXQgdG9rZW4gPSAkVS5nZXRTdG9yYWdlKCd0b2tlbicpXHJcblx0XHRcdGlmICghdG9rZW4pIHtcclxuXHRcdFx0XHQvLyDnlKjmiLfmnKrnmbvlvZVcclxuXHRcdFx0XHQvLyB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHQvLyBcdCB0aXRsZTon6K+35YWI55m75b2VJywgXHJcblx0XHRcdFx0Ly8gXHQgaWNvbjonbm9uZSdcclxuXHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNob3cgPSB0cnVlXHJcblx0XHRcdH1cclxuXHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0dXJsOiAnLi4vLi4vdGFiYmVyL2luZGV4L2luZGV4J1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOW9lemfs+ebuOWFs1xyXG5cdFx0XHR2b2ljZVRvdWNoU3RhcnQoZSkge1xyXG5cdFx0XHRcdHRoaXMuUmVjb3JkaW5nU3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDkuLvliqjlj5bmtohcclxuXHRcdFx0dm9pY2VUb3VjaE1vdmUoZSkge1xyXG5cclxuXHRcdFx0XHRsZXQgWCA9IChlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblggLSB0aGlzLlJlY29yZGluZ1N0YXJ0WClcclxuXHRcdFx0XHRpZiAoWCA+PSAxMDApIHtcclxuXHRcdFx0XHRcdHRoaXMudHlwZSA9ICdyZWcnXHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoWCA8PSAtMTAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnR5cGUgPSAnbG9naW4nXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLnR5cGUgPSBlXHJcblx0XHRcdFx0dGhpcy5mb3JtID0ge1xyXG5cdFx0XHRcdFx0dXNlcm5hbWU6ICcnLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IFwiXCIsXHJcblx0XHRcdFx0XHRyZXBhc3N3b3JkOiAnJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRyZWZzLnBvcHVwLCB7XHJcblx0XHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAsXHJcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0JyxcclxuXHRcdFx0XHR9LCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZVR5cGUoKSB7XHJcblxyXG5cclxuXHRcdFx0XHR0aGlzLnR5cGUgPSAodGhpcy50eXBlID09PSAnbG9naW4nKSA/ICdyZWcnIDogJ2xvZ2luJ1xyXG5cclxuXHRcdFx0XHR0aGlzLmZvcm0gPSB7XHJcblx0XHRcdFx0XHR1c2VybmFtZTogJycsXHJcblx0XHRcdFx0XHRwYXNzd29yZDogXCJcIixcclxuXHRcdFx0XHRcdHJlcGFzc3dvcmQ6ICcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJtaXQoKSB7XHJcblx0XHRcdFx0JEgucG9zdCgnLycgKyB0aGlzLnR5cGUsIHRoaXMuZm9ybSwge1xyXG5cdFx0XHRcdFx0dG9rZW46IGZhbHNlXHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gJ2xvZ2luJykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbG9naW4nLCByZXMpXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn55m75b2V5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy90YWJiZXIvaW5kZXgvaW5kZXgnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyDms6jlhoxcclxuXHRcdFx0XHRcdHRoaXMuY2hhbmdlVHlwZSgpXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfms6jlhozmiJDlip/vvIzljrvnmbvpmYYnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LnBhZ2Uge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQudGFyZ2V0IHtcclxuXHRcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xyXG5cdH1cclxuXHJcblx0Lm9yaWdpbiB7XHJcblx0XHQvLyDov5nph4zlj6/ku6XnroDlhpnlk4hcblx0XHRcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjM1cztcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///338\n");

/***/ }),

/***/ 339:
/*!*********************************************************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/pages/common/login/login.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.nvue?vue&type=style&index=0&lang=css&mpType=page */ 340);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 340:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/jhq/WeChatProjects/weixinApp/pages/common/login/login.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "backgroundColor": [
        "#ededed",
        0,
        0,
        0
      ],
      "flex": [
        1,
        0,
        0,
        0
      ]
    }
  },
  ".target": {
    "": {
      "opacity": [
        0,
        0,
        0,
        1
      ],
      "transitionProperty": [
        "opacity",
        0,
        0,
        1
      ],
      "transitionDuration": [
        200,
        0,
        0,
        1
      ]
    }
  },
  ".origin": {
    "": {
      "opacity": [
        1,
        0,
        0,
        2
      ],
      "transitionProperty": [
        "opacity",
        0,
        0,
        2
      ],
      "transitionDuration": [
        350,
        0,
        0,
        2
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 7:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 8:
/*!**********************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/store/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 9));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 10));\n\n\nvar _audio = _interopRequireDefault(__webpack_require__(/*! @/store/modules/audio.js */ 11));\nvar _user = _interopRequireDefault(__webpack_require__(/*! @/store/modules/user.js */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_vue.default.use(_vuex.default); // import commeon from \"@/store/modules/commeon.js\"\nvar _default =\nnew _vuex.default.Store({\n  modules: {\n    audio: _audio.default,\n    user: _user.default } });exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsImF1ZGlvIiwidXNlciJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0E7OztBQUdBO0FBQ0EsMkYsNkZBSEFBLGFBQUlDLEdBQUosQ0FBUUMsYUFBUixFLENBQ0E7O0FBSWUsSUFBSUEsY0FBS0MsS0FBVCxDQUFlO0FBQzdCQyxTQUFPLEVBQUU7QUFDUkMsU0FBSyxFQUFMQSxjQURRO0FBRVJDLFFBQUksRUFBSkEsYUFGUSxFQURvQixFQUFmLEMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiXG5pbXBvcnQgVnVleCBmcm9tIFwidnVleFwiXG5WdWUudXNlKFZ1ZXgpXG4vLyBpbXBvcnQgY29tbWVvbiBmcm9tIFwiQC9zdG9yZS9tb2R1bGVzL2NvbW1lb24uanNcIlxuaW1wb3J0IGF1ZGlvIGZyb20gXCJAL3N0b3JlL21vZHVsZXMvYXVkaW8uanNcIlxuaW1wb3J0IHVzZXIgZnJvbSBcIkAvc3RvcmUvbW9kdWxlcy91c2VyLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuXHRtb2R1bGVzOiB7XG5cdFx0YXVkaW8sXG5cdFx0dXNlcixcblx0XHRcblx0fVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });