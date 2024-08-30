import require$$0 from 'react';
import axios from 'axios';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// interface LoginState {
//   login: () => Promise<void>;
// }
var useAuth = function (params) {
    var login = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); };
    return { login: login };
};

var headers$2 = {exports: {}};

var requestCookies = {};

var cookies$1 = {};

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RequestCookies: () => RequestCookies,
  ResponseCookies: () => ResponseCookies,
  parseCookie: () => parseCookie,
  parseSetCookie: () => parseSetCookie,
  stringifyCookie: () => stringifyCookie
});
var cookies = __toCommonJS(src_exports);

// src/serialize.ts
function stringifyCookie(c) {
  var _a;
  const attrs = [
    "path" in c && c.path && `Path=${c.path}`,
    "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
    "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
    "domain" in c && c.domain && `Domain=${c.domain}`,
    "secure" in c && c.secure && "Secure",
    "httpOnly" in c && c.httpOnly && "HttpOnly",
    "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
    "partitioned" in c && c.partitioned && "Partitioned",
    "priority" in c && c.priority && `Priority=${c.priority}`
  ].filter(Boolean);
  const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
  return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
  const map = /* @__PURE__ */ new Map();
  for (const pair of cookie.split(/; */)) {
    if (!pair)
      continue;
    const splitAt = pair.indexOf("=");
    if (splitAt === -1) {
      map.set(pair, "true");
      continue;
    }
    const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
    try {
      map.set(key, decodeURIComponent(value != null ? value : "true"));
    } catch {
    }
  }
  return map;
}
function parseSetCookie(setCookie) {
  if (!setCookie) {
    return void 0;
  }
  const [[name, value], ...attributes] = parseCookie(setCookie);
  const {
    domain,
    expires,
    httponly,
    maxage,
    path,
    samesite,
    secure,
    partitioned,
    priority
  } = Object.fromEntries(
    attributes.map(([key, value2]) => [key.toLowerCase(), value2])
  );
  const cookie = {
    name,
    value: decodeURIComponent(value),
    domain,
    ...expires && { expires: new Date(expires) },
    ...httponly && { httpOnly: true },
    ...typeof maxage === "string" && { maxAge: Number(maxage) },
    path,
    ...samesite && { sameSite: parseSameSite(samesite) },
    ...secure && { secure: true },
    ...priority && { priority: parsePriority(priority) },
    ...partitioned && { partitioned: true }
  };
  return compact(cookie);
}
function compact(t) {
  const newT = {};
  for (const key in t) {
    if (t[key]) {
      newT[key] = t[key];
    }
  }
  return newT;
}
var SAME_SITE = ["strict", "lax", "none"];
function parseSameSite(string) {
  string = string.toLowerCase();
  return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = ["low", "medium", "high"];
function parsePriority(string) {
  string = string.toLowerCase();
  return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
  if (!cookiesString)
    return [];
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

// src/request-cookies.ts
var RequestCookies = class {
  constructor(requestHeaders) {
    /** @internal */
    this._parsed = /* @__PURE__ */ new Map();
    this._headers = requestHeaders;
    const header = requestHeaders.get("cookie");
    if (header) {
      const parsed = parseCookie(header);
      for (const [name, value] of parsed) {
        this._parsed.set(name, { name, value });
      }
    }
  }
  [Symbol.iterator]() {
    return this._parsed[Symbol.iterator]();
  }
  /**
   * The amount of cookies received from the client
   */
  get size() {
    return this._parsed.size;
  }
  get(...args) {
    const name = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(name);
  }
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed);
    if (!args.length) {
      return all.map(([_, value]) => value);
    }
    const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter(([n]) => n === name).map(([_, value]) => value);
  }
  has(name) {
    return this._parsed.has(name);
  }
  set(...args) {
    const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
    const map = this._parsed;
    map.set(name, { name, value });
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value2]) => stringifyCookie(value2)).join("; ")
    );
    return this;
  }
  /**
   * Delete the cookies matching the passed name or names in the request.
   */
  delete(names) {
    const map = this._parsed;
    const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value]) => stringifyCookie(value)).join("; ")
    );
    return result;
  }
  /**
   * Delete all the cookies in the cookies in the request.
   */
  clear() {
    this.delete(Array.from(this._parsed.keys()));
    return this;
  }
  /**
   * Format the cookies in the request as a string for logging
   */
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
  }
};

// src/response-cookies.ts
var ResponseCookies = class {
  constructor(responseHeaders) {
    /** @internal */
    this._parsed = /* @__PURE__ */ new Map();
    var _a, _b, _c;
    this._headers = responseHeaders;
    const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
    const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
    for (const cookieString of cookieStrings) {
      const parsed = parseSetCookie(cookieString);
      if (parsed)
        this._parsed.set(parsed.name, parsed);
    }
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */
  get(...args) {
    const key = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(key);
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed.values());
    if (!args.length) {
      return all;
    }
    const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter((c) => c.name === key);
  }
  has(name) {
    return this._parsed.has(name);
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */
  set(...args) {
    const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
    const map = this._parsed;
    map.set(name, normalizeCookie({ name, value, ...cookie }));
    replace(map, this._headers);
    return this;
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */
  delete(...args) {
    const [name, path, domain] = typeof args[0] === "string" ? [args[0]] : [args[0].name, args[0].path, args[0].domain];
    return this.set({ name, path, domain, value: "", expires: /* @__PURE__ */ new Date(0) });
  }
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map(stringifyCookie).join("; ");
  }
};
function replace(bag, headers) {
  headers.delete("set-cookie");
  for (const [, value] of bag) {
    const serialized = stringifyCookie(value);
    headers.append("set-cookie", serialized);
  }
}
function normalizeCookie(cookie = { name: "", value: "" }) {
  if (typeof cookie.expires === "number") {
    cookie.expires = new Date(cookie.expires);
  }
  if (cookie.maxAge) {
    cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
  }
  if (cookie.path === null || cookie.path === void 0) {
    cookie.path = "/";
  }
  return cookie;
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    RequestCookies: function() {
	        return _cookies.RequestCookies;
	    },
	    ResponseCookies: function() {
	        return _cookies.ResponseCookies;
	    }
	});
	const _cookies = cookies;

	
} (cookies$1));

var reflect = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "ReflectAdapter", {
	    enumerable: true,
	    get: function() {
	        return ReflectAdapter;
	    }
	});
	class ReflectAdapter {
	    static get(target, prop, receiver) {
	        const value = Reflect.get(target, prop, receiver);
	        if (typeof value === "function") {
	            return value.bind(target);
	        }
	        return value;
	    }
	    static set(target, prop, value, receiver) {
	        return Reflect.set(target, prop, value, receiver);
	    }
	    static has(target, prop) {
	        return Reflect.has(target, prop);
	    }
	    static deleteProperty(target, prop) {
	        return Reflect.deleteProperty(target, prop);
	    }
	}

	
} (reflect));

var staticGenerationAsyncStorage_external = {exports: {}};

var staticGenerationAsyncStorageInstance = {exports: {}};

var asyncLocalStorage = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "createAsyncLocalStorage", {
	    enumerable: true,
	    get: function() {
	        return createAsyncLocalStorage;
	    }
	});
	const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
	class FakeAsyncLocalStorage {
	    disable() {
	        throw sharedAsyncLocalStorageNotAvailableError;
	    }
	    getStore() {
	        // This fake implementation of AsyncLocalStorage always returns `undefined`.
	        return undefined;
	    }
	    run() {
	        throw sharedAsyncLocalStorageNotAvailableError;
	    }
	    exit() {
	        throw sharedAsyncLocalStorageNotAvailableError;
	    }
	    enterWith() {
	        throw sharedAsyncLocalStorageNotAvailableError;
	    }
	}
	const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
	function createAsyncLocalStorage() {
	    if (maybeGlobalAsyncLocalStorage) {
	        return new maybeGlobalAsyncLocalStorage();
	    }
	    return new FakeAsyncLocalStorage();
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (asyncLocalStorage, asyncLocalStorage.exports));

var asyncLocalStorageExports = asyncLocalStorage.exports;

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "staticGenerationAsyncStorage", {
	    enumerable: true,
	    get: function() {
	        return staticGenerationAsyncStorage;
	    }
	});
	const _asynclocalstorage = asyncLocalStorageExports;
	const staticGenerationAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (staticGenerationAsyncStorageInstance, staticGenerationAsyncStorageInstance.exports));

var staticGenerationAsyncStorageInstanceExports = staticGenerationAsyncStorageInstance.exports;

(function (module, exports) {
	"TURBOPACK { transition: next-shared }";
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "staticGenerationAsyncStorage", {
	    enumerable: true,
	    get: function() {
	        return _staticgenerationasyncstorageinstance.staticGenerationAsyncStorage;
	    }
	});
	const _staticgenerationasyncstorageinstance = staticGenerationAsyncStorageInstanceExports;

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (staticGenerationAsyncStorage_external, staticGenerationAsyncStorage_external.exports));

