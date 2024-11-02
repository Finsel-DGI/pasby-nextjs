import require$$0 from 'axios';
import { Buffer as Buffer$1 } from 'node:buffer';
import * as crypto$1 from 'node:crypto';
import { KeyObject, createPrivateKey, createPublicKey, constants, createSecretKey } from 'node:crypto';
import * as util from 'node:util';
import { promisify } from 'node:util';
import require$$0$1 from 'react';

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


function __awaiter$5(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$2(thisArg, body) {
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

var removeTrailingSlash$1 = {};

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

	
} (removeTrailingSlash$1));

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
	const _removetrailingslash = removeTrailingSlash$1;
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
	    },
	    stringifyCookie: function() {
	        return _cookies.stringifyCookie;
	    }
	});
	const _cookies = cookies;

	
} (cookies$1));

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
	const _cookies = cookies$1;
	const _nexturl = nextUrl;
	const _utils = utils;
	const _reflect = reflect;
	const _cookies1 = cookies$1;
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
	        const headers = this.headers;
	        const cookies = new _cookies1.ResponseCookies(headers);
	        const cookiesProxy = new Proxy(cookies, {
	            get (target, prop, receiver) {
	                switch(prop){
	                    case "delete":
	                    case "set":
	                        {
	                            return (...args)=>{
	                                const result = Reflect.apply(target[prop], target, args);
	                                const newHeaders = new Headers(headers);
	                                if (result instanceof _cookies1.ResponseCookies) {
	                                    headers.set("x-middleware-set-cookie", result.getAll().map((cookie)=>(0, _cookies.stringifyCookie)(cookie)).join(","));
	                                }
	                                handleMiddlewareField(init, newHeaders);
	                                return result;
	                            };
	                        }
	                    default:
	                        return _reflect.ReflectAdapter.get(target, prop, receiver);
	                }
	            }
	        });
	        this[INTERNALS] = {
	            cookies: cookiesProxy,
	            url: init.url ? new _nexturl.NextURL(init.url, {
	                headers: (0, _utils.toNodeOutgoingHttpHeaders)(headers),
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

var build = {};

var lib = {};

var general = {};

var __awaiter$4 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(general, "__esModule", { value: true });
general.strEnum = general.roundTo = general.getDifferenceInSeconds = general.getDifferenceInMinutes = general.getDifferenceInHours = general.getRandomInteger = general.getMonthName = general.getLastDayOfMonth = general.calculateDaysBetweenTimestamps = general.calculatePercentage = general.obscureString = general.formatDate = general.recordToArray = general.isValidURL = general.getValueByQuery = general.isEven = general.isOdd = general.expiresAt = general.parseInterface = general.unixTimestampToMaxAge = general.getRandomUnixTimestamp = general.formatNumber = general.formatCash = general.formatCurrency = general.getRandomInt = general.removeTrailingSlash = general.generateRandomAlphaNumeric = general.convertUnixToDate = general.unixTimeStampNow = general.convertDateToUnix = general.isThisAWord = general.createInitials = general.delay = void 0;
/**
 * custom delay function
 * @param ms time
 * @returns {Promise<void>}
 */
function delay(ms) {
    return __awaiter$4(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, ms));
    });
}
general.delay = delay;
function createInitials(name, length = 2) {
    const parts = name.split(' ').filter(part => part.length > 0);
    const initials = parts.map(part => part.charAt(0).toUpperCase()).join('');
    return initials.slice(0, length);
}
general.createInitials = createInitials;
function isThisAWord(value) {
    if (!value)
        return;
    return value.length > 1 ? value : undefined;
}
general.isThisAWord = isThisAWord;
/**
 * converts date to unix timestamp
  * @param {Date} date value
 * @return {number} timestamp
 */
function convertDateToUnix(date) {
    return Math.floor(date.getTime() / 1000);
}
general.convertDateToUnix = convertDateToUnix;
/**
 * get unix timestamp of now
 * @return {number} timestamp
 */
function unixTimeStampNow() {
    const now = new Date();
    return Math.floor(now.getTime() / 1000);
}
general.unixTimeStampNow = unixTimeStampNow;
/**
 * converts unix timestamp to date
  * @param {number} timestamp
 * @return {Date} date item
 */
function convertUnixToDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date;
}
general.convertUnixToDate = convertUnixToDate;
/**
 * Random string generator helper
 * @param {number} length
 * @return {string} value
 */
function generateRandomAlphaNumeric(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
general.generateRandomAlphaNumeric = generateRandomAlphaNumeric;
const removeTrailingSlash = function (url) {
    if (url === undefined || url === null)
        return '';
    return url.replace(/\/$/, "");
};
general.removeTrailingSlash = removeTrailingSlash;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
general.getRandomInt = getRandomInt;
/**
* Generates formatted currency string
* @param {number} amount to be formatted
* @param {number} currency value currency
* @return {string} value
*/
function formatCurrency(amount, currency = 'NGN') {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: currency.toUpperCase() }).format(amount);
}
general.formatCurrency = formatCurrency;
function formatCash(value) {
    return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(value);
}
general.formatCash = formatCash;
function formatNumber(amount) {
    return Intl.NumberFormat('en-US').format(amount);
}
general.formatNumber = formatNumber;
function getRandomUnixTimestamp(startYear, endYear) {
    const startDate = new Date(startYear, 0, 1).getTime(); // January 1st of the start year
    const endDate = new Date(endYear, 11, 31, 23, 59, 59).getTime(); // December 31st of the end year
    return Math.floor(Math.random() * (endDate - startDate + 1) + startDate) / 1000;
}
general.getRandomUnixTimestamp = getRandomUnixTimestamp;
function unixTimestampToMaxAge(expirationUnixTimestamp) {
    const currentUnixTimestamp = Math.floor(Date.now() / 1000);
    const maxAge = expirationUnixTimestamp - currentUnixTimestamp;
    return maxAge > 0 ? maxAge : 0;
}
general.unixTimestampToMaxAge = unixTimestampToMaxAge;
function parseInterface(data) {
    return JSON.parse(JSON.stringify(data));
}
general.parseInterface = parseInterface;
function expiresAt(duration, format = 'm') {
    const now = new Date();
    if (format === 'm') {
        now.setMinutes(new Date().getMinutes() + duration);
    }
    else if (format === 'h') {
        now.setHours(new Date().getHours() + duration);
    }
    else {
        now.setSeconds(new Date().getSeconds() + duration);
    }
    return convertDateToUnix(now);
}
general.expiresAt = expiresAt;
function isOdd(num) {
    return num % 2 !== 0;
}
general.isOdd = isOdd;
function isEven(num) {
    return num % 2 === 0;
}
general.isEven = isEven;
function getValueByQuery(obj, query) {
    return query.split('.').reduce((acc, key) => {
        return acc ? acc[key] : undefined;
    }, obj);
}
general.getValueByQuery = getValueByQuery;
function isValidURL(url) {
    // Extract the scheme part of the URL if it exists (e.g., 'myscheme://')
    const schemeMatch = url.match(/^([a-zA-Z][a-zA-Z\d+\-.]*):\/\//);
    const scheme = schemeMatch ? schemeMatch[1] : null;
    // Define the regular expression for a valid URL (http, https, or custom schemes)
    const urlPattern = new RegExp(`^(${scheme ? scheme : 'https?'})` + // Validate HTTP/HTTPS or the detected scheme
        ':\\/\\/' + // ://
        '([\\w-]+(:[\\w-]+)?@)?' + // Optional username:password@
        '((\\d{1,3}\\.){3}\\d{1,3}|([\\w-]+\\.)+[a-zA-Z]{2,})' + // IP address or domain name
        '(\\:\\d+)?' + // Optional port
        '(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?' + // Path
        '(\\?[;&a-zA-Z0-9%_\\+.~#?&=]*)?' + // Query string
        '(\\#[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?$' // Fragment
    );
    return urlPattern.test(url);
}
general.isValidURL = isValidURL;
function recordToArray(record) {
    return Object.values(record);
}
general.recordToArray = recordToArray;
const formatDate = (date) => {
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric', // "2024"
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // Optional: Change this to true if you want 12-hour format
    });
    return `${formattedDate} at ${formattedTime}`;
};
general.formatDate = formatDate;
function obscureString(input) {
    return input.replace(/./g, '•');
}
general.obscureString = obscureString;
function calculatePercentage(amount, percentage) {
    return (amount * percentage) / 100;
}
general.calculatePercentage = calculatePercentage;
function calculateDaysBetweenTimestamps(timestamp1, timestamp2) {
    const secondsInADay = 60 * 60 * 24;
    const differenceInSeconds = Math.abs(timestamp2 - timestamp1); // Get the absolute difference
    const daysDifference = differenceInSeconds / secondsInADay;
    return Math.floor(daysDifference); // Round down to get full days
}
general.calculateDaysBetweenTimestamps = calculateDaysBetweenTimestamps;
/**
 * Gets last day of month
  * @param {number} year
  * @param {number} month
 * @return {Date} date item
 */
function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0);
}
general.getLastDayOfMonth = getLastDayOfMonth;
/**
 * Gets month name
  * @param {number} month
 * @return {string} date item
 */
function getMonthName(month) {
    const date = new Date(2009, month, 10);
    const val = date.toLocaleString('default', { month: 'long' });
    return val;
}
general.getMonthName = getMonthName;
/**
 * Random integer generator helper
 * @param {number} max
 * @return {number} num
 */
function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
general.getRandomInteger = getRandomInteger;
/**
 * Date Helper
 * @param {string} date1
 * @param {string} date2
 * @return {number} value
 */
function getDifferenceInHours(date1, date2) {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    return diffInMs / (1000 * 60 * 60);
}
general.getDifferenceInHours = getDifferenceInHours;
/**
 * Date Helper
 * @param {string} date1
 * @param {string} date2
 * @return {number} value
 */
function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    return diffInMs / (1000 * 60);
}
general.getDifferenceInMinutes = getDifferenceInMinutes;
/**
 * Date Helper
 * @param {string} date1
 * @param {string} date2
 * @return {number} value
 */
function getDifferenceInSeconds(date1, date2) {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    return diffInMs / 1000;
}
general.getDifferenceInSeconds = getDifferenceInSeconds;
/**
 * rounding function
 * @param n the digit
 * @param place number of places to round to
 * @returns {number}
 */
function roundTo(n, place) {
    return Number(n.toFixed(place));
}
general.roundTo = roundTo;
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
general.strEnum = strEnum;

var pkce = {};

var __awaiter$3 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(pkce, "__esModule", { value: true });
pkce.pkceChallenge = void 0;
function generateCodeVerifier() {
    const array = new Uint32Array(56 / 2);
    crypto.getRandomValues(array);
    return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
}
function generateCodeChallenge(codeVerifier) {
    return __awaiter$3(this, void 0, void 0, function* () {
        const encoder = new TextEncoder();
        const data = encoder.encode(codeVerifier);
        const digest = yield crypto.subtle.digest('SHA-256', data);
        const digestArray = Array.from(new Uint8Array(digest));
        return btoa(String.fromCharCode(...digestArray))
            .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    });
}
function pkceChallenge() {
    return __awaiter$3(this, void 0, void 0, function* () {
        const verifier = generateCodeVerifier();
        const code = yield generateCodeChallenge(verifier);
        return {
            verifier: verifier,
            challenge: code
        };
    });
}
pkce.pkceChallenge = pkceChallenge;

var strings = {};

function capitalizeSentence(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}

function allCaps(str) {
  return str.toUpperCase();
}

function capitalizeWords$1(str) {
  const words = str.split(' ');
  const capitalized = words.map((word) => capitalizeSentence(word));
  return capitalized.join(' ');
}

function capitalizeHeadline(str) {
  const words = str.split(' ');
  const nonCapitalized = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'and', 'as', 'at', 'of', 'for', 'by'];

  words.forEach((word, index) => {
    if (nonCapitalized.includes(word) && index !== 0) {
      words[index] = word.toLowerCase();
    } else {
      words[index] = capitalizeSentence(word);
    }
  });

  return words.join(' ');
}

