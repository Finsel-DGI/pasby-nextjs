import * as React from 'react';
import React__default, { createContext, useState, useEffect, useContext } from 'react';
import clsx from 'clsx';
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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var lib = {};

var cookie = {};

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

cookie.parse = parse;
cookie.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var __toString = Object.prototype.toString;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;

  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf('=', index);

    // no more cookie pairs
    if (eqIdx === -1) {
      break
    }

    var endIdx = str.indexOf(';', index);

    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      // backtrack on prior semicolon
      index = str.lastIndexOf(';', eqIdx - 1) + 1;
      continue
    }

    var key = str.slice(index, eqIdx).trim();

    // only assign once
    if (undefined === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();

      // quoted values
      if (val.charCodeAt(0) === 0x22) {
        val = val.slice(1, -1);
      }

      obj[key] = tryDecode(val, dec);
    }

    index = endIdx + 1;
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    var expires = opt.expires;

    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.partitioned) {
    str += '; Partitioned';
  }

  if (opt.priority) {
    var priority = typeof opt.priority === 'string'
      ? opt.priority.toLowerCase()
      : opt.priority;

    switch (priority) {
      case 'low':
        str += '; Priority=Low';
        break
      case 'medium':
        str += '; Priority=Medium';
        break
      case 'high':
        str += '; Priority=High';
        break
      default:
        throw new TypeError('option priority is invalid')
    }
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */

function decode (str) {
  return str.indexOf('%') !== -1
    ? decodeURIComponent(str)
    : str
}

/**
 * URL-encode value.
 *
 * @param {string} val
 * @returns {string}
 */

function encode (val) {
  return encodeURIComponent(val)
}

/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */

function isDate (val) {
  return __toString.call(val) === '[object Date]' ||
    val instanceof Date
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

(function (exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hasCookie = exports.deleteCookie = exports.setCookie = exports.getCookie = exports.getCookies = void 0;
	var cookie_1 = cookie;
	var isClientSide = function () { return typeof window !== 'undefined'; };
	var isCookiesFromAppRouter = function (cookieStore) {
	    if (!cookieStore)
	        return false;
	    return ('getAll' in cookieStore &&
	        'set' in cookieStore &&
	        typeof cookieStore.getAll === 'function' &&
	        typeof cookieStore.set === 'function');
	};
	var isContextFromAppRouter = function (context) {
	    return ((!!(context === null || context === void 0 ? void 0 : context.req) && 'cookies' in context.req && isCookiesFromAppRouter(context === null || context === void 0 ? void 0 : context.req.cookies)) ||
	        (!!(context === null || context === void 0 ? void 0 : context.res) && 'cookies' in context.res && isCookiesFromAppRouter(context === null || context === void 0 ? void 0 : context.res.cookies)) ||
	        (!!(context === null || context === void 0 ? void 0 : context.cookies) && isCookiesFromAppRouter(context.cookies())));
	};
	var transformAppRouterCookies = function (cookies) {
	    var _cookies = {};
	    cookies.getAll().forEach(function (_a) {
	        var name = _a.name, value = _a.value;
	        _cookies[name] = value;
	    });
	    return _cookies;
	};
	var stringify = function (value) {
	    try {
	        if (typeof value === 'string') {
	            return value;
	        }
	        var stringifiedValue = JSON.stringify(value);
	        return stringifiedValue;
	    }
	    catch (e) {
	        return value;
	    }
	};
	var decode = function (str) {
	    if (!str)
	        return str;
	    return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	};
	var getCookies = function (options) {
	    if (isContextFromAppRouter(options)) {
	        if (options === null || options === void 0 ? void 0 : options.req) {
	            return transformAppRouterCookies(options.req.cookies);
	        }
	        if (options === null || options === void 0 ? void 0 : options.cookies) {
	            return transformAppRouterCookies(options.cookies());
	        }
	    }
	    var req;
	    // DefaultOptions['req] can be casted here because is narrowed by using the fn: isContextFromAppRouter
	    if (options)
	        req = options.req;
	    if (!isClientSide()) {
	        // if cookie-parser is used in project get cookies from ctx.req.cookies
	        // if cookie-parser isn't used in project get cookies from ctx.req.headers.cookie
	        if (req && req.cookies)
	            return req.cookies;
	        if (req && req.headers.cookie)
	            return (0, cookie_1.parse)(req.headers.cookie);
	        return {};
	    }
	    var _cookies = {};
	    var documentCookies = document.cookie ? document.cookie.split('; ') : [];
	    for (var i = 0, len = documentCookies.length; i < len; i++) {
	        var cookieParts = documentCookies[i].split('=');
	        var _cookie = cookieParts.slice(1).join('=');
	        var name_1 = cookieParts[0];
	        _cookies[name_1] = _cookie;
	    }
	    return _cookies;
	};
	exports.getCookies = getCookies;
	var getCookie = function (key, options) {
	    var _cookies = (0, exports.getCookies)(options);
	    var value = _cookies[key];
	    if (value === undefined)
	        return undefined;
	    return decode(value);
	};
	exports.getCookie = getCookie;
	var setCookie = function (key, data, options) {
	    if (isContextFromAppRouter(options)) {
	        var req = options.req, res = options.res, cookiesFn = options.cookies, restOptions = __rest(options, ["req", "res", "cookies"]);
	        var payload = __assign({ name: key, value: stringify(data) }, restOptions);
	        if (req) {
	            req.cookies.set(payload);
	        }
	        if (res) {
	            res.cookies.set(payload);
	        }
	        if (cookiesFn) {
	            cookiesFn().set(payload);
	        }
	        return;
	    }
	    var _cookieOptions;
	    var _req;
	    var _res;
	    if (options) {
	        // DefaultOptions can be casted here because the AppRouterMiddlewareOptions is narrowed using the fn: isContextFromAppRouter
	        var _a = options, req = _a.req, res = _a.res, _options = __rest(_a, ["req", "res"]);
	        _req = req;
	        _res = res;
	        _cookieOptions = _options;
	    }
	    var cookieStr = (0, cookie_1.serialize)(key, stringify(data), __assign({ path: '/' }, _cookieOptions));
	    if (!isClientSide()) {
	        if (_res && _req) {
	            var currentCookies = _res.getHeader('Set-Cookie');
	            if (!Array.isArray(currentCookies)) {
	                currentCookies = !currentCookies ? [] : [String(currentCookies)];
	            }
	            _res.setHeader('Set-Cookie', currentCookies.concat(cookieStr));
	            if (_req && _req.cookies) {
	                var _cookies = _req.cookies;
	                data === '' ? delete _cookies[key] : (_cookies[key] = stringify(data));
	            }
	            if (_req && _req.headers && _req.headers.cookie) {
	                var _cookies = (0, cookie_1.parse)(_req.headers.cookie);
	                data === '' ? delete _cookies[key] : (_cookies[key] = stringify(data));
	                _req.headers.cookie = Object.entries(_cookies).reduce(function (accum, item) {
	                    return accum.concat("".concat(item[0], "=").concat(item[1], ";"));
	                }, '');
	            }
	        }
	    }
	    else {
	        document.cookie = cookieStr;
	    }
	};
	exports.setCookie = setCookie;
	var deleteCookie = function (key, options) {
	    return (0, exports.setCookie)(key, '', __assign(__assign({}, options), { maxAge: -1 }));
	};
	exports.deleteCookie = deleteCookie;
	var hasCookie = function (key, options) {
	    if (!key)
	        return false;
	    var cookie = (0, exports.getCookies)(options);
	    return cookie.hasOwnProperty(key);
	};
	exports.hasCookie = hasCookie; 
} (lib));

var SESSION_KEY = 'pni';
var CHALLENGE_KEY = 'pakce';

var BASE_PATH = "https://oauthn.web.app/".replace(/\/+$/, "");
var LOGIN_PATH = "".concat(BASE_PATH, "/api/v1/oidc/kipindi");
var HANDSHAKE_PATH = "".concat(BASE_PATH, "/api/v1/oidc/kupeana");

function unixTimestampToMaxAge(expirationUnixTimestamp) {
    var currentUnixTimestamp = Math.floor(Date.now() / 1000);
    var maxAge = expirationUnixTimestamp - currentUnixTimestamp;
    return maxAge > 0 ? maxAge : 0;
}

var callback$1 = function (verifier, clientId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, code, response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = new URLSearchParams(window.location.search);
                code = params.get('handshake');
                if (!code)
                    return [2 /*return*/, undefined];
                return [4 /*yield*/, fetch(HANDSHAKE_PATH, {
                        method: 'POST',
                        headers: {
                            'authorization': "Shake ".concat(code),
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            client_id: clientId,
                            verifier: verifier,
                        }),
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                if (!data.data)
                    return [2 /*return*/];
                lib.setCookie(SESSION_KEY, data.data.access, { maxAge: unixTimestampToMaxAge(data.data.exp), secure: true });
                return [2 /*return*/];
        }
    });
}); };