var staticGenerationAsyncStorage_externalExports = staticGenerationAsyncStorage_external.exports;

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    MutableRequestCookiesAdapter: function() {
	        return MutableRequestCookiesAdapter;
	    },
	    ReadonlyRequestCookiesError: function() {
	        return ReadonlyRequestCookiesError;
	    },
	    RequestCookiesAdapter: function() {
	        return RequestCookiesAdapter;
	    },
	    appendMutableCookies: function() {
	        return appendMutableCookies;
	    },
	    getModifiedCookieValues: function() {
	        return getModifiedCookieValues;
	    }
	});
	const _cookies = cookies$1;
	const _reflect = reflect;
	const _staticgenerationasyncstorageexternal = staticGenerationAsyncStorage_externalExports;
	class ReadonlyRequestCookiesError extends Error {
	    constructor(){
	        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
	    }
	    static callable() {
	        throw new ReadonlyRequestCookiesError();
	    }
	}
	class RequestCookiesAdapter {
	    static seal(cookies) {
	        return new Proxy(cookies, {
	            get (target, prop, receiver) {
	                switch(prop){
	                    case "clear":
	                    case "delete":
	                    case "set":
	                        return ReadonlyRequestCookiesError.callable;
	                    default:
	                        return _reflect.ReflectAdapter.get(target, prop, receiver);
	                }
	            }
	        });
	    }
	}
	const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
	function getModifiedCookieValues(cookies) {
	    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
	    if (!modified || !Array.isArray(modified) || modified.length === 0) {
	        return [];
	    }
	    return modified;
	}
	function appendMutableCookies(headers, mutableCookies) {
	    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
	    if (modifiedCookieValues.length === 0) {
	        return false;
	    }
	    // Return a new response that extends the response with
	    // the modified cookies as fallbacks. `res` cookies
	    // will still take precedence.
	    const resCookies = new _cookies.ResponseCookies(headers);
	    const returnedCookies = resCookies.getAll();
	    // Set the modified cookies as fallbacks.
	    for (const cookie of modifiedCookieValues){
	        resCookies.set(cookie);
	    }
	    // Set the original cookies as the final values.
	    for (const cookie of returnedCookies){
	        resCookies.set(cookie);
	    }
	    return true;
	}
	class MutableRequestCookiesAdapter {
	    static wrap(cookies, onUpdateCookies) {
	        const responseCookies = new _cookies.ResponseCookies(new Headers());
	        for (const cookie of cookies.getAll()){
	            responseCookies.set(cookie);
	        }
	        let modifiedValues = [];
	        const modifiedCookies = new Set();
	        const updateResponseCookies = ()=>{
	            // TODO-APP: change method of getting staticGenerationAsyncStore
	            const staticGenerationAsyncStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
	            if (staticGenerationAsyncStore) {
	                staticGenerationAsyncStore.pathWasRevalidated = true;
	            }
	            const allCookies = responseCookies.getAll();
	            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
	            if (onUpdateCookies) {
	                const serializedCookies = [];
	                for (const cookie of modifiedValues){
	                    const tempCookies = new _cookies.ResponseCookies(new Headers());
	                    tempCookies.set(cookie);
	                    serializedCookies.push(tempCookies.toString());
	                }
	                onUpdateCookies(serializedCookies);
	            }
	        };
	        return new Proxy(responseCookies, {
	            get (target, prop, receiver) {
	                switch(prop){
	                    // A special symbol to get the modified cookie values
	                    case SYMBOL_MODIFY_COOKIE_VALUES:
	                        return modifiedValues;
	                    // TODO: Throw error if trying to set a cookie after the response
	                    // headers have been set.
	                    case "delete":
	                        return function(...args) {
	                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
	                            try {
	                                target.delete(...args);
	                            } finally{
	                                updateResponseCookies();
	                            }
	                        };
	                    case "set":
	                        return function(...args) {
	                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
	                            try {
	                                return target.set(...args);
	                            } finally{
	                                updateResponseCookies();
	                            }
	                        };
	                    default:
	                        return _reflect.ReflectAdapter.get(target, prop, receiver);
	                }
	            }
	        });
	    }
	}

	
} (requestCookies));

var headers$1 = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    HeadersAdapter: function() {
	        return HeadersAdapter;
	    },
	    ReadonlyHeadersError: function() {
	        return ReadonlyHeadersError;
	    }
	});
	const _reflect = reflect;
	class ReadonlyHeadersError extends Error {
	    constructor(){
	        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
	    }
	    static callable() {
	        throw new ReadonlyHeadersError();
	    }
	}
	class HeadersAdapter extends Headers {
	    constructor(headers){
	        // We've already overridden the methods that would be called, so we're just
	        // calling the super constructor to ensure that the instanceof check works.
	        super();
	        this.headers = new Proxy(headers, {
	            get (target, prop, receiver) {
	                // Because this is just an object, we expect that all "get" operations
	                // are for properties. If it's a "get" for a symbol, we'll just return
	                // the symbol.
	                if (typeof prop === "symbol") {
	                    return _reflect.ReflectAdapter.get(target, prop, receiver);
	                }
	                const lowercased = prop.toLowerCase();
	                // Let's find the original casing of the key. This assumes that there is
	                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
	                // headers object.
	                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
	                // If the original casing doesn't exist, return undefined.
	                if (typeof original === "undefined") return;
	                // If the original casing exists, return the value.
	                return _reflect.ReflectAdapter.get(target, original, receiver);
	            },
	            set (target, prop, value, receiver) {
	                if (typeof prop === "symbol") {
	                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
	                }
	                const lowercased = prop.toLowerCase();
	                // Let's find the original casing of the key. This assumes that there is
	                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
	                // headers object.
	                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
	                // If the original casing doesn't exist, use the prop as the key.
	                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
	            },
	            has (target, prop) {
	                if (typeof prop === "symbol") return _reflect.ReflectAdapter.has(target, prop);
	                const lowercased = prop.toLowerCase();
	                // Let's find the original casing of the key. This assumes that there is
	                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
	                // headers object.
	                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
	                // If the original casing doesn't exist, return false.
	                if (typeof original === "undefined") return false;
	                // If the original casing exists, return true.
	                return _reflect.ReflectAdapter.has(target, original);
	            },
	            deleteProperty (target, prop) {
	                if (typeof prop === "symbol") return _reflect.ReflectAdapter.deleteProperty(target, prop);
	                const lowercased = prop.toLowerCase();
	                // Let's find the original casing of the key. This assumes that there is
	                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
	                // headers object.
	                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
	                // If the original casing doesn't exist, return true.
	                if (typeof original === "undefined") return true;
	                // If the original casing exists, delete the property.
	                return _reflect.ReflectAdapter.deleteProperty(target, original);
	            }
	        });
	    }
	    /**
	   * Seals a Headers instance to prevent modification by throwing an error when
	   * any mutating method is called.
	   */ static seal(headers) {
	        return new Proxy(headers, {
	            get (target, prop, receiver) {
	                switch(prop){
	                    case "append":
	                    case "delete":
	                    case "set":
	                        return ReadonlyHeadersError.callable;
	                    default:
	                        return _reflect.ReflectAdapter.get(target, prop, receiver);
	                }
	            }
	        });
	    }
	    /**
	   * Merges a header value into a string. This stores multiple values as an
	   * array, so we need to merge them into a string.
	   *
	   * @param value a header value
	   * @returns a merged header value (a string)
	   */ merge(value) {
	        if (Array.isArray(value)) return value.join(", ");
	        return value;
	    }
	    /**
	   * Creates a Headers instance from a plain object or a Headers instance.
	   *
	   * @param headers a plain object or a Headers instance
	   * @returns a headers instance
	   */ static from(headers) {
	        if (headers instanceof Headers) return headers;
	        return new HeadersAdapter(headers);
	    }
	    append(name, value) {
	        const existing = this.headers[name];
	        if (typeof existing === "string") {
	            this.headers[name] = [
	                existing,
	                value
	            ];
	        } else if (Array.isArray(existing)) {
	            existing.push(value);
	        } else {
	            this.headers[name] = value;
	        }
	    }
	    delete(name) {
	        delete this.headers[name];
	    }
	    get(name) {
	        const value = this.headers[name];
	        if (typeof value !== "undefined") return this.merge(value);
	        return null;
	    }
	    has(name) {
	        return typeof this.headers[name] !== "undefined";
	    }
	    set(name, value) {
	        this.headers[name] = value;
	    }
	    forEach(callbackfn, thisArg) {
	        for (const [name, value] of this.entries()){
	            callbackfn.call(thisArg, value, name, this);
	        }
	    }
	    *entries() {
	        for (const key of Object.keys(this.headers)){
	            const name = key.toLowerCase();
	            // We assert here that this is a string because we got it from the
	            // Object.keys() call above.
	            const value = this.get(name);
	            yield [
	                name,
	                value
	            ];
	        }
	    }
	    *keys() {
	        for (const key of Object.keys(this.headers)){
	            const name = key.toLowerCase();
	            yield name;
	        }
	    }
	    *values() {
	        for (const key of Object.keys(this.headers)){
	            // We assert here that this is a string because we got it from the
	            // Object.keys() call above.
	            const value = this.get(key);
	            yield value;
	        }
	    }
	    [Symbol.iterator]() {
	        return this.entries();
	    }
	}

	
} (headers$1));

var actionAsyncStorage_external = {exports: {}};

var actionAsyncStorageInstance = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "actionAsyncStorage", {
	    enumerable: true,
	    get: function() {
	        return actionAsyncStorage;
	    }
	});
	const _asynclocalstorage = asyncLocalStorageExports;
	const actionAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (actionAsyncStorageInstance, actionAsyncStorageInstance.exports));

var actionAsyncStorageInstanceExports = actionAsyncStorageInstance.exports;

(function (module, exports) {
	"TURBOPACK { transition: next-shared }";
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "actionAsyncStorage", {
	    enumerable: true,
	    get: function() {
	        return _actionasyncstorageinstance.actionAsyncStorage;
	    }
	});
	const _actionasyncstorageinstance = actionAsyncStorageInstanceExports;

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (actionAsyncStorage_external, actionAsyncStorage_external.exports));

var actionAsyncStorage_externalExports = actionAsyncStorage_external.exports;

var draftMode = {exports: {}};