function removeExtraSpaces(str) {
  return str.trim().replace(/\s+/g, ' ');
}

function kebabCase(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}

function snakeCase$1(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}

function camelCase$1(str) {
  const words = str.split(' ');
  const camel = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return capitalizeSentence(word);
  });
  return camel.join('');
}

function pascalCase(str) {
  const words = str.split(' ');
  const pascal = words.map((word) => capitalizeSentence(word));
  return pascal.join('');
}

function shift(str) {
  return str.slice(1) + str.charAt(0);
}

function makeHashTag(str) {
  const words = str.split(' ');
  const longest = words.sort((a, b) => b.length - a.length).slice(0, 3);
  const hashTags = longest.map((word) => `#${word.toLowerCase()}`);
  return hashTags.join(' ');
}

function isEmpty(str) {
  const breaks = ['\n', '\r', '\t'];
  const trimmed = breaks.includes(str) ? str.replace(/\n/g, '').trim() : str.trim();
  return trimmed.length === 0;
}

var stringItOn = {
  capitalizeSentence,
  allCaps,
  capitalizeWords: capitalizeWords$1,
  capitalizeHeadline,
  removeExtraSpaces,
  kebabCase,
  snakeCase: snakeCase$1,
  camelCase: camelCase$1,
  pascalCase,
  shift,
  makeHashTag,
  isEmpty,
};

Object.defineProperty(strings, "__esModule", { value: true });
strings.headlineOnly = strings.capitalizeWords = strings.camelCase = strings.snakeCase = strings.obscureNIN = void 0;
const stringify = stringItOn;
function obscureNIN(input) {
    // If the string is too short, return it as is
    if (input.length < 11) {
        return input;
    }
    // Get the first 4 characters
    const start = input.slice(0, 2);
    // Get the last 2 characters
    const end = input.slice(-3);
    // Obscure the middle part
    const obscuredPart = '*'.repeat(input.length - 5);
    // Combine the parts
    return `${start}${obscuredPart}${end}`;
}
strings.obscureNIN = obscureNIN;
/**
 * i.e hello world to hello_world
 * @param value string value
 */
function snakeCase(value) {
    return stringify.snakeCase(value);
}
strings.snakeCase = snakeCase;
/**
 * i.e hello world to helloWorld
 * @param value string value
 */
function camelCase(value) {
    return stringify.camelCase(value);
}
strings.camelCase = camelCase;
/**
 * i.e hello world to Hello World
 * @param value string value
 */
function capitalizeWords(value) {
    return stringify.capitalizeWords(value);
}
strings.capitalizeWords = capitalizeWords;
/**
 * i.e the hello in for the world to The Hello in for the World
 * @param value string value
 */
function headlineOnly(value) {
    return stringify.capitalizeHeadline(value);
}
strings.headlineOnly = headlineOnly;

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(general, exports);
	__exportStar(pkce, exports);
	__exportStar(strings, exports);
	
} (lib));

var types$1 = {};

Object.defineProperty(types$1, "__esModule", { value: true });
types$1.DEFAULT_ERROR = void 0;
types$1.DEFAULT_ERROR = {
    status: 'failed',
    reason: 'Connection is improper and thus has been interrupted',
    type: 'unknown_error',
};