var AuthContext = createContext(undefined);
var PasbyProvider = function (_a) {
    var children = _a.children, clientId = _a.clientId, loginFallback = _a.loginFallback, logoutPath = _a.logoutPath, callbackPath = _a.callbackPath;
    var _b = useState(false), isAuthenticated = _b[0], setIsAuthenticated = _b[1];
    var _c = useState(), error = _c[0], setError = _c[1];
    useEffect(function () {
        var token = lib.getCookie(SESSION_KEY);
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);
    var handleCallback = function () { return __awaiter(void 0, void 0, void 0, function () {
        var verifier;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    verifier = lib.getCookie(CHALLENGE_KEY);
                    if (!verifier) {
                        setError("No code verifier found for PKCE");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, callback$1(verifier, clientId).then(function (c) {
                            if (!c)
                                return;
                            setIsAuthenticated(true);
                            window.location.href = loginFallback;
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var logout = function () {
        lib.deleteCookie(SESSION_KEY);
        setIsAuthenticated(false);
        window.location.href = "".concat(window.location.host, "/").concat(logoutPath);
    };
    useEffect(function () {
        if (window.location.pathname === callbackPath) {
            handleCallback();
        }
    }, []);
    return (React__default.createElement(AuthContext.Provider, { value: { isAuthenticated: isAuthenticated, logout: logout, error: error } }, children));
};
var usePasby = function () {
    var context = useContext(AuthContext);
    if (!context) {
        throw new Error('usePasby must be used within a PasbyProvider');
    }
    return context;
};

function LoginWithPasby(_a) {
    var background = _a.background, logoBgk = _a.logoBgk, logoTextColor = _a.logoTextColor, textColor = _a.textColor, props = __rest(_a, ["background", "logoBgk", "logoTextColor", "textColor"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: 252, height: 56, fill: "none" }, props),
        React.createElement("rect", { width: 252, height: 56, fill: background !== null && background !== void 0 ? background : "#DD3E3E", rx: 8 }),
        React.createElement("path", { fill: logoBgk !== null && logoBgk !== void 0 ? logoBgk : "#fff", d: "M35.818 42.907a13.71 13.71 0 0 1-6.125-10.203l-.636-6.935a13.7 13.7 0 0 1 4.175-11.15l5.022-4.804a13.76 13.76 0 0 1 11.344-3.692l6.904.927a13.744 13.744 0 0 1 9.955 6.544l3.59 5.978a13.69 13.69 0 0 1 1.084 11.847l-2.437 6.513a13.73 13.73 0 0 1-8.614 8.24l-6.614 2.152a13.767 13.767 0 0 1-11.82-1.586l-5.828-3.83Z" }),
        React.createElement("path", { fill: logoTextColor !== null && logoTextColor !== void 0 ? logoTextColor : "#DD3E3E", d: "M43.9 18.756c.54 0 1.028.128 1.467.385.446.25.794.606 1.046 1.068.252.455.378.987.378 1.597 0 .609-.126 1.145-.378 1.607-.252.455-.6.811-1.046 1.068-.439.25-.928.375-1.467.375-.68 0-1.747.55-1.747 1.23v.057c0 .42-.341.76-.762.76h-.08a.84.84 0 0 1-.84-.839v-6.419c0-.442.36-.801.803-.801h.625c.098 0 .178.08.178.178 0 .168.228.256.364.156.382-.282.868-.422 1.46-.422Zm-.291 4.69c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19-.273-.3-.626-.451-1.057-.451-.431 0-.787.15-1.068.451-.273.294-.41.69-.41 1.19 0 .499.137.899.41 1.2.28.293.637.44 1.068.44ZM52.964 18.844a.84.84 0 0 1 .841.84v4.282c0 .443-.36.802-.803.802h-.625a.179.179 0 0 1-.179-.179c0-.168-.227-.256-.363-.155-.38.281-.863.422-1.449.422a2.994 2.994 0 0 1-1.488-.375 2.665 2.665 0 0 1-1.035-1.068c-.252-.462-.378-.998-.378-1.607 0-.61.126-1.146.378-1.608a2.666 2.666 0 0 1 1.035-1.068c.446-.25.942-.374 1.488-.374.56 0 1.026.135 1.4.407.129.093.337.01.337-.148 0-.095.077-.171.171-.171h.67Zm-2.286 4.602a1.4 1.4 0 0 0 1.056-.44c.28-.301.421-.701.421-1.2 0-.5-.14-.896-.42-1.19a1.383 1.383 0 0 0-1.057-.451c-.432 0-.788.15-1.068.451-.28.294-.42.69-.42 1.19 0 .499.14.899.42 1.2.28.293.636.44 1.068.44ZM57.315 24.856c-.482 0-.953-.06-1.413-.177a5 5 0 0 1-.595-.198c-.305-.126-.405-.483-.27-.783.172-.375.642-.512 1.032-.372a3.984 3.984 0 0 0 1.311.23c.711 0 1.067-.18 1.067-.54 0-.168-.097-.29-.29-.363-.195-.073-.493-.135-.896-.187a8.486 8.486 0 0 1-1.176-.253 1.855 1.855 0 0 1-.808-.507c-.223-.242-.335-.587-.335-1.035 0-.374.105-.704.313-.99.216-.294.525-.522.927-.683.41-.162.892-.242 1.446-.242.41 0 .816.047 1.218.143.168.036.323.078.466.126.326.11.44.483.297.795-.166.362-.609.495-.99.379a3.377 3.377 0 0 0-.991-.144c-.36 0-.63.051-.81.154-.179.103-.269.235-.269.396 0 .184.097.312.291.386.194.073.504.143.928.209.474.08.863.169 1.165.264.302.088.564.254.787.496.223.242.334.58.334 1.013 0 .367-.108.694-.323.98-.216.286-.532.51-.95.671-.41.155-.898.232-1.466.232ZM56.644 34.716a3.816 3.816 0 0 1 .08.072 1.287 1.287 0 0 1 .364.902v.04c-.002.102-.01.198-.034.297l-.004.02a1.276 1.276 0 0 1-.246.51l-.013.017a1.27 1.27 0 0 1-.816.44c-.161.014-.323.011-.481-.027l-.021-.005a1.222 1.222 0 0 1-.751-.54 1.422 1.422 0 0 1-.177-1.024l.018-.066.006-.022c.1-.337.33-.613.63-.782a1.288 1.288 0 0 1 1.445.168Zm-1.684.612c-.019.014-.034.035-.032.058a.08.08 0 0 0 .048.067.131.131 0 0 0 .052.006h.041l.037-.002h.037l.064-.002c.015 0 .026.011.026.026l-.001.243v.125l-.001.121v.111l-.001.037a.127.127 0 0 0 .01.04c.01.024.035.043.061.041a.085.085 0 0 0 .057-.027c.015-.02.018-.045.018-.07v-.162l-.001-.121a50.43 50.43 0 0 1-.001-.341c0-.013.01-.023.023-.023l.104.003.037.001h.035l.032.001c.03-.003.03-.003.053-.03a.255.255 0 0 0 .011-.016c.015-.025.005-.06-.016-.08a.123.123 0 0 0-.084-.027h-.138a12.76 12.76 0 0 0-.2 0 8.278 8.278 0 0 0-.127 0h-.068c-.015 0-.03 0-.045.005a.103.103 0 0 0-.031.016Zm.885-.004a.098.098 0 0 0-.04.068c-.003.023-.002.047-.003.072v.621a.204.204 0 0 0 .013.065.089.089 0 0 0 .027.036c.02.015.046.013.067.001a.084.084 0 0 0 .043-.062.432.432 0 0 0 .004-.058v-.03l.001-.034v-.034l.002-.108.002-.074.002-.094a.03.03 0 0 1 .053-.018l.015.02c.032.041.064.084.095.127.01.014.02.03.035.04.022.013.052.008.076-.003a.122.122 0 0 0 .04-.038l.022-.028.025-.032.03-.038.058-.076.019-.024c.004-.006.013-.002.013.005l.003.209v.078l.002.112v.035a49.031 49.031 0 0 1 .001.042.112.112 0 0 0 .01.053c.012.024.036.044.063.042a.087.087 0 0 0 .056-.027c.015-.02.017-.045.018-.07v-.291a31.282 31.282 0 0 1 0-.243v-.161a.223.223 0 0 0-.005-.035c-.006-.029-.027-.054-.056-.058a.083.083 0 0 0-.049.01.127.127 0 0 0-.04.035l-.02.026-.105.136-.006.008a.145.145 0 0 1-.23.005l-.019-.023a6.52 6.52 0 0 1-.132-.167c-.025-.024-.061-.039-.09-.02ZM43.9 29.491c.54 0 1.028.129 1.467.386.446.25.794.605 1.046 1.068.252.455.378.987.378 1.596 0 .61-.126 1.146-.378 1.608-.252.455-.6.811-1.046 1.068-.439.25-.928.375-1.467.375-.59 0-1.077-.141-1.46-.423-.135-.1-.362-.012-.362.156 0 .099-.08.178-.18.178h-.624a.803.803 0 0 1-.803-.801v-6.53a.84.84 0 0 1 .84-.839h.05c.437 0 .792.354.792.791v.137c0 .68 1.066 1.23 1.747 1.23Zm-.291 4.691c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19-.273-.3-.626-.451-1.057-.451-.431 0-.787.15-1.068.451-.273.294-.41.69-.41 1.19 0 .499.137.899.41 1.2.28.293.637.44 1.068.44ZM52.92 29.58a.84.84 0 0 1 .842.839v4.094c0 1.086-.27 1.893-.809 2.422-.539.529-1.323.793-2.35.793-.547 0-1.065-.07-1.554-.21a3.912 3.912 0 0 1-.743-.295c-.291-.154-.362-.52-.205-.81.206-.378.716-.472 1.117-.313a3.358 3.358 0 0 0 1.244.24c.56 0 .97-.132 1.23-.396.258-.264.388-.668.388-1.211 0-.073-.09-.11-.145-.063-.183.155-.39.279-.621.371a2.54 2.54 0 0 1-.95.176c-.761 0-1.365-.22-1.811-.66-.446-.448-.669-1.116-.669-2.005V30.42a.84.84 0 0 1 1.683 0v1.88c0 .962.392 1.443 1.175 1.443.403 0 .727-.132.971-.397.244-.271.367-.671.367-1.2V30.42a.84.84 0 0 1 .84-.84Z" }),
        React.createElement("path", { fill: textColor !== null && textColor !== void 0 ? textColor : "#fff", d: "M86.977 24.2a1 1 0 0 1 1-1h.772a1 1 0 0 1 1 1v5.602a1 1 0 0 0 1 1h2.676a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-5.448a1 1 0 0 1-1-1v-7.8ZM99.176 33.126c-.812 0-1.544-.168-2.198-.504a3.854 3.854 0 0 1-1.54-1.4c-.364-.597-.546-1.274-.546-2.03 0-.747.182-1.419.546-2.016a3.777 3.777 0 0 1 1.526-1.386c.654-.336 1.39-.504 2.212-.504.822 0 1.559.168 2.212.504a3.663 3.663 0 0 1 1.526 1.386c.364.588.546 1.26.546 2.016s-.182 1.433-.546 2.03a3.757 3.757 0 0 1-1.526 1.4c-.653.336-1.39.504-2.212.504Zm0-2.114c.467 0 .849-.159 1.148-.476.299-.327.448-.774.448-1.344 0-.56-.149-.998-.448-1.316-.299-.317-.681-.476-1.148-.476-.466 0-.85.159-1.148.476-.299.317-.448.756-.448 1.316 0 .57.15 1.017.448 1.344.299.317.681.476 1.148.476ZM111.854 25.412a1 1 0 0 1 1 1v5.202c0 1.41-.382 2.464-1.148 3.164-.765.71-1.866 1.064-3.304 1.064a8.416 8.416 0 0 1-2.1-.252 5.721 5.721 0 0 1-.913-.315c-.454-.203-.583-.755-.354-1.196.293-.563 1.049-.721 1.653-.529.025.009.051.016.076.024.476.15.943.224 1.4.224.7 0 1.214-.154 1.54-.462.327-.308.49-.765.49-1.372 0-.086-.11-.129-.173-.07-.504.476-1.198.714-2.081.714-.672 0-1.292-.15-1.862-.448a3.534 3.534 0 0 1-1.358-1.288c-.336-.56-.504-1.204-.504-1.932 0-.719.168-1.353.504-1.904.336-.56.789-.99 1.358-1.288a3.853 3.853 0 0 1 1.862-.462c.784 0 1.416.183 1.896.55.174.133.484.02.484-.198 0-.125.101-.226.226-.226h1.308Zm-3.284 5.082c.476 0 .868-.145 1.176-.434.318-.29.476-.662.476-1.12 0-.457-.154-.826-.462-1.106-.308-.29-.704-.434-1.19-.434-.485 0-.886.145-1.204.434-.308.28-.462.649-.462 1.106 0 .457.159.83.476 1.12.318.29.714.434 1.19.434ZM118.638 26.412a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588Zm1.33-1.84c-.486 0-.878-.135-1.176-.406a1.304 1.304 0 0 1-.448-1.008c0-.401.149-.737.448-1.008.298-.27.69-.406 1.176-.406.485 0 .877.13 1.176.392.298.252.448.579.448.98 0 .42-.15.77-.448 1.05-.299.27-.691.406-1.176.406ZM127.968 25.286c.943 0 1.699.28 2.268.84.579.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.415-1.554-1.246-1.554-.457 0-.826.15-1.106.448-.27.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588a1 1 0 0 1 1-1h1.296c.132 0 .238.107.238.238 0 .214.272.33.449.21a3.518 3.518 0 0 1 1.959-.574ZM148.225 25.412a1 1 0 0 1 1 1v3.186c0 1.13-.327 2.002-.98 2.618-.644.607-1.554.91-2.73.91-.609 0-1.137-.098-1.583-.295-.556-.245-1.285-.24-1.842.005-.44.193-.965.29-1.573.29-1.186 0-2.1-.303-2.744-.91-.635-.616-.952-1.489-.952-2.618v-3.186a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .532.088.924.266 1.176.177.243.452.364.826.364.373 0 .653-.126.84-.378.186-.252.28-.64.28-1.162v-3.004a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .523.093.91.28 1.162.186.252.466.378.84.378.373 0 .648-.121.826-.364.177-.252.266-.644.266-1.176v-3.004a1 1 0 0 1 1-1h.66ZM150.89 26.412a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588Zm1.33-1.84c-.486 0-.878-.135-1.176-.406a1.304 1.304 0 0 1-.448-1.008c0-.401.149-.737.448-1.008.298-.27.69-.406 1.176-.406.485 0 .877.13 1.176.392.298.252.448.579.448.98 0 .42-.15.77-.448 1.05-.299.27-.691.406-1.176.406ZM159.913 31.98c.147.417-.017.887-.442 1.001a4.454 4.454 0 0 1-1.155.145c-.989 0-1.75-.242-2.282-.728-.522-.485-.784-1.209-.784-2.17v-5.51a1 1 0 0 1 1-1h.673c.545 0 .987.442.987.987v.126c0 .476.386.861.861.861a.86.86 0 0 1 .861.861v.266a.86.86 0 0 1-.861.861.861.861 0 0 0-.861.861v1.66c0 .28.07.494.21.643.14.15.332.224.574.224.435 0 .954.163 1.099.572l.12.34ZM166.127 25.286c.942 0 1.698.28 2.268.84.578.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.416-1.554-1.246-1.554-.458 0-.826.15-1.106.448-.271.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v1.298c0 .457.592.74 1.022.586.392-.14.812-.21 1.26-.21ZM179.781 25.286c.69 0 1.316.163 1.876.49a3.403 3.403 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058 0 .784-.168 1.475-.504 2.072a3.522 3.522 0 0 1-1.344 1.372 3.739 3.739 0 0 1-1.876.476c-.851 0-2.114.675-2.114 1.526v.08a.984.984 0 0 1-.984.984h-.676a1 1 0 0 1-1-1v-8.304a1 1 0 0 1 1-1h1.332c.111 0 .202.09.202.202 0 .189.252.288.405.178.467-.337 1.079-.506 1.835-.506Zm-.56 5.726c.466 0 .849-.159 1.148-.476.298-.327.448-.77.448-1.33s-.15-.998-.448-1.316c-.299-.326-.682-.49-1.148-.49-.467 0-.85.164-1.148.49-.299.317-.448.756-.448 1.316s.149 1.003.448 1.33c.298.317.681.476 1.148.476ZM191.763 25.412a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-1.332a.202.202 0 0 1-.202-.202c0-.188-.252-.288-.405-.178-.467.338-1.079.506-1.835.506-.69 0-1.32-.158-1.89-.476a3.621 3.621 0 0 1-1.344-1.386c-.326-.597-.49-1.288-.49-2.072s.164-1.47.49-2.058a3.52 3.52 0 0 1 1.344-1.372 3.82 3.82 0 0 1 1.89-.476c.704 0 1.29.161 1.757.484.141.097.357.004.357-.167 0-.105.086-.19.191-.19h1.469Zm-3.214 5.6c.467 0 .85-.159 1.148-.476.299-.327.448-.774.448-1.344 0-.56-.149-.998-.448-1.316-.298-.317-.681-.476-1.148-.476-.466 0-.849.159-1.148.476-.298.317-.448.756-.448 1.316 0 .57.15 1.017.448 1.344.299.317.682.476 1.148.476ZM197.234 33.126c-.635 0-1.26-.07-1.876-.21a6.913 6.913 0 0 1-.716-.212c-.46-.165-.623-.694-.427-1.141.241-.55.92-.758 1.492-.58a5.702 5.702 0 0 0 1.611.24c.429 0 .732-.043.91-.127.186-.093.28-.224.28-.392s-.112-.285-.336-.35c-.215-.075-.56-.145-1.036-.21a10.494 10.494 0 0 1-1.554-.294 2.39 2.39 0 0 1-1.092-.672c-.308-.326-.462-.784-.462-1.372 0-.485.144-.915.434-1.288.289-.383.709-.681 1.26-.896.56-.224 1.227-.336 2.002-.336.55 0 1.096.056 1.638.168.188.04.366.084.533.134.486.147.668.696.463 1.16-.234.53-.874.733-1.434.582a4.542 4.542 0 0 0-1.186-.154c-.42 0-.728.052-.924.154-.196.094-.294.22-.294.378 0 .178.107.304.322.378.214.066.569.136 1.064.21.625.094 1.143.2 1.554.322.41.122.765.346 1.064.672.308.318.462.765.462 1.344 0 .476-.145.905-.434 1.288-.29.373-.719.668-1.288.882-.56.215-1.237.322-2.03.322ZM206.906 25.286c.69 0 1.316.159 1.876.476a3.403 3.403 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058 0 .784-.168 1.475-.504 2.072a3.497 3.497 0 0 1-1.344 1.386 3.739 3.739 0 0 1-1.876.476c-.756 0-1.368-.168-1.835-.506-.153-.11-.405-.01-.405.178a.202.202 0 0 1-.202.202h-1.332a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v.14c0 .849 1.265 1.534 2.114 1.534Zm-.56 5.726c.466 0 .849-.159 1.148-.476.298-.327.448-.774.448-1.344 0-.56-.15-.998-.448-1.316-.299-.317-.682-.476-1.148-.476-.467 0-.85.159-1.148.476-.299.317-.448.756-.448 1.316 0 .57.149 1.017.448 1.344.298.317.681.476 1.148.476ZM218.846 25.412a1 1 0 0 1 1 1v5.202c0 1.41-.378 2.464-1.134 3.164-.746.71-1.824 1.064-3.234 1.064a8.187 8.187 0 0 1-2.072-.252 5.524 5.524 0 0 1-.887-.314c-.446-.204-.57-.75-.344-1.186.294-.566 1.058-.72 1.665-.525l.028.01c.458.148.91.223 1.358.223.672 0 1.167-.154 1.484-.462.318-.308.476-.765.476-1.372 0-.063-.076-.096-.125-.055-.547.466-1.214.7-2.003.7-.98 0-1.764-.29-2.352-.869-.578-.578-.868-1.446-.868-2.604v-2.724a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.29c0 .579.108.999.322 1.26.215.262.528.392.938.392.42 0 .761-.15 1.022-.448.271-.298.406-.746.406-1.344v-2.15a1 1 0 0 1 1-1h.66Z" })));
}
function IdentifyWithPasby(_a) {
    var background = _a.background, logoBgk = _a.logoBgk, logoTextColor = _a.logoTextColor, textColor = _a.textColor, props = __rest(_a, ["background", "logoBgk", "logoTextColor", "textColor"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: 252, height: 56, fill: "none" }, props),
        React.createElement("rect", { width: 252, height: 56, fill: background !== null && background !== void 0 ? background : "#DD3E3E", rx: 8 }),
        React.createElement("path", { fill: logoBgk !== null && logoBgk !== void 0 ? logoBgk : "#fff", d: "M35.818 42.907a13.71 13.71 0 0 1-6.125-10.203l-.636-6.935a13.7 13.7 0 0 1 4.175-11.15l5.022-4.804a13.76 13.76 0 0 1 11.344-3.692l6.904.927a13.744 13.744 0 0 1 9.956 6.544l3.588 5.978a13.69 13.69 0 0 1 1.085 11.847l-2.437 6.513a13.73 13.73 0 0 1-8.614 8.24l-6.614 2.152a13.767 13.767 0 0 1-11.82-1.586z" }),
        React.createElement("path", { fill: logoTextColor !== null && logoTextColor !== void 0 ? logoTextColor : "#DD3E3E", d: "M43.9 18.756c.54 0 1.028.128 1.467.385.446.25.794.606 1.046 1.068.252.455.378.987.378 1.597s-.126 1.145-.378 1.607c-.252.455-.6.811-1.046 1.068-.439.25-.928.375-1.467.375-.68 0-1.747.55-1.747 1.23v.057c0 .42-.341.76-.762.76h-.08a.84.84 0 0 1-.84-.839v-6.419c0-.442.36-.801.803-.801h.625c.098 0 .179.08.179.178 0 .168.227.256.363.156.382-.282.868-.422 1.46-.422zm-.291 4.69c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19-.273-.3-.626-.451-1.057-.451s-.787.15-1.068.451c-.273.294-.41.69-.41 1.19 0 .499.137.899.41 1.2.28.293.637.44 1.068.44zM52.964 18.844a.84.84 0 0 1 .841.84v4.282c0 .443-.36.802-.803.802h-.625a.179.179 0 0 1-.179-.179c0-.168-.227-.256-.363-.155-.38.281-.863.422-1.449.422a2.994 2.994 0 0 1-1.488-.375 2.665 2.665 0 0 1-1.035-1.068c-.252-.462-.378-.998-.378-1.607s.126-1.146.378-1.608a2.666 2.666 0 0 1 1.035-1.068c.446-.25.942-.375 1.488-.375.56 0 1.026.136 1.4.408.129.093.337.01.337-.148 0-.095.077-.171.171-.171zm-2.286 4.602a1.4 1.4 0 0 0 1.057-.44c.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19a1.383 1.383 0 0 0-1.057-.451c-.432 0-.788.15-1.068.451-.28.294-.42.69-.42 1.19 0 .499.14.899.42 1.2.28.293.636.44 1.068.44zM57.315 24.856c-.482 0-.953-.06-1.413-.177a5 5 0 0 1-.595-.198c-.305-.126-.405-.483-.27-.783.172-.375.643-.512 1.032-.372a3.984 3.984 0 0 0 1.311.23c.711 0 1.067-.18 1.067-.54 0-.168-.097-.29-.29-.363s-.493-.135-.896-.187a8.486 8.486 0 0 1-1.176-.253 1.855 1.855 0 0 1-.808-.506c-.223-.243-.335-.588-.335-1.036 0-.374.104-.704.313-.99.216-.294.525-.522.927-.683.41-.162.892-.242 1.446-.242.41 0 .816.047 1.218.143.168.036.323.078.466.126.326.11.44.483.297.795-.166.362-.609.496-.99.379a3.377 3.377 0 0 0-.991-.144c-.36 0-.63.051-.81.154-.179.103-.269.235-.269.396 0 .184.097.312.291.386.194.073.504.143.928.209.474.08.863.169 1.165.264.302.088.564.254.787.496.223.242.334.58.334 1.013 0 .367-.108.694-.323.98-.216.286-.532.51-.95.671-.41.155-.898.232-1.466.232zM56.644 34.716a3.816 3.816 0 0 1 .08.072 1.287 1.287 0 0 1 .364.902v.04c-.002.102-.01.198-.033.297l-.005.02a1.276 1.276 0 0 1-.246.51l-.012.017a1.27 1.27 0 0 1-.817.44c-.161.014-.323.011-.481-.027l-.021-.005a1.222 1.222 0 0 1-.751-.54 1.422 1.422 0 0 1-.177-1.024l.018-.066.007-.022c.099-.337.329-.613.63-.782a1.288 1.288 0 0 1 1.444.168zm-1.684.612c-.019.014-.034.035-.032.058a.08.08 0 0 0 .048.067.131.131 0 0 0 .052.006h.041l.037-.002h.037l.064-.002c.015 0 .026.011.026.026l-.001.243v.125l-.001.121v.111l-.001.037a.127.127 0 0 0 .01.04c.01.024.035.043.061.041a.085.085 0 0 0 .057-.027c.015-.02.018-.045.018-.07v-.163l-.001-.12v-.123l-.001-.218c0-.013.01-.023.023-.023l.104.003.037.001h.035l.032.001c.03-.003.03-.003.052-.03a.255.255 0 0 0 .012-.016c.015-.025.005-.06-.016-.08a.123.123 0 0 0-.084-.027h-.138a12.76 12.76 0 0 0-.2 0 8.278 8.278 0 0 0-.127 0h-.068c-.015 0-.03 0-.045.005a.103.103 0 0 0-.031.016zm.885-.004a.098.098 0 0 0-.04.068c-.003.023-.002.047-.003.072v.621a.204.204 0 0 0 .013.065.089.089 0 0 0 .027.036c.02.015.046.013.067.001a.084.084 0 0 0 .043-.062.432.432 0 0 0 .004-.058v-.03l.001-.034v-.034l.002-.108.002-.074.001-.094a.03.03 0 0 1 .054-.018l.015.02c.032.041.064.084.095.127.01.014.02.03.035.04.022.013.052.008.076-.003a.122.122 0 0 0 .04-.038l.022-.028.025-.032.03-.038.058-.076.019-.024c.004-.006.013-.002.013.005l.003.209v.078l.002.112v.035a49.031 49.031 0 0 1 .001.042.112.112 0 0 0 .01.053c.012.024.036.044.063.042a.087.087 0 0 0 .056-.027c.015-.02.017-.045.018-.07v-.291a31.282 31.282 0 0 1 0-.243v-.161a.223.223 0 0 0-.005-.035c-.006-.029-.027-.054-.056-.058a.083.083 0 0 0-.049.01.127.127 0 0 0-.04.035l-.02.026-.105.136-.006.008a.145.145 0 0 1-.23.005 6.74 6.74 0 0 1-.151-.19c-.025-.024-.061-.039-.09-.02zM43.9 29.491c.54 0 1.028.129 1.467.386.446.25.794.605 1.046 1.068.252.455.378.987.378 1.597s-.126 1.145-.378 1.607c-.252.455-.6.811-1.046 1.068-.439.25-.928.375-1.467.375-.59 0-1.077-.141-1.46-.423-.135-.1-.362-.012-.362.156 0 .099-.08.178-.18.178h-.624a.803.803 0 0 1-.803-.801v-6.53a.84.84 0 0 1 .84-.839h.05c.437 0 .792.354.792.791v.137c0 .68 1.066 1.23 1.747 1.23zm-.291 4.691c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2s-.14-.896-.42-1.19c-.273-.3-.626-.451-1.057-.451s-.787.15-1.068.451c-.273.294-.41.69-.41 1.19s.137.899.41 1.2c.28.293.637.44 1.068.44zM52.92 29.58a.84.84 0 0 1 .842.839v4.093c0 1.087-.27 1.894-.809 2.423-.539.528-1.323.793-2.35.793-.547 0-1.065-.07-1.554-.21a3.912 3.912 0 0 1-.743-.295c-.291-.154-.362-.52-.205-.81.206-.378.716-.472 1.117-.313a3.358 3.358 0 0 0 1.244.24c.56 0 .97-.132 1.23-.396.258-.264.388-.668.388-1.211 0-.073-.09-.11-.145-.063-.183.155-.39.279-.621.371a2.54 2.54 0 0 1-.95.176c-.761 0-1.365-.22-1.811-.66-.446-.448-.669-1.116-.669-2.004v-2.134a.84.84 0 0 1 1.683 0v1.88c0 .962.392 1.443 1.175 1.443.403 0 .727-.132.971-.397.244-.271.367-.671.367-1.2V30.42a.84.84 0 0 1 .84-.84z" }),
        React.createElement("g", { fill: textColor !== null && textColor !== void 0 ? textColor : "#fff" },
            React.createElement("path", { d: "M89.675 25.342a.791.791 0 0 0-.791.791v3.934c0 .437.354.791.79.791.437 0 .792.354.792.791V32a1 1 0 0 1-1 1h-3.95a1 1 0 0 1-1-1v-.344c0-.44.357-.798.798-.798s.798-.357.798-.798v-3.92c0-.44-.358-.798-.798-.798s-.798-.357-.798-.798V24.2a1 1 0 0 1 1-1h3.95a1 1 0 0 1 1 1v.351a.79.79 0 0 1-.791.791zM98.902 22.612a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1H97.57a.202.202 0 0 1-.202-.202c0-.188-.252-.288-.404-.177-.466.337-1.073.505-1.822.505-.69 0-1.32-.158-1.89-.476a3.59 3.59 0 0 1-1.358-1.386c-.327-.597-.49-1.288-.49-2.072s.163-1.47.49-2.058a3.491 3.491 0 0 1 1.358-1.372c.57-.317 1.2-.476 1.89-.476.83 0 2.1-.693 2.1-1.523v-.166c0-.544.44-.985.985-.985zm-3.2 8.4a1.49 1.49 0 0 0 1.134-.476c.299-.326.448-.774.448-1.344 0-.56-.15-.998-.448-1.316-.29-.317-.667-.476-1.134-.476-.467 0-.85.159-1.148.476-.299.318-.448.756-.448 1.316 0 .57.15 1.018.448 1.344.299.318.681.476 1.148.476zM105.673 31.096c.364 0 .677-.051.938-.154.499-.189 1.101-.2 1.469.186l.1.105c.356.374.375.976-.059 1.255-.661.426-1.504.638-2.532.638-.886 0-1.666-.168-2.338-.504s-1.194-.802-1.568-1.4c-.364-.597-.546-1.274-.546-2.03 0-.746.182-1.414.546-2.002a3.804 3.804 0 0 1 1.498-1.4c.644-.336 1.363-.504 2.156-.504.738 0 1.41.154 2.016.462a3.487 3.487 0 0 1 1.47 1.33c.233.37.392.787.476 1.25.085.472-.271.887-.742.977l-3.333.638c-.644.123-.94.864-.313 1.053.223.067.477.1.762.1zm-.322-3.92c-.457 0-.83.145-1.12.434l-.027.027c-.46.471.172 1.067.818.94l.874-.17c.497-.097.805-.643.393-.937a1.518 1.518 0 0 0-.938-.294zM115.538 25.286c.942 0 1.698.28 2.268.84.578.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.416-1.554-1.246-1.554-.458 0-.826.15-1.106.448-.271.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588a1 1 0 0 1 1-1h1.296c.131 0 .238.107.238.238 0 .214.272.33.448.21.189-.13.394-.236.616-.322.41-.168.858-.252 1.344-.252zM124.978 31.98c.147.416-.016.887-.442 1.001a4.457 4.457 0 0 1-1.154.145c-.99 0-1.75-.243-2.282-.728-.523-.485-.784-1.209-.784-2.17v-5.51a1 1 0 0 1 1-1h.673c.545 0 .987.442.987.987v.126a.86.86 0 0 0 .861.861c.475 0 .861.386.861.861v.266a.861.861 0 0 1-.861.861.86.86 0 0 0-.861.861v1.66c0 .28.07.494.21.643.14.15.331.224.574.224.434 0 .953.163 1.098.572zM126.25 26.412a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1zm1.33-1.84c-.485 0-.877-.135-1.176-.406a1.304 1.304 0 0 1-.448-1.008c0-.401.149-.737.448-1.008.299-.27.691-.406 1.176-.406s.877.13 1.176.392c.299.252.448.579.448.98 0 .42-.149.77-.448 1.05-.299.27-.691.406-1.176.406zM133.229 25.524c0 .093.075.168.168.168h.735c.498 0 .903.404.903.903v.217c0 .48-.389.868-.868.868a.868.868 0 0 0-.868.868V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-6.504c0-.924.275-1.657.826-2.198.56-.541 1.339-.812 2.338-.812.336 0 .662.033.98.098l.049.01c.453.1.626.593.473 1.03l-.119.339c-.144.412-.639.567-1.075.567-.28 0-.5.084-.658.252-.15.168-.224.415-.224.742zM142.992 25.412a1 1 0 0 1 1 1v5.202c0 1.41-.378 2.464-1.134 3.164-.747.71-1.825 1.064-3.234 1.064a8.18 8.18 0 0 1-2.072-.252 5.524 5.524 0 0 1-.887-.314c-.447-.204-.57-.75-.344-1.186.294-.566 1.057-.72 1.665-.525a4.353 4.353 0 0 0 1.386.233c.672 0 1.166-.154 1.484-.462.317-.308.476-.765.476-1.372 0-.063-.077-.097-.125-.055-.547.466-1.215.7-2.003.7-.98 0-1.764-.29-2.352-.869-.579-.579-.868-1.447-.868-2.604v-2.724a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.29c0 .579.107.999.322 1.26.214.261.527.392.938.392.42 0 .76-.15 1.022-.448.27-.299.406-.747.406-1.344v-2.15a1 1 0 0 1 1-1zM161.155 25.412a1 1 0 0 1 1 1v3.186c0 1.13-.326 2.002-.98 2.618-.644.607-1.554.91-2.73.91-.609 0-1.136-.098-1.583-.295-.555-.245-1.285-.24-1.841.005-.44.193-.965.29-1.574.29-1.185 0-2.1-.303-2.744-.91-.634-.616-.952-1.488-.952-2.618v-3.186a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .532.089.924.266 1.176.178.243.453.364.826.364.374 0 .654-.126.84-.378.187-.252.28-.64.28-1.162v-3.004a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .523.094.91.28 1.162.187.252.467.378.84.378.374 0 .649-.121.826-.364.178-.252.266-.644.266-1.176v-3.004a1 1 0 0 1 1-1zM163.82 26.412a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1zm1.33-1.84c-.485 0-.877-.135-1.176-.406a1.307 1.307 0 0 1-.448-1.008c0-.401.15-.737.448-1.008.299-.27.691-.406 1.176-.406.486 0 .878.13 1.176.392.299.252.448.579.448.98 0 .42-.149.77-.448 1.05-.298.27-.69.406-1.176.406zM172.844 31.98c.147.416-.017.887-.443 1.001a4.45 4.45 0 0 1-1.154.145c-.989 0-1.75-.243-2.282-.728-.523-.485-.784-1.209-.784-2.17v-5.51a1 1 0 0 1 1-1h.673c.545 0 .987.442.987.987v.126c0 .476.386.861.861.861a.86.86 0 0 1 .861.861v.266a.86.86 0 0 1-.861.861.861.861 0 0 0-.861.861v1.66c0 .28.07.494.21.643.14.15.331.224.574.224.434 0 .954.163 1.098.572zM179.057 25.286c.943 0 1.699.28 2.268.84.579.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.415-1.554-1.246-1.554-.457 0-.826.15-1.106.448-.27.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v1.298c0 .457.593.74 1.022.586.392-.14.812-.21 1.26-.21zM192.712 25.286c.69 0 1.316.163 1.876.49a3.403 3.403 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058s-.168 1.475-.504 2.072a3.522 3.522 0 0 1-1.344 1.372 3.739 3.739 0 0 1-1.876.476c-.851 0-2.114.675-2.114 1.526v.08a.984.984 0 0 1-.984.984h-.676a1 1 0 0 1-1-1v-8.304a1 1 0 0 1 1-1h1.332c.111 0 .202.09.202.202 0 .189.251.288.404.178.468-.337 1.079-.506 1.836-.506zm-.56 5.726c.466 0 .849-.159 1.148-.476.298-.327.448-.77.448-1.33s-.15-.999-.448-1.316c-.299-.327-.682-.49-1.148-.49-.467 0-.85.164-1.148.49-.299.317-.448.756-.448 1.316s.149 1.003.448 1.33c.298.317.681.476 1.148.476zM204.694 25.412a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-1.332a.202.202 0 0 1-.202-.202c0-.188-.252-.288-.405-.178-.467.338-1.079.506-1.835.506a3.813 3.813 0 0 1-1.89-.476 3.621 3.621 0 0 1-1.344-1.386c-.327-.597-.49-1.288-.49-2.072s.163-1.47.49-2.058a3.52 3.52 0 0 1 1.344-1.372 3.814 3.814 0 0 1 1.89-.476c.704 0 1.289.161 1.757.484.141.097.357.004.357-.167a.19.19 0 0 1 .191-.19zm-3.214 5.6c.467 0 .849-.159 1.148-.476.299-.327.448-.775.448-1.344 0-.56-.149-.999-.448-1.316-.299-.317-.681-.476-1.148-.476s-.849.159-1.148.476c-.299.317-.448.756-.448 1.316 0 .57.149 1.017.448 1.344.299.317.681.476 1.148.476zM210.164 33.126c-.634 0-1.26-.07-1.876-.21a6.987 6.987 0 0 1-.716-.212c-.459-.165-.622-.694-.426-1.141.241-.55.919-.758 1.492-.58a5.708 5.708 0 0 0 1.61.24c.43 0 .733-.043.91-.127.187-.093.28-.224.28-.392s-.112-.285-.336-.35c-.214-.075-.56-.145-1.036-.21a10.545 10.545 0 0 1-1.554-.294 2.39 2.39 0 0 1-1.092-.672c-.308-.327-.462-.784-.462-1.372 0-.485.145-.915.434-1.288.29-.383.71-.681 1.26-.896.56-.224 1.228-.336 2.002-.336a8.06 8.06 0 0 1 1.638.168c.189.04.367.084.534.134.486.147.668.696.463 1.16-.235.53-.875.733-1.435.582a4.537 4.537 0 0 0-1.186-.154c-.42 0-.728.051-.924.154-.196.093-.294.22-.294.378 0 .177.108.303.322.378.215.065.57.135 1.064.21.626.093 1.144.2 1.554.322.411.121.766.345 1.064.672.308.317.462.765.462 1.344 0 .476-.144.905-.434 1.288-.289.373-.718.667-1.288.882-.56.215-1.236.322-2.03.322zM219.837 25.286c.69 0 1.316.159 1.876.476a3.403 3.403 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058s-.168 1.475-.504 2.072a3.497 3.497 0 0 1-1.344 1.386 3.739 3.739 0 0 1-1.876.476c-.757 0-1.368-.168-1.836-.506-.153-.11-.404-.01-.404.178a.202.202 0 0 1-.202.202h-1.332a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v.14c0 .849 1.265 1.534 2.114 1.534zm-.56 5.726c.466 0 .849-.159 1.148-.476.298-.327.448-.775.448-1.344 0-.56-.15-.999-.448-1.316-.299-.317-.682-.476-1.148-.476-.467 0-.85.159-1.148.476-.299.317-.448.756-.448 1.316 0 .57.149 1.017.448 1.344.298.317.681.476 1.148.476zM231.777 25.412a1 1 0 0 1 1 1v5.202c0 1.41-.378 2.464-1.134 3.164-.747.71-1.825 1.064-3.234 1.064a8.187 8.187 0 0 1-2.072-.252 5.524 5.524 0 0 1-.887-.314c-.446-.204-.57-.75-.344-1.186.294-.566 1.058-.72 1.665-.525a4.353 4.353 0 0 0 1.386.233c.672 0 1.167-.154 1.484-.462s.476-.765.476-1.372c0-.063-.077-.097-.125-.055-.547.466-1.215.7-2.003.7-.98 0-1.764-.29-2.352-.869-.579-.579-.868-1.447-.868-2.604v-2.724a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.29c0 .579.107.999.322 1.26.215.261.527.392.938.392.42 0 .761-.15 1.022-.448.271-.299.406-.747.406-1.344v-2.15a1 1 0 0 1 1-1z" }))));
}
function LinkWithPasby(_a) {
    var background = _a.background, logoBgk = _a.logoBgk, logoTextColor = _a.logoTextColor, textColor = _a.textColor, props = __rest(_a, ["background", "logoBgk", "logoTextColor", "textColor"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: 252, height: 56, fill: "none" }, props),
        React.createElement("rect", { width: 252, height: 56, fill: background !== null && background !== void 0 ? background : "#DD3E3E", rx: 8 }),
        React.createElement("path", { fill: logoBgk !== null && logoBgk !== void 0 ? logoBgk : "#fff", d: "M35.818 42.907a13.71 13.71 0 0 1-6.125-10.203l-.636-6.935a13.7 13.7 0 0 1 4.175-11.15l5.022-4.804a13.76 13.76 0 0 1 11.344-3.692l6.904.927a13.744 13.744 0 0 1 9.956 6.544l3.588 5.978a13.69 13.69 0 0 1 1.085 11.847l-2.437 6.513a13.73 13.73 0 0 1-8.614 8.24l-6.614 2.152a13.767 13.767 0 0 1-11.82-1.586z" }),
        React.createElement("path", { fill: logoTextColor !== null && logoTextColor !== void 0 ? logoTextColor : "#DD3E3E", d: "M43.9 18.756c.54 0 1.028.128 1.467.385.446.25.794.606 1.046 1.068.252.455.378.987.378 1.597s-.126 1.145-.378 1.607a2.74 2.74 0 0 1-1.046 1.068c-.439.25-.928.375-1.467.375-.68 0-1.747.55-1.747 1.23v.057a.76.76 0 0 1-.762.76h-.08a.84.84 0 0 1-.84-.839v-6.419c0-.442.36-.801.803-.801h.625a.18.18 0 0 1 .179.178c0 .168.227.256.363.156.382-.282.868-.422 1.46-.422zm-.291 4.69c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19-.273-.3-.626-.451-1.057-.451s-.787.15-1.068.451c-.273.294-.41.69-.41 1.19 0 .499.137.899.41 1.2.28.293.637.44 1.068.44zm9.355-4.602a.84.84 0 0 1 .841.84v4.282c0 .443-.36.802-.803.802h-.625a.179.179 0 0 1-.179-.179c0-.168-.227-.256-.363-.155-.38.281-.863.422-1.449.422a2.994 2.994 0 0 1-1.488-.375 2.665 2.665 0 0 1-1.035-1.068c-.252-.462-.378-.998-.378-1.607s.126-1.146.378-1.608a2.666 2.666 0 0 1 1.035-1.068 2.99 2.99 0 0 1 1.488-.375c.56 0 1.026.136 1.4.408.129.093.337.01.337-.148a.17.17 0 0 1 .171-.171zm-2.286 4.602a1.4 1.4 0 0 0 1.057-.44c.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19a1.383 1.383 0 0 0-1.057-.451c-.432 0-.788.15-1.068.451-.28.294-.42.69-.42 1.19 0 .499.14.899.42 1.2.28.293.636.44 1.068.44zm6.637 1.41a5.71 5.71 0 0 1-1.413-.177 5 5 0 0 1-.595-.198c-.305-.126-.405-.483-.27-.783.172-.375.643-.512 1.032-.372a3.984 3.984 0 0 0 1.311.23c.711 0 1.067-.18 1.067-.54 0-.168-.097-.29-.29-.363s-.493-.135-.896-.187a8.486 8.486 0 0 1-1.176-.253 1.855 1.855 0 0 1-.808-.506c-.223-.243-.335-.588-.335-1.036 0-.374.104-.704.313-.99.216-.294.525-.522.927-.683.41-.162.892-.242 1.446-.242.41 0 .816.047 1.218.143.168.036.323.078.466.126.326.11.44.483.297.795-.166.362-.609.496-.99.379a3.377 3.377 0 0 0-.991-.144c-.36 0-.63.051-.81.154-.179.103-.269.235-.269.396 0 .184.097.312.291.386.194.073.504.143.928.209.474.08.863.169 1.165.264.302.088.564.254.787.496.223.242.334.58.334 1.013 0 .367-.108.694-.323.98-.216.286-.532.51-.95.671-.41.155-.898.232-1.466.232zm-.671 9.86a3.816 3.816 0 0 1 .08.072 1.287 1.287 0 0 1 .364.902v.04c-.002.102-.01.198-.033.297l-.005.02a1.276 1.276 0 0 1-.246.51l-.012.017a1.27 1.27 0 0 1-.817.44 1.495 1.495 0 0 1-.481-.027l-.021-.005a1.222 1.222 0 0 1-.751-.54 1.422 1.422 0 0 1-.177-1.024l.018-.066.007-.022c.099-.337.329-.613.63-.782a1.288 1.288 0 0 1 1.444.168zm-1.684.612c-.019.014-.034.035-.032.058a.08.08 0 0 0 .048.067.131.131 0 0 0 .052.006h.041l.037-.002h.037l.064-.002c.015 0 .026.011.026.026l-.001.243v.125l-.001.121v.111l-.001.037a.127.127 0 0 0 .01.04c.01.024.035.043.061.041a.085.085 0 0 0 .057-.027.113.113 0 0 0 .018-.07v-.163l-.001-.12v-.123l-.001-.218c0-.013.01-.023.023-.023l.104.003.037.001h.035l.032.001c.03-.003.03-.003.052-.03a.255.255 0 0 0 .012-.016c.015-.025.005-.06-.016-.08a.123.123 0 0 0-.084-.027h-.138a12.76 12.76 0 0 0-.2 0 8.278 8.278 0 0 0-.127 0h-.068c-.015 0-.03 0-.045.005a.103.103 0 0 0-.031.016zm.885-.004a.098.098 0 0 0-.04.068c-.003.023-.002.047-.003.072v.621a.204.204 0 0 0 .013.065.089.089 0 0 0 .027.036c.02.015.046.013.067.001a.084.084 0 0 0 .043-.062.432.432 0 0 0 .004-.058v-.03l.001-.034v-.034l.002-.108.002-.074.001-.094a.03.03 0 0 1 .054-.018l.015.02c.032.041.064.084.095.127.01.014.02.03.035.04.022.013.052.008.076-.003a.122.122 0 0 0 .04-.038l.022-.028.025-.032.03-.038.058-.076.019-.024c.004-.006.013-.002.013.005l.003.209v.078l.002.112v.035a49.031 49.031 0 0 1 .001.042.112.112 0 0 0 .01.053c.012.024.036.044.063.042a.087.087 0 0 0 .056-.027c.015-.02.017-.045.018-.07v-.291a31.282 31.282 0 0 1 0-.243v-.161a.223.223 0 0 0-.005-.035c-.006-.029-.027-.054-.056-.058a.083.083 0 0 0-.049.01.127.127 0 0 0-.04.035l-.02.026-.105.136-.006.008a.145.145 0 0 1-.23.005 6.74 6.74 0 0 1-.151-.19c-.025-.024-.061-.039-.09-.02zM43.9 29.491c.54 0 1.028.129 1.467.386.446.25.794.605 1.046 1.068.252.455.378.987.378 1.597s-.126 1.145-.378 1.607a2.74 2.74 0 0 1-1.046 1.068c-.439.25-.928.375-1.467.375-.59 0-1.077-.141-1.46-.423-.135-.1-.362-.012-.362.156 0 .099-.08.178-.18.178h-.624a.803.803 0 0 1-.803-.801v-6.53a.84.84 0 0 1 .84-.839h.05c.437 0 .792.354.792.791v.137c0 .68 1.066 1.23 1.747 1.23zm-.291 4.691c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2s-.14-.896-.42-1.19c-.273-.3-.626-.451-1.057-.451s-.787.15-1.068.451c-.273.294-.41.69-.41 1.19s.137.899.41 1.2c.28.293.637.44 1.068.44zm9.311-4.602a.84.84 0 0 1 .842.839v4.093c0 1.087-.27 1.894-.809 2.423-.539.528-1.323.793-2.35.793a5.62 5.62 0 0 1-1.554-.21 3.912 3.912 0 0 1-.743-.295c-.291-.154-.362-.52-.205-.81.206-.378.716-.472 1.117-.313a3.358 3.358 0 0 0 1.244.24c.56 0 .97-.132 1.23-.396.258-.264.388-.668.388-1.211 0-.073-.09-.11-.145-.063a2.23 2.23 0 0 1-.621.371 2.54 2.54 0 0 1-.95.176c-.761 0-1.365-.22-1.811-.66-.446-.448-.669-1.116-.669-2.004v-2.134a.84.84 0 0 1 1.683 0v1.88c0 .962.392 1.443 1.175 1.443.403 0 .727-.132.971-.397.244-.271.367-.671.367-1.2V30.42a.84.84 0 0 1 .84-.84z" }),
        React.createElement("g", { fill: textColor !== null && textColor !== void 0 ? textColor : "#fff" },
            React.createElement("path", { d: "M84.977 24.2a1 1 0 0 1 1-1h.772a1 1 0 0 1 1 1v5.602a1 1 0 0 0 1 1h2.676a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-5.448a1 1 0 0 1-1-1zm8.418 2.212a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1zm1.33-1.84c-.485 0-.877-.135-1.175-.406a1.305 1.305 0 0 1-.449-1.008c0-.401.15-.737.449-1.008.298-.27.69-.406 1.175-.406s.878.13 1.177.392c.298.252.447.579.447.98 0 .42-.149.77-.448 1.05-.298.27-.69.406-1.175.406zm8.001.714c.943 0 1.699.28 2.268.84.579.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.415-1.554-1.246-1.554-.457 0-.826.15-1.106.448-.271.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588a1 1 0 0 1 1-1h1.296c.132 0 .238.107.238.238 0 .214.272.33.449.21a3.518 3.518 0 0 1 1.959-.574zm8.763 5.695a.728.728 0 0 0-1.297.455V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.076c0 .884 1.064 1.333 1.698.716l.727-.708a1 1 0 0 1 .698-.284h.38c.884 0 1.333 1.062.718 1.696l-.896.925a1 1 0 0 0-.068 1.314l1.601 2.035a1 1 0 0 1-.785 1.618h-.68a1 1 0 0 1-.781-.375zm21.091-5.569a1 1 0 0 1 1 1v3.186c0 1.13-.327 2.002-.98 2.618-.644.607-1.554.91-2.73.91-.609 0-1.136-.098-1.583-.295a2.4 2.4 0 0 0-1.841.005c-.441.193-.965.29-1.574.29-1.185 0-2.1-.303-2.744-.91-.635-.616-.952-1.488-.952-2.618v-3.186a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .532.089.924.266 1.176.177.243.453.364.826.364s.653-.126.84-.378.28-.64.28-1.162v-3.004a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .523.093.91.28 1.162s.467.378.84.378.649-.121.826-.364c.177-.252.266-.644.266-1.176v-3.004a1 1 0 0 1 1-1zm2.665 1a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1zm1.33-1.84c-.485 0-.877-.135-1.176-.406a1.304 1.304 0 0 1-.448-1.008c0-.401.149-.737.448-1.008.299-.27.691-.406 1.176-.406s.877.13 1.176.392c.299.252.448.579.448.98 0 .42-.149.77-.448 1.05-.299.27-.691.406-1.176.406zm7.693 7.408c.147.416-.016.887-.442 1.001a4.457 4.457 0 0 1-1.154.145c-.99 0-1.75-.243-2.282-.728-.523-.485-.784-1.209-.784-2.17v-5.51a1 1 0 0 1 1-1h.673c.545 0 .987.442.987.987v.126a.86.86 0 0 0 .861.861c.475 0 .861.386.861.861v.266a.861.861 0 0 1-.861.861.86.86 0 0 0-.861.861v1.66c0 .28.07.494.21.643.14.15.331.224.574.224.434 0 .953.163 1.098.572zm6.214-6.694c.943 0 1.699.28 2.268.84.579.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.415-1.554-1.246-1.554-.457 0-.826.15-1.106.448-.271.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v1.298c0 .457.592.74 1.022.586.392-.14.812-.21 1.26-.21zm13.654 0a3.65 3.65 0 0 1 1.876.49 3.39 3.39 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058s-.168 1.475-.504 2.072a3.509 3.509 0 0 1-1.344 1.372 3.736 3.736 0 0 1-1.876.476c-.85 0-2.114.675-2.114 1.526v.08c0 .544-.44.984-.983.984h-.677a1 1 0 0 1-1-1v-8.304a1 1 0 0 1 1-1h1.332c.112 0 .202.09.202.202 0 .189.252.288.405.178.467-.337 1.079-.506 1.835-.506zm-.56 5.726c.467 0 .85-.159 1.148-.476.299-.327.448-.77.448-1.33s-.149-.999-.448-1.316c-.298-.327-.681-.49-1.148-.49-.466 0-.849.164-1.148.49-.298.317-.448.756-.448 1.316s.15 1.003.448 1.33c.299.317.682.476 1.148.476zm12.543-5.6a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-1.332a.202.202 0 0 1-.202-.202c0-.188-.252-.288-.405-.178-.467.338-1.079.506-1.835.506a3.813 3.813 0 0 1-1.89-.476 3.621 3.621 0 0 1-1.344-1.386c-.327-.597-.49-1.288-.49-2.072s.163-1.47.49-2.058a3.52 3.52 0 0 1 1.344-1.372 3.814 3.814 0 0 1 1.89-.476c.703 0 1.289.161 1.757.484.141.097.357.004.357-.167a.19.19 0 0 1 .191-.19zm-3.214 5.6c.466 0 .849-.159 1.148-.476.298-.327.448-.775.448-1.344 0-.56-.15-.999-.448-1.316-.299-.317-.682-.476-1.148-.476-.467 0-.85.159-1.148.476-.299.317-.448.756-.448 1.316 0 .57.149 1.017.448 1.344.298.317.681.476 1.148.476zm8.684 2.114c-.635 0-1.26-.07-1.876-.21a6.987 6.987 0 0 1-.716-.212c-.46-.165-.623-.694-.426-1.141.24-.55.919-.758 1.492-.58a5.702 5.702 0 0 0 1.61.24c.429 0 .733-.043.91-.127.187-.093.28-.224.28-.392s-.112-.285-.336-.35c-.215-.075-.56-.145-1.036-.21a10.494 10.494 0 0 1-1.554-.294 2.39 2.39 0 0 1-1.092-.672c-.308-.327-.462-.784-.462-1.372 0-.485.145-.915.434-1.288.289-.383.709-.681 1.26-.896.56-.224 1.227-.336 2.002-.336a8.06 8.06 0 0 1 1.638.168c.189.04.367.084.534.134.485.147.668.696.463 1.16-.235.53-.875.733-1.435.582a4.537 4.537 0 0 0-1.186-.154c-.42 0-.728.051-.924.154-.196.093-.294.22-.294.378 0 .177.107.303.322.378.215.065.569.135 1.064.21.625.093 1.143.2 1.554.322a2.3 2.3 0 0 1 1.064.672c.308.317.462.765.462 1.344 0 .476-.145.905-.434 1.288-.289.373-.719.667-1.288.882-.56.215-1.237.322-2.03.322zm9.672-7.84a3.74 3.74 0 0 1 1.876.476 3.39 3.39 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058s-.168 1.475-.504 2.072a3.484 3.484 0 0 1-1.344 1.386 3.736 3.736 0 0 1-1.876.476c-.756 0-1.368-.168-1.835-.506-.153-.11-.405-.01-.405.178 0 .112-.09.202-.202.202h-1.332a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v.14c0 .849 1.266 1.534 2.114 1.534zm-.56 5.726c.467 0 .85-.159 1.148-.476.299-.327.448-.775.448-1.344 0-.56-.149-.999-.448-1.316-.298-.317-.681-.476-1.148-.476-.466 0-.849.159-1.148.476-.298.317-.448.756-.448 1.316 0 .57.15 1.017.448 1.344.299.317.682.476 1.148.476zm12.501-5.6a1 1 0 0 1 1 1v5.202c0 1.41-.378 2.464-1.134 3.164-.747.71-1.825 1.064-3.234 1.064a8.18 8.18 0 0 1-2.072-.252 5.49 5.49 0 0 1-.887-.314c-.447-.204-.57-.75-.344-1.186.293-.566 1.057-.72 1.664-.525l.029.01c.457.148.91.223 1.358.223.672 0 1.166-.154 1.484-.462.317-.308.476-.765.476-1.372 0-.063-.077-.097-.125-.055-.547.466-1.215.7-2.003.7-.98 0-1.764-.29-2.352-.869-.579-.579-.868-1.447-.868-2.604v-2.724a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.29c0 .579.107.999.322 1.26.214.261.527.392.938.392.42 0 .76-.15 1.022-.448.27-.299.406-.747.406-1.344v-2.15a1 1 0 0 1 1-1z" }))));
}
var DefaultButton = {
    login: LoginWithPasby,
    identify: IdentifyWithPasby,
    link: LinkWithPasby,
};
var Button = function (_a) {
    var type = _a.type, props = __rest(_a, ["type"]);
    var Component = DefaultButton[type];
    return React.createElement(Component, __assign({}, props));
};

/* eslint-disable */
/**
 * remove trailing slash from string
 */
var removeTrailingSlash = function (url) {
    if (url === undefined || url === null)
        return undefined;
    return url.replace(/\/$/, "");
};
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

var baseStyle = {
    original: {
        logoBgk: '#fff',
        logo: '#dd3e3e',
        text: '#fff',
        bgk: '#dd3e3e',
    }, light: {
        logoBgk: '#dd3e3e',
        logo: '#fff',
        text: '#dd3e3e',
        bgk: '#fff',
    }, dark: {
        logoBgk: '#dd3e3e',
        logo: '#fff',
        text: '#fff',
        bgk: '#2D3131',
    },
};
var variantStyle = {
    original: 'bg-[#dd3e3e]',
    dark: 'bg-[#2D3131]',
    light: 'bg-[#fff]',
};
function Spinner(_a) {
    var className = _a.className;
    return (React__default.createElement("svg", { "aria-hidden": "true", role: "status", className: clsx("inline w-4 h-4 me-3 text-gray-200 animate-spin", className), viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
        React__default.createElement("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "#2D3131" })));
}
function AuthenticationButton(_a) {
    var _this = this;
    var type = _a.type, style = _a.style, className = _a.className, onClick = _a.onClick;
    var _b = useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var handleClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, 6, 7]);
                    if (!onClick) return [3 /*break*/, 3];
                    return [4 /*yield*/, onClick()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, delay(2000)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 7];
                case 6:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (React__default.createElement("button", { onClick: handleClick, className: clsx('relative flex justify-center items-center rounded-lg gap-2', variantStyle[style], 'hover:brightness-125 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2', isLoading ? 'brightness-75' : '', className) },
        isLoading ?
            React__default.createElement(Spinner, { className: "absolute right-2 w-5 h-5" })
            : null,
        React__default.createElement(Button, { type: type, logoBgk: baseStyle[style].logoBgk, logoTextColor: baseStyle[style].logo, textColor: baseStyle[style].text, background: baseStyle[style].bgk })));
}

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

var isDebugMode = process.env.PASBY_DEBUG_MODE === 'true';
// We need to use NEXT_PUBLIC for frontend vars
var PASBY_AUTH_API_PATH = removeTrailingSlash(process.env.NEXT_PUBLIC_PASBY_AUTH_API_PATH) ||
    removeTrailingSlash(process.env.PASBY_AUTH_API_PATH) ||
    '/api/eid';
var PASBY_CLIENT_SECRET = process.env.PASBY_CLIENT_SECRET;
var PASBY_CONSUMER_KEY = process.env.PASBY_CONSUMER_KEY;
var PASBY_CLIENT_ID = process.env.PASBY_CLIENT_ID;
var PASBY_CONSUMER = process.env.PASBY_CONSUMER;
var PASBY_POST_LOGOUT_REDIRECT = removeTrailingSlash(process.env.PASBY_POST_LOGOUT_REDIRECT);
var PASBY_REDIRECT_URI = removeTrailingSlash(process.env.PASBY_REDIRECT_URI);
var PASBY_POST_LOGIN_FALLBACK = removeTrailingSlash(process.env.PASBY_POST_LOGIN_FALLBACK);
var PASBY_HOST_URL = removeTrailingSlash(process.env.PASBY_HOST_URL);
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
    redirectUri: PASBY_REDIRECT_URI,
    redirectRoutes: {
        callback: "".concat(PASBY_AUTH_API_PATH, "/callback")
    },
};

var DEFAULT_ERROR = {
    status: 'failed',
    reason: 'Connection is improper and thus has been interrupted',
    type: 'unknown_error',
};

var api = /** @class */ (function () {
    function api() {
    }
    api.request = function (url, method, param) {
        return __awaiter(this, void 0, void 0, function () {
            var axiosOptions, response, error_1, errorResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
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
        });
    };
    return api;
}());
var callback = function (url, method, options) { return __awaiter(void 0, void 0, void 0, function () {
    var response, status, reason;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api.request(url, method, options)];
            case 1:
                response = _a.sent();
                status = response.status, reason = response.reason;
                if (status !== 'successful' || !response.data) {
                    throw new Error(reason !== null && reason !== void 0 ? reason : 'Request was unsuccessful');
                }
                console.log("Response data --- ".concat(JSON.stringify(response.data)));
                return [2 /*return*/, response.data];
        }
    });
}); };