var dynamicRendering = {};

var hooksServerContext = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    DynamicServerError: function() {
	        return DynamicServerError;
	    },
	    isDynamicServerError: function() {
	        return isDynamicServerError;
	    }
	});
	const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
	class DynamicServerError extends Error {
	    constructor(description){
	        super("Dynamic server usage: " + description);
	        this.description = description;
	        this.digest = DYNAMIC_ERROR_CODE;
	    }
	}
	function isDynamicServerError(err) {
	    if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
	        return false;
	    }
	    return err.digest === DYNAMIC_ERROR_CODE;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (hooksServerContext, hooksServerContext.exports));

var hooksServerContextExports = hooksServerContext.exports;

var staticGenerationBailout = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    StaticGenBailoutError: function() {
	        return StaticGenBailoutError;
	    },
	    isStaticGenBailoutError: function() {
	        return isStaticGenBailoutError;
	    }
	});
	const NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
	class StaticGenBailoutError extends Error {
	    constructor(...args){
	        super(...args);
	        this.code = NEXT_STATIC_GEN_BAILOUT;
	    }
	}
	function isStaticGenBailoutError(error) {
	    if (typeof error !== "object" || error === null || !("code" in error)) {
	        return false;
	    }
	    return error.code === NEXT_STATIC_GEN_BAILOUT;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (staticGenerationBailout, staticGenerationBailout.exports));

var staticGenerationBailoutExports = staticGenerationBailout.exports;

var url = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    getPathname: function() {
	        return getPathname;
	    },
	    isFullStringUrl: function() {
	        return isFullStringUrl;
	    },
	    parseUrl: function() {
	        return parseUrl;
	    }
	});
	const DUMMY_ORIGIN = "http://n";
	function getUrlWithoutHost(url) {
	    return new URL(url, DUMMY_ORIGIN);
	}
	function getPathname(url) {
	    return getUrlWithoutHost(url).pathname;
	}
	function isFullStringUrl(url) {
	    return /https?:\/\//.test(url);
	}
	function parseUrl(url) {
	    let parsed = undefined;
	    try {
	        parsed = new URL(url, DUMMY_ORIGIN);
	    } catch  {}
	    return parsed;
	}

	
} (url));

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    Postpone: function() {
	        return Postpone;
	    },
	    createPostponedAbortSignal: function() {
	        return createPostponedAbortSignal;
	    },
	    createPrerenderState: function() {
	        return createPrerenderState;
	    },
	    formatDynamicAPIAccesses: function() {
	        return formatDynamicAPIAccesses;
	    },
	    markCurrentScopeAsDynamic: function() {
	        return markCurrentScopeAsDynamic;
	    },
	    trackDynamicDataAccessed: function() {
	        return trackDynamicDataAccessed;
	    },
	    trackDynamicFetch: function() {
	        return trackDynamicFetch;
	    },
	    usedDynamicAPIs: function() {
	        return usedDynamicAPIs;
	    }
	});
	const _react = /*#__PURE__*/ _interop_require_default(require$$0);
	const _hooksservercontext = hooksServerContextExports;
	const _staticgenerationbailout = staticGenerationBailoutExports;
	const _url = url;
	function _interop_require_default(obj) {
	    return obj && obj.__esModule ? obj : {
	        default: obj
	    };
	}
	const hasPostpone = typeof _react.default.unstable_postpone === "function";
	function createPrerenderState(isDebugSkeleton) {
	    return {
	        isDebugSkeleton,
	        dynamicAccesses: []
	    };
	}
	function markCurrentScopeAsDynamic(store, expression) {
	    const pathname = (0, _url.getPathname)(store.urlPathname);
	    if (store.isUnstableCacheCallback) {
	        // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
	        // creates a cache boundary. This is subtly different from reading a dynamic data source which is
	        // forbidden inside a cache scope.
	        return;
	    } else if (store.dynamicShouldError) {
	        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
	    } else if (// We are in a prerender (PPR enabled, during build)
	    store.prerenderState) {
	        // We track that we had a dynamic scope that postponed.
	        // This will be used by the renderer to decide whether
	        // the prerender requires a resume
	        postponeWithTracking(store.prerenderState, expression, pathname);
	    } else {
	        store.revalidate = 0;
	        if (store.isStaticGeneration) {
	            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
	            const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
	            store.dynamicUsageDescription = expression;
	            store.dynamicUsageStack = err.stack;
	            throw err;
	        }
	    }
	}
	function trackDynamicDataAccessed(store, expression) {
	    const pathname = (0, _url.getPathname)(store.urlPathname);
	    if (store.isUnstableCacheCallback) {
	        throw new Error(`Route ${pathname} used "${expression}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${expression}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
	    } else if (store.dynamicShouldError) {
	        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
	    } else if (// We are in a prerender (PPR enabled, during build)
	    store.prerenderState) {
	        // We track that we had a dynamic scope that postponed.
	        // This will be used by the renderer to decide whether
	        // the prerender requires a resume
	        postponeWithTracking(store.prerenderState, expression, pathname);
	    } else {
	        store.revalidate = 0;
	        if (store.isStaticGeneration) {
	            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
	            const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
	            store.dynamicUsageDescription = expression;
	            store.dynamicUsageStack = err.stack;
	            throw err;
	        }
	    }
	}
	function Postpone({ reason, prerenderState, pathname }) {
	    postponeWithTracking(prerenderState, reason, pathname);
	}
	function trackDynamicFetch(store, expression) {
	    if (store.prerenderState) {
	        postponeWithTracking(store.prerenderState, expression, store.urlPathname);
	    }
	}
	function postponeWithTracking(prerenderState, expression, pathname) {
	    assertPostpone();
	    const reason = `Route ${pathname} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
	    prerenderState.dynamicAccesses.push({
	        // When we aren't debugging, we don't need to create another error for the
	        // stack trace.
	        stack: prerenderState.isDebugSkeleton ? new Error().stack : undefined,
	        expression
	    });
	    _react.default.unstable_postpone(reason);
	}
	function usedDynamicAPIs(prerenderState) {
	    return prerenderState.dynamicAccesses.length > 0;
	}
	function formatDynamicAPIAccesses(prerenderState) {
	    return prerenderState.dynamicAccesses.filter((access)=>typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack })=>{
	        stack = stack.split("\n")// Remove the "Error: " prefix from the first line of the stack trace as
	        // well as the first 4 lines of the stack trace which is the distance
	        // from the user code and the `new Error().stack` call.
	        .slice(4).filter((line)=>{
	            // Exclude Next.js internals from the stack trace.
	            if (line.includes("node_modules/next/")) {
	                return false;
	            }
	            // Exclude anonymous functions from the stack trace.
	            if (line.includes(" (<anonymous>)")) {
	                return false;
	            }
	            // Exclude Node.js internals from the stack trace.
	            if (line.includes(" (node:")) {
	                return false;
	            }
	            return true;
	        }).join("\n");
	        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
	    });
	}
	function assertPostpone() {
	    if (!hasPostpone) {
	        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
	    }
	}
	function createPostponedAbortSignal(reason) {
	    assertPostpone();
	    const controller = new AbortController();
	    // We get our hands on a postpone instance by calling postpone and catching the throw
	    try {
	        _react.default.unstable_postpone(reason);
	    } catch (x) {
	        controller.abort(x);
	    }
	    return controller.signal;
	}

	
} (dynamicRendering));

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "DraftMode", {
	    enumerable: true,
	    get: function() {
	        return DraftMode;
	    }
	});
	const _staticgenerationasyncstorageexternal = staticGenerationAsyncStorage_externalExports;
	const _dynamicrendering = dynamicRendering;
	class DraftMode {
	    get isEnabled() {
	        return this._provider.isEnabled;
	    }
	    enable() {
	        const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
	        if (store) {
	            // We we have a store we want to track dynamic data access to ensure we
	            // don't statically generate routes that manipulate draft mode.
	            (0, _dynamicrendering.trackDynamicDataAccessed)(store, "draftMode().enable()");
	        }
	        return this._provider.enable();
	    }
	    disable() {
	        const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
	        if (store) {
	            // We we have a store we want to track dynamic data access to ensure we
	            // don't statically generate routes that manipulate draft mode.
	            (0, _dynamicrendering.trackDynamicDataAccessed)(store, "draftMode().disable()");
	        }
	        return this._provider.disable();
	    }
	    constructor(provider){
	        this._provider = provider;
	    }
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (draftMode, draftMode.exports));

var draftModeExports = draftMode.exports;

var requestAsyncStorage_external = {exports: {}};

var requestAsyncStorageInstance = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "requestAsyncStorage", {
	    enumerable: true,
	    get: function() {
	        return requestAsyncStorage;
	    }
	});
	const _asynclocalstorage = asyncLocalStorageExports;
	const requestAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (requestAsyncStorageInstance, requestAsyncStorageInstance.exports));

var requestAsyncStorageInstanceExports = requestAsyncStorageInstance.exports;

(function (module, exports) {
	"TURBOPACK { transition: next-shared }";
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    getExpectedRequestStore: function() {
	        return getExpectedRequestStore;
	    },
	    requestAsyncStorage: function() {
	        return _requestasyncstorageinstance.requestAsyncStorage;
	    }
	});
	const _requestasyncstorageinstance = requestAsyncStorageInstanceExports;
	function getExpectedRequestStore(callingExpression) {
	    const store = _requestasyncstorageinstance.requestAsyncStorage.getStore();
	    if (store) return store;
	    throw new Error("`" + callingExpression + "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context");
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (requestAsyncStorage_external, requestAsyncStorage_external.exports));