var countries = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.countries = exports.africanCountries = exports.findCountry = void 0;
	function findCountry(code) {
	    return exports.countries.find(item => item.code === code);
	}
	exports.findCountry = findCountry;
	function africanCountries() {
	    return exports.countries.filter(item => african.includes(item.name.toLowerCase()));
	}
	exports.africanCountries = africanCountries;
	const african = [
	    "algeria", "angola", "benin", "botswana", "burkina faso", "burundi",
	    "cape verde", "cameroon", "central african republic", "chad", "comoros",
	    "congo", "congo (democratic republic)", "djibouti", "egypt", "equatorial guinea",
	    "eritrea", "eswatini", "ethiopia", "gabon", "gambia", "ghana", "guinea", "guinea-bissau",
	    "ivory coast", "kenya", "lesotho", "liberia", "libya", "madagascar", "malawi", "mali",
	    "mauritania", "mauritius", "morocco", "mozambique", "namibia", "niger", "nigeria", "rwanda",
	    "sao tome and principe", "senegal", "seychelles", "sierra leone", "somalia", "south africa",
	    "south sudan", "sudan", "tanzania", "togo", "tunisia", "uganda", "zambia", "zimbabwe"
	];
	exports.countries = [
	    {
	        "name": "Afghanistan",
	        "dial": "+93",
	        "code": "AF"
	    },
	    {
	        "name": "Aland Islands",
	        "dial": "+358",
	        "code": "AX"
	    },
	    {
	        "name": "Albania",
	        "dial": "+355",
	        "code": "AL"
	    },
	    {
	        "name": "Algeria",
	        "dial": "+213",
	        "code": "DZ"
	    },
	    {
	        "name": "AmericanSamoa",
	        "dial": "+1684",
	        "code": "AS"
	    },
	    {
	        "name": "Andorra",
	        "dial": "+376",
	        "code": "AD"
	    },
	    {
	        "name": "Angola",
	        "dial": "+244",
	        "code": "AO"
	    },
	    {
	        "name": "Anguilla",
	        "dial": "+1264",
	        "code": "AI"
	    },
	    {
	        "name": "Antarctica",
	        "dial": "+672",
	        "code": "AQ"
	    },
	    {
	        "name": "Antigua and Barbuda",
	        "dial": "+1268",
	        "code": "AG"
	    },
	    {
	        "name": "Argentina",
	        "dial": "+54",
	        "code": "AR"
	    },
	    {
	        "name": "Armenia",
	        "dial": "+374",
	        "code": "AM"
	    },
	    {
	        "name": "Aruba",
	        "dial": "+297",
	        "code": "AW"
	    },
	    {
	        "name": "Australia",
	        "dial": "+61",
	        "code": "AU"
	    },
	    {
	        "name": "Austria",
	        "dial": "+43",
	        "code": "AT"
	    },
	    {
	        "name": "Azerbaijan",
	        "dial": "+994",
	        "code": "AZ"
	    },
	    {
	        "name": "Bahamas",
	        "dial": "+1242",
	        "code": "BS"
	    },
	    {
	        "name": "Bahrain",
	        "dial": "+973",
	        "code": "BH"
	    },
	    {
	        "name": "Bangladesh",
	        "dial": "+880",
	        "code": "BD"
	    },
	    {
	        "name": "Barbados",
	        "dial": "+1246",
	        "code": "BB"
	    },
	    {
	        "name": "Belarus",
	        "dial": "+375",
	        "code": "BY"
	    },
	    {
	        "name": "Belgium",
	        "dial": "+32",
	        "code": "BE"
	    },
	    {
	        "name": "Belize",
	        "dial": "+501",
	        "code": "BZ"
	    },
	    {
	        "name": "Benin",
	        "dial": "+229",
	        "code": "BJ"
	    },
	    {
	        "name": "Bermuda",
	        "dial": "+1441",
	        "code": "BM"
	    },
	    {
	        "name": "Bhutan",
	        "dial": "+975",
	        "code": "BT"
	    },
	    {
	        "name": "Bolivia, Plurinational State of",
	        "dial": "+591",
	        "code": "BO"
	    },
	    {
	        "name": "Bosnia and Herzegovina",
	        "dial": "+387",
	        "code": "BA"
	    },
	    {
	        "name": "Botswana",
	        "dial": "+267",
	        "code": "BW"
	    },
	    {
	        "name": "Brazil",
	        "dial": "+55",
	        "code": "BR"
	    },
	    {
	        "name": "British Indian Ocean Territory",
	        "dial": "+246",
	        "code": "IO"
	    },
	    {
	        "name": "Brunei Darussalam",
	        "dial": "+673",
	        "code": "BN"
	    },
	    {
	        "name": "Bulgaria",
	        "dial": "+359",
	        "code": "BG"
	    },
	    {
	        "name": "Burkina Faso",
	        "dial": "+226",
	        "code": "BF"
	    },
	    {
	        "name": "Burundi",
	        "dial": "+257",
	        "code": "BI"
	    },
	    {
	        "name": "Cambodia",
	        "dial": "+855",
	        "code": "KH"
	    },
	    {
	        "name": "Cameroon",
	        "dial": "+237",
	        "code": "CM"
	    },
	    {
	        "name": "Canada",
	        "dial": "+1",
	        "code": "CA"
	    },
	    {
	        "name": "Cape Verde",
	        "dial": "+238",
	        "code": "CV"
	    },
	    {
	        "name": "Cayman Islands",
	        "dial": "+ 345",
	        "code": "KY"
	    },
	    {
	        "name": "Central African Republic",
	        "dial": "+236",
	        "code": "CF"
	    },
	    {
	        "name": "Chad",
	        "dial": "+235",
	        "code": "TD"
	    },
	    {
	        "name": "Chile",
	        "dial": "+56",
	        "code": "CL"
	    },
	    {
	        "name": "China",
	        "dial": "+86",
	        "code": "CN"
	    },
	    {
	        "name": "Christmas Island",
	        "dial": "+61",
	        "code": "CX"
	    },
	    {
	        "name": "Cocos (Keeling) Islands",
	        "dial": "+61",
	        "code": "CC"
	    },
	    {
	        "name": "Colombia",
	        "dial": "+57",
	        "code": "CO"
	    },
	    {
	        "name": "Comoros",
	        "dial": "+269",
	        "code": "KM"
	    },
	    {
	        "name": "Congo",
	        "dial": "+242",
	        "code": "CG"
	    },
	    {
	        "name": "Congo, The Democratic Republic of the Congo",
	        "dial": "+243",
	        "code": "CD"
	    },
	    {
	        "name": "Cook Islands",
	        "dial": "+682",
	        "code": "CK"
	    },
	    {
	        "name": "Costa Rica",
	        "dial": "+506",
	        "code": "CR"
	    },
	    {
	        "name": "Cote d'Ivoire",
	        "dial": "+225",
	        "code": "CI"
	    },
	    {
	        "name": "Croatia",
	        "dial": "+385",
	        "code": "HR"
	    },
	    {
	        "name": "Cuba",
	        "dial": "+53",
	        "code": "CU"
	    },
	    {
	        "name": "Cyprus",
	        "dial": "+357",
	        "code": "CY"
	    },
	    {
	        "name": "Czech Republic",
	        "dial": "+420",
	        "code": "CZ"
	    },
	    {
	        "name": "Denmark",
	        "dial": "+45",
	        "code": "DK"
	    },
	    {
	        "name": "Djibouti",
	        "dial": "+253",
	        "code": "DJ"
	    },
	    {
	        "name": "Dominica",
	        "dial": "+1767",
	        "code": "DM"
	    },
	    {
	        "name": "Dominican Republic",
	        "dial": "+1849",
	        "code": "DO"
	    },
	    {
	        "name": "Ecuador",
	        "dial": "+593",
	        "code": "EC"
	    },
	    {
	        "name": "Egypt",
	        "dial": "+20",
	        "code": "EG"
	    },
	    {
	        "name": "El Salvador",
	        "dial": "+503",
	        "code": "SV"
	    },
	    {
	        "name": "Equatorial Guinea",
	        "dial": "+240",
	        "code": "GQ"
	    },
	    {
	        "name": "Eritrea",
	        "dial": "+291",
	        "code": "ER"
	    },
	    {
	        "name": "Estonia",
	        "dial": "+372",
	        "code": "EE"
	    },
	    {
	        "name": "Ethiopia",
	        "dial": "+251",
	        "code": "ET"
	    },
	    {
	        "name": "Falkland Islands (Malvinas)",
	        "dial": "+500",
	        "code": "FK"
	    },
	    {
	        "name": "Faroe Islands",
	        "dial": "+298",
	        "code": "FO"
	    },
	    {
	        "name": "Fiji",
	        "dial": "+679",
	        "code": "FJ"
	    },
	    {
	        "name": "Finland",
	        "dial": "+358",
	        "code": "FI"
	    },
	    {
	        "name": "France",
	        "dial": "+33",
	        "code": "FR"
	    },
	    {
	        "name": "French Guiana",
	        "dial": "+594",
	        "code": "GF"
	    },
	    {
	        "name": "French Polynesia",
	        "dial": "+689",
	        "code": "PF"
	    },
	    {
	        "name": "Gabon",
	        "dial": "+241",
	        "code": "GA"
	    },
	    {
	        "name": "Gambia",
	        "dial": "+220",
	        "code": "GM"
	    },
	    {
	        "name": "Georgia",
	        "dial": "+995",
	        "code": "GE"
	    },
	    {
	        "name": "Germany",
	        "dial": "+49",
	        "code": "DE"
	    },
	    {
	        "name": "Ghana",
	        "dial": "+233",
	        "code": "GH"
	    },
	    {
	        "name": "Gibraltar",
	        "dial": "+350",
	        "code": "GI"
	    },
	    {
	        "name": "Greece",
	        "dial": "+30",
	        "code": "GR"
	    },
	    {
	        "name": "Greenland",
	        "dial": "+299",
	        "code": "GL"
	    },
	    {
	        "name": "Grenada",
	        "dial": "+1473",
	        "code": "GD"
	    },
	    {
	        "name": "Guadeloupe",
	        "dial": "+590",
	        "code": "GP"
	    },
	    {
	        "name": "Guam",
	        "dial": "+1671",
	        "code": "GU"
	    },
	    {
	        "name": "Guatemala",
	        "dial": "+502",
	        "code": "GT"
	    },
	    {
	        "name": "Guernsey",
	        "dial": "+44",
	        "code": "GG"
	    },
	    {
	        "name": "Guinea",
	        "dial": "+224",
	        "code": "GN"
	    },
	    {
	        "name": "Guinea-Bissau",
	        "dial": "+245",
	        "code": "GW"
	    },
	    {
	        "name": "Guyana",
	        "dial": "+595",
	        "code": "GY"
	    },
	    {
	        "name": "Haiti",
	        "dial": "+509",
	        "code": "HT"
	    },
	    {
	        "name": "Holy See (Vatican City State)",
	        "dial": "+379",
	        "code": "VA"
	    },
	    {
	        "name": "Honduras",
	        "dial": "+504",
	        "code": "HN"
	    },
	    {
	        "name": "Hong Kong",
	        "dial": "+852",
	        "code": "HK"
	    },
	    {
	        "name": "Hungary",
	        "dial": "+36",
	        "code": "HU"
	    },
	    {
	        "name": "Iceland",
	        "dial": "+354",
	        "code": "IS"
	    },
	    {
	        "name": "India",
	        "dial": "+91",
	        "code": "IN"
	    },
	    {
	        "name": "Indonesia",
	        "dial": "+62",
	        "code": "ID"
	    },
	    {
	        "name": "Iran, Islamic Republic of Persian Gulf",
	        "dial": "+98",
	        "code": "IR"
	    },
	    {
	        "name": "Iraq",
	        "dial": "+964",
	        "code": "IQ"
	    },
	    {
	        "name": "Ireland",
	        "dial": "+353",
	        "code": "IE"
	    },
	    {
	        "name": "Isle of Man",
	        "dial": "+44",
	        "code": "IM"
	    },
	    {
	        "name": "Israel",
	        "dial": "+972",
	        "code": "IL"
	    },
	    {
	        "name": "Italy",
	        "dial": "+39",
	        "code": "IT"
	    },
	    {
	        "name": "Jamaica",
	        "dial": "+1876",
	        "code": "JM"
	    },
	    {
	        "name": "Japan",
	        "dial": "+81",
	        "code": "JP"
	    },
	    {
	        "name": "Jersey",
	        "dial": "+44",
	        "code": "JE"
	    },
	    {
	        "name": "Jordan",
	        "dial": "+962",
	        "code": "JO"
	    },
	    {
	        "name": "Kazakhstan",
	        "dial": "+77",
	        "code": "KZ"
	    },
	    {
	        "name": "Kenya",
	        "dial": "+254",
	        "code": "KE"
	    },
	    {
	        "name": "Kiribati",
	        "dial": "+686",
	        "code": "KI"
	    },
	    {
	        "name": "Korea, Democratic People's Republic of Korea",
	        "dial": "+850",
	        "code": "KP"
	    },
	    {
	        "name": "Korea, Republic of South Korea",
	        "dial": "+82",
	        "code": "KR"
	    },
	    {
	        "name": "Kuwait",
	        "dial": "+965",
	        "code": "KW"
	    },
	    {
	        "name": "Kyrgyzstan",
	        "dial": "+996",
	        "code": "KG"
	    },
	    {
	        "name": "Laos",
	        "dial": "+856",
	        "code": "LA"
	    },
	    {
	        "name": "Latvia",
	        "dial": "+371",
	        "code": "LV"
	    },
	    {
	        "name": "Lebanon",
	        "dial": "+961",
	        "code": "LB"
	    },
	    {
	        "name": "Lesotho",
	        "dial": "+266",
	        "code": "LS"
	    },
	    {
	        "name": "Liberia",
	        "dial": "+231",
	        "code": "LR"
	    },
	    {
	        "name": "Libyan Arab Jamahiriya",
	        "dial": "+218",
	        "code": "LY"
	    },
	    {
	        "name": "Liechtenstein",
	        "dial": "+423",
	        "code": "LI"
	    },
	    {
	        "name": "Lithuania",
	        "dial": "+370",
	        "code": "LT"
	    },
	    {
	        "name": "Luxembourg",
	        "dial": "+352",
	        "code": "LU"
	    },
	    {
	        "name": "Macao",
	        "dial": "+853",
	        "code": "MO"
	    },
	    {
	        "name": "Macedonia",
	        "dial": "+389",
	        "code": "MK"
	    },
	    {
	        "name": "Madagascar",
	        "dial": "+261",
	        "code": "MG"
	    },
	    {
	        "name": "Malawi",
	        "dial": "+265",
	        "code": "MW"
	    },
	    {
	        "name": "Malaysia",
	        "dial": "+60",
	        "code": "MY"
	    },
	    {
	        "name": "Maldives",
	        "dial": "+960",
	        "code": "MV"
	    },
	    {
	        "name": "Mali",
	        "dial": "+223",
	        "code": "ML"
	    },
	    {
	        "name": "Malta",
	        "dial": "+356",
	        "code": "MT"
	    },
	    {
	        "name": "Marshall Islands",
	        "dial": "+692",
	        "code": "MH"
	    },
	    {
	        "name": "Martinique",
	        "dial": "+596",
	        "code": "MQ"
	    },
	    {
	        "name": "Mauritania",
	        "dial": "+222",
	        "code": "MR"
	    },
	    {
	        "name": "Mauritius",
	        "dial": "+230",
	        "code": "MU"
	    },
	    {
	        "name": "Mayotte",
	        "dial": "+262",
	        "code": "YT"
	    },
	    {
	        "name": "Mexico",
	        "dial": "+52",
	        "code": "MX"
	    },
	    {
	        "name": "Micronesia, Federated States of Micronesia",
	        "dial": "+691",
	        "code": "FM"
	    },
	    {
	        "name": "Moldova",
	        "dial": "+373",
	        "code": "MD"
	    },
	    {
	        "name": "Monaco",
	        "dial": "+377",
	        "code": "MC"
	    },
	    {
	        "name": "Mongolia",
	        "dial": "+976",
	        "code": "MN"
	    },
	    {
	        "name": "Montenegro",
	        "dial": "+382",
	        "code": "ME"
	    },
	    {
	        "name": "Montserrat",
	        "dial": "+1664",
	        "code": "MS"
	    },
	    {
	        "name": "Morocco",
	        "dial": "+212",
	        "code": "MA"
	    },
	    {
	        "name": "Mozambique",
	        "dial": "+258",
	        "code": "MZ"
	    },
	    {
	        "name": "Myanmar",
	        "dial": "+95",
	        "code": "MM"
	    },
	    {
	        "name": "Namibia",
	        "dial": "+264",
	        "code": "NA"
	    },
	    {
	        "name": "Nauru",
	        "dial": "+674",
	        "code": "NR"
	    },
	    {
	        "name": "Nepal",
	        "dial": "+977",
	        "code": "NP"
	    },
	    {
	        "name": "Netherlands",
	        "dial": "+31",
	        "code": "NL"
	    },
	    {
	        "name": "Netherlands Antilles",
	        "dial": "+599",
	        "code": "AN"
	    },
	    {
	        "name": "New Caledonia",
	        "dial": "+687",
	        "code": "NC"
	    },
	    {
	        "name": "New Zealand",
	        "dial": "+64",
	        "code": "NZ"
	    },
	    {
	        "name": "Nicaragua",
	        "dial": "+505",
	        "code": "NI"
	    },
	    {
	        "name": "Niger",
	        "dial": "+227",
	        "code": "NE"
	    },
	    {
	        "name": "Nigeria",
	        "dial": "+234",
	        "code": "NG"
	    },
	    {
	        "name": "Niue",
	        "dial": "+683",
	        "code": "NU"
	    },
	    {
	        "name": "Norfolk Island",
	        "dial": "+672",
	        "code": "NF"
	    },
	    {
	        "name": "Northern Mariana Islands",
	        "dial": "+1670",
	        "code": "MP"
	    },
	    {
	        "name": "Norway",
	        "dial": "+47",
	        "code": "NO"
	    },
	    {
	        "name": "Oman",
	        "dial": "+968",
	        "code": "OM"
	    },
	    {
	        "name": "Pakistan",
	        "dial": "+92",
	        "code": "PK"
	    },
	    {
	        "name": "Palau",
	        "dial": "+680",
	        "code": "PW"
	    },
	    {
	        "name": "Palestinian Territory, Occupied",
	        "dial": "+970",
	        "code": "PS"
	    },
	    {
	        "name": "Panama",
	        "dial": "+507",
	        "code": "PA"
	    },
	    {
	        "name": "Papua New Guinea",
	        "dial": "+675",
	        "code": "PG"
	    },
	    {
	        "name": "Paraguay",
	        "dial": "+595",
	        "code": "PY"
	    },
	    {
	        "name": "Peru",
	        "dial": "+51",
	        "code": "PE"
	    },
	    {
	        "name": "Philippines",
	        "dial": "+63",
	        "code": "PH"
	    },
	    {
	        "name": "Pitcairn",
	        "dial": "+872",
	        "code": "PN"
	    },
	    {
	        "name": "Poland",
	        "dial": "+48",
	        "code": "PL"
	    },
	    {
	        "name": "Portugal",
	        "dial": "+351",
	        "code": "PT"
	    },
	    {
	        "name": "Puerto Rico",
	        "dial": "+1939",
	        "code": "PR"
	    },
	    {
	        "name": "Qatar",
	        "dial": "+974",
	        "code": "QA"
	    },
	    {
	        "name": "Romania",
	        "dial": "+40",
	        "code": "RO"
	    },
	    {
	        "name": "Russia",
	        "dial": "+7",
	        "code": "RU"
	    },
	    {
	        "name": "Rwanda",
	        "dial": "+250",
	        "code": "RW"
	    },
	    {
	        "name": "Reunion",
	        "dial": "+262",
	        "code": "RE"
	    },
	    {
	        "name": "Saint Barthelemy",
	        "dial": "+590",
	        "code": "BL"
	    },
	    {
	        "name": "Saint Helena, Ascension and Tristan Da Cunha",
	        "dial": "+290",
	        "code": "SH"
	    },
	    {
	        "name": "Saint Kitts and Nevis",
	        "dial": "+1869",
	        "code": "KN"
	    },
	    {
	        "name": "Saint Lucia",
	        "dial": "+1758",
	        "code": "LC"
	    },
	    {
	        "name": "Saint Martin",
	        "dial": "+590",
	        "code": "MF"
	    },
	    {
	        "name": "Saint Pierre and Miquelon",
	        "dial": "+508",
	        "code": "PM"
	    },
	    {
	        "name": "Saint Vincent and the Grenadines",
	        "dial": "+1784",
	        "code": "VC"
	    },
	    {
	        "name": "Samoa",
	        "dial": "+685",
	        "code": "WS"
	    },
	    {
	        "name": "San Marino",
	        "dial": "+378",
	        "code": "SM"
	    },
	    {
	        "name": "Sao Tome and Principe",
	        "dial": "+239",
	        "code": "ST"
	    },
	    {
	        "name": "Saudi Arabia",
	        "dial": "+966",
	        "code": "SA"
	    },
	    {
	        "name": "Senegal",
	        "dial": "+221",
	        "code": "SN"
	    },
	    {
	        "name": "Serbia",
	        "dial": "+381",
	        "code": "RS"
	    },
	    {
	        "name": "Seychelles",
	        "dial": "+248",
	        "code": "SC"
	    },
	    {
	        "name": "Sierra Leone",
	        "dial": "+232",
	        "code": "SL"
	    },
	    {
	        "name": "Singapore",
	        "dial": "+65",
	        "code": "SG"
	    },
	    {
	        "name": "Slovakia",
	        "dial": "+421",
	        "code": "SK"
	    },
	    {
	        "name": "Slovenia",
	        "dial": "+386",
	        "code": "SI"
	    },
	    {
	        "name": "Solomon Islands",
	        "dial": "+677",
	        "code": "SB"
	    },
	    {
	        "name": "Somalia",
	        "dial": "+252",
	        "code": "SO"
	    },
	    {
	        "name": "South Africa",
	        "dial": "+27",
	        "code": "ZA"
	    },
	    {
	        "name": "South Sudan",
	        "dial": "+211",
	        "code": "SS"
	    },
	    {
	        "name": "South Georgia and the South Sandwich Islands",
	        "dial": "+500",
	        "code": "GS"
	    },
	    {
	        "name": "Spain",
	        "dial": "+34",
	        "code": "ES"
	    },
	    {
	        "name": "Sri Lanka",
	        "dial": "+94",
	        "code": "LK"
	    },
	    {
	        "name": "Sudan",
	        "dial": "+249",
	        "code": "SD"
	    },
	    {
	        "name": "Suriname",
	        "dial": "+597",
	        "code": "SR"
	    },
	    {
	        "name": "Svalbard and Jan Mayen",
	        "dial": "+47",
	        "code": "SJ"
	    },
	    {
	        "name": "Swaziland",
	        "dial": "+268",
	        "code": "SZ"
	    },
	    {
	        "name": "Sweden",
	        "dial": "+46",
	        "code": "SE"
	    },
	    {
	        "name": "Switzerland",
	        "dial": "+41",
	        "code": "CH"
	    },
	    {
	        "name": "Syrian Arab Republic",
	        "dial": "+963",
	        "code": "SY"
	    },
	    {
	        "name": "Taiwan",
	        "dial": "+886",
	        "code": "TW"
	    },
	    {
	        "name": "Tajikistan",
	        "dial": "+992",
	        "code": "TJ"
	    },
	    {
	        "name": "Tanzania, United Republic of Tanzania",
	        "dial": "+255",
	        "code": "TZ"
	    },
	    {
	        "name": "Thailand",
	        "dial": "+66",
	        "code": "TH"
	    },
	    {
	        "name": "Timor-Leste",
	        "dial": "+670",
	        "code": "TL"
	    },
	    {
	        "name": "Togo",
	        "dial": "+228",
	        "code": "TG"
	    },
	    {
	        "name": "Tokelau",
	        "dial": "+690",
	        "code": "TK"
	    },
	    {
	        "name": "Tonga",
	        "dial": "+676",
	        "code": "TO"
	    },
	    {
	        "name": "Trinidad and Tobago",
	        "dial": "+1868",
	        "code": "TT"
	    },
	    {
	        "name": "Tunisia",
	        "dial": "+216",
	        "code": "TN"
	    },
	    {
	        "name": "Turkey",
	        "dial": "+90",
	        "code": "TR"
	    },
	    {
	        "name": "Turkmenistan",
	        "dial": "+993",
	        "code": "TM"
	    },
	    {
	        "name": "Turks and Caicos Islands",
	        "dial": "+1649",
	        "code": "TC"
	    },
	    {
	        "name": "Tuvalu",
	        "dial": "+688",
	        "code": "TV"
	    },
	    {
	        "name": "Uganda",
	        "dial": "+256",
	        "code": "UG"
	    },
	    {
	        "name": "Ukraine",
	        "dial": "+380",
	        "code": "UA"
	    },
	    {
	        "name": "United Arab Emirates",
	        "dial": "+971",
	        "code": "AE"
	    },
	    {
	        "name": "United Kingdom",
	        "dial": "+44",
	        "code": "GB"
	    },
	    {
	        "name": "United States of America",
	        "dial": "+1",
	        "code": "US"
	    },
	    {
	        "name": "Uruguay",
	        "dial": "+598",
	        "code": "UY"
	    },
	    {
	        "name": "Uzbekistan",
	        "dial": "+998",
	        "code": "UZ"
	    },
	    {
	        "name": "Vanuatu",
	        "dial": "+678",
	        "code": "VU"
	    },
	    {
	        "name": "Venezuela, Bolivarian Republic of Venezuela",
	        "dial": "+58",
	        "code": "VE"
	    },
	    {
	        "name": "Vietnam",
	        "dial": "+84",
	        "code": "VN"
	    },
	    {
	        "name": "Virgin Islands, British",
	        "dial": "+1284",
	        "code": "VG"
	    },
	    {
	        "name": "Virgin Islands, U.S.",
	        "dial": "+1340",
	        "code": "VI"
	    },
	    {
	        "name": "Wallis and Futuna",
	        "dial": "+681",
	        "code": "WF"
	    },
	    {
	        "name": "Yemen",
	        "dial": "+967",
	        "code": "YE"
	    },
	    {
	        "name": "Zambia",
	        "dial": "+260",
	        "code": "ZM"
	    },
	    {
	        "name": "Zimbabwe",
	        "dial": "+263",
	        "code": "ZW"
	    }
	];
	
} (countries));

