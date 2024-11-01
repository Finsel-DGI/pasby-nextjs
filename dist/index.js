import * as React from 'react';
import React__default, { useState } from 'react';
import require$$0 from 'axios';

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

function __awaiter$3(thisArg, _arguments, P, generator) {
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

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var build = {};

var lib = {};

var general = {};

var __awaiter$2 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
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
    return __awaiter$2(this, void 0, void 0, function* () {
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

var __awaiter$1 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
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
    return __awaiter$1(this, void 0, void 0, function* () {
        const encoder = new TextEncoder();
        const data = encoder.encode(codeVerifier);
        const digest = yield crypto.subtle.digest('SHA-256', data);
        const digestArray = Array.from(new Uint8Array(digest));
        return btoa(String.fromCharCode(...digestArray))
            .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    });
}
function pkceChallenge() {
    return __awaiter$1(this, void 0, void 0, function* () {
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

var types = {};

Object.defineProperty(types, "__esModule", { value: true });
types.DEFAULT_ERROR = void 0;
types.DEFAULT_ERROR = {
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

var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(labs_client, "__esModule", { value: true });
labs_client.requester = void 0;
const axios_1 = __importDefault(require$$0);
const types_1 = types;
function requester(url, method, param) {
    return __awaiter(this, void 0, void 0, function* () {
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
	__exportStar(types, exports);
	__exportStar(countries, exports);
	__exportStar(misc, exports);
	__exportStar(labs_client, exports);
	
} (build));

var variantStyle = {
    original: {
        fill: '#dd3e3e',
        text: '#fff'
    },
    dark: {
        text: '#fff',
        fill: '#000'
    },
    darktext: {
        fill: '#fff',
        text: '#000'
    },
    light: {
        text: '#dd3e3e',
        fill: '#fff'
    },
};
function Logo(_a) {
    var variant = _a.variant, height = _a.height, width = _a.width, coloring = _a.coloring, props = __rest(_a, ["variant", "height", "width", "coloring"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: width !== null && width !== void 0 ? width : 512, height: height !== null && height !== void 0 ? height : 514, fill: "none", viewBox: "0 0 512 514" }, props),
        React.createElement("path", { fill: coloring ? coloring.fill : variantStyle[variant !== null && variant !== void 0 ? variant : 'original'].fill, d: "M81.186 440.347A163.634 163.634 0 018.252 318.611L.682 235.874a163.636 163.636 0 0149.71-133.033l59.794-57.325A163.637 163.637 0 01245.26 1.464l82.203 11.065a163.636 163.636 0 01118.542 78.076l42.731 71.325a163.633 163.633 0 0112.919 141.354l-29.023 77.701a163.633 163.633 0 01-102.563 98.317l-78.753 25.679a163.633 163.633 0 01-140.75-18.927z" }),
        React.createElement("g", { fill: coloring ? coloring.text : variantStyle[variant !== null && variant !== void 0 ? variant : 'original'].text },
            React.createElement("path", { d: "M177.416 152.188c6.421 0 12.242 1.533 17.464 4.599 5.308 2.978 9.46 7.225 12.456 12.743 2.997 5.431 4.495 11.78 4.495 19.05s-1.498 13.663-4.495 19.181c-2.996 5.43-7.148 9.678-12.456 12.744-5.222 2.978-11.043 4.467-17.464 4.467-8.109 0-20.803 6.568-20.803 14.677v.684a9.075 9.075 0 01-9.075 9.075h-.941c-5.532 0-10.017-4.485-10.017-10.017v-76.585c0-5.283 4.284-9.566 9.567-9.566h7.437a2.13 2.13 0 012.13 2.13c0 2.007 2.712 3.052 4.327 1.859 4.548-3.36 10.34-5.041 17.375-5.041zm-3.467 55.967c5.136 0 9.331-1.751 12.584-5.255 3.339-3.591 5.008-8.364 5.008-14.32s-1.669-10.685-5.008-14.189c-3.253-3.591-7.448-5.386-12.584-5.386-5.137 0-9.374 1.795-12.713 5.386-3.253 3.504-4.88 8.233-4.88 14.189s1.627 10.729 4.88 14.32c3.339 3.504 7.576 5.255 12.713 5.255zM285.339 153.24c5.532 0 10.016 4.484 10.016 10.016v51.098c0 5.283-4.283 9.567-9.567 9.567h-7.436a2.13 2.13 0 01-2.131-2.131c0-2.007-2.71-3.05-4.323-1.855-4.531 3.358-10.281 5.037-17.25 5.037-6.506 0-12.414-1.489-17.721-4.467-5.222-2.978-9.332-7.226-12.328-12.744s-4.494-11.911-4.494-19.181 1.498-13.663 4.494-19.181 7.106-9.766 12.328-12.744c5.307-2.978 11.215-4.467 17.721-4.467 6.654 0 12.211 1.621 16.671 4.863 1.526 1.109 4.003.117 4.003-1.77 0-1.127.914-2.041 2.042-2.041zm-27.224 54.915c5.051 0 9.246-1.751 12.585-5.255 3.338-3.591 5.008-8.364 5.008-14.32s-1.67-10.685-5.008-14.189c-3.339-3.591-7.534-5.386-12.585-5.386-5.137 0-9.374 1.795-12.713 5.386-3.339 3.504-5.008 8.233-5.008 14.189s1.669 10.729 5.008 14.32c3.339 3.504 7.576 5.255 12.713 5.255zM337.145 224.972a67.595 67.595 0 01-16.823-2.103c-2.616-.711-4.979-1.502-7.088-2.372-3.625-1.497-4.823-5.761-3.202-9.333 2.035-4.483 7.64-6.108 12.273-4.445.893.32 1.815.624 2.769.911 4.366 1.226 8.646 1.839 12.841 1.839 8.475 0 12.713-2.146 12.713-6.437 0-2.015-1.156-3.46-3.467-4.336-2.312-.876-5.864-1.62-10.658-2.233-5.651-.876-10.316-1.883-13.998-3.022-3.681-1.139-6.891-3.153-9.631-6.043-2.653-2.891-3.98-7.007-3.98-12.35 0-4.467 1.241-8.408 3.724-11.824 2.568-3.503 6.249-6.218 11.043-8.145 4.88-1.927 10.616-2.891 17.208-2.891 4.879 0 9.716.57 14.51 1.708 1.993.43 3.843.932 5.55 1.507 3.878 1.307 5.237 5.764 3.533 9.485-1.979 4.323-7.249 5.914-11.796 4.524-3.75-1.147-7.683-1.721-11.797-1.721-4.281 0-7.491.613-9.631 1.839-2.141 1.226-3.211 2.803-3.211 4.73 0 2.19 1.156 3.722 3.467 4.598 2.312.876 5.993 1.708 11.044 2.496 5.65.964 10.273 2.015 13.869 3.153 3.595 1.051 6.72 3.022 9.374 5.912 2.654 2.891 3.981 6.919 3.981 12.087 0 4.379-1.284 8.277-3.853 11.693-2.568 3.415-6.335 6.087-11.3 8.014-4.88 1.839-10.701 2.759-17.464 2.759zM329.16 342.616a268.651 268.651 0 01.954.866c2.081 2.01 3.436 4.882 4.05 7.704l.064.294c.185.922.215 1.821.211 2.761l-.002.472c-.014 1.215-.113 2.362-.393 3.542l-.056.251c-.51 2.213-1.509 4.33-2.922 6.087l-.153.192c-2.376 2.923-6.043 4.804-9.718 5.259-1.922.157-3.856.123-5.736-.332a14.547 14.547 0 01-9.19-6.505c-2.112-3.577-3.071-8.099-2.107-12.212.068-.263.141-.524.218-.784l.075-.264c1.182-4.024 3.922-7.314 7.499-9.333 5.596-2.983 12.417-2.13 17.206 2.002zm-20.059 7.307c-.222.168-.398.415-.379.693a.97.97 0 00.268.574.832.832 0 00.31.216c.193.078.408.077.617.073l.072-.002.418-.004.436-.013.441-.007c.256-.004.511-.009.767-.015.17-.004.31.133.309.303-.008.968-.013 1.937-.017 2.905-.001.498-.004.996-.008 1.494-.004.48-.006.961-.007 1.441l-.004.55-.003.771-.002.442c.023.204.055.347.115.476.135.288.418.515.736.492a1.01 1.01 0 00.613-.257.657.657 0 00.062-.068c.177-.228.21-.536.215-.824.002-.089 0-.192-.003-.372v-.242c0-.262-.002-.525-.004-.787l-.001-.547c-.001-.48-.003-.959-.006-1.438l-.004-1.468c-.003-.868-.006-1.735-.011-2.602 0-.151.125-.273.276-.268.414.013.828.021 1.242.029l.435.015.419.006.386.01c.362-.041.362-.041.621-.354.062-.086.107-.149.139-.203.175-.294.055-.713-.196-.946-.263-.244-.643-.326-1.002-.325l-.209.003-.449-.005-.483.001-.498-.001c-.347-.002-.694-.001-1.042 0-.444.001-.888-.001-1.333-.005-.342-.002-.685-.002-1.027-.001l-.492-.002a39.332 39.332 0 00-.687.001h-.126c-.179 0-.36.008-.53.063-.143.048-.26.111-.374.198zm10.547-.047a1.17 1.17 0 00-.486.808c-.035.28-.026.564-.027.854l-.001.253-.001.827-.002.575v1.206c0 .514-.002 1.029-.004 1.543l-.002 1.189-.001.569v.796l-.001.458c.022.301.064.527.162.773.062.159.183.322.317.426.233.181.549.159.807.018a1.001 1.001 0 00.509-.745c.034-.224.042-.449.046-.689a42.965 42.965 0 00.013-.766l.008-.407.022-1.289.015-.875.02-1.126a.355.355 0 01.637-.211l.175.226c.386.503.762 1.012 1.133 1.526.123.171.243.361.421.472.264.163.621.099.899-.037.171-.083.287-.213.475-.448l.27-.332.296-.384.355-.456c.233-.301.465-.604.694-.908.11-.143.173-.227.219-.284.055-.07.163-.027.163.062.008.83.018 1.661.029 2.491.004.31.008.62.01.93.004.445.011.891.017 1.336l.003.421.007.391.001.104c.002.16.008.323.055.476.018.056.038.107.062.156.142.295.427.535.754.506.21-.018.433-.103.59-.245a.609.609 0 00.074-.079c.177-.227.205-.536.215-.823.003-.108.002-.226-.001-.455l.001-.268v-.875l.001-.61-.002-1.276c-.001-.545 0-1.09.001-1.635v-1.258l.001-.603-.002-.843-.001-.484a2.748 2.748 0 00-.054-.416c-.079-.337-.325-.645-.667-.692a.995.995 0 00-.586.112c-.18.096-.291.222-.465.434l-.247.299c-.424.538-.841 1.079-1.255 1.624l-.074.096c-.697.91-2.021.964-2.735.068a72.91 72.91 0 01-1.613-2.064 3.785 3.785 0 00-.188-.204c-.287-.289-.726-.467-1.062-.238zM177.416 280.281c6.421 0 12.242 1.533 17.464 4.599 5.308 2.978 9.46 7.225 12.456 12.743 2.997 5.43 4.495 11.78 4.495 19.05 0 7.269-1.498 13.663-4.495 19.181-2.996 5.43-7.148 9.678-12.456 12.744-5.222 2.978-11.043 4.466-17.464 4.466-7.035 0-12.827-1.68-17.375-5.04-1.615-1.193-4.327-.148-4.327 1.859a2.13 2.13 0 01-2.13 2.13h-7.437c-5.283 0-9.567-4.283-9.567-9.566v-77.899c0-5.532 4.485-10.017 10.017-10.017h.58a9.436 9.436 0 019.436 9.436v1.637c0 8.109 12.694 14.677 20.803 14.677zm-3.467 55.967c5.136 0 9.331-1.752 12.584-5.255 3.339-3.591 5.008-8.364 5.008-14.32s-1.669-10.685-5.008-14.189c-3.253-3.591-7.448-5.386-12.584-5.386-5.137 0-9.374 1.795-12.713 5.386-3.253 3.504-4.88 8.233-4.88 14.189s1.627 10.729 4.88 14.32c3.339 3.503 7.576 5.255 12.713 5.255zM284.825 281.332c5.532 0 10.016 4.485 10.016 10.017v48.84c0 12.963-3.21 22.597-9.631 28.903-6.42 6.307-15.752 9.46-27.994 9.46-6.506 0-12.67-.832-18.491-2.496-3.237-.939-6.187-2.115-8.851-3.528-3.463-1.837-4.304-6.206-2.438-9.654 2.446-4.519 8.52-5.646 13.295-3.746.682.272 1.383.528 2.103.768 4.195 1.401 8.432 2.102 12.713 2.102 6.677 0 11.557-1.576 14.639-4.729 3.082-3.154 4.623-7.971 4.623-14.452 0-.864-1.07-1.311-1.727-.751-2.174 1.854-4.637 3.33-7.391 4.43-3.51 1.401-7.276 2.102-11.3 2.102-9.075 0-16.266-2.628-21.574-7.883-5.307-5.343-7.961-13.313-7.961-23.911v-25.455c0-5.532 4.484-10.017 10.016-10.017s10.016 4.485 10.016 10.017v22.434c0 11.473 4.666 17.21 13.997 17.21 4.795 0 8.647-1.576 11.558-4.73 2.91-3.24 4.366-8.014 4.366-14.32v-20.594c0-5.532 4.484-10.017 10.016-10.017z" }))));
}
function WordMark(_a) {
    var _b = _a.color, color = _b === void 0 ? "#000" : _b, className = _a.className, props = __rest(_a, ["color", "className"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "128", height: "36", fill: "none", className: className, viewBox: "0 0 256 73" }, props),
        React.createElement("path", { fill: color, d: "M26.105 14.575c3.777 0 7.196.89 10.258 2.671 3.114 1.73 5.563 4.223 7.35 7.479 1.837 3.205 2.755 6.944 2.755 11.218 0 4.273-.918 8.038-2.756 11.294-1.786 3.205-4.236 5.698-7.349 7.478-3.062 1.73-6.481 2.595-10.258 2.595-1.022 0-2-.064-2.933-.193-3.544-.49-8.627 2.023-8.627 5.6v4.71a4 4 0 01-4 4H4a4 4 0 01-4-4V19.263a4 4 0 014-4h8.753c.61 0 1.103.494 1.103 1.104 0 1.028 1.373 1.572 2.208.97 2.555-1.84 5.902-2.76 10.041-2.76zm-3.062 31.212c2.552 0 4.644-.865 6.277-2.595 1.633-1.78 2.45-4.197 2.45-7.25 0-3.052-.817-5.443-2.45-7.172-1.633-1.781-3.725-2.671-6.277-2.671s-4.644.89-6.278 2.67c-1.633 1.73-2.45 4.121-2.45 7.174 0 3.052.817 5.469 2.45 7.25 1.634 1.73 3.726 2.594 6.278 2.594zM93.095 15.262a4 4 0 014 4v33.361a4 4 0 01-4 4h-8.753c-.61 0-1.103-.494-1.103-1.103 0-1.028-1.373-1.572-2.208-.971-2.556 1.84-5.903 2.761-10.041 2.761-3.777 0-7.222-.865-10.335-2.595-3.062-1.78-5.512-4.299-7.35-7.554-1.785-3.256-2.679-7.021-2.679-11.294 0-4.274.894-8.013 2.68-11.218 1.837-3.256 4.287-5.75 7.349-7.479 3.113-1.73 6.558-2.595 10.335-2.595 3.85 0 7.056.88 9.614 2.64.768.53 1.945.023 1.945-.91 0-.576.467-1.043 1.043-1.043h9.503zM74.052 45.787c2.552 0 4.644-.865 6.277-2.595 1.634-1.78 2.45-4.222 2.45-7.325 0-3.053-.816-5.444-2.45-7.174-1.633-1.73-3.725-2.594-6.277-2.594s-4.644.864-6.278 2.594c-1.633 1.73-2.45 4.121-2.45 7.174 0 3.103.817 5.545 2.45 7.325 1.634 1.73 3.726 2.595 6.278 2.595zM121.54 57.31c-3.471 0-6.89-.382-10.259-1.145-1.88-.454-3.553-.98-5.02-1.577-1.842-.75-2.5-2.903-1.699-4.724l1.114-2.533c.979-2.226 3.716-3.066 5.996-2.22.822.303 1.687.58 2.595.829 2.603.661 5.18.992 7.732.992 2.348 0 4.006-.23 4.976-.687 1.021-.509 1.531-1.221 1.531-2.137 0-.916-.612-1.552-1.837-1.908-1.174-.407-3.062-.788-5.665-1.144-3.318-.407-6.15-.941-8.498-1.603-2.296-.661-4.287-1.882-5.971-3.663-1.684-1.78-2.526-4.273-2.526-7.478 0-2.646.791-4.986 2.373-7.021 1.582-2.086 3.879-3.714 6.89-4.884 3.062-1.221 6.711-1.832 10.947-1.832 3.011 0 5.997.306 8.957.916 1.492.308 2.861.68 4.107 1.118 1.946.682 2.68 2.916 1.845 4.802l-1.119 2.523c-.952 2.147-3.537 2.981-5.761 2.227-2.522-.856-5.173-1.283-7.952-1.283-2.297 0-3.981.28-5.053.839-1.072.509-1.608 1.196-1.608 2.06 0 .967.587 1.654 1.761 2.06 1.174.357 3.113.739 5.818 1.146 3.42.508 6.252 1.093 8.498 1.755 2.245.661 4.185 1.882 5.818 3.663 1.684 1.73 2.526 4.171 2.526 7.325 0 2.595-.791 4.935-2.373 7.021-1.582 2.035-3.93 3.638-7.043 4.808-3.062 1.17-6.762 1.755-11.1 1.755zM174.429 14.575c3.777 0 7.196.865 10.258 2.595 3.114 1.73 5.563 4.223 7.35 7.479 1.837 3.205 2.756 6.944 2.756 11.218 0 4.273-.919 8.038-2.756 11.294-1.787 3.255-4.236 5.774-7.35 7.554-3.062 1.73-6.481 2.595-10.258 2.595-4.138 0-7.486-.92-10.041-2.761-.835-.601-2.208-.057-2.208.971 0 .61-.494 1.103-1.103 1.103h-8.753a4 4 0 01-4-4V4a4 4 0 014-4h6.545a4 4 0 014 4v5.09c0 3.578 5.11 6.135 8.657 5.668a22.213 22.213 0 012.903-.182zm-3.062 31.212c2.552 0 4.644-.865 6.277-2.595 1.634-1.78 2.45-4.222 2.45-7.325 0-3.053-.816-5.444-2.45-7.174-1.633-1.73-3.725-2.594-6.277-2.594s-4.644.864-6.278 2.594c-1.633 1.73-2.449 4.121-2.449 7.174 0 3.103.816 5.545 2.449 7.325 1.634 1.73 3.726 2.595 6.278 2.595zM241.189 15.262a4 4 0 014 4v29.806c0 7.682-2.067 13.431-6.201 17.247-4.083 3.866-9.977 5.8-17.684 5.8-4.032 0-7.808-.458-11.33-1.374-2.184-.577-4.167-1.324-5.947-2.243-1.759-.909-2.257-3.101-1.342-4.858l1.387-2.666c1.182-2.271 4.212-2.867 6.578-1.889.588.244 1.205.466 1.85.667 2.501.814 4.977 1.221 7.426 1.221 3.675 0 6.38-.84 8.115-2.518 1.735-1.68 2.603-4.172 2.603-7.479 0-.346-.418-.528-.682-.304-2.991 2.543-6.643 3.815-10.954 3.815-5.359 0-9.646-1.578-12.862-4.732-3.164-3.154-4.746-7.885-4.746-14.194V19.262a4 4 0 014-4h6.545a4 4 0 014 4v13.934c0 3.154.587 5.443 1.761 6.868 1.174 1.424 2.884 2.136 5.129 2.136 2.297 0 4.16-.814 5.589-2.442 1.48-1.628 2.22-4.07 2.22-7.326v-13.17a4 4 0 014-4h6.545zM254.134 4.913a44.769 44.769 0 00.337.3c.734.694 1.212 1.687 1.429 2.663l.022.101c.066.32.076.63.075.955l-.001.163c-.005.42-.04.816-.139 1.225l-.019.086a5.225 5.225 0 01-1.032 2.105l-.054.066c-.838 1.01-2.132 1.66-3.429 1.818-.678.055-1.36.043-2.024-.114l-.087-.02a5.129 5.129 0 01-3.156-2.23c-.745-1.236-1.084-2.8-.744-4.221.024-.091.05-.181.077-.271l.027-.092c.417-1.39 1.384-2.528 2.646-3.226 1.975-1.032 4.382-.737 6.072.692zm-7.079 2.526c-.078.058-.14.143-.133.24a.33.33 0 00.094.198.3.3 0 00.109.075.564.564 0 00.218.025h.025l.148-.002.154-.005.156-.002.27-.005c.06-.002.11.046.109.105l-.006 1.004-.002.516c-.002.166-.003.333-.003.499l-.001.19-.001.266-.001.153c.008.07.019.12.04.165.048.1.148.178.26.17a.359.359 0 00.238-.113c.063-.078.075-.185.076-.284.001-.031 0-.067-.001-.13v-.083l-.001-.272-.001-.19-.002-.496-.001-.508-.004-.9c0-.052.044-.094.097-.092.146.005.292.007.439.01l.153.005.148.002.136.004c.128-.014.128-.014.22-.123.021-.03.037-.051.048-.07.062-.102.02-.246-.069-.327a.52.52 0 00-.353-.112H249.381a142.157 142.157 0 00-.346-.001h-.367l-.471-.001a42.825 42.825 0 00-.536-.002h-.287a.609.609 0 00-.187.023.446.446 0 00-.132.068zm3.722-.016a.402.402 0 00-.171.28c-.013.096-.009.194-.01.294v.088l-.001.286v.615l-.002.534v.41l-.001.198V10.56a.852.852 0 00.057.268.371.371 0 00.112.147c.082.062.194.055.285.006a.34.34 0 00.179-.257c.013-.078.015-.156.017-.239l.002-.128.002-.136.003-.141.008-.446.005-.302.007-.39c.002-.116.152-.165.225-.073l.062.079c.136.173.269.35.399.527.044.059.086.125.149.163.093.057.219.034.317-.013a.502.502 0 00.168-.154l.095-.115.104-.133.126-.158c.082-.104.164-.208.245-.314l.077-.098c.02-.024.057-.01.058.022.002.287.006.574.01.86l.004.322.006.462v.146l.003.135v.036a.57.57 0 00.02.165.41.41 0 00.021.053c.051.102.151.185.267.175a.372.372 0 00.208-.084.23.23 0 00.026-.028c.062-.078.072-.185.076-.284.001-.038 0-.078-.001-.157l.001-.093v-.303-.21-.442a53.272 53.272 0 010-.565V8.43v-.208l-.001-.292v-.167a.891.891 0 00-.019-.144c-.028-.116-.115-.223-.235-.24a.356.356 0 00-.207.04.523.523 0 00-.164.15 9.202 9.202 0 00-.087.103c-.15.186-.297.373-.443.561l-.026.034a.616.616 0 01-.966.023l-.078-.096a24.283 24.283 0 01-.491-.617 1.325 1.325 0 00-.066-.071c-.102-.1-.256-.162-.375-.082z" })));
}

var baseStyle = {
    original: {
        logoBgk: '#fff',
        logo: '#dd3e3e',
        text: 'text-[#fff]',
        bgk: 'bg-[#dd3e3e]',
    }, light: {
        logoBgk: '#dd3e3e',
        logo: '#fff',
        text: 'text-[#dd3e3e]',
        bgk: 'bg-[#fff]',
    }, dark: {
        logoBgk: '#dd3e3e',
        logo: '#fff',
        text: 'text-[#fff]',
        bgk: 'bg-[#2D3131]',
    }, darktext: {
        logoBgk: '#fff',
        logo: '#000',
        text: 'text-[#000]',
        bgk: 'bg-[#fff] border-zinc-950/10',
    },
};
function Spinner(_a) {
    var className = _a.className;
    return (React__default.createElement("svg", { "aria-hidden": "true", role: "status", className: clsx("inline w-4 h-4 me-3 text-gray-200 animate-spin", className), viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
        React__default.createElement("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "#2D3131" })));
}
function PasbyButton(_a) {
    var _this = this;
    var type = _a.type, action = _a.action, variant = _a.variant, onClick = _a.onClick, className = _a.className;
    var _b = useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var handleClick = function () { return __awaiter$3(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    if (!onClick) {
                        setIsLoading(false);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, onClick()];
                case 1:
                    _a.sent();
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React__default.createElement("button", { type: type !== null && type !== void 0 ? type : "button", onClick: handleClick, className: clsx('relative flex justify-center items-center rounded-lg gap-2 px-8 py-2 text-sm', "".concat(baseStyle[variant].text, " ").concat(baseStyle[variant].bgk, " hover:").concat(baseStyle[variant].bgk, "/[2.5%] focus:").concat(baseStyle[variant].bgk, "/[5%]"), 'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:shadow-md focus:shadow-md', isLoading ? 'brightness-75' : '', className) },
        isLoading ?
            React__default.createElement(Spinner, { className: "absolute right-2 w-5 h-5" })
            : null,
        React__default.createElement(Logo, { className: "w-8 h-8", coloring: {
                text: baseStyle[variant].logo,
                fill: baseStyle[variant].logoBgk
            } }),
        build.capitalizeWords(action),
        " with pasby"));
}

function LoginButton(_a) {
    var _this = this;
    var className = _a.className, variant = _a.variant, action = _a.action, fallbackPath = _a.fallbackPath;
    var onHandle = function () { return __awaiter$3(_this, void 0, void 0, function () {
        var response, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/api/eid/login".concat(fallbackPath ? "?state=".concat(fallbackPath) : ''))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    url = (_a.sent()).url;
                    if (url) {
                        window.location.href = url;
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (React__default.createElement(PasbyButton, { variant: variant, className: className, action: action, onClick: onHandle }));
}

export { LoginButton, Logo, PasbyButton, WordMark };
//# sourceMappingURL=index.js.map