function envMissing(env) {
    return "The environment variable '".concat(env, "' is required. Set it in your .env file");
}

function loginLink(options) {
    return __awaiter(this, void 0, void 0, function () {
        var consumerKey, secret, redirectUri, challenge, response, link;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    consumerKey = config.consumerKey, secret = config.secret, redirectUri = config.redirectUri;
                    if (!secret) {
                        throw new Error(envMissing("PASBY_CLIENT_SECRET"));
                    }
                    if (!redirectUri) {
                        throw new Error(envMissing("PASBY_REDIRECT_URI"));
                    }
                    return [4 /*yield*/, pkceChallenge()];
                case 1:
                    challenge = _b.sent();
                    return [4 /*yield*/, callback(LOGIN_PATH, 'POST', {
                            headers: {
                                'Content-Type': 'application/json',
                                'x-api-key': consumerKey,
                                'x-access-secret': secret,
                            },
                            body: {
                                callback: "".concat(redirectUri),
                                action: options.action,
                                claims: (_a = options.claims) !== null && _a !== void 0 ? _a : [],
                                challenge: challenge.challenge,
                                payload: options.payload
                            },
                        })];
                case 2:
                    response = _b.sent();
                    link = response.link;
                    if (!link)
                        throw new Error("Communication misconfigured");
                    return [2 /*return*/, {
                            url: link,
                            pkce_verifier: challenge.verifier,
                        }];
            }
        });
    });
}

export { AuthenticationButton, LOGIN_PATH, PasbyProvider, loginLink, pkceChallenge, usePasby };
//# sourceMappingURL=index.js.map