var misc = {};

Object.defineProperty(misc, "__esModule", { value: true });
misc.appCategories = misc.industries = void 0;
misc.industries = [
    "Accounting",
    "Airlines/Aviation",
    "Alternative Dispute Resolution",
    "Alternative Medicine",
    "Animation",
    "Apparel & Fashion",
    "Architecture & Planning",
    "Arts & Crafts",
    "Automotive",
    "Aviation & Aerospace",
    "Banking",
    "Biotechnology",
    "Broadcast Media",
    "Building Materials",
    "Business Supplies & Equipment",
    "Capital Markets",
    "Chemicals",
    "Civic & Social Organization",
    "Civil Engineering",
    "Commercial Real Estate",
    "Computer & Network Security",
    "Computer Games",
    "Computer Hardware",
    "Computer Networking",
    "Computer Software",
    "Construction",
    "Consumer Electronics",
    "Consumer Goods",
    "Consumer Services",
    "Cosmetics",
    "Dairy",
    "Defense & Space",
    "Design",
    "Education Management",
    "E-learning",
    "Electrical & Electronic Manufacturing",
    "Entertainment",
    "Environmental Services",
    "Events Services",
    "Executive Office",
    "Facilities Services",
    "Farming",
    "Financial Services",
    "Fine Art",
    "Fishery",
    "Food & Beverages",
    "Food Production",
    "Fundraising",
    "Furniture",
    "Gambling & Casinos",
    "Glass, Ceramics & Concrete",
    "Government Administration",
    "Government Relations",
    "Graphic Design",
    "Health, Wellness & Fitness",
    "Higher Education",
    "Hospital & Health Care",
    "Hospitality",
    "Human Resources",
    "Import & Export",
    "Individual & Family Services",
    "Industrial Automation",
    "Information Services",
    "Information Technology & Services",
    "Insurance",
    "International Affairs",
    "International Trade & Development",
    "Internet",
    "Investment Banking/Venture",
    "Investment Management",
    "Judiciary",
    "Law Enforcement",
    "Law Practice",
    "Legal Services",
    "Legislative Office",
    "Leisure & Travel",
    "Libraries",
    "Logistics & Supply Chain",
    "Luxury Goods & Jewelry",
    "Machinery",
    "Management Consulting",
    "Maritime",
    "Marketing & Advertising",
    "Market Research",
    "Mechanical or Industrial Engineering",
    "Media Production",
    "Medical Device",
    "Medical Practice",
    "Mental Health Care",
    "Military",
    "Mining & Metals",
    "Motion Pictures & Film",
    "Museums & Institutions",
    "Music",
    "Nanotechnology",
    "Newspapers",
    "Nonprofit Organization Management",
    "Oil & Energy",
    "Online Publishing",
    "Outsourcing/Offshoring",
    "Package/Freight Delivery",
    "Packaging & Containers",
    "Paper & Forest Products",
    "Performing Arts",
    "Pharmaceuticals",
    "Philanthropy",
    "Photography",
    "Plastics",
    "Political Organization",
    "Primary/Secondary",
    "Printing",
    "Professional Training",
    "Program Development",
    "Public Policy",
    "Public Relations",
    "Public Safety",
    "Publishing",
    "Railroad Manufacture",
    "Ranching",
    "Real Estate",
    "Recreational",
    "Facilities & Services",
    "Religious Institutions",
    "Renewables & Environment",
    "Research",
    "Restaurants",
    "Retail",
    "Security & Investigations",
    "Semiconductors",
    "Shipbuilding",
    "Sporting Goods",
    "Sports",
    "Staffing & Recruiting",
    "Supermarkets",
    "Telecommunications",
    "Textiles",
    "Think Tanks",
    "Tobacco",
    "Translation & Localization",
    "Transportation/Trucking/Railroad",
    "Utilities",
    "Venture Capital",
    "Veterinary",
    "Warehousing",
    "Wholesale",
    "Wine & Spirits",
    "Wireless",
    "Writing & Editing"
];
misc.appCategories = [
    {
        "key": "APPLICATION",
        "name": "All apps"
    },
    {
        "key": "GAME",
        "name": "All games"
    },
    {
        "key": "ART_AND_DESIGN",
        "name": "Art & Design"
    },
    {
        "key": "AUTO_AND_VEHICLES",
        "name": "Auto & Vehicles"
    },
    {
        "key": "BEAUTY",
        "name": "Beauty"
    },
    {
        "key": "BOOKS_AND_REFERENCE",
        "name": "Books & Reference"
    },
    {
        "key": "BUSINESS",
        "name": "Business"
    },
    {
        "key": "COMICS",
        "name": "Comics"
    },
    {
        "key": "COMMUNICATION",
        "name": "Communication"
    },
    {
        "key": "DATING",
        "name": "Dating"
    },
    {
        "key": "EDUCATION",
        "name": "Education"
    },
    {
        "key": "ENTERTAINMENT",
        "name": "Entertainment"
    },
    {
        "key": "EVENTS",
        "name": "Events"
    },
    {
        "key": "FINANCE",
        "name": "Finance"
    },
    {
        "key": "FOOD_AND_DRINK",
        "name": "Food & Drink"
    },
    {
        "key": "HEALTH_AND_FITNESS",
        "name": "Health & Fitness"
    },
    {
        "key": "HOUSE_AND_HOME",
        "name": "House & Home"
    },
    {
        "key": "LIFESTYLE",
        "name": "Lifestyle"
    },
    {
        "key": "MAPS_AND_NAVIGATION",
        "name": "Maps & Navigation"
    },
    {
        "key": "MEDICAL",
        "name": "Medical"
    },
    {
        "key": "MUSIC_AND_AUDIO",
        "name": "Music & Audio"
    },
    {
        "key": "NEWS_AND_MAGAZINES",
        "name": "News & Magazines"
    },
    {
        "key": "PARENTING",
        "name": "Parenting"
    },
    {
        "key": "PERSONALIZATION",
        "name": "Personalization"
    },
    {
        "key": "PHOTOGRAPHY",
        "name": "Photography"
    },
    {
        "key": "PRODUCTIVITY",
        "name": "Productivity"
    },
    {
        "key": "SHOPPING",
        "name": "Shopping"
    },
    {
        "key": "SOCIAL",
        "name": "Social"
    },
    {
        "key": "SPORTS",
        "name": "Sports"
    },
    {
        "key": "TOOLS",
        "name": "Tools"
    },
    {
        "key": "TRAVEL_AND_LOCAL",
        "name": "Travel & Local"
    },
    {
        "key": "VIDEO_PLAYERS",
        "name": "Video Players & Editors"
    },
    {
        "key": "WEATHER",
        "name": "Weather"
    },
    {
        "key": "LIBRARIES_AND_DEMO",
        "name": "Libraries & Demo"
    },
    {
        "key": "GAME_ARCADE",
        "name": "Arcade"
    },
    {
        "key": "GAME_PUZZLE",
        "name": "Puzzle"
    },
    {
        "key": "GAME_CARD",
        "name": "Cards"
    },
    {
        "key": "GAME_CASUAL",
        "name": "Casual"
    },
    {
        "key": "GAME_RACING",
        "name": "Racing"
    },
    {
        "key": "GAME_SPORTS",
        "name": "Sport Games"
    },
    {
        "key": "GAME_ACTION",
        "name": "Action"
    },
    {
        "key": "GAME_ADVENTURE",
        "name": "Adventure"
    },
    {
        "key": "GAME_BOARD",
        "name": "Board"
    },
    {
        "key": "GAME_CASINO",
        "name": "Casino"
    },
    {
        "key": "GAME_EDUCATIONAL",
        "name": "Educational"
    },
    {
        "key": "GAME_MUSIC",
        "name": "Music Games"
    },
    {
        "key": "GAME_ROLE_PLAYING",
        "name": "Role Playing"
    },
    {
        "key": "GAME_SIMULATION",
        "name": "Simulation"
    },
    {
        "key": "GAME_STRATEGY",
        "name": "Strategy"
    },
    {
        "key": "GAME_TRIVIA",
        "name": "Trivia"
    },
    {
        "key": "GAME_WORD",
        "name": "Word Games"
    },
    {
        "key": "FAMILY",
        "name": "Family All Ages"
    },
    {
        "key": "FAMILY_ACTION",
        "name": "Family Action"
    },
    {
        "key": "FAMILY_BRAINGAMES",
        "name": "Family Brain Games"
    },
    {
        "key": "FAMILY_CREATE",
        "name": "Family Create"
    },
    {
        "key": "FAMILY_EDUCATION",
        "name": "Family Education"
    },
    {
        "key": "FAMILY_MUSICVIDEO",
        "name": "Family Music & Video"
    },
    {
        "key": "FAMILY_PRETEND",
        "name": "Family Pretend Play"
    }
];