var requestAsyncStorage_externalExports = requestAsyncStorage_external.exports;

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    cookies: function() {
	        return cookies;
	    },
	    draftMode: function() {
	        return draftMode;
	    },
	    headers: function() {
	        return headers;
	    }
	});
	const _requestcookies = requestCookies;
	const _headers = headers$1;
	const _cookies = cookies$1;
	const _actionasyncstorageexternal = actionAsyncStorage_externalExports;
	const _draftmode = draftModeExports;
	const _dynamicrendering = dynamicRendering;
	const _staticgenerationasyncstorageexternal = staticGenerationAsyncStorage_externalExports;
	const _requestasyncstorageexternal = requestAsyncStorage_externalExports;
	function headers() {
	    const callingExpression = "headers";
	    const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
	    if (staticGenerationStore) {
	        if (staticGenerationStore.forceStatic) {
	            // When we are forcing static we don't mark this as a Dynamic read and we return an empty headers object
	            return _headers.HeadersAdapter.seal(new Headers({}));
	        } else {
	            // We will return a real headers object below so we mark this call as reading from a dynamic data source
	            (0, _dynamicrendering.trackDynamicDataAccessed)(staticGenerationStore, callingExpression);
	        }
	    }
	    return (0, _requestasyncstorageexternal.getExpectedRequestStore)(callingExpression).headers;
	}
	function cookies() {
	    const callingExpression = "cookies";
	    const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
	    if (staticGenerationStore) {
	        if (staticGenerationStore.forceStatic) {
	            // When we are forcing static we don't mark this as a Dynamic read and we return an empty cookies object
	            return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
	        } else {
	            // We will return a real headers object below so we mark this call as reading from a dynamic data source
	            (0, _dynamicrendering.trackDynamicDataAccessed)(staticGenerationStore, callingExpression);
	        }
	    }
	    const requestStore = (0, _requestasyncstorageexternal.getExpectedRequestStore)(callingExpression);
	    const asyncActionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
	    if ((asyncActionStore == null ? void 0 : asyncActionStore.isAction) || (asyncActionStore == null ? void 0 : asyncActionStore.isAppRoute)) {
	        // We can't conditionally return different types here based on the context.
	        // To avoid confusion, we always return the readonly type here.
	        return requestStore.mutableCookies;
	    }
	    return requestStore.cookies;
	}
	function draftMode() {
	    const callingExpression = "draftMode";
	    const requestStore = (0, _requestasyncstorageexternal.getExpectedRequestStore)(callingExpression);
	    return new _draftmode.DraftMode(requestStore.draftMode);
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (headers$2, headers$2.exports));

var headersExports = headers$2.exports;

var headers = headersExports;

/* eslint-disable */
/**
 * remove trailing slash from string
 */
var removeTrailingSlash$1 = function (url) {
    if (url === undefined || url === null)
        return undefined;
    return url.replace(/\/$/, "");
};
function unixTimestampToMaxAge(expirationUnixTimestamp) {
    var currentUnixTimestamp = Math.floor(Date.now() / 1000);
    var maxAge = expirationUnixTimestamp - currentUnixTimestamp;
    return maxAge > 0 ? maxAge : 0; // Ensure max-age is not negative
}
/**
 * custom delay function
 * @param ms time
 * @returns {Promise<void>}
 */
function delay(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}

var isDebugMode = process.env.PASBY_DEBUG_MODE === 'true';
// We need to use NEXT_PUBLIC for frontend vars
var PASBY_AUTH_API_PATH = removeTrailingSlash$1(process.env.NEXT_PUBLIC_PASBY_AUTH_API_PATH) ||
    removeTrailingSlash$1(process.env.PASBY_AUTH_API_PATH) ||
    '/api/eid';
var PASBY_CLIENT_SECRET = process.env.PASBY_CLIENT_SECRET;
var PASBY_CONSUMER_KEY = process.env.PASBY_CONSUMER_KEY;
var PASBY_CLIENT_ID = process.env.PASBY_CLIENT_ID;
var PASBY_CONSUMER = process.env.PASBY_CONSUMER;
var PASBY_POST_LOGOUT_REDIRECT = removeTrailingSlash$1(process.env.PASBY_POST_LOGOUT_REDIRECT);
var PASBY_POST_LOGIN_FALLBACK = removeTrailingSlash$1(process.env.PASBY_POST_LOGIN_FALLBACK);
var PASBY_HOST_URL = removeTrailingSlash$1(process.env.PASBY_HOST_URL);
var config = {
    isDebugMode: isDebugMode,
    consumerKey: PASBY_CONSUMER_KEY,
    secret: PASBY_CLIENT_SECRET,
    clientID: PASBY_CLIENT_ID,
    consumer: PASBY_CONSUMER,
    host: PASBY_HOST_URL,
    postLogoutRedirectURL: PASBY_POST_LOGOUT_REDIRECT,
    postLoginFallbackURL: PASBY_POST_LOGIN_FALLBACK,
    codeChallengeMethod: 'S256',
    redirectRoutes: {
        callback: "".concat(PASBY_AUTH_API_PATH, "/callback")
    },
    issuerRoutes: {
        logout: '/logout',
        identify: '/identify',
        token: '/token',
    },
};

var BASE_PATH = "https://oauthn.web.app".replace(/\/+$/, "");
var SESSION_KEY = 'pni';
var CHALLENGE_KEY = 'code-verifier';
var DEFAULT_ERROR = {
    status: 'failed',
    reason: 'Connection is improper and thus has been interrupted',
    type: 'unknown_error',
};

/**
 * Represents an API request function that sends HTTP requests to a specified path.
 * @param path - The path to which the HTTP request will be sent.
 * @returns An object containing a request function.
 */
var api = function (path) { return ({
    /**
     * Sends an HTTP request to the specified path using the provided method and options.
     * @param method - The HTTP method to be used for the request (POST or GET).
     * @param options - An object containing optional request parameters like body and headers.
     * @returns A Promise that resolves to the response data or an error object.
     */
    request: function (method, param) { return __awaiter(void 0, void 0, void 0, function () {
        var url, axiosOptions, response, error_1, errorResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "".concat(BASE_PATH, "/api/").concat(path);
                    console.log("API url -- ".concat(url));
                    axiosOptions = __assign({ headers: param.headers
                            ? JSON.parse(JSON.stringify(param.headers))
                            : { 'Accept': 'application/json' } }, (method === 'POST' && { data: param.body }));
                    return [4 /*yield*/, axios.request(__assign({ url: url, method: method }, axiosOptions))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_1 = _a.sent();
                    if (axios.isAxiosError(error_1) && error_1.response) {
                        console.error("Axios error --- ".concat(JSON.stringify(error_1.response.data)));
                        errorResponse = error_1.response.data;
                        return [2 /*return*/, {
                                status: errorResponse.status,
                                reason: errorResponse.reason,
                                type: errorResponse.type,
                            }];
                    }
                    else {
                        return [2 /*return*/, DEFAULT_ERROR];
                    }
                case 3: return [2 /*return*/];
            }
        });
    }); },
}); };

function generateCodeVerifier() {
    var array = new Uint32Array(56 / 2);
    crypto.getRandomValues(array);
    return Array.from(array, function (dec) { return ('0' + dec.toString(16)).substr(-2); }).join('');
}
function generateCodeChallenge(codeVerifier) {
    return __awaiter(this, void 0, void 0, function () {
        var encoder, data, digest, digestArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    encoder = new TextEncoder();
                    data = encoder.encode(codeVerifier);
                    return [4 /*yield*/, crypto.subtle.digest('SHA-256', data)];
                case 1:
                    digest = _a.sent();
                    digestArray = Array.from(new Uint8Array(digest));
                    return [2 /*return*/, btoa(String.fromCharCode.apply(String, digestArray))
                            .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')];
            }
        });
    });
}
function pkceChallenge() {
    return __awaiter(this, void 0, void 0, function () {
        var verifier, code;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    verifier = generateCodeVerifier();
                    return [4 /*yield*/, generateCodeChallenge(verifier)];
                case 1:
                    code = _a.sent();
                    return [2 /*return*/, {
                            verifier: verifier,
                            challenge: code
                        }];
            }
        });
    });
}

function envMissing(env) {
    return "The environment variable '".concat(env, "' is required. Set it in your .env file");
}