var labs_client = {};

var __awaiter$2 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(labs_client, "__esModule", { value: true });
labs_client.requester = void 0;
const axios_1 = __importDefault$1(require$$0);
const types_1 = types$1;
function requester(url, method, param) {
    return __awaiter$2(this, void 0, void 0, function* () {
        try {
            const axiosOptions = Object.assign({ headers: param.headers
                    ? JSON.parse(JSON.stringify(param.headers))
                    : { 'Accept': 'application/json' } }, ((method === 'POST' || method === 'PUT' || method === 'PATCH') && { data: param.body }));
            const response = yield axios_1.default.request(Object.assign({ url,
                method }, axiosOptions));
            return response.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error) && error.response) {
                // console.error(`Axios error --- ${JSON.stringify(error.response.data)}`);
                const errorResponse = error.response.data;
                return {
                    status: errorResponse.status,
                    reason: errorResponse.reason,
                    type: errorResponse.type,
                };
            }
            else {
                return types_1.DEFAULT_ERROR;
            }
        }
    });
}
labs_client.requester = requester;

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(lib, exports);
	__exportStar(types$1, exports);
	__exportStar(countries, exports);
	__exportStar(misc, exports);
	__exportStar(labs_client, exports);
	
} (build));

var paths = {
    base: "https://oauth.pasby.africa/api/v1/".replace(/\/+$/, ""),
    endpoint: {
        login: '/oidc/kipindi',
        handshake: '/oidc/kupeana',
        resource: '/oidc/resource',
    }
};