var callback = function (path, method, options) { return __awaiter(void 0, void 0, void 0, function () {
    var response, status, reason;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api(path).request(method, options)];
            case 1:
                response = _a.sent();
                status = response.status, reason = response.reason;
                if (status !== 'successful' || !response.data) {
                    throw new Error(reason !== null && reason !== void 0 ? reason : 'Request was unsuccessful');
                }
                return [2 /*return*/, response.data];
        }
    });
}); };
var flowClient = function () {
    return {
        begin: function (options, redirectState) {
            return __awaiter(this, void 0, void 0, function () {
                var consumerKey, secret, host, redirectRoutes, challenge, link;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            consumerKey = config.consumerKey, secret = config.secret, host = config.host, redirectRoutes = config.redirectRoutes;
                            if (!secret) {
                                throw new Error(envMissing("PASBY_CLIENT_SECRET"));
                            }
                            return [4 /*yield*/, pkceChallenge()];
                        case 1:
                            challenge = _d.sent();
                            return [4 /*yield*/, callback('v1/oidc/kipindi', 'POST', {
                                    body: {
                                        callback: "".concat(host).concat(redirectRoutes.callback),
                                        action: (_a = options === null || options === void 0 ? void 0 : options.action) !== null && _a !== void 0 ? _a : 'login',
                                        claims: (_b = options === null || options === void 0 ? void 0 : options.claims) !== null && _b !== void 0 ? _b : [],
                                        challenge: challenge.challenge,
                                        payload: (_c = options === null || options === void 0 ? void 0 : options.payload) !== null && _c !== void 0 ? _c : ''
                                    },
                                    headers: {
                                        'x-api-key': consumerKey,
                                        'x-access-secret': secret,
                                    }
                                })];
                        case 2:
                            link = (_d.sent()).link;
                            headers.cookies().set(CHALLENGE_KEY, challenge.verifier, { secure: true });
                            return [2 /*return*/, "".concat(link).concat(redirectState ? "state=".concat(redirectState) : '')];
                    }
                });
            });
        },
        callback: function (code) {
            return __awaiter(this, void 0, void 0, function () {
                var secret, consumerKey, codeVerifier, _a, challenge, access, exp;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            secret = config.secret, consumerKey = config.consumerKey;
                            if (!secret) {
                                throw new Error(envMissing("PASBY_CLIENT_SECRET"));
                            }
                            if (!consumerKey) {
                                throw new Error(envMissing("PASBY_CONSUMER_KEY"));
                            }
                            codeVerifier = (_b = headers.cookies().get(CHALLENGE_KEY)) === null || _b === void 0 ? void 0 : _b.value;
                            if (!codeVerifier) {
                                throw new Error('Missing code verifier');
                            }
                            return [4 /*yield*/, callback('v1/oidc/kupeana', 'POST', {
                                    body: {
                                        verifier: codeVerifier,
                                    },
                                    headers: {
                                        'Accept': 'application/json',
                                        'authorization': "Shake ".concat(code),
                                        'x-api-key': consumerKey,
                                        'x-access-secret': secret,
                                    }
                                })];
                        case 1:
                            _a = _c.sent(), challenge = _a.challenge, access = _a.access, exp = _a.exp;
                            headers.cookies().set(SESSION_KEY, access, { maxAge: unixTimestampToMaxAge(exp), secure: true });
                            headers.cookies().set(CHALLENGE_KEY, challenge, { secure: true });
                            return [2 /*return*/];
                    }
                });
            });
        }
    };
};

var server = {exports: {}};

var request = {};

var nextUrl = {};

var detectDomainLocale = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "detectDomainLocale", {
	    enumerable: true,
	    get: function() {
	        return detectDomainLocale;
	    }
	});
	function detectDomainLocale(domainItems, hostname, detectedLocale) {
	    if (!domainItems) return;
	    if (detectedLocale) {
	        detectedLocale = detectedLocale.toLowerCase();
	    }
	    for (const item of domainItems){
	        var _item_domain, _item_locales;
	        // remove port if present
	        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
	        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
	            return item;
	        }
	    }
	}

	
} (detectDomainLocale));

var formatNextPathnameInfo = {};

var removeTrailingSlash = {};

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "removeTrailingSlash", {
	    enumerable: true,
	    get: function() {
	        return removeTrailingSlash;
	    }
	});
	function removeTrailingSlash(route) {
	    return route.replace(/\/$/, "") || "/";
	}

	
} (removeTrailingSlash));

var addPathPrefix = {};

var parsePath = {};

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "parsePath", {
	    enumerable: true,
	    get: function() {
	        return parsePath;
	    }
	});
	function parsePath(path) {
	    const hashIndex = path.indexOf("#");
	    const queryIndex = path.indexOf("?");
	    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
	    if (hasQuery || hashIndex > -1) {
	        return {
	            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
	            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
	            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
	        };
	    }
	    return {
	        pathname: path,
	        query: "",
	        hash: ""
	    };
	}

	
} (parsePath));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "addPathPrefix", {
	    enumerable: true,
	    get: function() {
	        return addPathPrefix;
	    }
	});
	const _parsepath = parsePath;
	function addPathPrefix(path, prefix) {
	    if (!path.startsWith("/") || !prefix) {
	        return path;
	    }
	    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
	    return "" + prefix + pathname + query + hash;
	}

	
} (addPathPrefix));

var addPathSuffix = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "addPathSuffix", {
	    enumerable: true,
	    get: function() {
	        return addPathSuffix;
	    }
	});
	const _parsepath = parsePath;
	function addPathSuffix(path, suffix) {
	    if (!path.startsWith("/") || !suffix) {
	        return path;
	    }
	    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
	    return "" + pathname + suffix + query + hash;
	}

	
} (addPathSuffix));

var addLocale = {};

var pathHasPrefix = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "pathHasPrefix", {
	    enumerable: true,
	    get: function() {
	        return pathHasPrefix;
	    }
	});
	const _parsepath = parsePath;
	function pathHasPrefix(path, prefix) {
	    if (typeof path !== "string") {
	        return false;
	    }
	    const { pathname } = (0, _parsepath.parsePath)(path);
	    return pathname === prefix || pathname.startsWith(prefix + "/");
	}

	
} (pathHasPrefix));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "addLocale", {
	    enumerable: true,
	    get: function() {
	        return addLocale;
	    }
	});
	const _addpathprefix = addPathPrefix;
	const _pathhasprefix = pathHasPrefix;
	function addLocale(path, locale, defaultLocale, ignorePrefix) {
	    // If no locale was given or the locale is the default locale, we don't need
	    // to prefix the path.
	    if (!locale || locale === defaultLocale) return path;
	    const lower = path.toLowerCase();
	    // If the path is an API path or the path already has the locale prefix, we
	    // don't need to prefix the path.
	    if (!ignorePrefix) {
	        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
	        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
	    }
	    // Add the locale prefix to the path.
	    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
	}

	
} (addLocale));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "formatNextPathnameInfo", {
	    enumerable: true,
	    get: function() {
	        return formatNextPathnameInfo;
	    }
	});
	const _removetrailingslash = removeTrailingSlash;
	const _addpathprefix = addPathPrefix;
	const _addpathsuffix = addPathSuffix;
	const _addlocale = addLocale;
	function formatNextPathnameInfo(info) {
	    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
	    if (info.buildId || !info.trailingSlash) {
	        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
	    }
	    if (info.buildId) {
	        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
	    }
	    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
	    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
	}

	
} (formatNextPathnameInfo));

var getHostname = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "getHostname", {
	    enumerable: true,
	    get: function() {
	        return getHostname;
	    }
	});
	function getHostname(parsed, headers) {
	    // Get the hostname from the headers if it exists, otherwise use the parsed
	    // hostname.
	    let hostname;
	    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
	        hostname = headers.host.toString().split(":", 1)[0];
	    } else if (parsed.hostname) {
	        hostname = parsed.hostname;
	    } else return;
	    return hostname.toLowerCase();
	}

	
} (getHostname));

var getNextPathnameInfo = {};

var normalizeLocalePath = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "normalizeLocalePath", {
	    enumerable: true,
	    get: function() {
	        return normalizeLocalePath;
	    }
	});
	function normalizeLocalePath(pathname, locales) {
	    let detectedLocale;
	    // first item will be empty string from splitting at first char
	    const pathnameParts = pathname.split("/");
	    (locales || []).some((locale)=>{
	        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
	            detectedLocale = locale;
	            pathnameParts.splice(1, 1);
	            pathname = pathnameParts.join("/") || "/";
	            return true;
	        }
	        return false;
	    });
	    return {
	        pathname,
	        detectedLocale
	    };
	}

	
} (normalizeLocalePath));

var removePathPrefix = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "removePathPrefix", {
	    enumerable: true,
	    get: function() {
	        return removePathPrefix;
	    }
	});
	const _pathhasprefix = pathHasPrefix;
	function removePathPrefix(path, prefix) {
	    // If the path doesn't start with the prefix we can return it as is. This
	    // protects us from situations where the prefix is a substring of the path
	    // prefix such as:
	    //
	    // For prefix: /blog
	    //
	    //   /blog -> true
	    //   /blog/ -> true
	    //   /blog/1 -> true
	    //   /blogging -> false
	    //   /blogging/ -> false
	    //   /blogging/1 -> false
	    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
	        return path;
	    }
	    // Remove the prefix from the path via slicing.
	    const withoutPrefix = path.slice(prefix.length);
	    // If the path without the prefix starts with a `/` we can return it as is.
	    if (withoutPrefix.startsWith("/")) {
	        return withoutPrefix;
	    }
	    // If the path without the prefix doesn't start with a `/` we need to add it
	    // back to the path to make sure it's a valid path.
	    return "/" + withoutPrefix;
	}

	
} (removePathPrefix));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "getNextPathnameInfo", {
	    enumerable: true,
	    get: function() {
	        return getNextPathnameInfo;
	    }
	});
	const _normalizelocalepath = normalizeLocalePath;
	const _removepathprefix = removePathPrefix;
	const _pathhasprefix = pathHasPrefix;
	function getNextPathnameInfo(pathname, options) {
	    var _options_nextConfig;
	    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
	    const info = {
	        pathname,
	        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
	    };
	    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
	        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
	        info.basePath = basePath;
	    }
	    let pathnameNoDataPrefix = info.pathname;
	    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
	        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
	        const buildId = paths[0];
	        info.buildId = buildId;
	        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
	        // update pathname with normalized if enabled although
	        // we use normalized to populate locale info still
	        if (options.parseData === true) {
	            info.pathname = pathnameNoDataPrefix;
	        }
	    }
	    // If provided, use the locale route normalizer to detect the locale instead
	    // of the function below.
	    if (i18n) {
	        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
	        info.locale = result.detectedLocale;
	        var _result_pathname;
	        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
	        if (!result.detectedLocale && info.buildId) {
	            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, _normalizelocalepath.normalizeLocalePath)(pathnameNoDataPrefix, i18n.locales);
	            if (result.detectedLocale) {
	                info.locale = result.detectedLocale;
	            }
	        }
	    }
	    return info;
	}

	
} (getNextPathnameInfo));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "NextURL", {
	    enumerable: true,
	    get: function() {
	        return NextURL;
	    }
	});
	const _detectdomainlocale = detectDomainLocale;
	const _formatnextpathnameinfo = formatNextPathnameInfo;
	const _gethostname = getHostname;
	const _getnextpathnameinfo = getNextPathnameInfo;
	const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
	function parseURL(url, base) {
	    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
	}
	const Internal = Symbol("NextURLInternal");
	class NextURL {
	    constructor(input, baseOrOpts, opts){
	        let base;
	        let options;
	        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
	            base = baseOrOpts;
	            options = opts || {};
	        } else {
	            options = opts || baseOrOpts || {};
	        }
	        this[Internal] = {
	            url: parseURL(input, base ?? options.base),
	            options: options,
	            basePath: ""
	        };
	        this.analyze();
	    }
	    analyze() {
	        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
	        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {
	            nextConfig: this[Internal].options.nextConfig,
	            parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
	            i18nProvider: this[Internal].options.i18nProvider
	        });
	        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);
	        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
	        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
	        this[Internal].url.pathname = info.pathname;
	        this[Internal].defaultLocale = defaultLocale;
	        this[Internal].basePath = info.basePath ?? "";
	        this[Internal].buildId = info.buildId;
	        this[Internal].locale = info.locale ?? defaultLocale;
	        this[Internal].trailingSlash = info.trailingSlash;
	    }
	    formatPathname() {
	        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
	            basePath: this[Internal].basePath,
	            buildId: this[Internal].buildId,
	            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
	            locale: this[Internal].locale,
	            pathname: this[Internal].url.pathname,
	            trailingSlash: this[Internal].trailingSlash
	        });
	    }
	    formatSearch() {
	        return this[Internal].url.search;
	    }
	    get buildId() {
	        return this[Internal].buildId;
	    }
	    set buildId(buildId) {
	        this[Internal].buildId = buildId;
	    }
	    get locale() {
	        return this[Internal].locale ?? "";
	    }
	    set locale(locale) {
	        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
	        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
	            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
	        }
	        this[Internal].locale = locale;
	    }
	    get defaultLocale() {
	        return this[Internal].defaultLocale;
	    }
	    get domainLocale() {
	        return this[Internal].domainLocale;
	    }
	    get searchParams() {
	        return this[Internal].url.searchParams;
	    }
	    get host() {
	        return this[Internal].url.host;
	    }
	    set host(value) {
	        this[Internal].url.host = value;
	    }
	    get hostname() {
	        return this[Internal].url.hostname;
	    }
	    set hostname(value) {
	        this[Internal].url.hostname = value;
	    }
	    get port() {
	        return this[Internal].url.port;
	    }
	    set port(value) {
	        this[Internal].url.port = value;
	    }
	    get protocol() {
	        return this[Internal].url.protocol;
	    }
	    set protocol(value) {
	        this[Internal].url.protocol = value;
	    }
	    get href() {
	        const pathname = this.formatPathname();
	        const search = this.formatSearch();
	        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
	    }
	    set href(url) {
	        this[Internal].url = parseURL(url);
	        this.analyze();
	    }
	    get origin() {
	        return this[Internal].url.origin;
	    }
	    get pathname() {
	        return this[Internal].url.pathname;
	    }
	    set pathname(value) {
	        this[Internal].url.pathname = value;
	    }
	    get hash() {
	        return this[Internal].url.hash;
	    }
	    set hash(value) {
	        this[Internal].url.hash = value;
	    }
	    get search() {
	        return this[Internal].url.search;
	    }
	    set search(value) {
	        this[Internal].url.search = value;
	    }
	    get password() {
	        return this[Internal].url.password;
	    }
	    set password(value) {
	        this[Internal].url.password = value;
	    }
	    get username() {
	        return this[Internal].url.username;
	    }
	    set username(value) {
	        this[Internal].url.username = value;
	    }
	    get basePath() {
	        return this[Internal].basePath;
	    }
	    set basePath(value) {
	        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
	    }
	    toString() {
	        return this.href;
	    }
	    toJSON() {
	        return this.href;
	    }
	    [Symbol.for("edge-runtime.inspect.custom")]() {
	        return {
	            href: this.href,
	            origin: this.origin,
	            protocol: this.protocol,
	            username: this.username,
	            password: this.password,
	            host: this.host,
	            hostname: this.hostname,
	            port: this.port,
	            pathname: this.pathname,
	            search: this.search,
	            searchParams: this.searchParams,
	            hash: this.hash
	        };
	    }
	    clone() {
	        return new NextURL(String(this), this[Internal].options);
	    }
	}

	
} (nextUrl));

var utils = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    fromNodeOutgoingHttpHeaders: function() {
	        return fromNodeOutgoingHttpHeaders;
	    },
	    splitCookiesString: function() {
	        return splitCookiesString;
	    },
	    toNodeOutgoingHttpHeaders: function() {
	        return toNodeOutgoingHttpHeaders;
	    },
	    validateURL: function() {
	        return validateURL;
	    }
	});
	function fromNodeOutgoingHttpHeaders(nodeHeaders) {
	    const headers = new Headers();
	    for (let [key, value] of Object.entries(nodeHeaders)){
	        const values = Array.isArray(value) ? value : [
	            value
	        ];
	        for (let v of values){
	            if (typeof v === "undefined") continue;
	            if (typeof v === "number") {
	                v = v.toString();
	            }
	            headers.append(key, v);
	        }
	    }
	    return headers;
	}
	function splitCookiesString(cookiesString) {
	    var cookiesStrings = [];
	    var pos = 0;
	    var start;
	    var ch;
	    var lastComma;
	    var nextStart;
	    var cookiesSeparatorFound;
	    function skipWhitespace() {
	        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
	            pos += 1;
	        }
	        return pos < cookiesString.length;
	    }
	    function notSpecialChar() {
	        ch = cookiesString.charAt(pos);
	        return ch !== "=" && ch !== ";" && ch !== ",";
	    }
	    while(pos < cookiesString.length){
	        start = pos;
	        cookiesSeparatorFound = false;
	        while(skipWhitespace()){
	            ch = cookiesString.charAt(pos);
	            if (ch === ",") {
	                // ',' is a cookie separator if we have later first '=', not ';' or ','
	                lastComma = pos;
	                pos += 1;
	                skipWhitespace();
	                nextStart = pos;
	                while(pos < cookiesString.length && notSpecialChar()){
	                    pos += 1;
	                }
	                // currently special character
	                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
	                    // we found cookies separator
	                    cookiesSeparatorFound = true;
	                    // pos is inside the next cookie, so back up and return it.
	                    pos = nextStart;
	                    cookiesStrings.push(cookiesString.substring(start, lastComma));
	                    start = pos;
	                } else {
	                    // in param ',' or param separator ';',
	                    // we continue from that comma
	                    pos = lastComma + 1;
	                }
	            } else {
	                pos += 1;
	            }
	        }
	        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
	            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
	        }
	    }
	    return cookiesStrings;
	}
	function toNodeOutgoingHttpHeaders(headers) {
	    const nodeHeaders = {};
	    const cookies = [];
	    if (headers) {
	        for (const [key, value] of headers.entries()){
	            if (key.toLowerCase() === "set-cookie") {
	                // We may have gotten a comma joined string of cookies, or multiple
	                // set-cookie headers. We need to merge them into one header array
	                // to represent all the cookies.
	                cookies.push(...splitCookiesString(value));
	                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
	            } else {
	                nodeHeaders[key] = value;
	            }
	        }
	    }
	    return nodeHeaders;
	}
	function validateURL(url) {
	    try {
	        return String(new URL(String(url)));
	    } catch (error) {
	        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
	            cause: error
	        });
	    }
	}

	
} (utils));

var error = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    PageSignatureError: function() {
	        return PageSignatureError;
	    },
	    RemovedPageError: function() {
	        return RemovedPageError;
	    },
	    RemovedUAError: function() {
	        return RemovedUAError;
	    }
	});
	class PageSignatureError extends Error {
	    constructor({ page }){
	        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
	    }
	}
	class RemovedPageError extends Error {
	    constructor(){
	        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
	    }
	}
	class RemovedUAError extends Error {
	    constructor(){
	        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
	    }
	}

	
} (error));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    INTERNALS: function() {
	        return INTERNALS;
	    },
	    NextRequest: function() {
	        return NextRequest;
	    }
	});
	const _nexturl = nextUrl;
	const _utils = utils;
	const _error = error;
	const _cookies = cookies$1;
	const INTERNALS = Symbol("internal request");
	class NextRequest extends Request {
	    constructor(input, init = {}){
	        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
	        (0, _utils.validateURL)(url);
	        if (input instanceof Request) super(input, init);
	        else super(url, init);
	        const nextUrl = new _nexturl.NextURL(url, {
	            headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
	            nextConfig: init.nextConfig
	        });
	        this[INTERNALS] = {
	            cookies: new _cookies.RequestCookies(this.headers),
	            geo: init.geo || {},
	            ip: init.ip,
	            nextUrl,
	            url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
	        };
	    }
	    [Symbol.for("edge-runtime.inspect.custom")]() {
	        return {
	            cookies: this.cookies,
	            geo: this.geo,
	            ip: this.ip,
	            nextUrl: this.nextUrl,
	            url: this.url,
	            // rest of props come from Request
	            bodyUsed: this.bodyUsed,
	            cache: this.cache,
	            credentials: this.credentials,
	            destination: this.destination,
	            headers: Object.fromEntries(this.headers),
	            integrity: this.integrity,
	            keepalive: this.keepalive,
	            method: this.method,
	            mode: this.mode,
	            redirect: this.redirect,
	            referrer: this.referrer,
	            referrerPolicy: this.referrerPolicy,
	            signal: this.signal
	        };
	    }
	    get cookies() {
	        return this[INTERNALS].cookies;
	    }
	    get geo() {
	        return this[INTERNALS].geo;
	    }
	    get ip() {
	        return this[INTERNALS].ip;
	    }
	    get nextUrl() {
	        return this[INTERNALS].nextUrl;
	    }
	    /**
	   * @deprecated
	   * `page` has been deprecated in favour of `URLPattern`.
	   * Read more: https://nextjs.org/docs/messages/middleware-request-page
	   */ get page() {
	        throw new _error.RemovedPageError();
	    }
	    /**
	   * @deprecated
	   * `ua` has been removed in favour of \`userAgent\` function.
	   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
	   */ get ua() {
	        throw new _error.RemovedUAError();
	    }
	    get url() {
	        return this[INTERNALS].url;
	    }
	}

	
} (request));