var api = function (path, method, options) { return __awaiter$5(void 0, void 0, void 0, function () {
    var response, status, reason;
    return __generator$2(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, build.requester(paths.base + path, method, options)];
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

var _a, _b, _c, _d, _e, _f;
var config = {
    secret: (_a = process.env.PASBY_CLIENT_SECRET) !== null && _a !== void 0 ? _a : '',
    apikey: (_b = process.env.PASBY_CONSUMER_KEY) !== null && _b !== void 0 ? _b : '',
    appid: (_c = process.env.PASBY_CLIENT_ID) !== null && _c !== void 0 ? _c : '',
    gen: (_d = process.env.SECRET_GEN) !== null && _d !== void 0 ? _d : '',
    loginReturnPath: (_e = process.env.PASBY_LOGIN_REDIRECT) !== null && _e !== void 0 ? _e : '',
    logoutReturnPath: (_f = process.env.PASBY_LOGOUT_REDIRECT) !== null && _f !== void 0 ? _f : '/',
};

const encoder = new TextEncoder();
const decoder = new TextDecoder();
function concat(...buffers) {
    const size = buffers.reduce((acc, { length }) => acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers) {
        buf.set(buffer, i);
        i += buffer.length;
    }
    return buf;
}

function normalize(input) {
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = decoder.decode(encoded);
    }
    return encoded;
}
const encode = (input) => Buffer$1.from(input).toString('base64url');
const decode = (input) => new Uint8Array(Buffer$1.from(normalize(input), 'base64url'));

class JOSEError extends Error {
    static code = 'ERR_JOSE_GENERIC';
    code = 'ERR_JOSE_GENERIC';
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
class JWTClaimValidationFailed extends JOSEError {
    static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified') {
        super(message, { cause: { claim, reason, payload } });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JWTExpired extends JOSEError {
    static code = 'ERR_JWT_EXPIRED';
    code = 'ERR_JWT_EXPIRED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified') {
        super(message, { cause: { claim, reason, payload } });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JOSEAlgNotAllowed extends JOSEError {
    static code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    code = 'ERR_JOSE_ALG_NOT_ALLOWED';
}
class JOSENotSupported extends JOSEError {
    static code = 'ERR_JOSE_NOT_SUPPORTED';
    code = 'ERR_JOSE_NOT_SUPPORTED';
}
class JWSInvalid extends JOSEError {
    static code = 'ERR_JWS_INVALID';
    code = 'ERR_JWS_INVALID';
}
class JWTInvalid extends JOSEError {
    static code = 'ERR_JWT_INVALID';
    code = 'ERR_JWT_INVALID';
}
class JWSSignatureVerificationFailed extends JOSEError {
    static code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    constructor(message = 'signature verification failed', options) {
        super(message, options);
    }
}

var isKeyObject = (obj) => util.types.isKeyObject(obj);

const webcrypto = crypto$1.webcrypto;
const isCryptoKey = (key) => util.types.isCryptoKey(key);

function unusable(name, prop = 'algorithm.name') {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
}
function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve$1(alg) {
    switch (alg) {
        case 'ES256':
            return 'P-256';
        case 'ES384':
            return 'P-384';
        case 'ES512':
            return 'P-521';
        default:
            throw new Error('unreachable');
    }
}
function checkUsage(key, usages) {
    if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
        let msg = 'CryptoKey does not support this operation, its usages must include ';
        if (usages.length > 2) {
            const last = usages.pop();
            msg += `one of ${usages.join(', ')}, or ${last}.`;
        }
        else if (usages.length === 2) {
            msg += `one of ${usages[0]} or ${usages[1]}.`;
        }
        else {
            msg += `${usages[0]}.`;
        }
        throw new TypeError(msg);
    }
}
function checkSigCryptoKey(key, alg, ...usages) {
    switch (alg) {
        case 'HS256':
        case 'HS384':
        case 'HS512': {
            if (!isAlgorithm(key.algorithm, 'HMAC'))
                throw unusable('HMAC');
            const expected = parseInt(alg.slice(2), 10);
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        case 'RS256':
        case 'RS384':
        case 'RS512': {
            if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5'))
                throw unusable('RSASSA-PKCS1-v1_5');
            const expected = parseInt(alg.slice(2), 10);
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        case 'PS256':
        case 'PS384':
        case 'PS512': {
            if (!isAlgorithm(key.algorithm, 'RSA-PSS'))
                throw unusable('RSA-PSS');
            const expected = parseInt(alg.slice(2), 10);
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        case 'EdDSA': {
            if (key.algorithm.name !== 'Ed25519' && key.algorithm.name !== 'Ed448') {
                throw unusable('Ed25519 or Ed448');
            }
            break;
        }
        case 'ES256':
        case 'ES384':
        case 'ES512': {
            if (!isAlgorithm(key.algorithm, 'ECDSA'))
                throw unusable('ECDSA');
            const expected = getNamedCurve$1(alg);
            const actual = key.algorithm.namedCurve;
            if (actual !== expected)
                throw unusable(expected, 'algorithm.namedCurve');
            break;
        }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}

function message(msg, actual, ...types) {
    types = types.filter(Boolean);
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    }
    else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    }
    else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    }
    else if (typeof actual === 'function' && actual.name) {
        msg += ` Received function ${actual.name}`;
    }
    else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor?.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
}
var invalidKeyInput = (actual, ...types) => {
    return message('Key must be ', actual, ...types);
};
function withAlg(alg, actual, ...types) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}

var isKeyLike = (key) => isKeyObject(key) || isCryptoKey(key);
const types = ['KeyObject'];
if (globalThis.CryptoKey || webcrypto?.CryptoKey) {
    types.push('CryptoKey');
}

const isDisjoint = (...headers) => {
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters) {
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
};

function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function isObject(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(input) === null) {
        return true;
    }
    let proto = input;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
}

function isJWK(key) {
    return isObject(key) && typeof key.kty === 'string';
}
function isPrivateJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'string';
}
function isPublicJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'undefined';
}
function isSecretJWK(key) {
    return isJWK(key) && key.kty === 'oct' && typeof key.k === 'string';
}

const namedCurveToJOSE = (namedCurve) => {
    switch (namedCurve) {
        case 'prime256v1':
            return 'P-256';
        case 'secp384r1':
            return 'P-384';
        case 'secp521r1':
            return 'P-521';
        case 'secp256k1':
            return 'secp256k1';
        default:
            throw new JOSENotSupported('Unsupported key curve for this operation');
    }
};
const getNamedCurve = (kee, raw) => {
    let key;
    if (isCryptoKey(kee)) {
        key = KeyObject.from(kee);
    }
    else if (isKeyObject(kee)) {
        key = kee;
    }
    else if (isJWK(kee)) {
        return kee.crv;
    }
    else {
        throw new TypeError(invalidKeyInput(kee, ...types));
    }
    if (key.type === 'secret') {
        throw new TypeError('only "private" or "public" type keys can be used for this operation');
    }
    switch (key.asymmetricKeyType) {
        case 'ed25519':
        case 'ed448':
            return `Ed${key.asymmetricKeyType.slice(2)}`;
        case 'x25519':
        case 'x448':
            return `X${key.asymmetricKeyType.slice(1)}`;
        case 'ec': {
            const namedCurve = key.asymmetricKeyDetails.namedCurve;
            return namedCurveToJOSE(namedCurve);
        }
        default:
            throw new TypeError('Invalid asymmetric key type for this operation');
    }
};

var checkKeyLength = (key, alg) => {
    let modulusLength;
    try {
        if (key instanceof KeyObject) {
            modulusLength = key.asymmetricKeyDetails?.modulusLength;
        }
        else {
            modulusLength = Buffer.from(key.n, 'base64url').byteLength << 3;
        }
    }
    catch { }
    if (typeof modulusLength !== 'number' || modulusLength < 2048) {
        throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
};

const parse = (key) => {
    if (key.d) {
        return createPrivateKey({ format: 'jwk', key });
    }
    return createPublicKey({ format: 'jwk', key });
};

async function importJWK(jwk, alg) {
    if (!isObject(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    alg ||= jwk.alg;
    switch (jwk.kty) {
        case 'oct':
            if (typeof jwk.k !== 'string' || !jwk.k) {
                throw new TypeError('missing "k" (Key Value) Parameter value');
            }
            return decode(jwk.k);
        case 'RSA':
            if (jwk.oth !== undefined) {
                throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
        case 'EC':
        case 'OKP':
            return parse({ ...jwk, alg });
        default:
            throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
    }
}

const tag = (key) => key?.[Symbol.toStringTag];
const jwkMatchesOp = (alg, key, usage) => {
    if (key.use !== undefined && key.use !== 'sig') {
        throw new TypeError('Invalid key for this operation, when present its use must be sig');
    }
    if (key.key_ops !== undefined && key.key_ops.includes?.(usage) !== true) {
        throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
    }
    if (key.alg !== undefined && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg}`);
    }
    return true;
};
const symmetricTypeCheck = (alg, key, usage, allowJwk) => {
    if (key instanceof Uint8Array)
        return;
    if (allowJwk && isJWK(key)) {
        if (isSecretJWK(key) && jwkMatchesOp(alg, key, usage))
            return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!isKeyLike(key)) {
        throw new TypeError(withAlg(alg, key, ...types, 'Uint8Array', allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage, allowJwk) => {
    if (allowJwk && isJWK(key)) {
        switch (usage) {
            case 'sign':
                if (isPrivateJWK(key) && jwkMatchesOp(alg, key, usage))
                    return;
                throw new TypeError(`JSON Web Key for this operation be a private JWK`);
            case 'verify':
                if (isPublicJWK(key) && jwkMatchesOp(alg, key, usage))
                    return;
                throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
    }
    if (!isKeyLike(key)) {
        throw new TypeError(withAlg(alg, key, ...types, allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === 'sign' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === 'decrypt' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === 'verify' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === 'encrypt' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
    }
};
function checkKeyType(allowJwk, alg, key, usage) {
    const symmetric = alg.startsWith('HS') ||
        alg === 'dir' ||
        alg.startsWith('PBES2') ||
        /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(alg, key, usage, allowJwk);
    }
    else {
        asymmetricTypeCheck(alg, key, usage, allowJwk);
    }
}
checkKeyType.bind(undefined, false);
const checkKeyTypeWithJwk = checkKeyType.bind(undefined, true);

function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) ||
        protectedHeader.crit.length === 0 ||
        protectedHeader.crit.some((input) => typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
    }
    else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit) {
        if (!recognized.has(parameter)) {
            throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
}

const validateAlgorithms = (option, algorithms) => {
    if (algorithms !== undefined &&
        (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== 'string'))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
};

function dsaDigest(alg) {
    switch (alg) {
        case 'PS256':
        case 'RS256':
        case 'ES256':
        case 'ES256K':
            return 'sha256';
        case 'PS384':
        case 'RS384':
        case 'ES384':
            return 'sha384';
        case 'PS512':
        case 'RS512':
        case 'ES512':
            return 'sha512';
        case 'EdDSA':
            return undefined;
        default:
            throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}

const ecCurveAlgMap = new Map([
    ['ES256', 'P-256'],
    ['ES256K', 'secp256k1'],
    ['ES384', 'P-384'],
    ['ES512', 'P-521'],
]);
function keyForCrypto(alg, key) {
    let asymmetricKeyType;
    let asymmetricKeyDetails;
    let isJWK;
    if (key instanceof KeyObject) {
        asymmetricKeyType = key.asymmetricKeyType;
        asymmetricKeyDetails = key.asymmetricKeyDetails;
    }
    else {
        isJWK = true;
        switch (key.kty) {
            case 'RSA':
                asymmetricKeyType = 'rsa';
                break;
            case 'EC':
                asymmetricKeyType = 'ec';
                break;
            case 'OKP': {
                if (key.crv === 'Ed25519') {
                    asymmetricKeyType = 'ed25519';
                    break;
                }
                if (key.crv === 'Ed448') {
                    asymmetricKeyType = 'ed448';
                    break;
                }
                throw new TypeError('Invalid key for this operation, its crv must be Ed25519 or Ed448');
            }
            default:
                throw new TypeError('Invalid key for this operation, its kty must be RSA, OKP, or EC');
        }
    }
    let options;
    switch (alg) {
        case 'EdDSA':
            if (!['ed25519', 'ed448'].includes(asymmetricKeyType)) {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ed25519 or ed448');
            }
            break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            if (asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa');
            }
            checkKeyLength(key, alg);
            break;
        case 'PS256':
        case 'PS384':
        case 'PS512':
            if (asymmetricKeyType === 'rsa-pss') {
                const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = asymmetricKeyDetails;
                const length = parseInt(alg.slice(-3), 10);
                if (hashAlgorithm !== undefined &&
                    (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm)) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${alg}`);
                }
                if (saltLength !== undefined && saltLength > length >> 3) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${alg}`);
                }
            }
            else if (asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa or rsa-pss');
            }
            checkKeyLength(key, alg);
            options = {
                padding: constants.RSA_PKCS1_PSS_PADDING,
                saltLength: constants.RSA_PSS_SALTLEN_DIGEST,
            };
            break;
        case 'ES256':
        case 'ES256K':
        case 'ES384':
        case 'ES512': {
            if (asymmetricKeyType !== 'ec') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ec');
            }
            const actual = getNamedCurve(key);
            const expected = ecCurveAlgMap.get(alg);
            if (actual !== expected) {
                throw new TypeError(`Invalid key curve for the algorithm, its curve must be ${expected}, got ${actual}`);
            }
            options = { dsaEncoding: 'ieee-p1363' };
            break;
        }
        default:
            throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
    if (isJWK) {
        return { format: 'jwk', key, ...options };
    }
    return options ? { ...options, key } : key;
}

function hmacDigest(alg) {
    switch (alg) {
        case 'HS256':
            return 'sha256';
        case 'HS384':
            return 'sha384';
        case 'HS512':
            return 'sha512';
        default:
            throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}

function getSignVerifyKey(alg, key, usage) {
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) {
            throw new TypeError(invalidKeyInput(key, ...types));
        }
        return createSecretKey(key);
    }
    if (key instanceof KeyObject) {
        return key;
    }
    if (isCryptoKey(key)) {
        checkSigCryptoKey(key, alg, usage);
        return KeyObject.from(key);
    }
    if (isJWK(key)) {
        if (alg.startsWith('HS')) {
            return createSecretKey(Buffer.from(key.k, 'base64url'));
        }
        return key;
    }
    throw new TypeError(invalidKeyInput(key, ...types, 'Uint8Array', 'JSON Web Key'));
}

const oneShotSign = promisify(crypto$1.sign);
const sign = async (alg, key, data) => {
    const k = getSignVerifyKey(alg, key, 'sign');
    if (alg.startsWith('HS')) {
        const hmac = crypto$1.createHmac(hmacDigest(alg), k);
        hmac.update(data);
        return hmac.digest();
    }
    return oneShotSign(dsaDigest(alg), data, keyForCrypto(alg, k));
};

const oneShotVerify = promisify(crypto$1.verify);
const verify = async (alg, key, signature, data) => {
    const k = getSignVerifyKey(alg, key, 'verify');
    if (alg.startsWith('HS')) {
        const expected = await sign(alg, k, data);
        const actual = signature;
        try {
            return crypto$1.timingSafeEqual(actual, expected);
        }
        catch {
            return false;
        }
    }
    const algorithm = dsaDigest(alg);
    const keyInput = keyForCrypto(alg, k);
    try {
        return await oneShotVerify(algorithm, data, keyInput, signature);
    }
    catch {
        return false;
    }
};

async function flattenedVerify(jws, key, options) {
    if (!isObject(jws)) {
        throw new JWSInvalid('Flattened JWS must be an object');
    }
    if (jws.protected === undefined && jws.header === undefined) {
        throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== undefined && typeof jws.protected !== 'string') {
        throw new JWSInvalid('JWS Protected Header incorrect type');
    }
    if (jws.payload === undefined) {
        throw new JWSInvalid('JWS Payload missing');
    }
    if (typeof jws.signature !== 'string') {
        throw new JWSInvalid('JWS Signature missing or incorrect type');
    }
    if (jws.header !== undefined && !isObject(jws.header)) {
        throw new JWSInvalid('JWS Unprotected Header incorrect type');
    }
    let parsedProt = {};
    if (jws.protected) {
        try {
            const protectedHeader = decode(jws.protected);
            parsedProt = JSON.parse(decoder.decode(protectedHeader));
        }
        catch {
            throw new JWSInvalid('JWS Protected Header is invalid');
        }
    }
    if (!isDisjoint(parsedProt, jws.header)) {
        throw new JWSInvalid('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jws.header,
    };
    const extensions = validateCrit(JWSInvalid, new Map([['b64', true]]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has('b64')) {
        b64 = parsedProt.b64;
        if (typeof b64 !== 'boolean') {
            throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    const { alg } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && validateAlgorithms('algorithms', options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
        throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (b64) {
        if (typeof jws.payload !== 'string') {
            throw new JWSInvalid('JWS Payload must be a string');
        }
    }
    else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) {
        throw new JWSInvalid('JWS Payload must be a string or an Uint8Array instance');
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jws);
        resolvedKey = true;
        checkKeyTypeWithJwk(alg, key, 'verify');
        if (isJWK(key)) {
            key = await importJWK(key, alg);
        }
    }
    else {
        checkKeyTypeWithJwk(alg, key, 'verify');
    }
    const data = concat(encoder.encode(jws.protected ?? ''), encoder.encode('.'), typeof jws.payload === 'string' ? encoder.encode(jws.payload) : jws.payload);
    let signature;
    try {
        signature = decode(jws.signature);
    }
    catch {
        throw new JWSInvalid('Failed to base64url decode the signature');
    }
    const verified = await verify(alg, key, signature, data);
    if (!verified) {
        throw new JWSSignatureVerificationFailed();
    }
    let payload;
    if (b64) {
        try {
            payload = decode(jws.payload);
        }
        catch {
            throw new JWSInvalid('Failed to base64url decode the payload');
        }
    }
    else if (typeof jws.payload === 'string') {
        payload = encoder.encode(jws.payload);
    }
    else {
        payload = jws.payload;
    }
    const result = { payload };
    if (jws.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jws.header !== undefined) {
        result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
        return { ...result, key };
    }
    return result;
}

async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
        jws = decoder.decode(jws);
    }
    if (typeof jws !== 'string') {
        throw new JWSInvalid('Compact JWS must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split('.');
    if (length !== 3) {
        throw new JWSInvalid('Invalid Compact JWS');
    }
    const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
    const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: verified.key };
    }
    return result;
}

var epoch = (date) => Math.floor(date.getTime() / 1000);

const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var secs = (str) => {
    const matched = REGEX.exec(str);
    if (!matched || (matched[4] && matched[1])) {
        throw new TypeError('Invalid time period format');
    }
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch (unit) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
        case 's':
            numericDate = Math.round(value);
            break;
        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
        case 'm':
            numericDate = Math.round(value * minute);
            break;
        case 'hour':
        case 'hours':
        case 'hr':
        case 'hrs':
        case 'h':
            numericDate = Math.round(value * hour);
            break;
        case 'day':
        case 'days':
        case 'd':
            numericDate = Math.round(value * day);
            break;
        case 'week':
        case 'weeks':
        case 'w':
            numericDate = Math.round(value * week);
            break;
        default:
            numericDate = Math.round(value * year);
            break;
    }
    if (matched[1] === '-' || matched[4] === 'ago') {
        return -numericDate;
    }
    return numericDate;
};

const normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, '');
const checkAudiencePresence = (audPayload, audOption) => {
    if (typeof audPayload === 'string') {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
var jwtPayload = (protectedHeader, encodedPayload, options = {}) => {
    let payload;
    try {
        payload = JSON.parse(decoder.decode(encodedPayload));
    }
    catch {
    }
    if (!isObject(payload)) {
        throw new JWTInvalid('JWT Claims Set must be a top-level JSON object');
    }
    const { typ } = options;
    if (typ &&
        (typeof protectedHeader.typ !== 'string' ||
            normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, 'typ', 'check_failed');
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    const presenceCheck = [...requiredClaims];
    if (maxTokenAge !== undefined)
        presenceCheck.push('iat');
    if (audience !== undefined)
        presenceCheck.push('aud');
    if (subject !== undefined)
        presenceCheck.push('sub');
    if (issuer !== undefined)
        presenceCheck.push('iss');
    for (const claim of new Set(presenceCheck.reverse())) {
        if (!(claim in payload)) {
            throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, 'missing');
        }
    }
    if (issuer &&
        !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, 'iss', 'check_failed');
    }
    if (subject && payload.sub !== subject) {
        throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, 'sub', 'check_failed');
    }
    if (audience &&
        !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [audience] : audience)) {
        throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, 'aud', 'check_failed');
    }
    let tolerance;
    switch (typeof options.clockTolerance) {
        case 'string':
            tolerance = secs(options.clockTolerance);
            break;
        case 'number':
            tolerance = options.clockTolerance;
            break;
        case 'undefined':
            tolerance = 0;
            break;
        default:
            throw new TypeError('Invalid clockTolerance option type');
    }
    const { currentDate } = options;
    const now = epoch(currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== 'number') {
        throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, 'iat', 'invalid');
    }
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== 'number') {
            throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, 'nbf', 'invalid');
        }
        if (payload.nbf > now + tolerance) {
            throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, 'nbf', 'check_failed');
        }
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== 'number') {
            throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, 'exp', 'invalid');
        }
        if (payload.exp <= now - tolerance) {
            throw new JWTExpired('"exp" claim timestamp check failed', payload, 'exp', 'check_failed');
        }
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === 'number' ? maxTokenAge : secs(maxTokenAge);
        if (age - tolerance > max) {
            throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, 'iat', 'check_failed');
        }
        if (age < 0 - tolerance) {
            throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, 'iat', 'check_failed');
        }
    }
    return payload;
};

async function jwtVerify(jwt, key, options) {
    const verified = await compactVerify(jwt, key, options);
    if (verified.protectedHeader.crit?.includes('b64') && verified.protectedHeader.b64 === false) {
        throw new JWTInvalid('JWTs MUST NOT use unencoded payload');
    }
    const payload = jwtPayload(verified.protectedHeader, verified.payload, options);
    const result = { payload, protectedHeader: verified.protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: verified.key };
    }
    return result;
}

class FlattenedSign {
    _payload;
    _protectedHeader;
    _unprotectedHeader;
    constructor(payload) {
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
        }
        this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new JWSInvalid('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        }
        if (!isDisjoint(this._protectedHeader, this._unprotectedHeader)) {
            throw new JWSInvalid('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
        };
        const extensions = validateCrit(JWSInvalid, new Map([['b64', true]]), options?.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== 'boolean') {
                throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        checkKeyTypeWithJwk(alg, key, 'sign');
        let payload = this._payload;
        if (b64) {
            payload = encoder.encode(encode(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
            protectedHeader = encoder.encode(encode(JSON.stringify(this._protectedHeader)));
        }
        else {
            protectedHeader = encoder.encode('');
        }
        const data = concat(protectedHeader, encoder.encode('.'), payload);
        const signature = await sign(alg, key, data);
        const jws = {
            signature: encode(signature),
            payload: '',
        };
        if (b64) {
            jws.payload = decoder.decode(payload);
        }
        if (this._unprotectedHeader) {
            jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
            jws.protected = decoder.decode(protectedHeader);
        }
        return jws;
    }
}

class CompactSign {
    _flattened;
    constructor(payload) {
        this._flattened = new FlattenedSign(payload);
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === undefined) {
            throw new TypeError('use the flattened module for creating JWS with b64: false');
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}

function validateInput(label, input) {
    if (!Number.isFinite(input)) {
        throw new TypeError(`Invalid ${label} input`);
    }
    return input;
}
class ProduceJWT {
    _payload;
    constructor(payload = {}) {
        if (!isObject(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
        }
        this._payload = payload;
    }
    setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
    }
    setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
    }
    setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
    }
    setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
    }
    setNotBefore(input) {
        if (typeof input === 'number') {
            this._payload = { ...this._payload, nbf: validateInput('setNotBefore', input) };
        }
        else if (input instanceof Date) {
            this._payload = { ...this._payload, nbf: validateInput('setNotBefore', epoch(input)) };
        }
        else {
            this._payload = { ...this._payload, nbf: epoch(new Date()) + secs(input) };
        }
        return this;
    }
    setExpirationTime(input) {
        if (typeof input === 'number') {
            this._payload = { ...this._payload, exp: validateInput('setExpirationTime', input) };
        }
        else if (input instanceof Date) {
            this._payload = { ...this._payload, exp: validateInput('setExpirationTime', epoch(input)) };
        }
        else {
            this._payload = { ...this._payload, exp: epoch(new Date()) + secs(input) };
        }
        return this;
    }
    setIssuedAt(input) {
        if (typeof input === 'undefined') {
            this._payload = { ...this._payload, iat: epoch(new Date()) };
        }
        else if (input instanceof Date) {
            this._payload = { ...this._payload, iat: validateInput('setIssuedAt', epoch(input)) };
        }
        else if (typeof input === 'string') {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', epoch(new Date()) + secs(input)),
            };
        }
        else {
            this._payload = { ...this._payload, iat: validateInput('setIssuedAt', input) };
        }
        return this;
    }
}

class SignJWT extends ProduceJWT {
    _protectedHeader;
    setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        const sig = new CompactSign(encoder.encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray(this._protectedHeader?.crit) &&
            this._protectedHeader.crit.includes('b64') &&
            this._protectedHeader.b64 === false) {
            throw new JWTInvalid('JWTs MUST NOT use unencoded payload');
        }
        return sig.sign(key, options);
    }
}

var ALG = 'HS256';
var gen = config.gen;
var encrypt = function (data, exp) { return __awaiter$5(void 0, void 0, void 0, function () {
    var payload;
    return __generator$2(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new SignJWT({ sub: data })
                    .setProtectedHeader({ alg: ALG })
                    .setIssuedAt()
                    .setExpirationTime(exp !== null && exp !== void 0 ? exp : '25 mins from now')
                    .sign(new TextEncoder().encode(gen))];
            case 1:
                payload = _a.sent();
                return [2 /*return*/, payload];
        }
    });
}); };
var decrypt = function (data) { return __awaiter$5(void 0, void 0, void 0, function () {
    var payload;
    return __generator$2(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, jwtVerify(data, new TextEncoder().encode(gen), { algorithms: [ALG] })];
            case 1:
                payload = (_a.sent()).payload;
                return [2 /*return*/, build.parseInterface(payload).sub];
            case 2:
                _a.sent();
                return [2 /*return*/, ""];
            case 3: return [2 /*return*/];
        }
    });
}); };

var Flow;
(function (Flow) {
    function login(_a) {
        return __awaiter$5(this, arguments, void 0, function (_b) {
            var challenge, res;
            var _c;
            var claims = _b.claims, payload = _b.payload, action = _b.action, redirect_uri = _b.redirect_uri, pkceExp = _b.pkceExp;
            return __generator$2(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, build.pkceChallenge()];
                    case 1:
                        challenge = _d.sent();
                        return [4 /*yield*/, api(paths.endpoint.login, 'POST', {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-key': config.apikey,
                                    'x-access-secret': config.secret,
                                },
                                body: {
                                    callback: redirect_uri,
                                    action: action,
                                    claims: claims,
                                    challenge: challenge.challenge,
                                    payload: payload
                                },
                            })];
                    case 2:
                        res = _d.sent();
                        _c = {
                            link: res.link,
                            id: res.session
                        };
                        return [4 /*yield*/, encrypt(challenge.verifier, pkceExp)];
                    case 3: return [2 /*return*/, (_c.pkce = _d.sent(),
                            _c)];
                }
            });
        });
    }
    Flow.login = login;
    function tokenSwap(_a) {
        return __awaiter$5(this, arguments, void 0, function (_b) {
            var pkce, res;
            var _c;
            var flow = _b.flow, code = _b.code, verifier = _b.verifier;
            return __generator$2(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!verifier) {
                            throw new Error("You are not permitted to commit such authentication action.");
                        }
                        if (flow === 'cancelled') {
                            throw new Error("Identification flow through pasby eIDs cancelled.");
                        }
                        return [4 /*yield*/, decrypt(verifier)];
                    case 1:
                        pkce = _d.sent();
                        return [4 /*yield*/, api(paths.endpoint.handshake, 'POST', {
                                body: {
                                    verifier: pkce,
                                },
                                headers: {
                                    'Accept': 'application/json',
                                    'authorization': "Shake ".concat(code),
                                }
                            })];
                    case 2:
                        res = _d.sent();
                        _c = {
                            access: res.access,
                            exp: res.exp
                        };
                        return [4 /*yield*/, encrypt(res.challenge)];
                    case 3: return [2 /*return*/, (_c.csrf = _d.sent(),
                            _c)];
                }
            });
        });
    }
    Flow.tokenSwap = tokenSwap;
    function eidResource(_a) {
        return __awaiter$5(this, arguments, void 0, function (_b) {
            var pkce, access, response;
            var challenge = _b.challenge, accessCode = _b.accessCode;
            return __generator$2(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!challenge) {
                            throw new Error("You need to pass a pkce challenge to get eID resource");
                        }
                        if (!accessCode) {
                            throw new Error("There's no active eID session available");
                        }
                        return [4 /*yield*/, decrypt(challenge)];
                    case 1:
                        pkce = (_c.sent());
                        return [4 /*yield*/, decrypt(accessCode)];
                    case 2:
                        access = _c.sent();
                        return [4 /*yield*/, api(paths.endpoint.resource, 'POST', {
                                body: {
                                    challenge: pkce,
                                    app: config.appid
                                },
                                headers: {
                                    'Accept': 'application/json',
                                    'authorization': "Bearer ".concat(access),
                                }
                            })];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, build.parseInterface(response)];
                }
            });
        });
    }
    Flow.eidResource = eidResource;
})(Flow || (Flow = {}));

var dist = {};

var keys = {};

Object.defineProperty(keys, "__esModule", { value: true });
keys.default = {
    eid: "pni",
    state: "eid_cache_page",
    pkce: "eid_challenge",
    csrf: "eid_csrf"
};

var Poller = {};

var fetcher = {};

var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var __awaiter$1 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
};
Object.defineProperty(fetcher, "__esModule", { value: true });
fetcher.postFetch = postFetch;
function postFetch(path, body, options) {
    return __awaiter$1(this, void 0, void 0, function () {
        return __generator$1(this, function (_a) {
            return [2 /*return*/, fetch(path, __assign$1({ method: "POST", body: JSON.stringify(body), headers: {
                        "Content-Type": "application/json",
                    } }, options))];
        });
    });
}

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
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(Poller, "__esModule", { value: true });
Poller.PollEIDComponent = PollEIDComponent;
var react_1 = require$$0$1;
var fetcher_1 = fetcher;
var ui_funs_1 = build;
var react_2 = __importDefault(require$$0$1);
function PollEIDComponent(_a) {
    var _this = this;
    var lock = _a.lock, identifier = _a.identifier, onSuccessful = _a.onSuccessful, onCancelled = _a.onCancelled, pathToPollSever = _a.pathToPollSever;
    var _b = (0, react_1.useState)('stale'), state = _b[0], setState = _b[1];
    var _c = (0, react_1.useState)(true), shouldPoll = _c[0], setShouldPoll = _c[1];
    var _d = (0, react_1.useState)(0), errorCount = _d[0], setErrorCount = _d[1]; // Counter for errors
    var abortController = new AbortController(); // AbortController to cancel the request
    (0, react_1.useEffect)(function () {
        if (!shouldPoll)
            return;
        if (lock)
            return;
        var poll = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (lock)
                    return [2 /*return*/];
                if (!shouldPoll)
                    return [2 /*return*/];
                if (errorCount > 3)
                    return [2 /*return*/];
                pollRequest(pathToPollSever, { id: identifier }, abortController.signal, function (res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (errorCount > 3) {
                                    setShouldPoll(false); // Stop polling after 5 errors
                                    onCancelled();
                                    return [2 /*return*/];
                                }
                                if (!res.cancelled) return [3 /*break*/, 1];
                                setShouldPoll(false);
                                setErrorCount(10);
                                onCancelled();
                                return [2 /*return*/];
                            case 1:
                                if (!res.sessionPicked) return [3 /*break*/, 2];
                                setState("active");
                                return [3 /*break*/, 4];
                            case 2:
                                if (!res.signature) return [3 /*break*/, 4];
                                setShouldPoll(false); // Stop polling on success
                                return [4 /*yield*/, onSuccessful(res)];
                            case 3:
                                _a.sent();
                                setErrorCount(10);
                                return [2 /*return*/];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); }, function () {
                    setErrorCount(function (prevCount) {
                        if (prevCount + 1 >= 5) {
                            setShouldPoll(false); // Stop polling after 5 errors
                            onCancelled();
                            return 5; // Keep it at 5 to avoid further increments
                        }
                        return prevCount + 1; // Increment error count
                    });
                });
                return [2 /*return*/];
            });
        }); };
        var intervalId = setInterval(poll, 150);
        // Cleanup polling interval
        return function () { return clearInterval(intervalId); };
    }, [shouldPoll, pathToPollSever, identifier, onCancelled, onSuccessful, lock]);
    return (react_2.default.createElement("div", { className: "flex flex-col gap-2 items-center" },
        react_2.default.createElement("div", { className: "relative flex h-44 w-44 flex-none items-center justify-center mt-10 ml-2" },
            react_2.default.createElement(QrCodeBorder, { className: "absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" }),
            react_2.default.createElement(Loader, null)),
        state === "stale" && react_2.default.createElement("p", { className: "text-sm" }, "Listening to event changes")));
}
function Loader() {
    return (react_2.default.createElement("div", { className: "flex flex-col gap-4 items-center" },
        react_2.default.createElement("div", { role: "status" },
            react_2.default.createElement("svg", { "aria-hidden": "true", className: "w-10 h-10 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_2.default.createElement("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
                react_2.default.createElement("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })))));
}
function QrCodeBorder(props) {
    return (react_2.default.createElement("svg", __assign({ viewBox: "0 0 96 96", fill: "none", "aria-hidden": "true" }, props),
        react_2.default.createElement("path", { d: "M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8", strokeWidth: "2", strokeLinecap: "round" })));
}
function pollRequest(path, body, signal, onResult, onError) {
    return __awaiter(this, void 0, void 0, function () {
        var response, parsed, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, requestToNextSever(path, body, { signal: signal })];
                case 1:
                    response = _a.sent();
                    parsed = (0, ui_funs_1.parseInterface)(response);
                    onResult(parsed);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    onError(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function requestToNextSever(path, body, options) {
    return __awaiter(this, void 0, void 0, function () {
        var response, json, e;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetcher_1.postFetch)(path, body !== null && body !== void 0 ? body : {}, options)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, (response).json()];
                case 2:
                    json = _a.sent();
                    if (!response.ok) {
                        e = json;
                        throw new Error(e.error);
                    }
                    return [2 /*return*/, json];
            }
        });
    });
}

(function (exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PollEIDComponent = exports.keys = void 0;
	var keys_1 = keys;
	Object.defineProperty(exports, "keys", { enumerable: true, get: function () { return __importDefault(keys_1).default; } });
	var Poller_1 = Poller;
	Object.defineProperty(exports, "PollEIDComponent", { enumerable: true, get: function () { return Poller_1.PollEIDComponent; } }); 
} (dist));

var handler = (function (option, cookieSetter, cookieGetter) {
    return function handler(req_1, _a) {
        return __awaiter$5(this, arguments, void 0, function (req, _b) {
            var _c, error_1, message;
            var params = _b.params;
            return __generator$2(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 9, , 10]);
                        _c = params.auth;
                        switch (_c) {
                            case 'login': return [3 /*break*/, 1];
                            case 'handshake': return [3 /*break*/, 3];
                            case 'logout': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, login(req, option, cookieSetter)];
                    case 2: return [2 /*return*/, _d.sent()];
                    case 3: return [4 /*yield*/, handshake(req, cookieSetter, cookieGetter)];
                    case 4: return [2 /*return*/, _d.sent()];
                    case 5: return [4 /*yield*/, logout(req, cookieSetter)];
                    case 6: return [2 /*return*/, _d.sent()];
                    case 7: return [2 /*return*/, serverExports.NextResponse.json({ error: 'Method request not accepted' }, {
                            status: 400
                        })];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_1 = _d.sent();
                        message = error_1.message;
                        console.error("pasby eid error at route -- here the message: ".concat(message)); // make a pasby logger type here
                        return [2 /*return*/, serverExports.NextResponse.json({
                                provider: "pasby authentication",
                                error: message
                            })];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
});
function logout(req, cookieSetter) {
    return __awaiter$5(this, void 0, void 0, function () {
        return __generator$2(this, function (_a) {
            cookieSetter(dist.keys.eid, '', 0);
            cookieSetter(dist.keys.csrf, '', 0);
            cookieSetter(dist.keys.pkce, '', 0);
            return [2 /*return*/, serverExports.NextResponse.redirect(req.nextUrl.origin + config.logoutReturnPath)];
        });
    });
}
function login(req, options, cookieSetter) {
    return __awaiter$5(this, void 0, void 0, function () {
        var searchParams, state, redirect, res;
        var _a, _b;
        return __generator$2(this, function (_c) {
            switch (_c.label) {
                case 0:
                    searchParams = req.nextUrl.searchParams;
                    state = searchParams.get('state');
                    redirect = ((_a = searchParams.get('redirect')) !== null && _a !== void 0 ? _a : '') === "true";
                    return [4 /*yield*/, Flow.login({
                            claims: (_b = options.claims) !== null && _b !== void 0 ? _b : [],
                            action: options.action,
                            payload: options.payload,
                            redirect: redirect,
                            redirect_uri: req.nextUrl.origin + '/api/eid/handshake',
                            state: state,
                        })];
                case 1:
                    res = _c.sent();
                    return [4 /*yield*/, setChallengeCookie(cookieSetter, {
                            value: res.pkce
                        })];
                case 2:
                    _c.sent();
                    if (!state) return [3 /*break*/, 4];
                    return [4 /*yield*/, setRedirectState(cookieSetter, {
                            value: state
                        })];
                case 3:
                    _c.sent();
                    _c.label = 4;
                case 4:
                    if (redirect) {
                        return [2 /*return*/, serverExports.NextResponse.redirect(res.link)];
                    }
                    else {
                        return [2 /*return*/, serverExports.NextResponse.json({ url: res.link })];
                    }
            }
        });
    });
}
function handshake(req, cookieSetter, cookieGetter) {
    return __awaiter$5(this, void 0, void 0, function () {
        var searchParams, code, flow, verifier, res, _a, _b, state;
        var _c, _d;
        return __generator$2(this, function (_e) {
            switch (_e.label) {
                case 0:
                    searchParams = req.nextUrl.searchParams;
                    code = (_c = searchParams.get('handshake')) !== null && _c !== void 0 ? _c : '';
                    flow = (_d = searchParams.get('flow')) !== null && _d !== void 0 ? _d : '';
                    return [4 /*yield*/, cookieGetter(dist.keys.pkce)];
                case 1:
                    verifier = _e.sent();
                    return [4 /*yield*/, Flow.tokenSwap({
                            flow: flow,
                            code: code,
                            verifier: verifier,
                        })];
                case 2:
                    res = _e.sent();
                    console.log("About to set challenge --- ".concat(res.csrf));
                    cookieSetter("csrf", "mmywi_" + res.csrf, build.unixTimestampToMaxAge(res.exp));
                    cookieSetter(dist.keys.csrf, res.csrf, build.unixTimestampToMaxAge(res.exp));
                    _a = cookieSetter;
                    _b = [dist.keys.eid];
                    return [4 /*yield*/, encrypt(res.access)];
                case 3:
                    _a.apply(void 0, _b.concat([_e.sent(), build.unixTimestampToMaxAge(res.exp)]));
                    return [4 /*yield*/, cookieGetter(dist.keys.state)];
                case 4:
                    state = _e.sent();
                    return [2 /*return*/, serverExports.NextResponse.redirect("".concat(req.nextUrl.origin).concat(state ? state :
                            config.loginReturnPath))];
            }
        });
    });
}
function setChallengeCookie(cookieSetter_1, _a) {
    return __awaiter$5(this, arguments, void 0, function (cookieSetter, _b) {
        var exp;
        var value = _b.value, expires = _b.expires, key = _b.key;
        return __generator$2(this, function (_c) {
            exp = expires !== null && expires !== void 0 ? expires : build.expiresAt(10, 'm');
            cookieSetter(key !== null && key !== void 0 ? key : dist.keys.pkce, value, build.unixTimestampToMaxAge(exp));
            return [2 /*return*/];
        });
    });
}
function setRedirectState(cookieSetter_1, _a) {
    return __awaiter$5(this, arguments, void 0, function (cookieSetter, _b) {
        var exp;
        var value = _b.value;
        return __generator$2(this, function (_c) {
            exp = build.expiresAt(10, 'm');
            cookieSetter(dist.keys.state, value, build.unixTimestampToMaxAge(exp));
            return [2 /*return*/];
        });
    });
}

var getEID = function (cookie) { return __awaiter$5(void 0, void 0, void 0, function () {
    var access, challenge, accessCode, res, error_1;
    var _a, _b, _c;
    return __generator$2(this, function (_d) {
        switch (_d.label) {
            case 0:
                access = (_a = cookie.get(dist.keys.eid)) === null || _a === void 0 ? void 0 : _a.value;
                if (!access)
                    return [2 /*return*/];
                challenge = (_b = cookie.get(dist.keys.csrf)) === null || _b === void 0 ? void 0 : _b.value;
                accessCode = (_c = cookie.get(dist.keys.eid)) === null || _c === void 0 ? void 0 : _c.value;
                _d.label = 1;
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Flow.eidResource({
                        challenge: challenge,
                        accessCode: accessCode
                    })];
            case 2:
                res = _d.sent();
                return [2 /*return*/, res];
            case 3:
                error_1 = _d.sent();
                console.error("EID resource error: ".concat(error_1)); // use pasby error logger
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); };

export { getEID, handler };
//# sourceMappingURL=index.js.map