var response = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "NextResponse", {
	    enumerable: true,
	    get: function() {
	        return NextResponse;
	    }
	});
	const _nexturl = nextUrl;
	const _utils = utils;
	const _cookies = cookies$1;
	const INTERNALS = Symbol("internal response");
	const REDIRECTS = new Set([
	    301,
	    302,
	    303,
	    307,
	    308
	]);
	function handleMiddlewareField(init, headers) {
	    var _init_request;
	    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
	        if (!(init.request.headers instanceof Headers)) {
	            throw new Error("request.headers must be an instance of Headers");
	        }
	        const keys = [];
	        for (const [key, value] of init.request.headers){
	            headers.set("x-middleware-request-" + key, value);
	            keys.push(key);
	        }
	        headers.set("x-middleware-override-headers", keys.join(","));
	    }
	}
	class NextResponse extends Response {
	    constructor(body, init = {}){
	        super(body, init);
	        this[INTERNALS] = {
	            cookies: new _cookies.ResponseCookies(this.headers),
	            url: init.url ? new _nexturl.NextURL(init.url, {
	                headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
	                nextConfig: init.nextConfig
	            }) : undefined
	        };
	    }
	    [Symbol.for("edge-runtime.inspect.custom")]() {
	        return {
	            cookies: this.cookies,
	            url: this.url,
	            // rest of props come from Response
	            body: this.body,
	            bodyUsed: this.bodyUsed,
	            headers: Object.fromEntries(this.headers),
	            ok: this.ok,
	            redirected: this.redirected,
	            status: this.status,
	            statusText: this.statusText,
	            type: this.type
	        };
	    }
	    get cookies() {
	        return this[INTERNALS].cookies;
	    }
	    static json(body, init) {
	        const response = Response.json(body, init);
	        return new NextResponse(response.body, response);
	    }
	    static redirect(url, init) {
	        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
	        if (!REDIRECTS.has(status)) {
	            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
	        }
	        const initObj = typeof init === "object" ? init : {};
	        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
	        headers.set("Location", (0, _utils.validateURL)(url));
	        return new NextResponse(null, {
	            ...initObj,
	            headers,
	            status
	        });
	    }
	    static rewrite(destination, init) {
	        const headers = new Headers(init == null ? void 0 : init.headers);
	        headers.set("x-middleware-rewrite", (0, _utils.validateURL)(destination));
	        handleMiddlewareField(init, headers);
	        return new NextResponse(null, {
	            ...init,
	            headers
	        });
	    }
	    static next(init) {
	        const headers = new Headers(init == null ? void 0 : init.headers);
	        headers.set("x-middleware-next", "1");
	        handleMiddlewareField(init, headers);
	        return new NextResponse(null, {
	            ...init,
	            headers
	        });
	    }
	}

	
} (response));

var imageResponse = {};

/**
 * @deprecated ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead.
 * Migration with codemods: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import
 */

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "ImageResponse", {
	    enumerable: true,
	    get: function() {
	        return ImageResponse;
	    }
	});
	function ImageResponse() {
	    throw new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead');
	}

	
} (imageResponse));

var userAgent = {};

var uaParser = {exports: {}};

(()=>{var i={226:function(i,e){(function(o,a){var r="1.0.35",t="",n="?",s="function",b="undefined",w="object",l="string",d="major",c="model",u="name",p="type",m="vendor",f="version",h="architecture",v="console",g="mobile",k="tablet",x="smarttv",_="wearable",y="embedded",q=350;var T="Amazon",S="Apple",z="ASUS",N="BlackBerry",A="Browser",C="Chrome",E="Edge",O="Firefox",U="Google",j="Huawei",P="LG",R="Microsoft",M="Motorola",B="Opera",V="Samsung",D="Sharp",I="Sony",F="Xiaomi",G="Zebra",H="Facebook",L="Chromium OS",Z="Mac OS";var extend=function(i,e){var o={};for(var a in i){if(e[a]&&e[a].length%2===0){o[a]=e[a].concat(i[a]);}else {o[a]=i[a];}}return o},enumerize=function(i){var e={};for(var o=0;o<i.length;o++){e[i[o].toUpperCase()]=i[o];}return e},has=function(i,e){return typeof i===l?lowerize(e).indexOf(lowerize(i))!==-1:false},lowerize=function(i){return i.toLowerCase()},majorize=function(i){return typeof i===l?i.replace(/[^\d\.]/g,t).split(".")[0]:a},trim=function(i,e){if(typeof i===l){i=i.replace(/^\s\s*/,t);return typeof e===b?i:i.substring(0,q)}};var rgxMapper=function(i,e){var o=0,r,t,n,b,l,d;while(o<e.length&&!l){var c=e[o],u=e[o+1];r=t=0;while(r<c.length&&!l){if(!c[r]){break}l=c[r++].exec(i);if(!!l){for(n=0;n<u.length;n++){d=l[++t];b=u[n];if(typeof b===w&&b.length>0){if(b.length===2){if(typeof b[1]==s){this[b[0]]=b[1].call(this,d);}else {this[b[0]]=b[1];}}else if(b.length===3){if(typeof b[1]===s&&!(b[1].exec&&b[1].test)){this[b[0]]=d?b[1].call(this,d,b[2]):a;}else {this[b[0]]=d?d.replace(b[1],b[2]):a;}}else if(b.length===4){this[b[0]]=d?b[3].call(this,d.replace(b[1],b[2])):a;}}else {this[b]=d?d:a;}}}}o+=2;}},strMapper=function(i,e){for(var o in e){if(typeof e[o]===w&&e[o].length>0){for(var r=0;r<e[o].length;r++){if(has(e[o][r],i)){return o===n?a:o}}}else if(has(e[o],i)){return o===n?a:o}}return i};var $={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,f],[/opios[\/ ]+([\w\.]+)/i],[f,[u,B+" Mini"]],[/\bopr\/([\w\.]+)/i],[f,[u,B]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[u,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[u,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[f,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[u,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[f,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure "+A],f],[/\bfocus\/([\w\.]+)/i],[f,[u,O+" Focus"]],[/\bopt\/([\w\.]+)/i],[f,[u,B+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[u,B+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[u,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[f,[u,O]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360 "+A]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 "+A],f],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[u,f],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,H],f],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[u,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[u,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[f,[u,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[u,C+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,C+" WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[u,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,f],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[f,[u,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[f,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[f,strMapper,$]],[/(webkit|khtml)\/([\w\.]+)/i],[u,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[u,O+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[u,f],[/(cobalt)\/([\w\.]+)/i],[u,[f,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,t,lowerize]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[m,V],[p,k]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[m,V],[p,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[m,S],[p,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[m,S],[p,k]],[/(macintosh);/i],[c,[m,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[m,D],[p,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[m,j],[p,k]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[m,j],[p,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[m,F],[p,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[m,F],[p,k]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[m,"OPPO"],[p,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[m,"Vivo"],[p,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[m,"Realme"],[p,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[m,M],[p,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[m,M],[p,k]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[m,P],[p,k]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[m,P],[p,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[m,"Lenovo"],[p,k]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[m,"Nokia"],[p,g]],[/(pixel c)\b/i],[c,[m,U],[p,k]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[m,U],[p,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[m,I],[p,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[m,I],[p,k]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[m,"OnePlus"],[p,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[m,T],[p,k]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[m,T],[p,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,m,[p,k]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[m,N],[p,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[m,z],[p,k]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[m,z],[p,g]],[/(nexus 9)/i],[c,[m,"HTC"],[p,k]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[c,/_/g," "],[p,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[m,"Acer"],[p,k]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[m,"Meizu"],[p,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,c,[p,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,c,[p,k]],[/(surface duo)/i],[c,[m,R],[p,k]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[m,"Fairphone"],[p,g]],[/(u304aa)/i],[c,[m,"AT&T"],[p,g]],[/\bsie-(\w*)/i],[c,[m,"Siemens"],[p,g]],[/\b(rct\w+) b/i],[c,[m,"RCA"],[p,k]],[/\b(venue[\d ]{2,7}) b/i],[c,[m,"Dell"],[p,k]],[/\b(q(?:mv|ta)\w+) b/i],[c,[m,"Verizon"],[p,k]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[m,"Barnes & Noble"],[p,k]],[/\b(tm\d{3}\w+) b/i],[c,[m,"NuVision"],[p,k]],[/\b(k88) b/i],[c,[m,"ZTE"],[p,k]],[/\b(nx\d{3}j) b/i],[c,[m,"ZTE"],[p,g]],[/\b(gen\d{3}) b.+49h/i],[c,[m,"Swiss"],[p,g]],[/\b(zur\d{3}) b/i],[c,[m,"Swiss"],[p,k]],[/\b((zeki)?tb.*\b) b/i],[c,[m,"Zeki"],[p,k]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],c,[p,k]],[/\b(ns-?\w{0,9}) b/i],[c,[m,"Insignia"],[p,k]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[m,"NextBook"],[p,k]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],c,[p,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],c,[p,g]],[/\b(ph-1) /i],[c,[m,"Essential"],[p,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[m,"Envizen"],[p,k]],[/\b(trio[-\w\. ]+) b/i],[c,[m,"MachSpeed"],[p,k]],[/\btu_(1491) b/i],[c,[m,"Rotor"],[p,k]],[/(shield[\w ]+) b/i],[c,[m,"Nvidia"],[p,k]],[/(sprint) (\w+)/i],[m,c,[p,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[m,R],[p,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[m,G],[p,k]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[m,G],[p,g]],[/smart-tv.+(samsung)/i],[m,[p,x]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[m,V],[p,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,P],[p,x]],[/(apple) ?tv/i],[m,[c,S+" TV"],[p,x]],[/crkey/i],[[c,C+"cast"],[m,U],[p,x]],[/droid.+aft(\w)( bui|\))/i],[c,[m,T],[p,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[m,D],[p,x]],[/(bravia[\w ]+)( bui|\))/i],[c,[m,I],[p,x]],[/(mitv-\w{5}) bui/i],[c,[m,F],[p,x]],[/Hbbtv.*(technisat) (.*);/i],[m,c,[p,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,trim],[c,trim],[p,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[p,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,c,[p,v]],[/droid.+; (shield) bui/i],[c,[m,"Nvidia"],[p,v]],[/(playstation [345portablevi]+)/i],[c,[m,I],[p,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[m,R],[p,v]],[/((pebble))app/i],[m,c,[p,_]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[m,S],[p,_]],[/droid.+; (glass) \d/i],[c,[m,U],[p,_]],[/droid.+; (wt63?0{2,3})\)/i],[c,[m,G],[p,_]],[/(quest( 2| pro)?)/i],[c,[m,H],[p,_]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[p,y]],[/(aeobc)\b/i],[c,[m,T],[p,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[p,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[p,k]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[p,k]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[p,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[u,E+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[u,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,f],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[u,[f,strMapper,X]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[u,"Windows"],[f,strMapper,X]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,Z],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[f,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,f],[/\(bb(10);/i],[f,[u,N]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[u,O+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[u,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[f,[u,"watchOS"]],[/crkey\/([\d\.]+)/i],[f,[u,C+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[u,L],f],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,f],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[u,f]]};var UAParser=function(i,e){if(typeof i===w){e=i;i=a;}if(!(this instanceof UAParser)){return new UAParser(i,e).getResult()}var r=typeof o!==b&&o.navigator?o.navigator:a;var n=i||(r&&r.userAgent?r.userAgent:t);var v=r&&r.userAgentData?r.userAgentData:a;var x=e?extend(K,e):K;var _=r&&r.userAgent==n;this.getBrowser=function(){var i={};i[u]=a;i[f]=a;rgxMapper.call(i,n,x.browser);i[d]=majorize(i[f]);if(_&&r&&r.brave&&typeof r.brave.isBrave==s){i[u]="Brave";}return i};this.getCPU=function(){var i={};i[h]=a;rgxMapper.call(i,n,x.cpu);return i};this.getDevice=function(){var i={};i[m]=a;i[c]=a;i[p]=a;rgxMapper.call(i,n,x.device);if(_&&!i[p]&&v&&v.mobile){i[p]=g;}if(_&&i[c]=="Macintosh"&&r&&typeof r.standalone!==b&&r.maxTouchPoints&&r.maxTouchPoints>2){i[c]="iPad";i[p]=k;}return i};this.getEngine=function(){var i={};i[u]=a;i[f]=a;rgxMapper.call(i,n,x.engine);return i};this.getOS=function(){var i={};i[u]=a;i[f]=a;rgxMapper.call(i,n,x.os);if(_&&!i[u]&&v&&v.platform!="Unknown"){i[u]=v.platform.replace(/chrome os/i,L).replace(/macos/i,Z);}return i};this.getResult=function(){return {ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return n};this.setUA=function(i){n=typeof i===l&&i.length>q?trim(i,q):i;return this};this.setUA(n);return this};UAParser.VERSION=r;UAParser.BROWSER=enumerize([u,f,d]);UAParser.CPU=enumerize([h]);UAParser.DEVICE=enumerize([c,m,p,v,g,x,k,_,y]);UAParser.ENGINE=UAParser.OS=enumerize([u,f]);if(typeof e!==b){if(i.exports){e=i.exports=UAParser;}e.UAParser=UAParser;}else {if(typeof o!==b){o.UAParser=UAParser;}}var Q=typeof o!==b&&(o.jQuery||o.Zepto);if(Q&&!Q.ua){var Y=new UAParser;Q.ua=Y.getResult();Q.ua.get=function(){return Y.getUA()};Q.ua.set=function(i){Y.setUA(i);var e=Y.getResult();for(var o in e){Q.ua[o]=e[o];}};}})(typeof window==="object"?window:this);}};var e={};function __nccwpck_require__(o){var a=e[o];if(a!==undefined){return a.exports}var r=e[o]={exports:{}};var t=true;try{i[o].call(r.exports,r,r.exports,__nccwpck_require__);t=false;}finally{if(t)delete e[o];}return r.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var o=__nccwpck_require__(226);uaParser.exports=o;})();

var uaParserExports = uaParser.exports;

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    isBot: function() {
	        return isBot;
	    },
	    userAgent: function() {
	        return userAgent;
	    },
	    userAgentFromString: function() {
	        return userAgentFromString;
	    }
	});
	const _uaparserjs = /*#__PURE__*/ _interop_require_default(uaParserExports);
	function _interop_require_default(obj) {
	    return obj && obj.__esModule ? obj : {
	        default: obj
	    };
	}
	function isBot(input) {
	    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
	}
	function userAgentFromString(input) {
	    return {
	        ...(0, _uaparserjs.default)(input),
	        isBot: input === undefined ? false : isBot(input)
	    };
	}
	function userAgent({ headers }) {
	    return userAgentFromString(headers.get("user-agent") || undefined);
	}

	
} (userAgent));

var urlPattern = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "URLPattern", {
	    enumerable: true,
	    get: function() {
	        return GlobalURLPattern;
	    }
	});
	const GlobalURLPattern = // @ts-expect-error: URLPattern is not available in Node.js
	typeof URLPattern === "undefined" ? undefined : URLPattern;

	
} (urlPattern));

(function (module, exports) {
	const serverExports = {
	  NextRequest: request
	    .NextRequest,
	  NextResponse: response
	    .NextResponse,
	  ImageResponse: imageResponse
	    .ImageResponse,
	  userAgentFromString: userAgent
	    .userAgentFromString,
	  userAgent: userAgent
	    .userAgent,
	  URLPattern: urlPattern
	    .URLPattern,
	};

	// https://nodejs.org/api/esm.html#commonjs-namespaces
	// When importing CommonJS modules, the module.exports object is provided as the default export
	module.exports = serverExports;

	// make import { xxx } from 'next/server' work
	exports.NextRequest = serverExports.NextRequest;
	exports.NextResponse = serverExports.NextResponse;
	exports.ImageResponse = serverExports.ImageResponse;
	exports.userAgentFromString = serverExports.userAgentFromString;
	exports.userAgent = serverExports.userAgent;
	exports.URLPattern = serverExports.URLPattern; 
} (server, server.exports));

var serverExports = server.exports;

function loginWithPasby(_req, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, flowClient().begin(options)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function tokenSwap(_req, params) {
    return __awaiter(this, void 0, void 0, function () {
        var clientID, consumerKey, consumer, postLoginFallbackURL, host, code, confirmed;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    clientID = config.clientID, consumerKey = config.consumerKey, consumer = config.consumer, postLoginFallbackURL = config.postLoginFallbackURL, host = config.host;
                    if (!clientID)
                        throw new Error(envMissing("PASBY_CLIENT_ID"));
                    if (!consumerKey)
                        throw new Error(envMissing("PASBY_CONSUMER_KEY"));
                    if (!consumer)
                        throw new Error(envMissing("PASBY_CONSUMER"));
                    if (!postLoginFallbackURL)
                        throw new Error(envMissing("PASBY_POST_LOGIN_FALLBACK"));
                    if (!host)
                        throw new Error(envMissing("PASBY_HOST_URL"));
                    code = (_a = params.get('handshake')) !== null && _a !== void 0 ? _a : '';
                    confirmed = ((_b = params.get('flow')) !== null && _b !== void 0 ? _b : '') === 'confirmed';
                    if (!confirmed)
                        return [2 /*return*/, serverExports.NextResponse.redirect(host)];
                    // Add a slight delay if needed (useful for certain timing issues)
                    return [4 /*yield*/, delay(1000)];
                case 1:
                    // Add a slight delay if needed (useful for certain timing issues)
                    _c.sent();
                    // Handle the callback and token exchange
                    return [4 /*yield*/, flowClient().callback(code)];
                case 2:
                    // Handle the callback and token exchange
                    _c.sent();
                    // Redirect to the post-login fallback URL after successful token swap
                    return [2 /*return*/, serverExports.NextResponse.redirect(postLoginFallbackURL)];
            }
        });
    });
}

export { loginWithPasby, tokenSwap, useAuth };
//# sourceMappingURL=index.js.map
