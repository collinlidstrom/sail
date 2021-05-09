module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/Rj":
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "/NLt":
/***/ (function(module) {

module.exports = JSON.parse("{\"hero\":\"/content/img/photo/lake.jpg\",\"title\":\"Set Sail With Us\",\"subTitle\":\"Uncover the Best Talent Worldwide and Start Building the Team You Desire.\",\"searchTabs\":{\"tabs\":[{\"title\":\"HR and Recruitment Solutions\"},{\"title\":\"Features Sail Provides\"},{\"title\":\"Optimize Your Search Listings\"}],\"locationOptions\":[{\"value\":\"city_0\",\"label\":\"San Francisco\"},{\"value\":\"city_1\",\"label\":\"Los Angeles\"},{\"value\":\"city_2\",\"label\":\"Santa Monica\"},{\"value\":\"city_3\",\"label\":\"San Diego\"},{\"value\":\"city_4\",\"label\":\"Fresno\"}],\"typeOptions\":[{\"value\":\"type_0\",\"label\":\"Duplex\"},{\"value\":\"type_1\",\"label\":\"Appartment\"},{\"value\":\"type_2\",\"label\":\"House\"},{\"value\":\"type_3\",\"label\":\"Land\"},{\"value\":\"type_4\",\"label\":\"Other\"}],\"priceOptions\":[{\"value\":\"price_0\",\"label\":\"$5,000\"},{\"value\":\"price_1\",\"label\":\"$10,000\"},{\"value\":\"price_2\",\"label\":\"$25,000\"},{\"value\":\"price_3\",\"label\":\"$50,000\"}]},\"discover\":{\"title\":\"Discover How Our Platform Can Benefit Your Business\",\"subTitle\":\"The Talent You Need Is One Click Away\",\"blocks\":[{\"title\":\"Get Access to Our Large UserBase\",\"content\":\"Our platform is one of the fastest growing HR platforms today. Our platform provides users a unique one step experience that allows them to save time and conveniently apply to jobs available. \",\"icon\":\"user-1\",\"color\":\"primary\"},{\"title\":\"Tailored Applicant Qualifications\",\"content\":\"Sail's system settings enables employers to set the parameters and qualifications that they are looking for to ensure that applicants who apply match their needs.\",\"icon\":\"checked-circle-1\",\"color\":\"secondary\"},{\"title\":\"Geo-Location Search Features\",\"content\":\"We offer employers several options to narrow searches for candidates they desire. Location based settings are enabled to capture users nearby the job listing. Employers also have the opportunity to upgrade to premium placements for their listings to provide search engine optimization and preferred placement.\",\"icon\":\"destination-map-1\",\"color\":\"primary\"},{\"title\":\"Obtain Qualified Candidates Instantly\",\"content\":\"Staffing can be stressful and take time. We understand that some circumstances are time sensitive, which is why we offer employers the option to purchase our 'instant match' service. Sail is engineered to provide employers recommendations of qualified candidates the moment they post a job and sign up for this service.\",\"icon\":\"identity-1\",\"color\":\"primary\"},{\"title\":\"Premium Posting Placement\",\"content\":\"Some circumstances are time sensitive and require employers to get more attention. Our premium posting options enable employers to bid on their posting placement. Employers are able to see their placement when they have completed the bidding process. To place a premium job posting please see the link below.\",\"icon\":\"identity-1\",\"color\":\"primary\"},{\"title\":\"Search Engine Optimization\",\"content\":\"Employers who choose to post openings with the premium platform are more likely to appear when users search keywords. Our platform enables premium listings to match with key search words and appear towards the top of most search results.\",\"icon\":\"identity-1\",\"color\":\"primary\"},{\"title\":\"'Instant Match' Resume Recommendations\",\"content\":\"We Understand that filling shoes in a business is important and time sensitive. Our Resume Match service recommends users to employers who meet the qualifications they are looking for.\",\"icon\":\"identity-1\",\"color\":\"primary\"}]},\"divider\":{\"title\":\"What Are You Waiting For?\",\"subTitle\":\"Start Posting With Us Today\",\"content\":\"'Sail has helped our business staff many employees who are extremely talented' - Business Owner\",\"button\":\"Create Your Account Today!\",\"buttonLink\":\"#\"},\"team\":{\"title\":\"Enterprise Pricing Options\",\"subTitle\":\"Pricing Structure\",\"button\":\"View the Pricing Structure\",\"buttonLink\":\"/team\",\"members\":[{\"title\":\"Meredith Goodwin\",\"type\":\"CEO & Founder\",\"avatar\":\"img/avatar/agent-0.png\",\"link\":\"#\"},{\"title\":\"Weeks Garrett\",\"type\":\"Co-founder\",\"avatar\":\"img/avatar/agent-1.png\",\"link\":\"#\"},{\"title\":\"Fisher Bauer\",\"type\":\"CTO\",\"avatar\":\"img/avatar/agent-2.png\",\"link\":\"#\"},{\"title\":\"Aguilar Webb\",\"type\":\"Community\",\"avatar\":\"img/avatar/agent-3.png\",\"link\":\"#\"}]},\"brands\":{\"title\":\"Recognized By: \",\"brands\":[{\"title\":\"Brand 1\",\"img\":\"img/brand/brand-1.svg\"},{\"title\":\"Brand 2\",\"img\":\"img/brand/brand-2.svg\"},{\"title\":\"Brand 3\",\"img\":\"img/brand/brand-3.svg\"},{\"title\":\"Brand 4\",\"img\":\"img/brand/brand-4.svg\"},{\"title\":\"Brand 5\",\"img\":\"img/brand/brand-5.svg\"},{\"title\":\"Brand 6\",\"img\":\"img/brand/brand-6.svg\"},{\"title\":\"Brand 1\",\"img\":\"img/brand/brand-1.svg\"},{\"title\":\"Brand 2\",\"img\":\"img/brand/brand-2.svg\"},{\"title\":\"Brand 3\",\"img\":\"img/brand/brand-3.svg\"},{\"title\":\"Brand 4\",\"img\":\"img/brand/brand-4.svg\"}]}}");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "1/T7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Stars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CIrI");
/* harmony import */ var _CustomImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hLIj");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("SXSQ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CardRestaurant = props => {
  const data = props.data;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "h-100 border-0 shadow"
  }, __jsx("div", {
    style: {
      minHeight: "200px"
    },
    className: "card-img-top overflow-hidden dark-overlay"
  }, __jsx(_CustomImage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    src: `/content/img/photo/${data.image}`,
    layout: "fill",
    className: "bg-image",
    alt: data.name,
    loading: "eager",
    sizes: "(max-width: 576px) 100vw, (max-width:991px) 50vw, 280px"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link
  }, __jsx("a", {
    className: "tile-link"
  })), __jsx("div", {
    className: "card-img-overlay-bottom z-index-20"
  }, __jsx("h4", {
    className: "text-white text-shadow"
  }, data.name), __jsx("p", {
    className: "mb-2 text-xs"
  }, __jsx(_components_Stars__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    stars: data.stars
  }))), __jsx("div", {
    className: "card-img-overlay-top d-flex justify-content-between align-items-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    color: "transparent",
    className: "px-3 py-2"
  }, data.category), __jsx("a", {
    href: "#",
    className: "card-fav-icon position-relative z-index-40"
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: "heart-1",
    className: "text-white"
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx("p", {
    className: "text-sm text-muted mb-3"
  }, data.about.substring(0, 115) + "..."), __jsx("p", {
    className: "text-sm text-muted text-uppercase mb-1"
  }, "By", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/user-profile"
  }, __jsx("a", {
    className: "text-dark ml-1"
  }, data.person))), __jsx("p", {
    className: "text-sm mb-0"
  }, data.tags.map((tag, index) => __jsx("a", {
    key: index,
    className: "mr-1",
    href: "#"
  }, tag, index < data.tags.length - 1 && ",")))));
};

/* harmony default export */ __webpack_exports__["a"] = (CardRestaurant);

/***/ }),

/***/ "1OuS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CIrI");
/* harmony import */ var _CustomImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hLIj");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("SXSQ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CardRoom = props => {
  const data = props.data;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "h-100 border-0 shadow"
  }, __jsx("div", {
    className: "card-img-top overflow-hidden gradient-overlay"
  }, __jsx(_CustomImage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    src: `/content/img/photo/${data.image}`,
    width: 1350,
    height: 900,
    alt: data.name,
    layout: "responsive",
    loading: props.eager ? "eager" : "lazy",
    className: "img-fluid",
    sizes: "(max-width:576px) 100vw, (max-width:991px) 50vw, (max-width:1199px) 30vw, 250px"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/detail-rooms"
  }, __jsx("a", {
    className: "tile-link"
  })), __jsx("div", {
    className: "card-img-overlay-bottom z-index-20"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    className: "text-white text-sm align-items-center"
  }, __jsx("div", {
    className: "avatar avatar-border-white mr-2 overflow-hidden"
  }, __jsx(_CustomImage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    src: `/content/${data.avatar}`,
    alt: data.person,
    layout: "fixed",
    width: 44,
    height: 44,
    loading: props.eager ? "eager" : "lazy",
    className: "img-fluid"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    body: true
  }, data.person))), __jsx("div", {
    className: "card-img-overlay-top text-right"
  }, __jsx("a", {
    className: "card-fav-icon position-relative z-index-40",
    href: "#"
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: "heart-1",
    className: "text-white"
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "d-flex align-items-center"
  }, __jsx("div", {
    className: "w-100"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    tag: "h6"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/detail-rooms"
  }, __jsx("a", {
    className: "text-decoration-none text-dark"
  }, data.name))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
    className: "d-flex mb-3"
  }, __jsx("p", {
    className: "flex-grow-1 mb-0 text-muted text-sm"
  }, data.subtitle), __jsx("p", {
    className: "flex-shrink-1 mb-0 card-stars text-xs text-right"
  }, __jsx(_Stars__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    stars: data.stars
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    className: "text-muted"
  }, __jsx("span", {
    className: "h4 text-primary"
  }, "$", data.price), "\xA0per night"))));
};

/* harmony default export */ __webpack_exports__["a"] = (CardRoom);

/***/ }),

/***/ "1ccW":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "1qLE":
/***/ (function(module) {

module.exports = JSON.parse("[{\"link\":\"#\",\"img\":\"img/instagram/instagram-1.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-2.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-3.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-4.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-5.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-6.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-7.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-8.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-9.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-10.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-11.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-12.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-13.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-14.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-10.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-11.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-12.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-13.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-14.jpg\"}]");

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Afsf");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "7oih":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/NextNProgress.js

var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * NProgress
 *
 */




// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class NextNProgress_NextNProgress extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "timer", null);

    _defineProperty(this, "routeChangeStart", () => {
      external_nprogress_default.a.set(this.props.startPosition);
      external_nprogress_default.a.start();
    });

    _defineProperty(this, "routeChangeEnd", () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        external_nprogress_default.a.done(true);
      }, this.props.stopDelayMs);
    });
  }

  render() {
    const {
      color,
      height
    } = this.props;
    return __jsx(style_default.a, {
      id: "2264455431",
      dynamic: [color, height, color, color, color, color]
    }, ["#nprogress{pointer-events:none;}", `#nprogress .bar{background:${color};position:fixed;z-index:9999;top:0;left:0;width:100%;height:${height}px;}`, `#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px ${color},0 0 5px ${color};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}`, "#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}", `#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:${color};border-left-color:${color};border-radius:50%;-webkit-animation:nprogresss-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}`, ".nprogress-custom-parent{overflow:hidden;position:relative;}", ".nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]);
  }

  componentDidMount() {
    const {
      options
    } = this.props;

    if (options) {
      external_nprogress_default.a.configure(options);
    }

    router_default.a.events.on("routeChangeStart", this.routeChangeStart);
    router_default.a.events.on("routeChangeComplete", this.routeChangeEnd);
    router_default.a.events.on("routeChangeError", this.routeChangeEnd);
  }

}

_defineProperty(NextNProgress_NextNProgress, "defaultProps", {
  color: "#29D",
  startPosition: 0.3,
  stopDelayMs: 200,
  height: 3
});

/* harmony default export */ var components_NextNProgress = (NextNProgress_NextNProgress);
// EXTERNAL MODULE: external "next-google-fonts"
var external_next_google_fonts_ = __webpack_require__("mEKR");
var external_next_google_fonts_default = /*#__PURE__*/__webpack_require__.n(external_next_google_fonts_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./src/hooks/UseWindowSize.js
var UseWindowSize = __webpack_require__("La1E");

// EXTERNAL MODULE: ./src/components/ActiveLink.js
var ActiveLink = __webpack_require__("re7B");

// EXTERNAL MODULE: ./src/data/menu.json
var menu = __webpack_require__("TZgs");

// EXTERNAL MODULE: ./src/data/user-menu.json
var user_menu = __webpack_require__("Ft8s");

// EXTERNAL MODULE: ./src/components/CustomImage.js
var CustomImage = __webpack_require__("hLIj");

// EXTERNAL MODULE: ./src/components/Icon.js
var Icon = __webpack_require__("SXSQ");

// CONCATENATED MODULE: ./src/components/Header.js
var Header_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Header = props => {
  const [collapsed, setCollapsed] = external_react_default.a.useState(false);
  const [dropdownOpen, setDropdownOpen] = external_react_default.a.useState({});
  const [searchFocus, setSearchFocus] = external_react_default.a.useState(false);
  const [dropdownAnimate, setDropdownAnimate] = external_react_default.a.useState(false);
  const [parentName, setParentName] = external_react_default.a.useState(false);
  const size = Object(UseWindowSize["a" /* default */])();

  const onFocus = () => setSearchFocus(!searchFocus);

  const toggleDropdown = name => {
    setDropdownOpen(_objectSpread(_objectSpread({}, dropdownOpen), {}, {
      [name]: !dropdownOpen[name]
    }));
  };

  const onLinkClick = parent => {
    size.width < 991 && setCollapsed(!collapsed);
    setParentName(parent);
  }; // highlight not only active dropdown item, but also its parent, i.e. dropdown toggle


  const highlightDropdownParent = () => {
    menu.map(item => {
      item.dropdown && item.dropdown.map(dropdownLink => {
        dropdownLink.link && dropdownLink.link === router_default.a.route && setParentName(item.title);
        dropdownLink.links && dropdownLink.links.map(link => link.link === router_default.a.route && setParentName(item.title));
      });
      item.megamenu && item.megamenu.map(megamenuColumn => megamenuColumn.map(megamenuBlock => megamenuBlock.links.map(dropdownLink => {
        if (dropdownLink.link === router_default.a.route) {
          dropdownLink.parent ? setParentName(dropdownLink.parent) : setParentName(item.title);
        }
      })));
      item.link === router_default.a.route && setParentName(item.title);
    });
  };

  external_react_default.a.useEffect(highlightDropdownParent, []);
  return Header_jsx("header", {
    className: `header ${props.headerClasses ? props.headerClasses : ""}`
  }, Header_jsx(external_reactstrap_["Navbar"], {
    color: props.nav.color ? props.nav.color : "white",
    light: props.nav.light && true,
    dark: props.nav.dark && true,
    fixed: props.nav.fixed ? props.nav.fixed : "top",
    expand: "lg",
    className: props.nav.classes ? props.nav.classes : ""
  }, Header_jsx(external_reactstrap_["Container"], {
    fluid: true
  }, Header_jsx("div", {
    className: "d-flex align-items-center"
  }, Header_jsx(link_default.a, {
    href: "/",
    passHref: true
  }, Header_jsx("a", {
    className: "py-1 navbar-brand"
  }, Header_jsx("img", {
    src: "/content/svg/SAIL.PNG",
    width: "50",
    height: "41",
    alt: "Directory logo"
  }))), Header_jsx(external_reactstrap_["Form"], {
    id: "search",
    className: "form-inline d-none d-sm-flex"
  }, Header_jsx("div", {
    className: `input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3 ${searchFocus ? "focus" : ""}`
  }, Header_jsx(external_reactstrap_["Label"], {
    for: "search_search",
    className: "label-absolute"
  }, Header_jsx("i", {
    className: "fa fa-search"
  }), Header_jsx("span", {
    className: "sr-only"
  }, "What are you looking for?")), Header_jsx(external_reactstrap_["Input"], {
    id: "search_search",
    placeholder: "Search",
    "aria-label": "Search",
    bsSize: "sm",
    className: "border-0 shadow-0 bg-gray-200",
    onFocus: onFocus,
    onBlur: () => setTimeout(() => onFocus(), 333)
  }), Header_jsx("button", {
    type: "reset",
    className: "btn btn-sm btn-reset"
  }, Header_jsx("i", {
    className: "fas fa-times"
  }))))), Header_jsx(external_reactstrap_["NavbarToggler"], {
    onClick: () => setCollapsed(!collapsed),
    className: "navbar-toggler-right"
  }, Header_jsx("i", {
    className: "fa fa-bars"
  })), Header_jsx(external_reactstrap_["Collapse"], {
    isOpen: collapsed,
    navbar: true
  }, Header_jsx(external_reactstrap_["Form"], {
    id: "searchcollapsed",
    className: "form-inline mt-4 mb-2 d-sm-none"
  }, Header_jsx("div", {
    className: `input-label-absolute input-label-absolute-left input-reset w-100 ${searchFocus ? "focus" : ""}`
  }, Header_jsx(external_reactstrap_["Label"], {
    for: "searchcollapsed_search",
    className: "label-absolute"
  }, Header_jsx("i", {
    className: "fa fa-search"
  }), Header_jsx("span", {
    className: "sr-only"
  }, "What are you looking for?")), Header_jsx(external_reactstrap_["Input"], {
    id: "searchcollapsed_search",
    placeholder: "Search",
    "aria-label": "Search",
    bsSize: "sm",
    className: "border-0 shadow-0 bg-gray-200",
    onFocus: onFocus,
    onBlur: () => setTimeout(() => onFocus(), 333)
  }), Header_jsx(external_reactstrap_["Button"], {
    type: "reset",
    size: "sm",
    color: "deoco",
    className: "btn-reset"
  }, Header_jsx("i", {
    className: "fas fa-times"
  })))), Header_jsx(external_reactstrap_["Nav"], {
    navbar: true,
    className: "ml-auto"
  }, menu && menu.map(item => item.dropdown || item.megamenu ? // show entire menu to unlogged user or hide items that have hideToLoggedUser set to true
  !props.loggedUser || props.loggedUser && !item.hideToLoggedUser ? Header_jsx(external_reactstrap_["Dropdown"], {
    nav: true,
    inNavbar: true,
    key: item.title,
    className: item.position ? `position-${item.position}` : ``,
    isOpen: dropdownOpen[item.title],
    toggle: () => toggleDropdown(item.title)
  }, Header_jsx(external_reactstrap_["DropdownToggle"], {
    nav: true,
    caret: true,
    onClick: () => setDropdownAnimate(_objectSpread(_objectSpread({}, dropdownAnimate), {}, {
      [item.title]: !dropdownOpen[item.title]
    })),
    className: parentName === item.title ? "active" : ""
  }, item.title), Header_jsx(external_reactstrap_["DropdownMenu"], {
    className: `${dropdownAnimate[item.title] === false ? "hide" : ""} ${item.megamenu ? "megamenu py-lg-0" : ""}`
  }, item.dropdown && item.dropdown.map(dropdownItem => dropdownItem.links ? Header_jsx(external_react_default.a.Fragment, {
    key: dropdownItem.title
  }, Header_jsx("h6", {
    className: "dropdown-header font-weight-normal"
  }, dropdownItem.title), dropdownItem.links.map(link => Header_jsx(ActiveLink["a" /* default */], {
    key: link.title,
    activeClassName: "active",
    href: link.link,
    passHref: true
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    onClick: () => onLinkClick(item.title)
  }, link.title, link.new && Header_jsx(external_reactstrap_["Badge"], {
    color: "info-light",
    className: "ml-1 mt-n1"
  }, "New"))))) : Header_jsx(ActiveLink["a" /* default */], {
    key: dropdownItem.title,
    activeClassName: "active",
    href: dropdownItem.link,
    passHref: true
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    onClick: () => onLinkClick(item.title)
  }, dropdownItem.title, dropdownItem.new && Header_jsx(external_reactstrap_["Badge"], {
    color: "info-light",
    className: "ml-1 mt-n1"
  }, "New")))), item.megamenu && Header_jsx(external_reactstrap_["Row"], null, Header_jsx(external_reactstrap_["Col"], {
    lg: "9"
  }, Header_jsx(external_reactstrap_["Row"], {
    className: "p-3 pr-lg-0 pl-lg-5 pt-lg-5"
  }, item.megamenu.map((megamenuItem, index) => Header_jsx(external_reactstrap_["Col"], {
    key: index,
    lg: "3"
  }, megamenuItem.map((block, index) => Header_jsx(external_react_default.a.Fragment, {
    key: index
  }, Header_jsx("h6", {
    className: "text-uppercase"
  }, block.title), Header_jsx("ul", {
    className: "megamenu-list list-unstyled"
  }, block.links.map(link => Header_jsx("li", {
    key: link.title,
    className: "megamenu-list-item"
  }, Header_jsx(ActiveLink["a" /* default */], {
    activeClassName: "active",
    href: link.link,
    as: link.as,
    passHref: true
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    className: "megamenu-list-link",
    onClick: () => link.parent ? onLinkClick(link.parent) : onLinkClick(item.title)
  }, link.title, link.new && Header_jsx(external_reactstrap_["Badge"], {
    color: "info-light",
    className: "ml-1 mt-n1"
  }, "New"))))))))))), item.services && Header_jsx(external_reactstrap_["Row"], {
    className: "megamenu-services d-none d-lg-flex pl-lg-5"
  }, item.services.map(service => Header_jsx(external_reactstrap_["Col"], {
    key: service.title,
    xl: "3",
    lg: "6",
    className: "d-flex"
  }, Header_jsx("div", {
    className: "megamenu-services-item"
  }, Header_jsx(Icon["a" /* default */], {
    icon: service.icon,
    className: "megamenu-services-icon"
  }), Header_jsx("div", null, Header_jsx("h6", {
    className: "text-uppercase"
  }, service.title), Header_jsx("p", {
    className: "mb-0 text-muted text-sm"
  }, service.content))))))), item.image && Header_jsx(external_reactstrap_["Col"], {
    lg: "3",
    className: "d-none d-lg-block"
  }, Header_jsx(CustomImage["a" /* default */], {
    src: item.image,
    alt: "",
    className: "bg-image",
    loading: "eager",
    layout: "fill"
  }))))) : "" : props.loggedUser && !item.hideToLoggedUser || !props.loggedUser ? Header_jsx(external_reactstrap_["NavItem"], {
    key: item.title,
    className: item.button ? "mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block" : ""
  }, item.button ? item.showToLoggedUser !== false && Header_jsx(ActiveLink["a" /* default */], {
    activeClassName: "active",
    href: item.link
  }, Header_jsx("a", {
    className: "btn btn-primary",
    onClick: () => onLinkClick(item.title)
  }, item.title)) : Header_jsx(ActiveLink["a" /* default */], {
    activeClassName: "active",
    href: item.link,
    passHref: true
  }, Header_jsx(external_reactstrap_["NavLink"], {
    onClick: () => onLinkClick(item.title)
  }, item.title))) : ""), props.loggedUser && user_menu && user_menu.map(item => Header_jsx(external_reactstrap_["Dropdown"], {
    nav: true,
    inNavbar: true,
    key: item.title,
    className: item.type === "avatar" ? "ml-lg-3" : "",
    isOpen: dropdownOpen[item.title],
    toggle: () => toggleDropdown(item.title)
  }, Header_jsx(external_reactstrap_["DropdownToggle"], {
    nav: true,
    style: item.type === "avatar" && {
      padding: 0
    },
    onClick: () => setDropdownAnimate(_objectSpread(_objectSpread({}, dropdownAnimate), {}, {
      [item.title]: !dropdownOpen[item.img]
    }))
  }, item.type === "avatar" ? Header_jsx("div", {
    className: "mr-2 avatar-border-white avatar avatar-sm overflow-hidden"
  }, Header_jsx(CustomImage["a" /* default */], {
    src: `/content${item.img}`,
    width: 36,
    height: 36,
    layout: "fixed",
    alt: item.title
  })) : item.title), Header_jsx(external_reactstrap_["DropdownMenu"], {
    className: dropdownAnimate[item.title] === false ? "hide" : "",
    right: true
  }, item.dropdown && item.dropdown.map(dropdownItem => Header_jsx(ActiveLink["a" /* default */], {
    key: dropdownItem.title,
    activeClassName: "active",
    href: dropdownItem.link,
    passHref: true
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    onClick: () => onLinkClick(item.title)
  }, dropdownItem.title)))))))))));
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./src/data/footer.json
var footer = __webpack_require__("tY5m");

// CONCATENATED MODULE: ./src/components/Footer.js
var Footer_jsx = external_react_default.a.createElement;





const Footer = () => {
  return Footer_jsx("footer", {
    className: "position-relative z-index-10 d-print-none"
  }, Footer_jsx("div", {
    className: "py-6 bg-gray-200 text-muted"
  }, Footer_jsx(external_reactstrap_["Container"], null, Footer_jsx(external_reactstrap_["Row"], null, footer && footer.map(item => Footer_jsx(external_reactstrap_["Col"], {
    key: item.title,
    lg: item.lg && item.lg,
    md: item.md && item.md,
    className: "mb-5 mb-lg-0"
  }, Footer_jsx("div", {
    className: "font-weight-bold text-uppercase text-dark mb-3"
  }, item.title), item.content && Footer_jsx("p", {
    className: item.contentBottomMargin ? `mb-${item.contentBottomMargin}` : ""
  }, item.content), item.social && Footer_jsx("ul", {
    className: "list-inline"
  }, item.social.map(socialIcon => Footer_jsx("li", {
    key: socialIcon.title,
    className: "list-inline-item"
  }, Footer_jsx("a", {
    href: socialIcon.link,
    target: "_blank",
    title: socialIcon.title,
    className: "text-muted text-hover-primary"
  }, Footer_jsx("i", {
    className: `fab fa-${socialIcon.title}`
  }))))), item.links && Footer_jsx("ul", {
    className: "list-unstyled"
  }, item.links.map(link => Footer_jsx("li", {
    key: link.title
  }, Footer_jsx(link_default.a, {
    href: link.link
  }, Footer_jsx("a", {
    className: "text-muted"
  }, link.title, link.new && Footer_jsx(external_reactstrap_["Badge"], {
    color: "info-light",
    className: "ml-1"
  }, "New")))))), item.form && Footer_jsx(external_reactstrap_["Form"], {
    id: "newsletter-form"
  }, Footer_jsx("div", {
    className: "input-group mb-3"
  }, Footer_jsx(external_reactstrap_["Input"], {
    type: "email",
    placeholder: item.form.placeholder,
    "aria-label": item.form.placeholder,
    className: "bg-transparent border-dark border-right-0"
  }), Footer_jsx("div", {
    className: "input-group-append"
  }, Footer_jsx(external_reactstrap_["Button"], {
    className: "btn-outline-dark border-left-0",
    color: "deoco",
    type: "submit"
  }, Footer_jsx("i", {
    className: "fa fa-paper-plane text-lg"
  })))))))))), Footer_jsx("div", {
    className: "py-4 font-weight-light bg-gray-800 text-gray-300"
  }, Footer_jsx(external_reactstrap_["Container"], null, Footer_jsx(external_reactstrap_["Row"], {
    className: "align-items-center"
  }, Footer_jsx(external_reactstrap_["Col"], {
    md: "6",
    className: "text-center text-md-left"
  }, Footer_jsx("p", {
    className: "text-sm mb-md-0"
  }, "\xA9 2020, Your company. All rights reserved.")), Footer_jsx(external_reactstrap_["Col"], {
    md: "6"
  }, Footer_jsx("ul", {
    className: "list-inline mb-0 mt-2 mt-md-0 text-center text-md-right"
  }, Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("img", {
    width: "32",
    height: "32",
    src: "/content/svg/visa.svg",
    alt: "...",
    className: "w-2rem"
  })), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("img", {
    src: "/content/svg/mastercard.svg",
    width: "32",
    height: "32",
    alt: "...",
    className: "w-2rem"
  })), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("img", {
    src: "/content/svg/paypal.svg",
    width: "32",
    height: "32",
    alt: "...",
    className: "w-2rem"
  })), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("img", {
    src: "/content/svg/western-union.svg",
    width: "32",
    height: "32",
    alt: "...",
    className: "w-2rem"
  }))))))));
};

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./src/components/FormContext.js
var FormContext_jsx = external_react_default.a.createElement;

const FormContext = /*#__PURE__*/external_react_default.a.createContext([{}, () => {}]);

const FormProvider = props => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({});
  return FormContext_jsx(FormContext.Provider, {
    value: [state, setState]
  }, props.children);
};


// EXTERNAL MODULE: ./src/components/BookingContext.js
var BookingContext = __webpack_require__("BXFW");

// EXTERNAL MODULE: ./src/assets/svg/orion-svg-sprite.svg
var orion_svg_sprite = __webpack_require__("ZCJN");
var orion_svg_sprite_default = /*#__PURE__*/__webpack_require__.n(orion_svg_sprite);

// CONCATENATED MODULE: ./src/components/SvgIcons.js
var SvgIcons_jsx = external_react_default.a.createElement;



const Icons = () => SvgIcons_jsx("div", {
  style: {
    position: "absolute"
  }
}, SvgIcons_jsx(orion_svg_sprite_default.a, null));

/* harmony default export */ var SvgIcons = (Icons);
// CONCATENATED MODULE: ./src/components/Layout.js
var Layout_jsx = external_react_default.a.createElement;










const Layout = pageProps => {
  const headerProps = {
    nav: {
      classes: pageProps.nav && pageProps.nav.classes,
      fixed: pageProps.nav && pageProps.nav.fixed,
      color: pageProps.nav && pageProps.nav.color,
      light: pageProps.nav && pageProps.nav.light,
      dark: pageProps.nav && pageProps.nav.dark
    },
    loggedUser: pageProps.loggedUser,
    headerClasses: pageProps.headerClasses
  };
  return Layout_jsx("div", {
    style: {
      paddingTop: pageProps.noPaddingTop ? "0" : "72px"
    },
    className: pageProps.className
  }, Layout_jsx(external_next_google_fonts_default.a, {
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:ital,wght@0,300;0,400;0,700;1,400&display=swap"
  }), Layout_jsx(head_default.a, null, Layout_jsx("title", null, pageProps.title, " - Directory React Theme"), Layout_jsx("link", {
    rel: "icon",
    href: "/favicon.png"
  })), Layout_jsx(components_NextNProgress, {
    color: "#4E66F8",
    options: {
      showSpinner: false
    }
  }), !pageProps.hideHeader && Layout_jsx(components_Header, headerProps), pageProps.listingForm || pageProps.bookingForm ? Layout_jsx(external_react_default.a.Fragment, null, pageProps.listingForm && Layout_jsx(FormProvider, null, Layout_jsx("main", null, pageProps.children)), pageProps.bookingForm && Layout_jsx(BookingContext["b" /* BookingProvider */], null, Layout_jsx("main", null, pageProps.children))) : Layout_jsx("main", null, pageProps.children), !pageProps.hideFooter && Layout_jsx(components_Footer, null), Layout_jsx(SvgIcons, null));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "98FW":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "9cbB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/CardRestaurant.js
var CardRestaurant = __webpack_require__("1/T7");

// EXTERNAL MODULE: ./src/components/CardRoom.js
var CardRoom = __webpack_require__("1OuS");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./src/components/CustomImage.js
var CustomImage = __webpack_require__("hLIj");

// CONCATENATED MODULE: ./src/components/CardPoster.js
var __jsx = external_react_default.a.createElement;





const CardPoster = props => {
  const data = props.data;
  return __jsx(external_reactstrap_["Card"], {
    className: "card-poster gradient-overlay hover-animate mb-4 mb-lg-0"
  }, __jsx(link_default.a, {
    href: data.link
  }, __jsx("a", {
    className: "tile-link"
  })), __jsx(CustomImage["a" /* default */], {
    src: `/content/${data.img}`,
    layout: "fill",
    className: "bg-image",
    alt: "Card image",
    loading: "eager",
    sizes: "(max-width: 776px) 100vw, 776px"
  }), __jsx(external_reactstrap_["CardBody"], {
    className: "card-body overlay-content"
  }, __jsx(external_reactstrap_["CardTitle"], {
    tag: "h6",
    className: "card-title text-shadow text-uppercase"
  }, data.title), __jsx(external_reactstrap_["CardText"], {
    className: "card-text text-sm"
  }, data.subtitle)));
};

/* harmony default export */ var components_CardPoster = (CardPoster);
// EXTERNAL MODULE: ./src/components/Icon.js
var Icon = __webpack_require__("SXSQ");

// CONCATENATED MODULE: ./src/components/CardProperty.js
var CardProperty_jsx = external_react_default.a.createElement;






const CardProperty = props => {
  const data = props.data;
  return CardProperty_jsx(external_reactstrap_["Card"], {
    className: "h-100 border-0 shadow"
  }, CardProperty_jsx("div", {
    className: "card-img-top overflow-hidden gradient-overlay"
  }, CardProperty_jsx(CustomImage["a" /* default */], {
    src: `/content/${data.img}`,
    width: 1350,
    height: 900,
    layout: "responsive",
    alt: data.title,
    loading: props.eager ? "eager" : "lazy",
    className: "img-fluid",
    sizes: "(max-width:576px) 100vw, (max-width:991px) 50vw, 280px"
  }), CardProperty_jsx(link_default.a, {
    href: data.link
  }, CardProperty_jsx("a", {
    className: "tile-link"
  })), CardProperty_jsx("div", {
    className: "card-img-overlay-top text-right"
  }, CardProperty_jsx("a", {
    href: "#",
    className: "card-fav-icon position-relative z-index-40"
  }, CardProperty_jsx(Icon["a" /* default */], {
    icon: "heart-1",
    className: "text-white"
  })))), CardProperty_jsx(external_reactstrap_["CardBody"], {
    className: "d-flex align-items-center"
  }, CardProperty_jsx("div", {
    className: "w-100"
  }, CardProperty_jsx(external_reactstrap_["CardTitle"], {
    tag: "h6"
  }, CardProperty_jsx(link_default.a, {
    href: data.link
  }, CardProperty_jsx("a", {
    className: "text-decoration-none text-dark"
  }, data.title))), CardProperty_jsx(external_reactstrap_["CardSubtitle"], {
    className: "text-sm text-secondary mb-2",
    tag: "p"
  }, CardProperty_jsx("i", {
    className: "fa fa-map-marker text-secondary opacity-4 mr-1"
  }), data.location), CardProperty_jsx("p", {
    className: "text-sm text-muted text-uppercase"
  }, data.type), CardProperty_jsx("p", {
    className: "card-text d-flex justify-content-between text-gray-800 text-sm"
  }, CardProperty_jsx("span", {
    className: "mr-1"
  }, CardProperty_jsx("i", {
    className: "fa fa-ruler-combined text-primary opacity-4 text-xs mr-1"
  }), data.meters, " m", CardProperty_jsx("sup", null, "2")), CardProperty_jsx("span", {
    className: "mr-1"
  }, CardProperty_jsx("i", {
    className: "fa fa-bed text-primary opacity-4 text-xs mr-1"
  }), data.bedrooms), CardProperty_jsx("span", {
    className: "mr-1"
  }, CardProperty_jsx("i", {
    className: "fa fa-bath text-primary opacity-4 text-xs mr-1"
  }), data.bathrooms), CardProperty_jsx("span", null, CardProperty_jsx("i", {
    className: "fa fa-tag text-primary opacity-4 text-xs mr-1"
  }), data.price)))));
};

/* harmony default export */ var components_CardProperty = (CardProperty);
// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__("+/Rj");
var external_react_id_swiper_default = /*#__PURE__*/__webpack_require__.n(external_react_id_swiper_);

// CONCATENATED MODULE: ./src/components/Swiper.js
var Swiper_jsx = external_react_default.a.createElement;








const Swiper = props => {
  const breakpoints = [];

  if (props.sm) {
    breakpoints[565] = {
      slidesPerView: props.sm
    };
  }

  if (props.md) {
    breakpoints[768] = {
      slidesPerView: props.md
    };
  }

  if (props.lg) {
    breakpoints[991] = {
      slidesPerView: props.lg
    };
  }

  if (props.xl) {
    breakpoints[1200] = {
      slidesPerView: props.xl
    };
  }

  if (props.xxl) {
    breakpoints[1400] = {
      slidesPerView: props.xxl
    };
  }

  if (props.xxxl) {
    breakpoints[1600] = {
      slidesPerView: props.xxxl
    };
  }

  const params = {
    containerClass: `swiper-container ${props.className}`,
    slidesPerView: props.perView,
    effect: props.effect,
    allowTouchMove: props.allowTouchMove === false ? false : true,
    spaceBetween: props.spaceBetween,
    centeredSlides: props.centeredSlides,
    roundLengths: props.roundLengths,
    loop: props.loop,
    speed: props.speed ? props.speed : 400,
    parallax: props.parallax,
    breakpoints: breakpoints,
    autoplay: props.autoplay ? {
      delay: props.delay
    } : false,
    pagination: props.pagination !== false ? {
      el: `.swiper-pagination.${props.paginationClass}`,
      clickable: true,
      dynamicBullets: true
    } : false,
    navigation: {
      nextEl: props.navigation ? ".swiper-button-next" : "",
      prevEl: props.navigation ? ".swiper-button-prev" : ""
    },
    wrapperClass: `swiper-wrapper ${props.wrapperClass ? props.wrapperClass : ""}`
  };
  return props.data ? Swiper_jsx(external_react_id_swiper_default.a, params, props.data.map((slide, index) => props.simple ? Swiper_jsx("div", {
    key: slide
  }, Swiper_jsx(CustomImage["a" /* default */], {
    src: `/content/img/photo/${slide}`,
    layout: "fill",
    className: "bg-image",
    alt: "Hero image",
    loading: "eager"
  })) : Swiper_jsx("div", {
    key: index,
    className: "h-auto px-2"
  }, props.cards && Swiper_jsx("div", {
    className: "w-100 h-100 hover-animate"
  }, Swiper_jsx(CardRoom["a" /* default */], {
    data: slide.properties,
    eager: true
  })), props.propertyCards && Swiper_jsx("div", {
    className: "w-100 h-100 hover-animate"
  }, Swiper_jsx(components_CardProperty, {
    data: slide,
    eager: true
  })), props.imgCards && Swiper_jsx(components_CardPoster, {
    data: slide,
    eager: true
  }), props.restaurantCards && Swiper_jsx("div", {
    className: "w-100 h-100 hover-animate"
  }, Swiper_jsx(CardRestaurant["a" /* default */], {
    data: slide.properties,
    eager: true
  }))))) : "loading";
};

/* harmony default export */ var components_Swiper = __webpack_exports__["a"] = (Swiper);

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Afsf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7oih");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9cbB");
/* harmony import */ var _components_PopularCities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("RBRr");
/* harmony import */ var _components_Discover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("t7JC");
/* harmony import */ var _components_Brands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("pB4U");
/* harmony import */ var _components_Instagram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("LUFw");
/* harmony import */ var _data_index4_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("/NLt");
var _data_index4_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t("/NLt", 1);
/* harmony import */ var _components_CustomImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("hLIj");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white"
      },
      title: "Real Estate"
    }
  };
}

const Index4 = () => {
  const [activeTab, setActiveTab] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const toggle = tab => {
    activeTab !== tab && setActiveTab(tab);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "d-flex align-items-center dark-overlay"
  }, __jsx(_components_CustomImage__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    src: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.hero,
    layout: "fill",
    className: "bg-image",
    alt: "Hero image",
    loading: "eager",
    priority: true
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "py-6 py-lg-7 text-white overlay-content"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "8"
  }, __jsx("h1", {
    className: "display-3 font-weight-bold text-shadow"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.title), __jsx("p", {
    className: "text-lg text-shadow mb-6"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.subTitle))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "position-relative mt-n6 z-index-20"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    tabs: true,
    className: "search-bar-nav-tabs"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.searchTabs && _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.searchTabs.tabs.map((tab, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    key: index,
    className: index < _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.searchTabs.tabs.length - 1 ? "mr-2" : ""
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    onClick: () => toggle(index),
    className: activeTab === index ? "active" : ""
  }, tab.title)))), __jsx("div", {
    className: "search-bar search-bar-with-tabs p-3 p-lg-4"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["TabContent"], {
    activeTab: activeTab
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.searchTabs && _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.searchTabs.tabs.map((tab, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tabId: index,
    key: index
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "4",
    className: "d-flex align-items-center form-group no-divider"
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
    instanceId: "locationPicker",
    options: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.searchTabs.locationOptions,
    placeholder: "Location",
    className: "selectpicker",
    classNamePrefix: "selectpicker"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6",
    lg: "3",
    className: "d-flex align-items-center form-group no-divider"
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
    instanceId: "typePicker",
    options: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.searchTabs.typeOptions,
    placeholder: "Type",
    className: "selectpicker",
    classNamePrefix: "selectpicker"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6",
    lg: "3",
    className: "d-flex align-items-center form-group no-divider"
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
    instanceId: "pricePicker",
    options: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.searchTabs.priceOptions,
    placeholder: "Max price",
    className: "selectpicker",
    classNamePrefix: "selectpicker"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "2",
    className: "form-group mb-0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "primary",
    block: true,
    className: "h-100"
  }, "Search"))))))))), _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.featured && __jsx("section", {
    className: "py-6"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "mb-lg-6"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8"
  }, __jsx("p", {
    className: "subtitle text-secondary"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.featured.subTitle), __jsx("h2", {
    className: "mb-md-0"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.featured.title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "4",
    className: "d-md-flex align-items-center justify-content-end"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.featured.buttonLink
  }, __jsx("a", {
    className: "text-muted text-sm"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.featured.button, __jsx("i", {
    className: "fas fa-angle-double-right ml-2"
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true
  }, __jsx(_components_Swiper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    className: "swiper-container-mx-negative items-slider-full px-lg-5 pt-3 pb-5",
    perView: 1,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5,
    xxxl: 6,
    data: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.featured.swiper,
    propertyCards: true
  }))), _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.popularCities && __jsx(_components_PopularCities__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.popularCities.title,
    subTitle: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.popularCities.subTitle,
    greyBackground: true
  }), _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.discover && __jsx(_components_Discover__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    className: "py-6",
    title: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.discover.title,
    subTitle: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.discover.subTitle,
    blocks: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.discover.blocks
  }), _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.divider && __jsx("section", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "bg-gray-100 py-6 px-3 px-lg-5 rounded-lg shadow-sm"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "6",
    className: "mb-5 mb-lg-0 text-center text-lg-left"
  }, __jsx("p", {
    className: "subtitle text-secondary"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.divider.title), __jsx("p", {
    className: "text-lg"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.divider.subTitle), __jsx("p", {
    className: "text-muted mb-0"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.divider.content)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "6",
    className: "d-flex align-items-center justify-content-center"
  }, __jsx("div", {
    className: "text-center"
  }, __jsx("p", {
    className: "mb-2"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.divider.buttonLink
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    href: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.divider.buttonLink,
    size: "large",
    color: "primary"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.divider.button))), __jsx("p", {
    className: "text-muted text-small"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.divider.small)))))), _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.team && __jsx("section", {
    className: "py-6"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "mb-lg-6"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8"
  }, __jsx("p", {
    className: "subtitle text-secondary"
  }, "Who are we?"), __jsx("h2", {
    className: "mb-md-0"
  }, "Meet our team")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4",
    className: "d-md-flex align-items-center justify-content-end"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.team.buttonLink
  }, __jsx("a", {
    className: "text-muted text-sm"
  }, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.team.button, __jsx("i", {
    className: "fas fa-angle-double-right ml-2"
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.team.members.map(member => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    key: member.title,
    sm: "6",
    lg: "3",
    className: "mb-3 mb-lg-0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "border-0 hover-animate bg-transparent"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: member.link
  }, __jsx("a", {
    className: "position-relative"
  }, __jsx("div", {
    className: "card-img-top team-img"
  }, __jsx(_components_CustomImage__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    src: `/content/${member.avatar}`,
    alt: "",
    width: 408,
    height: 504,
    layout: "responsive",
    className: "img-fluid",
    sizes: "(max-width:576px) 100vw, (max-width:991px) 50vw, 260px"
  })), __jsx("div", {
    className: "team-circle bg-secondary-light"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: " team-body text-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h6"
  }, member.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
    tag: "p",
    className: "text-muted text-xs text-uppercase"
  }, member.type)))))))), _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.brands && __jsx(_components_Brands__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    title: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.brands.title,
    brands: _data_index4_json__WEBPACK_IMPORTED_MODULE_10__.brands.brands,
    greyBackground: true
  }), __jsx(_components_Instagram__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index4);

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BXFW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BookingProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BookingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext([{}, () => {}]);

const BookingProvider = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  return __jsx(BookingContext.Provider, {
    value: [state, setState]
  }, props.children);
};



/***/ }),

/***/ "BhOx":
/***/ (function(module) {

module.exports = JSON.parse("{\"button\":\"See all cities\",\"buttonLink\":\"/category\",\"cities\":[{\"title\":\"San Francisco\",\"img\":\"img/photo/photo-1449034446853-66c86144b0ad.jpg\",\"link\":\"/category-2\"},{\"title\":\"Los Angeles\",\"img\":\"img/photo/photo-1429554429301-1c7d5ae2d42e.jpg\",\"link\":\"/category\"},{\"title\":\"Santa Monica\",\"img\":\"img/photo/photo-1523430410476-0185cb1f6ff9.jpg\",\"link\":\"/category-3\"},{\"title\":\"San Diego\",\"img\":\"img/photo/photo-1505245208761-ba872912fac0.jpg\",\"link\":\"/category-2\"},{\"title\":\"Fresno\",\"img\":\"img/photo/photo-1519867850-74775a87e783.jpg\",\"link\":\"/category\"}]}");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CIrI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Stars = props => {
  const starsArray = [];

  for (let i = 1; i <= 5; i++) {
    i <= props.stars ? starsArray.push(__jsx("i", {
      key: i,
      className: `fa ${props.size ? `fa-` + props.size : ""} fa-star ${props.color ? props.color : "text-warning"}`
    })) : starsArray.push(__jsx("i", {
      key: i,
      className: `fa fa-star ${props.size ? `fa-` + props.size : ""} text-gray-300`
    }));
  }

  return starsArray;
};

/* harmony default export */ __webpack_exports__["a"] = (Stars);

/***/ }),

/***/ "Ft8s":
/***/ (function(module) {

module.exports = JSON.parse("[{\"img\":\"/img/avatar/avatar-10.jpg\",\"type\":\"avatar\",\"title\":\"Jack London\",\"dropdown\":[{\"title\":\"Booking process - 4 pages\",\"link\":\"/user-booking-1\"},{\"title\":\"Bookings — grid view\",\"link\":\"/user-grid\"},{\"title\":\"Booking detail\",\"link\":\"/user-booking-detail\"},{\"title\":\"Sign out\",\"link\":\"/login\",\"divider\":true}]}]");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "LUFw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+/Rj");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hLIj");
/* harmony import */ var _data_instagram_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1qLE");
var _data_instagram_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("1qLE", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Instagram = () => {
  const params = {
    containerClass: `swiper-container instagram-slider`,
    slidesPerView: 4,
    breakpoints: {
      1900: {
        slidesPerView: 16
      },
      1500: {
        slidesPerView: 12
      },
      1200: {
        slidesPerView: 10
      },
      991: {
        slidesPerView: 8
      },
      768: {
        slidesPerView: 5
      }
    }
  };
  return __jsx("section", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "px-0"
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, params, _data_instagram_json__WEBPACK_IMPORTED_MODULE_4__ && _data_instagram_json__WEBPACK_IMPORTED_MODULE_4__.map((img, index) => __jsx("div", {
    key: index,
    className: "overflow-hidden"
  }, __jsx("a", {
    href: img.link,
    className: "d-block",
    style: {
      lineHeight: 0
    }
  }, __jsx(_CustomImage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    src: `/content/${img.img}`,
    width: 160,
    height: 160,
    className: "img-fluid hover-scale",
    alt: "..."
  })))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Instagram);

/***/ }),

/***/ "La1E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
  const isClient = false;

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RBRr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BhOx");
var _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("BhOx", 1);
/* harmony import */ var _CustomImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hLIj");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PopularCities = props => {
  return __jsx("section", {
    className: `py-6 ${props.greyBackground ? "bg-gray-100" : ""}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mb-5"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "8"
  }, __jsx("p", {
    className: "subtitle text-primary"
  }, props.subTitle), __jsx("h2", null, props.title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "4",
    className: "d-md-flex align-items-center justify-content-end"
  }, _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.buttonLink && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.buttonLink
  }, __jsx("a", {
    className: "text-muted text-sm"
  }, _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.button, __jsx("i", {
    className: "fas fa-angle-double-right ml-2"
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.cities && _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.cities.map((city, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    key: index,
    lg: index === 0 ? "8" : "4",
    className: "d-flex align-items-lg-stretch mb-4"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "shadow-lg border-0 w-100 border-0 hover-animate overflow-hidden"
  }, __jsx(_CustomImage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    src: `/content/${city.img}`,
    layout: "fill",
    alt: "Card image",
    className: "bg-image",
    loading: "eager"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: city.link
  }, __jsx("a", {
    className: "tile-link"
  })), __jsx("div", {
    className: "d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7 position-relative"
  }, __jsx("h3", {
    className: "text-shadow text-uppercase mb-0"
  }, city.title))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (PopularCities);

/***/ }),

/***/ "SXSQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Icon = props => __jsx("svg", {
  className: `svg-icon ${props.className ? props.className : ""}`,
  style: props.style
}, __jsx("use", {
  xlinkHref: `#${props.icon}`
}));

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "TZgs":
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Home\",\"dropdown\":[{\"title\":\"Search Jobs\",\"link\":\"/\"},{\"title\":\"For Employers\",\"link\":\"/index-2\"},{\"title\":\"Meet the Team\",\"link\":\"/team\"},{\"title\":\"Settings\",\"link\":\"/index-4\",\"new\":true}]},{\"title\":\"For Job Seekers\",\"hideToLoggedUser\":true,\"dropdown\":[{\"title\":\"Job Seekers\",\"links\":[{\"title\":\"Search Jobs\",\"link\":\"/login\"},{\"title\":\"User Login\",\"link\":\"/login\"},{\"title\":\"User Settings\",\"link\":\"/docs/docs-directory-structure\"},{\"title\":\"Resources\",\"link\":\"index-2\"}]}]},{\"title\":\"For Employers\",\"hideToLoggedUser\":true,\"dropdown\":[{\"title\":\"For Employers\",\"links\":[{\"title\":\"Employer Sign Up\",\"link\":\"/signup\"},{\"title\":\"Product Offerings\",\"link\":\"/index-4\"},{\"title\":\"Employer Settings\",\"link\":\"/docs/docs-directory-structure\"},{\"title\":\"Resume Database\",\"link\":\"/docs/docs-directory-structure\"},{\"title\":\"Advertise With Us\",\"link\":\"/index-3\"}]}]},{\"title\":\"Contact Us\",\"link\":\"/contact\"},{\"title\":\"Upload Documents\",\"hideToLoggedUser\":true,\"dropdown\":[{\"title\":\"Upload Your Documents\",\"links\":[{\"title\":\"Upload Resume\",\"link\":\"/docs/docs-introduction\"},{\"title\":\"Upload Cover Letter\",\"link\":\"/docs/docs-directory-structure\"},{\"title\":\"Upload References\",\"link\":\"/docs/docs-next\"},{\"title\":\"Upload CV\",\"link\":\"/docs/docs-customizing-css\"},{\"title\":\"Upload Additional Documents and Publications\",\"link\":\"/docs/docs-credits\"}]},{\"title\":\"Document Templates and Themes\",\"links\":[{\"title\":\"Resume Templates\",\"link\":\"/docs/components-bootstrap\"},{\"title\":\"Cover Letter Templates\",\"link\":\"/docs/components-directory\"}]}]},{\"title\":\"Post A Job Opening For Free\",\"link\":\"/user-add-0\",\"button\":true,\"hideToLoggedUser\":true}]");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZCJN":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function OrionSvgSprite (props) {
    return React.createElement("svg",props,[React.createElement("symbol",{"viewBox":"0 0 64 64","id":"calls-1","key":0},[React.createElement("title",{"key":0},"Calls"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M58.9 47l-10.4-6.8a4.8 4.8 0 0 0-6.5 1.3c-2.4 2.9-5.3 7.7-16.2-3.2S19.6 24.4 22.5 22a4.8 4.8 0 0 0 1.3-6.5L17 5.1c-.9-1.3-2.1-3.4-4.9-3S2 6.6 2 15.6s7.1 20 16.8 29.7S39.5 62 48.4 62s13.2-8 13.5-10-1.7-4.1-3-5z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"landline-1","key":1},[React.createElement("title",{"key":0},"Landline"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M52 26.3V53a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6V26.3","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("rect",{"data-name":"layer2","x":"20","y":"30","width":"4","height":"4","rx":"1","ry":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("rect",{"data-name":"layer2","x":"30","y":"30","width":"4","height":"4","rx":"1","ry":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("rect",{"data-name":"layer2","x":"40","y":"30","width":"4","height":"4","rx":"1","ry":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("rect",{"data-name":"layer2","x":"20","y":"39","width":"4","height":"4","rx":"1","ry":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("rect",{"data-name":"layer2","x":"30","y":"39","width":"4","height":"4","rx":"1","ry":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7}),React.createElement("rect",{"data-name":"layer2","x":"40","y":"39","width":"4","height":"4","rx":"1","ry":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":8}),React.createElement("rect",{"data-name":"layer2","x":"20","y":"48","width":"4","height":"4","rx":"1","ry":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":9}),React.createElement("rect",{"data-name":"layer2","x":"30","y":"48","width":"4","height":"4","rx":"1","ry":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":10}),React.createElement("rect",{"data-name":"layer2","x":"40","y":"48","width":"4","height":"4","rx":"1","ry":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":11}),React.createElement("path",{"data-name":"layer1","d":"M17.8 24.7a3.9 3.9 0 0 0 3-4.4c-.3-3-1.4-7.3 11.2-7.3s11.5 4.3 11.2 7.3a3.9 3.9 0 0 0 3 4.4l9.9 2c1.3.2 3.2.8 4.6-1.1a11.4 11.4 0 0 0-2-13.4C53.5 7.2 43.1 5 32 5S10.5 7.2 5.3 12.3a11.4 11.4 0 0 0-2 13.4c1.4 1.8 3.3 1.3 4.6 1.1z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":12})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"smartphone-1","key":2},[React.createElement("title",{"key":0},"Smartphone"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M15 10h34M15 48h34","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("rect",{"data-name":"layer1","x":"15","y":"2","width":"34","height":"60","rx":"4","ry":"4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"55","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"chat-app-1","key":3},[React.createElement("title",{"key":0},"Chat App"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M33.8 27.6a13 13 0 0 0 3.2.4h5v7l7.6-7A13 13 0 0 0 49 2H37a13 13 0 0 0-12 18","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"43","cy":"15","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer2","cx":"35","cy":"15","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer2","cx":"51","cy":"15","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer1","d":"M37.4 54.3c-8.2-1.4-7.4-3.5-7.4-4.9v-2.5a13.9 13.9 0 0 0 4-10.1v-6.7C34 22.8 28.7 20 24 20s-10 2.8-10 10.1v6.7a13.8 13.8 0 0 0 4.1 10.1v2.5c0 1.4.7 3.5-7.4 4.9S2 60 2 62h44c0-2-1.3-6.4-8.6-7.7z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"paper-plane-1","key":4},[React.createElement("title",{"key":0},"Paper Plane"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M26 38v21l10.3-14.6","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M3 29L59 5l-9 48-24-15-23-9zM59 5L26 38","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"read-email-1","key":5},[React.createElement("title",{"key":0},"Read Email"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M54 33.6V2H10v31.6M18 12h10m-4 8h22m-28 8h28","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"d":"M42.08 41.944L62 28M2 28l19.92 13.944M2 62l20.929-21.071c3.905-3.9 14.237-3.9 18.143 0L62 62","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"d":"M54 21.063L62 28v34H2V28l8-6.937","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"mail-1","key":6},[React.createElement("title",{"key":0},"Mail"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M2 12h60v40H2z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"telephone-operator-1","key":7},[React.createElement("title",{"key":0},"Telephone Operator"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M46 33h5a3.3 3.3 0 0 0 3-3v-7a3.3 3.3 0 0 0-3-3h-5m-29 0h-5a3.3 3.3 0 0 0-3 3v7a3.3 3.3 0 0 0 3 3h6.2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M25.4 42.3C20.7 39.4 17 33.2 17 26V16C17 5.6 24.8 2 31.4 2 38 2 46 5.6 46 16v16c0 4-4 7-7 7","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M24 41.3V44c0 2 .4 5-10.6 7A14.2 14.2 0 0 0 2 62h59a14.6 14.6 0 0 0-11.6-11C38.7 49 39 46 39 44v-5","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer2","d":"M39 39a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M21.4 48.5l10 12.5 10.2-12.5M17 18c12 0 12-8 20-8s9 7 9 7","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"customer-support-1","key":8},[React.createElement("title",{"key":0},"Customer Support"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M24 40.5V44c0 2 .6 5-10.4 7A14.6 14.6 0 0 0 2 62h59a14.3 14.3 0 0 0-11.4-11C39 49 40 46 40 44v-5","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M46.4 33H51a3.3 3.3 0 0 0 3-3v-7a3.3 3.3 0 0 0-3-3h-5m-28 0h-6a3.3 3.3 0 0 0-3 3v7a3.3 3.3 0 0 0 3 3h5.2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer2","d":"M46 18C26 18 26 4 26 4s1 12-8 15m18 43l9.6-12m-27.7 0L28 62M17.9 50a10.8 10.8 0 0 1-4.9-4c4-4 5-20 5-20m28 0s0 16 4 20a10.7 10.7 0 0 1-4.7 4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer2","d":"M26 42c-4.7-2.9-8-8.8-8-16V16C18 5.6 25.4 2 32 2s14 3.6 14 14v16c0 4-4 7-6 7","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer1","d":"M40 38.9a2.9 2.9 0 0 0-2.9-2.9h-2.2a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 2.9 3.1H37a3 3 0 0 0 3-3.1z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"support-1","key":9},[React.createElement("title",{"key":0},"Support"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M12 26v-4c0-11 8-20 19-20h2c11 0 19 9 19 20v4M40 58a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4a4 4 0 0 0 4-4zm0 0s12 0 12-14","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M16 44H7.6A3.6 3.6 0 0 1 4 40.4V29.6A3.6 3.6 0 0 1 7.6 26H16zm32 0h8.4a3.6 3.6 0 0 0 3.6-3.6V29.6a3.6 3.6 0 0 0-3.6-3.6H48z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"sailing-1","key":10},[React.createElement("title",{"key":0},"Sailing"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M34 6s14.2 4.9 25.3 36H16.1S34 32.8 34 6z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M18 60c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m28 1a7.8 7.8 0 0 1-4 1c-4 0-4-2-8-2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M14 61l-6-5.3V50h50a30.4 30.4 0 0 1-8 10M34 50V2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"yacht-1","key":11},[React.createElement("title",{"key":0},"Yacht"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M8 39V25.7S23.5 21 38 21l10.7 7","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M12 24.6V15h8v7.8","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M2 49v-7.7s27.9-12.1 60-15.1c0 5.7-1.8 13.1-12.1 22.8z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"44","cy":"37","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("circle",{"data-name":"layer1","cx":"52","cy":"35","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"airplane-mode-1","key":12},[React.createElement("title",{"key":0},"Airplane Mode"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M57.5 7.5a5 5 0 0 0-7.1 0L39.9 18.1l-25.6-3.3s-1.9-.3-2.7.5l-3 3a1.3 1.3 0 0 0-.4 1.4c.2.5 1.6 1.2 2 1.4L28 30l-7.2 7.2-.7.7-9.1-1.3a1.6 1.6 0 0 0-1.5.5l-2.2 2.2c-.3.3-.9 1 .4 1.6l11.6 4.8s4.2 10.3 4.8 11.6 1.3.7 1.6.4l2.2-2.2a1.6 1.6 0 0 0 .5-1.5l-1.3-9.1.7-.7 7.2-7.1 9 17.7c.2.5.9 1.9 1.4 2a1.3 1.3 0 0 0 1.4-.4l3-3c.8-.8.5-2.7.5-2.7l-3.4-25.6 10.6-10.6a5 5 0 0 0 0-7z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"speedometer-1","key":13},[React.createElement("title",{"key":0},"Speedometer"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","r":"30","cy":"32","cx":"32","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M10 32a22 22 0 1 1 44 0","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M24 20l4.188 17.142a3.987 3.987 0 1 0 6.93-3.624C35.124 33.396 24 20 24 20","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"restaurant-1","key":14},[React.createElement("title",{"key":0},"Restaurant"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("ellipse",{"data-name":"layer1","cx":"58","cy":"18","rx":"4","ry":"6","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M4 12v38m54-26v26M10 12v6a4 4 0 0 1-4 4H4","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"31","cy":"33","r":"19","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M38 41.4A11 11 0 0 1 20.1 34m2.3-8A11 11 0 0 1 42 32.9","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"swimming-pool-1","key":15},[React.createElement("title",{"key":0},"Swimming Pool"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M48 25H20m28 16H20M10 10a5 5 0 0 1 5-5 5 5 0 0 1 5 5v41.3M38 10a5 5 0 0 1 5-5 5 5 0 0 1 5 5v41.2","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M18 51c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m28 1a7.8 7.8 0 0 1-4 1c-4 0-4-2-8-2m-32 8c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m28 1a7.7 7.7 0 0 1-4 1c-4 0-4-2-8-2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"flip-flops-1","key":16},[React.createElement("title",{"key":0},"Flip Flops"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M27.9 45.4c-.9-4.3-3.7-14.7-3.2-21.4s4.4-22.7-10-22C10.5 2.3.5 3.6 2.2 18.4s8 33.5 15.5 35.3 11-4 10.2-8.3zm22.7-33.2C36.2 9.9 38.3 25.8 38 32.4s-4.3 16.3-5.7 20.4 1.5 10 9.3 9.1 16.3-18.3 19.7-32.5-6.5-16.5-10.7-17.2z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M14 10c.8 2.1-1.5 5.3-4 8s-7.5 12.1 0 20m12-4s5.2-13.4-8.2-21.4m36.6 7.2c-1 2 .9 5.3 3.1 8.3s6.2 12.7-2.3 19.6m-11.7-5.2s-3.7-13.7 10.8-20","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"mountain-1","key":17},[React.createElement("title",{"key":0},"Mountain"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M14.4 25L2.1 47h40L31.9 29m16.2 18h14l-7.8-13.7","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M24.1 27l7.9 2-6.8-12c-1.1-2-5.1-2-6.2 0l-4.5 8 5.6 4zm20.3-2.9L41 30.2l4.3 3 3-1.5 6 1.5-5.1-9.1c-.8-1.5-3.9-1.5-4.8 0z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"beach-1","key":18},[React.createElement("title",{"key":0},"Beach"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M7.998 61.99a26.781 26.781 0 0 1 19.111-8c12.12 0 20.89 8 20.89 8zm33.998-42c1.49 9.448 2.088 23.518-7.842 34.888","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M33.998 33.99c.659-.96 6.727-11.74 7.828-13.697a.244.244 0 0 1 .4-.034l11.77 13.73A26.77 26.77 0 0 0 50.25 20.38a.085.085 0 0 1 .124-.114 54.868 54.868 0 0 0 9.624 5.724s.35-5.554-5.67-9.773a.145.145 0 0 1 .07-.265c4.316-.453 5.6-1.962 5.6-1.962s-5.453-4.627-11.688-2.13a.176.176 0 0 1-.246-.192c.679-3.285 1.934-7.678 1.934-7.678s-5.637 2.32-7.863 5.776a.277.277 0 0 1-.373.09c-5.584-3.144-9.764-1.865-9.764-1.865l5.728 5.728a.13.13 0 0 1-.101.224 11.836 11.836 0 0 0-11.629 6.047 37.693 37.693 0 0 1 9.648-.072.189.189 0 0 1 .107.317c-.91.983-3.909 5.02-1.753 13.755z","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","r":"8","cy":"27.995","cx":"11.998","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"suitcase-1","key":19},[React.createElement("title",{"key":0},"Suitcase"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M28 38h-8V26l4-4 4 4v12zm-4-16v-6M12 56v4m40-4v4","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("rect",{"data-name":"layer1","x":"2","y":"16","width":"60","height":"40","rx":"3","ry":"3","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M24 16v-5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5m-28 0v40m40-40v40","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"cabin-baggage-1","key":20},[React.createElement("title",{"key":0},"Cabin Baggage"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M25 40h12v10H25zm-2 18v4m16-4v4","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M17 24h28v34H17zm8 0V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v19","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"road-1","key":21},[React.createElement("title",{"key":0},"Road"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M52.1 2C32.1 2 24 14.2 24 20s4 6.1 4 12c0 8.2-24 20-24 20M58 8c-7.5 0-14 4.2-14 10s14 10.2 14 26c0 14.1-10 18-10 18","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M42 10l-1.3.7m-4.4 41.4l-1.8 1.6m7.1-9.8a14 14 0 0 1-1.5 3.6m.9-11.8a16 16 0 0 1 .7 2.7m-5.5-11l1.8 2.7m-4.3-10.7a10.5 10.5 0 0 0 .3 3m4.1-10.2a13.2 13.2 0 0 0-2.4 2.1m-6.4 42.9L28 58","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"subway-1","key":22},[React.createElement("title",{"key":0},"Subway"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M18 50l-8 12m36-12l8 12","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("rect",{"data-name":"layer2","x":"10","y":"2","width":"44","height":"48","rx":"3","ry":"3","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M10 14h44M10 34h44","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M28 8h8","style":{"stroke":"var(--layer2, #101010)"},"key":5}),React.createElement("circle",{"data-name":"layer2","cx":"18","cy":"42","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":6}),React.createElement("circle",{"data-name":"layer2","cx":"46","cy":"42","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":7}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M12.7 58h38.6","style":{"stroke":"var(--layer2, #101010)"},"key":8})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"sedan-1","key":23},[React.createElement("title",{"key":0},"Sedan"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M48 28l-5.5-10a3.7 3.7 0 0 0-3.1-2H17.3a3.2 3.2 0 0 0-2.6 2l-5 10M58 42h4V31a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v11h4m12 0h28","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"12","cy":"42","r":"6","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"52","cy":"42","r":"6","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"bus-1","key":24},[React.createElement("title",{"key":0},"Bus"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M52 44h8.5a1.5 1.5 0 0 0 1.5-1.5V28l-2-9c-.6-1.7-1.3-3-3-3H5a3 3 0 0 0-3 3v23a2.2 2.2 0 0 0 2 2h6m8 0h26M2 30h50m0-13.8V44M19 30V16m17 14V16","data-name":"layer1","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","r":"4","cy":"44","cx":"14","data-name":"layer2","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","r":"4","cy":"44","cx":"48","data-name":"layer2","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("path",{"d":"M52 36h10","strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","data-name":"layer1","style":{"stroke":"var(--layer2, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"cart-1","key":25},[React.createElement("title",{"key":0},"Cart"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M2 6h10l10 40h32l8-24H16","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"23","cy":"54","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"49","cy":"54","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"paper-bag-1","key":26},[React.createElement("title",{"key":0},"Paper Bag"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M8 22h48v40H8z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M22 26V12A10 10 0 0 1 32 2a10 10 0 0 1 10 10v14","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"retail-bag-1","key":27},[React.createElement("title",{"key":0},"Retail Bag"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M4 14h56v48H4zm2 0V2h52v12","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M6.2 2.1L16 8 6 14M57.8 2.1L48 8l10 6","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M42 24a10 10 0 0 1-20 0","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"dollar-sign-1","key":28},[React.createElement("title",{"key":0},"Dollar Sign"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M39.889 24A8 8 0 0 0 32 17.334c-4.418 0-8 2.914-8 7.333s4 6.42 8 7.334c4 .9 8 2.917 8 7.334s-3.582 7.333-8 7.333a8 8 0 0 1-8-8","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"d":"M32 17.334v-5.335m0 40.003v-5.335","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","r":"30","cy":"32","cx":"32","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"pay-by-card-1","key":29},[React.createElement("title",{"key":0},"Pay by Card"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M40 20l8.8 8.7C51.2 31.1 52 34.2 52 40c0 8.6-.1 22-.1 22M22 44a20 20 0 0 0 3.3 11.5C28.1 60 28 61.3 28 62","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M29.8 44H14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v31M30 2v23","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M44.1 39.1L28.4 23.5a5 5 0 0 0-7 0 5 5 0 0 0 0 7l8.6 8.6s-2.6 8 6 14.9","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"money-1","key":30},[React.createElement("title",{"key":0},"Money"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M42 22a20 20 0 1 1-20 20","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("circle",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","r":"20","cy":"22.001","cx":"22","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M26.949 17a5.006 5.006 0 0 0-4.932-4.167c-2.762 0-5 1.822-5 4.583s2.5 4.012 5 4.584 5 1.822 5 4.584-2.238 4.584-5 4.584a5 5 0 0 1-5-5","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("path",{"d":"M22.018 12.832v-2.831m0 23.998v-2.832","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":5}),React.createElement("path",{"d":"M42 53.999v-2.834","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":6}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M37 46.165a5 5 0 0 0 5 5c2.762 0 5-1.822 5-4.582S44.5 42.562 42 42a9.814 9.814 0 0 1-2.887-1.1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":7}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M46.93 37a4.993 4.993 0 0 0-1.535-2.835","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":8})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"money-box-1","key":31},[React.createElement("title",{"key":0},"Money Box"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M28.8 19.5a21.1 21.1 0 0 0-7.1 2.2c-7.9 4.2-9.2 11-9.2 16.3s2.3 13.1 10.8 20h7.3v-4l8.9.5a20.1 20.1 0 0 0 2.3 3.5h6.7v-6a47.9 47.9 0 0 0 6-5c2.9.3 5.9-2 7-8.7 0-1-.5-1.3-1-1.3a6.8 6.8 0 0 1-3-1c-.4-.5-1.6-4.7-3.8-8a11.7 11.7 0 0 1 4.1-5.2c-2.8-1.4-5.7-2.4-11.4-1.8-1.5-.3-4-.9-6.4-1.3","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"34.5","cy":"14","r":"8","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M12.5 38c-2.9-.3-10-1.4-10 2s1.9 3.4 3.8 2.6 4.3-5.5-3.8-8.6m25.7-8.9a20.1 20.1 0 0 1 12.7-.1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"48.5","cy":"34","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"pay-1","key":32},[React.createElement("title",{"key":0},"Pay"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M52 37h10v22H52zm0 18.2c-2 0-14.9 5.8-22 5.8-4.2 0-7.9-2.2-16-6-3.8-1.8-12-6.6-12-10s10.9 1.1 20.1 4","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"34.1","cy":"11","r":"8","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer2","cx":"20","cy":"29","r":"8","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M36.1 53h-10a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4c12 0 8-6 22-6","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"open-box-1","key":33},[React.createElement("title",{"key":0},"Open Box"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M10 36.125v14.037l22 11.58 22-11.58V36.125","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"d":"M54 23.246l7-8.549-21.742-11.42-7.324 8.42L54 23.246z","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"d":"M32 61.742v-27","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"d":"M31.934 11.704l-7.258-8.42L3 14.769l7 8.742 21.934-11.807z","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"d":"M32 34.742l-8.584 8.929L2.967 31.995 10 23.511l22 11.231zm22-11.496l7 8.742-20.324 11.743L32 34.742l22-11.496z","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"delivery-time-1","key":34},[React.createElement("title",{"key":0},"Delivery Time"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M62 46v-5l-8-7h-8","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"24","cy":"54","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer2","cx":"54","cy":"54","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M50 54H28m-8 0h-4v-8h46v8h-4M24.5 24H46v22m-30 0V29.8M2 38h6m-2 8h2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("circle",{"data-name":"layer1","cx":"14","cy":"18","r":"12","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M14 12v8h6","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"store-1","key":35},[React.createElement("title",{"key":0},"Store"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M36 36h12v22H36z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M56 30v28H8V30","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M16 36h14v12H16z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M52.6 6H11.4L2 22.5a7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0zM2 22h60M32 6v16.5m-15 0L22 6m25 16.5L42 6","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"label-tag-1","key":36},[React.createElement("title",{"key":0},"Label Tag"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M25.6 61L3 38.4 38.4 3l21.2 1.4L61 25.6 25.6 61z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"48","cy":"15","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M31.3 21.4l11.3 11.3m-22.6 0l8.5 8.5M25.6 27l5.7 5.7","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"tag-1","key":37},[React.createElement("title",{"key":0},"Tag"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M25.6 61L3 38.4 38.4 3l21.2 1.4L61 25.6 25.6 61z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"48","cy":"16","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"giftbox-1","key":38},[React.createElement("title",{"key":0},"Giftbox"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M56 34v28H8V34M4 22h56v12H4z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M24 22v40m16-40v40M26.2 5A7.4 7.4 0 0 0 20 2a8 8 0 0 0-5.3 14c4.2 3.7 17.3 6 17.3 6 0-6-3.4-14.3-5.8-17zm11.6 0A7.4 7.4 0 0 1 44 2a8 8 0 0 1 5.3 14C45.1 19.7 32 22 32 22c0-6 3.4-14.3 5.8-17z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"fountain-pen-1","key":39},[React.createElement("title",{"key":0},"Fountain Pen"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M27.4 17.9L41.6 3.7a5.4 5.4 0 0 1 7.6 0L51 5.6M14.54 42.148l23.617-23.617 7.778 7.778-23.617 23.617z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M45.9 26.3l15.5-15.5L53.6 3 38.1 18.5","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M2.6 61.8s7.4-.9 11.8-2.9a6.9 6.9 0 0 0 1.9-1l.7-.6a7 7 0 1 0-9.9-9.9l-.6.7a6.9 6.9 0 0 0-1.1 2.1c-1.9 4.4-2.8 11.6-2.8 11.6zm8.1-8.1l-8.1 8.1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"pen-1","key":40},[React.createElement("title",{"key":0},"Pen"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M9.7 54.3l-7.6 7.6m15.1-10.8a6.5 6.5 0 0 0-4.3-4.3 6 6 0 0 1-5.6.9l-.9.7-.5.7a6.4 6.4 0 0 0-1 1.9c-1.8 4.2-2.8 10.9-2.8 10.9s6.8-.9 11-2.7a6.5 6.5 0 0 0 1.7-1l.7-.6.7-.9a6 6 0 0 1 1-5.6z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M61.1 6.9l-36 40.4a6 6 0 1 1-9-8l.5-.5L57 2.8a2.8 2.8 0 0 1 4 4z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"key-1","key":41},[React.createElement("title",{"key":0},"Key"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M56.7 7.3a18 18 0 0 0-28.7 21l-8 7.9V40h-6v6H8v6H4l-2 2v8h8l25.8-26A18 18 0 0 0 56.7 7.3zm-5.9 11.5a4 4 0 1 1 0-5.7 4 4 0 0 1 0 5.7z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"keyhole-1","key":42},[React.createElement("title",{"key":0},"Keyhole"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"32","r":"30","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M38.5 48l-2.2-17.1a9 9 0 1 0-8.7 0L25.5 48z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"stack-1","key":43},[React.createElement("title",{"key":0},"Stack"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer3","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M18.3 39.6L4.2 47 32 61.7 59.8 47l-14.1-7.4","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M18.5 24.6L4.2 32.1 32 46.8l27.8-14.7-14.3-7.5","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M32 2.3L4.2 17 32 31.7 59.8 17 32 2.3z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"screwdriver-1","key":44},[React.createElement("title",{"key":0},"Screwdriver"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M36.651 31.653l15.675-15.675 5.245-.983L62 5l-2-2-10.243 4.18-1.029 5.292-15.629 15.629","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M15.584 59.761L29.16 46.184a7.474 7.474 0 0 0 2.1-4.152l6.557-4.548a2.7 2.7 0 0 0 .438-4.229L31.5 26.5a2.7 2.7 0 0 0-4.229.438l-4.493 6.477a7.477 7.477 0 0 0-4.278 2.113L4.928 49.1a7.535 7.535 0 0 0 10.656 10.661z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"configuration-1","key":45},[React.createElement("title",{"key":0},"Configuration"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M31.156 23.33l-4.683-4.683a3.964 3.964 0 0 1-1.1-3.349A11.737 11.737 0 0 0 13.739 2c-.338 0-.67.023-1 .051l4.406 6.973a1.3 1.3 0 0 1-.1 1.532l-2.4 2.875a1.3 1.3 0 0 1-.645.419l-3.2.913a1.3 1.3 0 0 1-1.49-.606L4.756 6.189a11.73 11.73 0 0 0 6.4 19 11.593 11.593 0 0 0 4.028.2 4.011 4.011 0 0 1 3.363 1.1l7.553 7.555m3.554 3.556l7.86 7.86a3.98 3.98 0 0 1 1.1 3.339 11.542 11.542 0 0 0-.094 1.466 11.658 11.658 0 0 0 13.509 11.588l-5-7.92a1.3 1.3 0 0 1 .1-1.532l2.4-2.875a1.3 1.3 0 0 1 .644-.419l3.2-.913a1.3 1.3 0 0 1 1.49.606l4.833 8.439a11.671 11.671 0 0 0 2.291-7.731A11.734 11.734 0 0 0 48.71 38.625a3.945 3.945 0 0 1-3.337-1.079l-5-5","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M27.96 32.186L12.285 47.861l-5.245.983-4.429 9.995 2 2 10.243-4.181 1.029-5.291 15.629-15.629","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M49.027 4.078L35.451 17.655a7.474 7.474 0 0 0-2.1 4.152L26.8 26.355a2.7 2.7 0 0 0-.438 4.229l6.757 6.757a2.7 2.7 0 0 0 4.229-.438l4.493-6.477a7.477 7.477 0 0 0 4.271-2.116l13.571-13.576A7.535 7.535 0 0 0 49.027 4.078z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"feather-1","key":46},[React.createElement("title",{"key":0},"Feather"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M51.491 12.509L2 62m19.938-19.939V26.517M32.41 31.59h16.651m-21.654 5.005h16.815","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M42.1 21.9V8.169c-10.828 5.992-23.594 17.8-31.528 41.086l2.087 2.086 2.087 2.088C61.553 37.478 62 2 62 2a41.974 41.974 0 0 0-13.147 3.014l-6.634 16.767","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"edit-1","key":47},[React.createElement("title",{"key":0},"Edit"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M54.368 17.674l6.275-6.267-8.026-8.025-6.274 6.267","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"d":"M17.766 54.236l36.602-36.562-8.025-8.025L9.74 46.211 3.357 60.618l14.409-6.382zM9.74 46.211l8.026 8.025","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"security-1","key":48},[React.createElement("title",{"key":0},"Security"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M19 26.8V15A13 13 0 0 1 32 2a13 13 0 0 1 13 13v11.8","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M23 24.1V15a9 9 0 0 1 18 0v9.1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"42","r":"20","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M34 45a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2 2 2 0 0 1 2 2z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"find-1","key":49},[React.createElement("title",{"key":0},"Find"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer1","cx":"24.2","cy":"24.2","r":"22.2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M39.9 39.9L62 62","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"pin-1","key":50},[React.createElement("title",{"key":0},"Pin"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M32 2a20 20 0 0 0-20 20c0 18 20 39 20 39s20-21 20-39A20 20 0 0 0 32 2z","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","r":"8","cy":"22","cx":"32","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"love-pin-1","key":51},[React.createElement("title",{"key":0},"Love Pin"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M32 2a20 20 0 0 0-20 20c0 18 20 39 20 39s20-21 20-39A20 20 0 0 0 32 2z","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M42 21.5a5.5 5.5 0 0 0-10-3.2 5.5 5.5 0 0 0-10 3.2 5.5 5.5 0 0 0 0 .6C22.6 27.9 32 34 32 34s8.3-5.6 9.8-10.9a5.5 5.5 0 0 0 .2-1.6z","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"map-location-1","key":52},[React.createElement("title",{"key":0},"Map Location"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M38 46.2c12.6.8 22 4 22 7.8s-12.5 8-28 8-28-3.6-28-8 9.4-7 22-7.8","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M32 2a18.1 18.1 0 0 0-18.1 18.1C13.9 36.4 32 52.4 32 52.4s18.1-16 18.1-32.3A18.1 18.1 0 0 0 32 2z","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("ellipse",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","ry":"6","rx":"6","cy":"20","cx":"32","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"navigation-map-1","key":53},[React.createElement("title",{"key":0},"Navigation Map"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M24.4 32.8L20 33.9l-18-6v28L20 62l24-6.1 18 5v-27l-12-4m-30 4V62m24-24v17.9","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M32 2a14 14 0 0 0-14 14c0 12.6 14 26 14 26s14-13.4 14-26A14 14 0 0 0 32 2z","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","r":"4","cy":"16","cx":"32","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"compass-map-1","key":54},[React.createElement("title",{"key":0},"Compass Map"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M16.2 30.6L2 25.9v28L20 60l24-6.1 18 6v-28L56 30m-36 5.4V60m24-24.6v18.5","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"d":"M23.6 30.4l4.2-12.6 12.6-4.2-4.2 12.6-12.6 4.2z","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","r":"18","cy":"22","cx":"32","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"destination-map-1","key":55},[React.createElement("title",{"key":0},"Destination Map"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M43.1 17l9.9 9.9M43 27l9.9-9.9m-19.5 7.6a10 10 0 0 1 6.8-2.7M29.7 35.2a10 10 0 0 0 .5-2.9V32a10 10 0 0 1 .9-4.3M21.2 42a10 10 0 0 0 6.6-3.5M9.8 42h7.6M2 42h4","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"d":"M62 10v50l-22-6-16 6-22-6V4l22 6 16-6 22 6z","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"map-marker-1","key":56},[React.createElement("title",{"key":0},"Map Marker"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M43.2 48.1l-7.2-4L18 52 2 44.1V4l16 7.9L36 3l18 8.9v20.3M36 44.1V3M18 52V11.9","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M52 32a10 10 0 0 0-10 10c0 9 10 19 10 19s10-10 10-19a10 10 0 0 0-10-10z","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","r":"3","cy":"42","cx":"52","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"compass-1","key":57},[React.createElement("title",{"key":0},"Compass"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M32 2v8m0 44v8M2 32h8m43.9 0h8","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"d":"M20 44l6-18 18-6-6 18-18 6zm6-18l12 12","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("circle",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","r":"30","cy":"32","cx":"32","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"earth-globe-1","key":58},[React.createElement("title",{"key":0},"Earth Globe"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M57.7 16.5A30 30 0 1 1 43.4 4.3","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M32 12c0 4.2 6 1.7 6 6s-4.6 7.3-8 5-7.9-3.5-11.9 2.1-1.3 12 1.5 11.9 5.5-2.8 6.7.6 1.5 3.4 2.8 4.2 1.3 2.2.9 4.1 2 8 4 8 3.8-.8 4-4 2.6-3.3 3.8-4.2-.9-4.3 1.3-6.5 6.6-6.2 2.8-7.2-3.5-1.8-4-3.4-2-3.2 1-3.3a11.9 11.9 0 0 0 8.7-3.6c2.5-2.6 3.8-5.2 6.1-5.2A25.6 25.6 0 0 0 51.2 9a30 30 0 0 0-7.8-4.7C36.7 7.5 32 7.8 32 12z","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"globe-1","key":59},[React.createElement("title",{"key":0},"Globe"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M54.8 43.8A28 28 0 0 1 15.2 4.2M13 2l7.9 7.9M57 46l-7.9-7.9M23 62h24M35 52v10","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","r":"20","cy":"24","cx":"35","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"world-map-1","key":60},[React.createElement("title",{"key":0},"World Map"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M53.9 28.4A26 26 0 1 1 41 13m-2.1-1c-5.8 2.8-9.9 3.1-9.9 6.7s5.2 1.5 5.2 5.2-4 6.3-6.9 4.4-6.9-3-10.4 1.8-1.2 10.4 1.3 10.3 4.8-2.4 5.9.6 1.3 3 2.4 3.6 1.2 1.9.8 3.6 1.8 6.9 3.5 6.9 3.3-.7 3.5-3.5 2.3-2.9 3.3-3.7-.7-3.7 1.1-5.6 5.7-5.4 2.5-6.3-3-1.5-3.5-2.9-1.8-2.8.9-2.9a10.3 10.3 0 0 0 7.4-3.1l.7-.7","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M51 2a10 10 0 0 0-10 10c0 9 10 20 10 20s10-11 10-20A10 10 0 0 0 51 2z","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","r":"2","cy":"12","cx":"51","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"needle-1","key":61},[React.createElement("title",{"key":0},"Needle"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M47.714 42l2.857 2.857a2.026 2.026 0 0 1 0 2.857l-2.857 2.857a2.026 2.026 0 0 1-2.857 0L42 47.714M62 62L49.143 49.143M18.429 18.429L5.571 5.571M2 9.143L9.143 2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M25.571 17l22.143 22.143a2.026 2.026 0 0 1 0 2.857L42 47.714a2.026 2.026 0 0 1-2.857 0L17 25.571","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"14.143","cy":"28.429","r":"4.041","transform":"rotate(-45 14.143 28.429)","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"28.429","cy":"14.143","r":"4.041","transform":"rotate(-45 28.428 14.143)","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M11.286 25.571l14.285-14.285m-2.142 12.143l4.285-4.286m1.429 7.143L32 23.429M32 32l4.298-4.335m4.273 12.906l4.286-4.285m-7.143-1.429L40.571 32","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"hospital-1","key":62},[React.createElement("title",{"key":0},"Hospital"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M6 56V16m52 0v40","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M23 45h18v16H23z","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M23 61H2v-5h21m18 0h21v5H41","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M32 45v16","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M22.756 16H2v-6h20.063m19.874 0H62v6H41.244M11 21h6v6h-6zm36 0h6v6h-6zM11 33h6v6h-6zm0 12h6v6h-6zm36 0h6v6h-6zM23 33h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zM29 21.542V27h-6v-6h4.636m8.728 0H41v6h-6v-5.458","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"12","r":"10","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M32 8v8m-4-4h8","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":8})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"medical-emergency-1","key":63},[React.createElement("title",{"key":0},"Medical Emergency"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M40 34.994h-5v-5h-6v5h-5v6h5v5h6v-5h5v-6z","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"37.994","r":"15","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M14.95 25.967a3.928 3.928 0 0 0 3.019-4.486c-.318-3.018 1.406-7.465 14.031-7.465s14.316 4.447 14 7.465 2.865 4.25 4.018 4.487 4.812 1.533 6.082 1.77 3.2.767 4.576-1.082a11.194 11.194 0 0 0-2-13.235C53.52 8.258 43.116 5.994 32 5.994S10.479 8.258 5.317 13.42a11.2 11.2 0 0 0-1.994 13.238C4.7 28.5 6.628 27.977 7.9 27.739s5.9-1.534 7.05-1.772z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M11.365 26.88L8 50.994a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8l-3.386-24.267","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"wall-clock-1","key":64},[React.createElement("title",{"key":0},"Wall Clock"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"32","r":"30","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M32 7v5m0 40v5M7 32h5m40 0h5","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"33","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M30.084 32.432L21 25m27-7L33.822 32.178","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"time-1","key":65},[React.createElement("title",{"key":0},"Time"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"32","r":"30","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M32 10v23l13 7","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"alarm-clock-1","key":66},[React.createElement("title",{"key":0},"Alarm Clock"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M20 2.847A13.326 13.326 0 0 0 2.847 20zm24 0A13.326 13.326 0 0 1 61.153 20z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"35","r":"26","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M6 62l8.122-8.122M58 62l-8.122-8.122","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M43 36H32V17","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"watch-1","key":67},[React.createElement("title",{"key":0},"Watch"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M15.802 18.635L21 2h22l5.198 16.634M15.823 45.391L21 61.958h22l5.177-16.567M52.619 28H56a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3.381","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M24 27l8.037 7.073L43 23","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"32","r":"21","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"vintage-camera-1","key":68},[React.createElement("title",{"key":0},"Vintage Camera"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M49 13V7h9v6","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer3","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M2 13h60v40H2z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"35","r":"12","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"35","r":"6","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M2 27h20.8m18.1 0H62M25.4 45H2m36.6 0H62","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("path",{"data-name":"layer1","d":"M15 20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7}),React.createElement("circle",{"data-name":"layer1","cx":"54","cy":"21","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":8})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"camera-1","key":69},[React.createElement("title",{"key":0},"Camera"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M59 17H46.6L40 9H24l-6.6 8H5a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h54a3 3 0 0 0 3-3V20a3 3 0 0 0-3-3z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"33","r":"14","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"54","cy":"25","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"33","r":"6","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"camera-shutter-1","key":70},[React.createElement("title",{"key":0},"Camera Shutter"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M25 20h34m-20 0l17.2 29.7M46 32.1L28.4 61.8M38.9 44H4.5M25 44L7.8 14.3M18 31.9L35.4 2.2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"32","r":"30","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"image-1","key":71},[React.createElement("title",{"key":0},"Image"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"17","cy":"15","r":"5","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M8 46c0-2.8 6.6-16 13.3-16s6.1 6 8.7 6 4.6-18 12-18 14 25.8 14 28","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M2 46h60M2 2h60v60H2z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"image-gallery-1","key":72},[React.createElement("title",{"key":0},"Image Gallery"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer3","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M10 54H2V2h52v8","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M10 10h52v52H10z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer2","cx":"22","cy":"22","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer2","d":"M16 50c0-2.8 2.6-16 9.3-16s6.1 6 8.7 6 2.6-16 10-16 12 23.8 12 26","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M10 50h52","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"radio-set-1","key":73},[React.createElement("title",{"key":0},"Radio Set"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M8 16L42 4","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("rect",{"data-name":"layer2","x":"2","y":"16","width":"60","height":"44","rx":"3","ry":"3","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"50","cy":"28","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"50","cy":"44","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("circle",{"data-name":"layer1","cx":"24","cy":"38","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("circle",{"data-name":"layer1","cx":"18","cy":"34","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7}),React.createElement("circle",{"data-name":"layer1","cx":"18","cy":"42","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":8}),React.createElement("circle",{"data-name":"layer1","cx":"18","cy":"50","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":9}),React.createElement("circle",{"data-name":"layer1","cx":"30","cy":"34","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":10}),React.createElement("circle",{"data-name":"layer1","cx":"30","cy":"42","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":11}),React.createElement("circle",{"data-name":"layer1","cx":"30","cy":"50","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":12}),React.createElement("circle",{"data-name":"layer1","cx":"17","cy":"26","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":13}),React.createElement("circle",{"data-name":"layer1","cx":"12","cy":"30","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":14}),React.createElement("circle",{"data-name":"layer1","cx":"31","cy":"26","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":15}),React.createElement("circle",{"data-name":"layer1","cx":"36","cy":"30","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":16}),React.createElement("circle",{"data-name":"layer1","cx":"35","cy":"47","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":17}),React.createElement("circle",{"data-name":"layer1","cx":"13","cy":"47","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":18}),React.createElement("circle",{"data-name":"layer1","cx":"10","cy":"38","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":19}),React.createElement("circle",{"data-name":"layer1","cx":"38","cy":"38","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":20}),React.createElement("circle",{"data-name":"layer1","cx":"24","cy":"45","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":21}),React.createElement("circle",{"data-name":"layer1","cx":"24","cy":"52","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":22}),React.createElement("circle",{"data-name":"layer1","cx":"24","cy":"31","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":23}),React.createElement("circle",{"data-name":"layer1","cx":"24","cy":"24","r":"1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":24})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"headphones-1","key":74},[React.createElement("title",{"key":0},"Headphones"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M12 36V26c0-11 8-20 19-20h2c11 0 19 9 19 20v10","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M14.3 16.3c2.8 2.8 4.4.4 4.4.4A14.7 14.7 0 0 1 31.2 10h1.6a14.7 14.7 0 0 1 12.5 6.7s2.2 3.5 4.9.7","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M17 56H5.6A3.6 3.6 0 0 1 2 52.4V39.6A3.6 3.6 0 0 1 5.6 36H17zm30 0h11.4a3.6 3.6 0 0 0 3.6-3.6V39.6a3.6 3.6 0 0 0-3.6-3.6H47z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"guitar-1","key":75},[React.createElement("title",{"key":0},"Guitar"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M35 23.4A11.1 11.1 0 0 0 22 25a10 10 0 0 0-1.8 2.5c-1 1.7-2.7 4.4-6.5 4.5h-.9a12.7 12.7 0 0 0-7.1 3.5C.3 41.1.9 50.6 7.1 56.9s15.7 6.9 21.2 1.4a12.6 12.6 0 0 0 3.5-7 1.9 1.9 0 0 0 .1-.7 8.4 8.4 0 0 1 4.5-6.8A10 10 0 0 0 39 42a11.1 11.1 0 0 0 1.7-13","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M20.2 38.1l34.1-34c1.6-1.6 2.7-3 4.2-1.4l2.8 2.8c1.6 1.6.1 2.7-1.4 4.2L25.8 43.8","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"19.9","cy":"44.1","r":"6","transform":"rotate(-45 19.892 44.16)","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M59.9 4.1l-47 47","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M9.4 47.6l7 7","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"mix-1","key":76},[React.createElement("title",{"key":0},"Mix"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M16 24v30m0-44v6m16 18v20m0-44v16m16 26v2m0-44v34M2 2h60v60H2z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"16","cy":"20","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"30","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"48","cy":"48","r":"4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"sun-1","key":77},[React.createElement("title",{"key":0},"Sun"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"32","r":"14","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M32 2v8m0 44v8m30-30h-8m-44 0H2m8.8-21.2l5.6 5.6m31.2 31.2l5.6 5.6m0-42.4l-5.6 5.6M16.4 47.6l-5.6 5.6","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"dawn-1","key":78},[React.createElement("title",{"key":0},"Dawn"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M20 45a12 12 0 1 1 24 0M32 17v8","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M56 45H8","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M12.8 25.8l5.6 5.6m32.8-5.6l-5.6 5.6","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"heavy-rain-1","key":79},[React.createElement("title",{"key":0},"Heavy Rain"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeMiterlimit":"10","stroke":"#101010","fill":"none","d":"M49 12.015c-.168 0-.33.02-.5.025a16.98 16.98 0 0 0-32.293 4.447A11 11 0 1 0 13 38.011h36a13 13 0 1 0 0-26z","data-name":"layer2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"d":"M11.998 46l-6.404 8.001M23.998 46L11.19 61.997M36 46l-6.404 8.001M48 46L35.191 61.997","strokeMiterlimit":"10","stroke":"#101010","fill":"none","data-name":"layer1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"cloud-lightning-1","key":80},[React.createElement("title",{"key":0},"Cloud Lightning"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M42 41.1h7a13 13 0 1 0 0-26h-.5a17 17 0 0 0-32.3 4.4A11 11 0 1 0 13 41.1h9","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M36 36.6L26 49.1h8L24.4 61","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"partly-cloudy-1","key":81},[React.createElement("title",{"key":0},"Partly Cloudy"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M27.1 39.5a10 10 0 1 1 6.9-10M24 8v6M8 30H2m6.4-15.5l4.3 4.2m26.9-4.2l-4.3 4.2M12.7 41.3l-4.3 4.3","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M52 36a13 13 0 0 0-25 4.1h-1a8 8 0 1 0 0 16h26a10 10 0 0 0 0-20z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"crescent-moon-1","key":82},[React.createElement("title",{"key":0},"Crescent Moon"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M35 2a25 25 0 0 1-22 36.8 24.9 24.9 0 0 1-10.6-2.3A30 30 0 1 0 35 2z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"book-1","key":83},[React.createElement("title",{"key":0},"Book"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M18 10h32","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M54 2H18a8 8 0 0 0 0 16h36v44H18a8 8 0 0 1-8-8V10","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"reading-1","key":84},[React.createElement("title",{"key":0},"Reading"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M54 12h8v44H42c-6 0-10 2-10 3.8","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M32 16c0-3.6 4-12 12.6-12H54v46H43.9C37.8 50 32 54.2 32 60","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M32 16c0-2-4-4-14-4H2v44h20c6 0 10 2 10 3.8z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"address-book-1","key":85},[React.createElement("title",{"key":0},"Address Book"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M51 8h8v42h-8m8-28h-8m8 14h-8","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M9 2h42v60H9zm4 10H3m10 10H3m10 10H3m10 10H3m10 10H3","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M21 12h20v14H21z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"diary-1","key":86},[React.createElement("title",{"key":0},"Diary"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M19 6v56","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M47 6h8v56H12a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M47 26l-6.9-4-7.1 4V2h14v24z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"three-columns-layout-1","key":87},[React.createElement("title",{"key":0},"Three Columns Layout"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M62 18H2m20 0v44m20-44v44","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M2 2h60v60H2z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"contacts-1","key":88},[React.createElement("title",{"key":0},"Contacts"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M18 10h32","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M54 2H18a8 8 0 0 0 0 16h36v44H18a8 8 0 0 1-8-8V10","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M44.7 45.5c.6.4 1.5.9 1.3 2.1a6.2 6.2 0 0 1-5.9 4.4c-3.9 0-8.7-3.1-12.9-7.3S20 35.8 20 31.9a6.2 6.2 0 0 1 4.3-5.9c1.2-.2 1.7.7 2.1 1.3l3 4.5a2.1 2.1 0 0 1-.6 2.8c-1.3 1-2.5 1.4 2.3 6.2s5.1 3.5 6.2 2.3a2.1 2.1 0 0 1 2.8-.6z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"user-1","key":89},[React.createElement("title",{"key":0},"User"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M46 26c0 6.1-3.4 11.5-7 14.8V44c0 2 1 5.1 11 7a15.5 15.5 0 0 1 12 11H2a13.4 13.4 0 0 1 11-11c10-1.8 12-5 12-7v-3.2c-3.6-3.3-7-8.6-7-14.8v-9.6C18 6 25.4 2 32 2s14 4 14 14.4z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"women-1","key":90},[React.createElement("title",{"key":0},"Women"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M49 17c0 17.2 2.9 18.9 7 23a70.8 70.8 0 0 1-16 2v2c0 2 0 6 10 8s10 10 10 10H4s0-8 10.2-10 9.8-6 9.8-8v-2a71 71 0 0 1-16-2c4.1-4.1 8-5.8 8-23 0 0 0-14 12-14 0 0 21-6.5 21 14z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"male-user-1","key":91},[React.createElement("title",{"key":0},"Male User"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M50.9 55.3a12.2 12.2 0 0 0-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 0 0 4.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 0 0 4.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 0 0-4.3 1.6","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"32","r":"30","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"female-user-1","key":92},[React.createElement("title",{"key":0},"Female User"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M13.1 55.3a11.9 11.9 0 0 1 4.3-1.6c8.1-1.5 8.6-5.7 8.6-7.4V46a58.8 58.8 0 0 1-11.9-2c3.3-3.3 5.9-5.2 5.9-19.2 0 0-.1-10.8 10-10.8 0 0 14-2.4 14 11.2s2.8 15.5 6.1 18.8A60.6 60.6 0 0 1 38 46v.3c0 1.6.5 5.8 8.6 7.4a12.1 12.1 0 0 1 4.3 1.7","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"32","r":"30","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"student-1","key":93},[React.createElement("title",{"key":0},"Student"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M24 41.1V44c0 2 .6 4.9-10.4 7S2 62 2 62h60s0-8.6-12.4-11C38.9 48.9 39 46 39 44v-2.7","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M16 50.5L32 62l16-11.3m-10.4-8.4A17.2 17.2 0 0 0 44.8 32c3 0 3.7-4.3 3.7-5.3S49 22.1 46 22v-6m-28 0v6c-3 0-3 4.1-3 5s.4 5 3.4 5a15.9 15.9 0 0 0 7.2 10.3","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M32 12L4 6l28-4 28 4-28 6z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M18 9v7l14 2 14-2V9M6 6.4V30","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"identity-1","key":94},[React.createElement("title",{"key":0},"Identity"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M34 46.9c4-.9 4-2.3 4-3.3v-1.5a9.3 9.3 0 0 1-2.9-6.9v-4.5a7 7 0 0 1 13.9 0v4.5a9.3 9.3 0 0 1-3 6.9v1.5c0 .9 0 2.4 4.1 3.3S54 52 54 52H30a5.1 5.1 0 0 1 4-5.1z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M10 10H2v50h60V10h-8M26 24H10m10 8H10m14 8H10m8-30h28","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M10 4h8v12h-8zm36 0h8v12h-8z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"heart-1","key":95},[React.createElement("title",{"key":0},"Heart"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"like-1","key":96},[React.createElement("title",{"key":0},"Like"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M54.4 30.4A25.4 25.4 0 0 0 58 17.9 13.9 13.9 0 0 0 44 4c-6.1 0-12 3.9-14 9.3C28 7.9 22.1 4 16 4A13.9 13.9 0 0 0 2 17.9C2 29.9 12.3 42 30 54l2.4-1.6","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"46","cy":"44","r":"16","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M46 36v16m-8-8h16","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"unlike-1","key":97},[React.createElement("title",{"key":0},"Unlike"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M54.4 30.4A25.4 25.4 0 0 0 58 17.9 13.9 13.9 0 0 0 44 4c-6.1 0-12 3.9-14 9.3C28 7.9 22.1 4 16 4A13.9 13.9 0 0 0 2 17.9C2 29.9 12.3 42 30 54l2.4-1.6","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"46","cy":"44","r":"16","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M38 44h16","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"diamond-1","key":98},[React.createElement("title",{"key":0},"Diamond"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M2 22h60M16 6l16 16L48 6M32 22v36","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M48 6l14 16-30 36L2 22 16 6h32z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"ribbon-1","key":99},[React.createElement("title",{"key":0},"Ribbon"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M17.7 36.6L10 55.7l8.8-1.1 5.5 6.8 6.5-18.8m15.5-6L54 55.7l-8.8-1.1-5.4 6.8-6.6-18.8","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"22.6","r":"20","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"22.6","r":"12","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"diploma-1","key":100},[React.createElement("title",{"key":0},"Diploma"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M17.6 37.7L10 56.4l8.8-1.1 5.5 6.8 6.4-18.6m15.7-5.8L54 56.4l-8.8-1.1-5.4 6.8-6.5-18.6","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"22.9","r":"12","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M32 4.5l4.5-2.6 3.1 4.2 5.1-.5 1.1 5 4.9 1.7-1 5 3.8 3.5-3 4.2 2.1 4.8-4.5 2.6v5.1l-5.2.6-2.1 4.7-4.9-1.5-3.9 3.4-3.9-3.4-4.9 1.5-2.1-4.7-5.2-.6v-5.1l-4.5-2.6 2.1-4.8-3-4.2 3.8-3.5-1-5 4.9-1.7 1.1-5 5.1.5 3.1-4.2L32 4.5z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"quality-1","key":101},[React.createElement("title",{"key":0},"Quality"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M19 38.9l-3 23 16-6 16 6-2.9-23M32 45.8v10.1","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"23.9","r":"12","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M32 4.7l4.6-2.6 3.1 4.2 5.3-.5 1.1 5.2 5.1 1.6-1.1 5.2 3.9 3.6-3.1 4.3 2.1 4.8-4.5 2.7-.1 5.3-5.2.6-2.2 4.8-5-1.6-4 3.5-4-3.5-5 1.6-2.2-4.8-5.2-.6-.1-5.3-4.5-2.7 2.1-4.8-3.1-4.3 3.9-3.6-1.1-5.2 5.1-1.6L19 5.8l5.3.5 3.1-4.2L32 4.7z","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"podium-1","key":102},[React.createElement("title",{"key":0},"Podium"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M23.3 54h-9.6l6.8-8h.1a4.8 4.8 0 0 0-6.9-6.6M32 24V10l-4.1 2.1M42 38h8l-4 6s6 0 6 5.1-7.2 6.2-10 2.9M28 24h8","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M2 32h30v30H2zM16 2h30v30H16zm16 30h30v30H32","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"data-app-1","key":103},[React.createElement("title",{"key":0},"Data App"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M2 23v22l30.082 14L62 45V23L32 37.048 2 23zm30 14.048V59m25.332-38.178L62 23M37.459 11.548l9.148 4.269m-29.232.009l9.147-4.27M2 23l4.742-2.213","strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("ellipse",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","ry":"4","rx":"7","cy":"19","cx":"13","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("ellipse",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","ry":"4","rx":"7","cy":"25","cx":"32","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("ellipse",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","ry":"4","rx":"7","cy":"9","cx":"32","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("ellipse",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","ry":"4","rx":"7","cy":"19","cx":"51","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"shield-security-1","key":104},[React.createElement("title",{"key":0},"Shield Security"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M56 12A33 33 0 0 1 32 2 33 33 0 0 1 8 12S5.9 48 32 62c26.1-14 24-50 24-50z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M45 24L31 38l-7-7","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"imac-screen-1","key":105},[React.createElement("title",{"key":0},"iMac Screen"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M22 60h20M32 50v10m30-20V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v34","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M2 40v8a2 2 0 0 0 2 2h56a2 2 0 0 0 2-2v-8z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"laptop-screen-1","key":106},[React.createElement("title",{"key":0},"Laptop Screen"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M6 45l-4 6v2h60v-2l-4-6","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M6 11h52v34H6z","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"iphone-1","key":107},[React.createElement("title",{"key":0},"Iphone"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M14 59a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9H14zM50 5a3 3 0 0 0-3-3H17a3 3 0 0 0-3 3v5h36zm0 45V10m-36 0v40","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"56","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"low-battery-1","key":108},[React.createElement("title",{"key":0},"Low Battery"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M62 26h-6v-8H2v28h54v-8h6V26z","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"low-power-1","key":109},[React.createElement("title",{"key":0},"Low Power"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M62 26h-6v-8H2v28h54v-8h6V26z","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M10 24h12v16H10z","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"refresh-window-1","key":110},[React.createElement("title",{"key":0},"Refresh Window"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M52.4 46l4.8 4.8L62 46m-24 0l-4.8-4.8-4.8 4.8","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M50.9 56.6a11.8 11.8 0 0 1-14.1-2.1A12.1 12.1 0 0 1 34 42m5.6-6.6a11.8 11.8 0 0 1 14.1 2.1A12.1 12.1 0 0 1 56.4 50","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"8","cy":"12","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"15","cy":"12","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("circle",{"data-name":"layer1","cx":"22","cy":"12","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M54 38V18M2 18v32h32M2 6h52v12H2z","style":{"stroke":"var(--layer1, #101010)"},"key":7})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"schedule-window-1","key":111},[React.createElement("title",{"key":0},"Schedule Window"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"8","cy":"12","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"15","cy":"12","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer2","cx":"22","cy":"12","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M2 6h52v12H2zm52 22V18M2 18v32h30","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("circle",{"data-name":"layer1","cx":"46","cy":"42","r":"16","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M46 34v10h8","style":{"stroke":"var(--layer1, #101010)"},"key":7})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"food-1","key":112},[React.createElement("title",{"key":0},"Food"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M50.5 37v23a2 2 0 0 1-2 2 2 2 0 0 1-2-2V37","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M18.5 17V2m4 0v15m4-15h-12l-1 20c0 3.2 2.1 5.2 5 5.8V60a2 2 0 0 0 4 0V27.8c2.9-.6 5-2.6 5-5.8zm24 35V2a10 10 0 0 0-10 10v20a5 5 0 0 0 5 5z","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"restaurant-2","key":113},[React.createElement("title",{"key":0},"Restaurant"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M52.5 15.5c0-5.5-3.6-13.7-8-13.7s-8 8.1-8 13.7 2.5 8.1 6 9l-1 33.5c0 3.2 1.9 4 3 4s3.2-.6 3-4l-1-33.5c3.4-.9 6-4.3 6-9z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M24.5 2.1h-12l-1 20c0 3.2 2.1 5.2 5 5.8v32.2a2 2 0 0 0 4 0V27.9c2.9-.6 5-2.6 5-5.8z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"dinner-1","key":114},[React.createElement("title",{"key":0},"Dinner"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32.7","cy":"33","r":"19","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"32.7","cy":"33","r":"11","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M61.7 34.2V48a2 2 0 0 1-2 2 2 2 0 0 1-2-2V34.1M6.7 12v9.5","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M61.7 34.2V12a6.3 6.3 0 0 0-6.3 6.3V31a3.2 3.2 0 0 0 3.2 3.2zm-50.5-9.5L10.5 12H2.9l-.6 12.7a3.5 3.5 0 0 0 2.4 3.5V48a2 2 0 1 0 4 0V28.1a3.5 3.5 0 0 0 2.5-3.4z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"balloon-whisk-1","key":115},[React.createElement("title",{"key":0},"Balloon Whisk"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M8.6 61A4 4 0 0 1 3 61a4 4 0 0 1 0-5.7l9.9-9.9a4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M18.5 45.5L58.1 5.9m0 19.8a14 14 0 1 0-23-14.9l-12 30.1 30.2-12a13.9 13.9 0 0 0 4.8-3.2z","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M53.9 21.5C59.3 16 61.2 9 58.1 5.9S48 4.7 42.5 10.1a23.1 23.1 0 0 0-3.5 4.5L23 40.9 49.4 25a23.2 23.2 0 0 0 4.5-3.5z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"ladle-1","key":116},[React.createElement("title",{"key":0},"Ladle"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M42.1 2a11.9 11.9 0 0 1 0 16.8L22.5 38.4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M22.5 38.4a13.8 13.8 0 1 0 19.6 19.5z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"barbecue-1","key":117},[React.createElement("title",{"key":0},"Barbecue"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M8 22H2m60 0h-5.9M32 14V2M18 14V8m28 6V6","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M16 62l9.3-12.9M48 62l-9-13m17-23a24 24 0 0 1-48 0v-6h48z","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"tea-kettle-1","key":118},[React.createElement("title",{"key":0},"Tea Kettle"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"16","r":"4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M12.8 45.5a8 8 0 1 1 1.3-14.4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M62 26a3.7 3.7 0 0 0-4 4v6c0 2 0 6-6.1 6M48 28H16","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M48 52a20 20 0 1 0-32 0z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"moka-coffee-pot-1","key":119},[React.createElement("title",{"key":0},"Moka Coffee Pot"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M11 26L7 8h8m6-6h24","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M43 34v8m-20-8v8M57 8l-9.3 14.2L45 34H21L15 8h42zM43 8l-2 26M23 8l2 26m20 8H21l-6 20h36l-6-20zm-4 0l2 20M25 42l-2 20","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"coffee-beans-1","key":120},[React.createElement("title",{"key":0},"Coffee Beans"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M54 18c-3.7 4.9-5.9 5.8-12 6-4.4.1-7.7.9-9.9 3.1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M40 42c9-.1 18-6.1 21-14.5S59 9.6 49.1 8.2s-20.7 5-24.1 14.3l-.2.7","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M10 32c3.7 4.9 5.9 5.8 12 6s9.9 1.6 12 6","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M39 36.5c3.4 9.3-2 17.9-11.9 19.3S6.4 50.8 3 41.5s2-17.9 11.9-19.3 20.7 5 24.1 14.3z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"loaf-of-bread-1","key":121},[React.createElement("title",{"key":0},"Loaf Of Bread"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M34 59H10a6 6 0 0 1-6-6V25.3A4.8 4.8 0 0 1 2 21c0-8 8.1-16 18-16h24M3.7 25h24","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M62 21c0-8-8.1-16-18-16s-18 8-18 16a4.8 4.8 0 0 0 2 4.3V53a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V25.3a4.9 4.9 0 0 0 2-4.3z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"croissant-1","key":122},[React.createElement("title",{"key":0},"Croissant"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M28.3 39.6l7.8 22m3.5-33.3l22 7.8m-45 3.2l-4.4 15.3m27.3-38.2l14.9-4.3","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M53.1 10.7a29.8 29.8 0 0 0-17.3-8.5c-4.7-.5-7.3 2.9-6.7 4.3s22.6 11.3 5.7 28.3-25.9-5.7-28.4-5.7-4.5 3.8-4.3 6.6a30 30 0 1 0 50.9-25z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"wine-glass-1","key":123},[React.createElement("title",{"key":0},"Wine Glass"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M47.8 18C47.3 11.3 46 2 46 2H18s-1.3 9.3-1.8 16M32 39.1V62m-10 0h20","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M16.2 18c-.1 1.5-.2 2.9-.2 4 0 6 5.5 16 16.2 16S48 28 48 22c0-1.1-.1-2.5-.2-4z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"birthday-cake-1","key":124},[React.createElement("title",{"key":0},"Birthday Cake"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M58 39.8v18.7m-52 0v-25m26-17v10m-16-10v10m32-10v10m14 32v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M6 33.5v-5a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v11.3M6 33.5a7 7 0 0 0 7 7c3.9 0 7-2.1 7-6m0 0c0 3.9 3.1 6 7 6s7-2.1 7-6m0 0c0 3.9 3.1 6 7 6s7-2.1 7-6m0 0c0 3.9 3.1 6 7 6a7 7 0 0 0 3-.7M19 7.5a7.3 7.3 0 0 0-3-6s-3 2.7-3 6a3 3 0 0 0 5.9.9 2.6 2.6 0 0 0 .1-.9zm16 0a7.3 7.3 0 0 0-3-6s-3 2.7-3 6a3 3 0 0 0 5.9.9 2.6 2.6 0 0 0 .1-.9zm16 0a7.3 7.3 0 0 0-3-6s-3 2.7-3 6a3 3 0 0 0 5.9.9 2.6 2.6 0 0 0 .1-.9z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"beer-pint-1","key":125},[React.createElement("title",{"key":0},"Beer Pint"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M48 22.7a8 8 0 0 0-4-14.9 7.9 7.9 0 0 0-2.3.4 6 6 0 0 0-9.1-3.1A11 11 0 0 0 15.2 8H15a9 9 0 0 0-3 17.5","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M48 22v37a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V22zM30 32v20M20 32v20m20-20v20m8-26h4a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M48 46h4a2 2 0 0 0 2-2V32a2 2 0 0 0-2-2h-4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"pint-1","key":126},[React.createElement("title",{"key":0},"Pint"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M49 14a43.6 43.6 0 0 0-2-12H17a43.6 43.6 0 0 0-2 12","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M19.1 33.9A48.3 48.3 0 0 1 21 46v14a2 2 0 0 0 2.1 2h17.8a2 2 0 0 0 2.1-2V46a48.3 48.3 0 0 1 1.9-12.1C46 29.6 49 19 49 14H15c0 5 3 15.6 4.1 19.9z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"21","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"38","cy":"27","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("circle",{"data-name":"layer1","cx":"30","cy":"33","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("circle",{"data-name":"layer1","cx":"34","cy":"41","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7}),React.createElement("circle",{"data-name":"layer1","cx":"30","cy":"49","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":8})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"salami-1","key":127},[React.createElement("title",{"key":0},"Salami"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M54 32l8-5.8V37l-8-5z","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"12","cy":"31","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer2","cx":"20","cy":"27","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer2","cx":"16","cy":"37","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer1","d":"M27.6 32c-1.8 7.2-9 13-15.9 13S.6 39.2 2.4 32s9-13 15.9-13 11.1 5.8 9.3 13z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("path",{"data-name":"layer1","d":"M18.3 19H41a13 13 0 0 1 13 13 13 13 0 0 1-13 13H11.7","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"ham-1","key":128},[React.createElement("title",{"key":0},"Ham"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("ellipse",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","transform":"rotate(-45 41.278 22.722)","ry":"7.247","rx":"5.178","cy":"22.722","cx":"41.278","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M10.785 46.774L8.75 48.81a4.131 4.131 0 0 0-5.537 6.12c2.142 2.143 2.934 1.471 3.658 2.2 1 1 .426 1.887 2.2 3.66a4.142 4.142 0 0 0 5.857-5.857 4.14 4.14 0 0 0-.334-.25l1.706-1.714","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("ellipse",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","transform":"rotate(-45 41.278 22.721)","ry":"24.847","rx":"15.53","cy":"22.722","cx":"41.278","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M23.709 5.152C17.68 11.183 9.869 23.517 12 37.359c0 0 .965 4.893 0 5.857a4.146 4.146 0 0 0 0 5.858L14.926 52a4.14 4.14 0 0 0 5.855 0c.965-.965 5.857 0 5.857 0 13.842 2.129 26.176-5.682 32.209-11.711","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"cheese-1","key":129},[React.createElement("title",{"key":0},"Cheese"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"47","cy":"38","r":"3","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"35","cy":"47","r":"5","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer2","cx":"26.1","cy":"36","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer2","cx":"16","cy":"46","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("circle",{"data-name":"layer2","cx":"12","cy":"34","r":"4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("path",{"data-name":"layer1","d":"M62 30L30 2S2 5.3 2 22l60 8z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7}),React.createElement("path",{"data-name":"layer1","d":"M2 22v32l60 8v-6.2l-1.5.3a5 5 0 0 1 0-10l1.5.3V30","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":8})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"pizza-slice-1","key":130},[React.createElement("title",{"key":0},"Pizza Slice"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","r":"4","cy":"23.999","cx":"28.999","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","r":"2","cy":"33.999","cx":"34.999","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","r":"2.5","cy":"37.499","cx":"20.999","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M49.979 35.087L57 32C51.011 18.087 39.13 7.567 25 2l-2.527 7.3","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M22.473 9.3L7 54l42.978-18.91C44.833 23.128 34.618 14.087 22.473 9.3zm-5.474 40.299v8.4m8-11.92v15.92m16-22.907v12.907","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"hamburger-1","key":131},[React.createElement("title",{"key":0},"Hamburger"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M58.9 34.4A5 5 0 0 1 62 39a5 5 0 0 1-5 5M7 44a5 5 0 0 1-5-5 5 5 0 0 1 2-4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M8 26c-2 0-9.6 5.4-4 9 3.3 1.9 6.7-2.8 8-2.8S18 36 24 36s9.1-4 12-4 5.1 4 8 4 4.8-2 8-2 9.2 1.9 10-2-6-6-6-6","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M57 54l-.6 5a3.7 3.7 0 0 1-3.4 3H11a3.7 3.7 0 0 1-3.6-3l-.5-5","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M32 44l16 8 8-8","style":{"stroke":"var(--layer2, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer1","d":"M56 26a24 24 0 1 0-48 0h48z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":6}),React.createElement("circle",{"data-name":"layer1","cx":"44","cy":"12","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":7}),React.createElement("circle",{"data-name":"layer1","cx":"38","cy":"14","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":8}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"10","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":9}),React.createElement("circle",{"data-name":"layer1","cx":"28","cy":"16","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":10}),React.createElement("circle",{"data-name":"layer1","cx":"22","cy":"12","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":11}),React.createElement("path",{"data-name":"layer1","d":"M62 49a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5 5 5 0 0 1 5-5h50a5 5 0 0 1 5 5z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":12})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"asian-cuisine-1","key":132},[React.createElement("title",{"key":0},"Asian Cuisine"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M46 2L32.1 30M58 10L40 30M22 62h20","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M2.1 30a30 30 0 0 0 59.8 0z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"apple-1","key":133},[React.createElement("title",{"key":0},"Apple"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M23 6c5.2 0 10 3.8 10 12v2m4-6c0-6 2-12 12-12 0 6-2 12-12 12z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M33 20c-3.4 0-4.9-2-12-2S7 24.8 7 36s8.2 26 16.9 26c5.3 0 5.7-4 8.6-4s5.2 4 8.7 4S57 52.5 57 36 46.6 18 43 18s-6.1 2-10 2z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"lemon-1","key":134},[React.createElement("title",{"key":0},"Lemon"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M62 17.2c-5-9.1-15.3-7.4-18.9-.1 6.6 9.8 16.4 4.3 18.9.1zm-20.3-.3a11.5 11.5 0 0 0-6.6-11.4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M45.9 31.7c-1-6.6-2.8-7.3-2.8-8.8s1.1-4.4 0-5.5-3.9-.1-5.5 0-2.3-1.8-8.8-2.8-13.7 3.4-18.6 8.3-8 9.3-8.2 16.4 2.5 6.3 2.7 8.2-2.2 6.1 0 8.2 6.3-.3 8.2 0 2.5 3 8.2 2.7 10.4-2.2 16.4-8.2 9.4-11.9 8.4-18.5z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"banana-1","key":135},[React.createElement("title",{"key":0},"Banana"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M15.9 4s2.1 10.4 2.5 12.2 2.3 2.2 3.4 3c3.1 2.3 6.5 7.1 8.7 9s6.8 6.9 13.4 7.8 10.7.8 14 0a3.1 3.1 0 0 1 4 4c-.6 1.6-4.7 5.3-8.6 6.6s-14.7 2.6-19.8.8","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M1.9 4h16.6M5.9 4v10c0 .9-2.2 5.7-3.4 11.7S3.9 42 11.9 50s18.5 10 23.4 10c8.2 0 9.4-4 8.8-5.9s-2.7-2.9-7.9-5.3S21.5 39.5 19 31.2 13.6 17.5 11.9 16s-.5-1.1 0-2 2-10 2-10","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"ice-cream-cone-1","key":136},[React.createElement("title",{"key":0},"Ice Cream Cone"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M19.1 29.8L32 62l13.4-34","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M32 2a18 18 0 0 0-18 18v6a4 4 0 1 0 8 0v-2a4 4 0 1 1 8 0v6a4 4 0 1 0 8 0v-6a2 2 0 0 1 4 0 4 4 0 0 0 8 0v-4A18 18 0 0 0 32 2z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"food-2","key":137},[React.createElement("title",{"key":0},"Food"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M25.998 2.008v14a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4v-14m5.998 0V62","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M39.996 61.998L40 2c1 0 11.996 16.01 11.996 36.01h-12","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"brewed-coffee-1","key":138},[React.createElement("title",{"key":0},"Brewed Coffee"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M18 36h25.998v14c0 8-8.191 12-8.191 12H26s-8.002-4-8.002-12c0-12 .002-14 .002-14z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M6 62h52M36 30c0-12 12-16 12-28M26.002 30c0-6.125 5.998-8.896 5.998-14","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M43.998 37.998h2a6 6 0 0 1 0 12h-2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"roast-chicken-1","key":139},[React.createElement("title",{"key":0},"Roast Chicken"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M54.865 25.717l2.326-2.327a2.94 2.94 0 0 0 3.94-4.356c-1.524-1.522-2.088-1.046-2.604-1.562-.709-.708-.3-1.343-1.564-2.604a2.947 2.947 0 1 0-4.168 4.166c.072.072.16.115.238.18l-2.818 2.815","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M34.289 43.082a10.073 10.073 0 0 0 14.242 0 10.25 10.25 0 0 0 .737-.826c.048-.06.091-.127.138-.19.16-.208.317-.417.457-.632 2.973-4.46 3.235-11.059 4.434-12.256l.34-.34a2.399 2.399 0 0 0 0-3.39l-2.713-2.715a2.4 2.4 0 0 0-3.393 0l-.34.34c-1.283 1.284-8.416 1.146-13.115 5.06a10.423 10.423 0 0 0-.787.706 10.07 10.07 0 0 0 0 14.243z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer2","d":"M49.746 22.031C43.996 12 15.996 4 3.376 31.154c-3.59 8 2.628 14.877 10.628 14.877H41.83","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M2 52h55.996","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"chocolate-bar-1","key":140},[React.createElement("title",{"key":0},"Chocolate Bar"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M46 10L30 26m24-8L38 34m-8-24l24 24m-8 8l16-16L38 2 22 18","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M1.964 37.963l20.01-20.011 24 24-20.011 20.01z","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M39.3 35.4l-16-5.4V19.4","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"pineapple-1","key":141},[React.createElement("title",{"key":0},"Pineapple"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M50 41c0 11.6-6 21-18 21s-18-9.4-18-21 6-21 18-21 18 9.4 18 21z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M32 18c-12 0-13.6-8-13.6-8S32 8.2 32 18M46 2C34.6 2 34 12 34 18 46.7 18 46 7.1 46 2z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M17.9 27.9l27.3 27.3M14 40l21.6 21.6m-8.9-40.9l23.1 23.1m-3.8-16L18.7 55.1M50 39.9L28.3 61.6M37 20.8L14.1 43.7","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"grater-1","key":142},[React.createElement("title",{"key":0},"Grater"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M50.3 12L50 8c-.2-2.9-2.5-6-6-6H20c-3.3 0-5.7 2.3-6 6l-.3 4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M46.3 12L46 8.3c-.1-.9-.8-2.3-2-2.3H20c-.4 0-1.8 0-2 2.4l-.3 3.6m2.3 8v2m8-2v2m8-2v2m8-2v2m-20 6v2m8-2v2m8-2v2m-20 6v2m8-2v2m8-2v2m8-2v2M20 52v2m8-2v2m8-2v2m8-2v2M24 44v2m8-2v2m8-2v2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M50.3 12H13.7L10 58a3.9 3.9 0 0 0 4 4h36a3.9 3.9 0 0 0 4-4z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"tea-cup-1","key":143},[React.createElement("title",{"key":0},"Tea Cup"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M16 3v16m6 16V25a6 6 0 0 0-6-6 6 6 0 0 0-6 6v10z","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M48 3v54a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V3zm0 10a14 14 0 0 1 14 14v4a14 14 0 0 1-14 14","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M48 41a10 10 0 0 0 10-10v-4a10 10 0 0 0-10-10","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"glazed-donut-1","key":144},[React.createElement("title",{"key":0},"Glazed Donut"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M58.6 45.8a30 30 0 0 1-48.9 6.3M18 14l4 4m-8 8l-4 4m2 8h4m10-28h8m10 4l-4 4m10 6l4 2m-4 8v4","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer1","cx":"32","cy":"32","r":"10","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M9.7 52.1a30 30 0 1 1 48.9-6.3M9.7 52.1c1.9-.3 3-3 4.3-6.1s7.2-2.6 6 2 2.9 7.3 5.8 6 3.1-2.6 6.3-2 6.1.5 7.9-2.4 2.8-.2 6 .4 4-8 12.6-4.2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"cocktail-1","key":145},[React.createElement("title",{"key":0},"Cocktail"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M34 36v22m-10 0h20","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M46.3 16a8 8 0 1 1 3.2 4.6","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer2","d":"M2 6h8a5.6 5.6 0 0 1 4 2l8 8m25 7l7-7H14l7 7","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M47 23H21l13 13 13-13z","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"sandwich-1","key":146},[React.createElement("title",{"key":0},"Sandwich"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M10 22.5L2 46l8 4m4 6a6 6 0 0 0 11.6 2.2 5 5 0 0 0 9.3-1.2 6 6 0 0 0 10.8-1M54 26.2a10 10 0 0 1 0 19.6","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M32 2C19.4 2 2 3.9 2 14s8 8.5 8 8.5V51a5 5 0 0 0 5 5h34a5 5 0 0 0 5-5V22.4s8-.3 8-8.4S54.3 2 32 2z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"19","cy":"15","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"27","cy":"27","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("circle",{"data-name":"layer1","cx":"44","cy":"20","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("circle",{"data-name":"layer1","cx":"42","cy":"38","r":"2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7}),React.createElement("circle",{"data-name":"layer1","cx":"25","cy":"45","r":"1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":8})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"taco-1","key":147},[React.createElement("title",{"key":0},"Taco"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M10 57.567c-7 0-8-6.283-8-14a43.145 43.145 0 0 1 16-34 8.6 8.6 0 0 1 7.309-1.758","data-name":"layer1","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M17.368 52.191c-6.713-.94-5.572-4.972-4.555-6.47 1.9-2.8-1.1-4.156-2.48-6.463s-1.019-4.912 2.307-6.687c2.127-1.135 3.861-2.85 2.309-6.922-1.812-4.758 3.422-4.82 5.051-6.082 2.439-1.891 1.768-3.07 2-7.223s4.75-5.81 8-4.777c0 0 4.378 2 7.795-.3s7.955.444 6.815 4.309","data-name":"layer2","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M12.378 57.206L62 35.567s-2.473-10-5.707-16-9.829-10.455-20.667-6.533-13.557 13.535-14.914 25.072c-1.42 12.053-4 19.461-10.711 19.461","data-name":"layer1","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"seafood-1","key":148},[React.createElement("title",{"key":0},"Seafood"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M56.35 25.418c.33 4.916-2.16 14.242-7.207 19.035-2.346-5.166-7.509-7.295-7.048-7.193m-5.81-29.105c-11.428 0-20 8.713-20 8.713s9.834.9 10.117 4.434","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M39.969 6.1a28 28 0 0 0-8.978 7.83c-7.094 9.508-10.432 21.324-12.733 31.8A122.8 122.8 0 0 0 42 37.194c6.875-3.377 11.381-7.461 14.344-11.777M14.738 62c1.179-4.473 2.172-10.143 3.518-16.271A125.052 125.052 0 0 1 2 48.809S13.145 52.457 14.738 62z","data-name":"layer2","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("ellipse",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","ry":"2.054","rx":"2.021","cy":"11.685","cx":"51.878","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#101010","fill":"none","d":"M39.969 6.1c0 9.629 4.914 17.547 16.375 19.316C61.754 17.536 62 8.881 62 2.348c0 0-11.561-2.033-22.031 3.752z","data-name":"layer1","style":{"stroke":"var(--layer1, #101010)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"checked-circle-1","key":149},[React.createElement("title",{"key":0},"Checked Circle"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"32","r":"30","transform":"rotate(-45 32 32)","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M20.998 32.015l8.992 8.992 16.011-16.011","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"real-estate-1","key":150},[React.createElement("title",{"key":0},"Real Estate"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M2 29L32 5l30 24","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M23 62V40h18v22","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M10 22.6V62h44V8h-9v7.445","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"house-1","key":151},[React.createElement("title",{"key":0},"House"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M54 26.267l7.555 7.3a.25.25 0 0 1-.174.43H54V62H40V44H24v18H10V34H2.618a.25.25 0 0 1-.174-.43L32 5l13 12.567V12h9z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"setting-1","key":152},[React.createElement("title",{"key":0},"Setting"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"32","r":"10","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M61 27h-6.551a22.857 22.857 0 0 0-3.041-7.336l4.634-4.634a1 1 0 0 0 0-1.414l-5.657-5.658a1 1 0 0 0-1.414 0l-4.634 4.634A22.857 22.857 0 0 0 37 9.552V3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v6.552a22.857 22.857 0 0 0-7.336 3.041l-4.635-4.635a1 1 0 0 0-1.414 0l-5.657 5.657a1 1 0 0 0 0 1.414l4.634 4.634A22.857 22.857 0 0 0 9.552 27H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6.552a22.856 22.856 0 0 0 3.041 7.336l-4.635 4.635a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414 0l4.634-4.634A22.86 22.86 0 0 0 27 54.449V61a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6.551a22.86 22.86 0 0 0 7.336-3.041l4.634 4.634a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414l-4.634-4.634A22.856 22.856 0 0 0 54.449 37H61a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"property-1","key":153},[React.createElement("title",{"key":0},"Property"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M54 22.6V8h-9v7.445M40 62h14V29.769M10 30v32h14","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"29","r":"5","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeMiterlimit":"10","d":"M24 42h16v20H24zm8-37L2.436 28.651a.5.5 0 0 0-.036.749l3.287 3.287a.5.5 0 0 0 .668.035L32 12l25.65 20.718a.5.5 0 0 0 .668-.035l3.287-3.283a.5.5 0 0 0-.041-.744z","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"plug-1","key":154},[React.createElement("title",{"key":0},"Plug"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","d":"M36 46v8h-8v-8m4 8.1V62","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M46 18v18a10 10 0 0 1-10 10h-8a10 10 0 0 1-10-10V18m-4 0h36m-26 0V2m16 16V2","fill":"none","stroke":"#101010","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"calls-2","key":155},[React.createElement("title",{"key":0},"Calls"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M58.9 47l-10.4-6.8a4.8 4.8 0 0 0-6.5 1.3c-2.4 2.9-5.3 7.7-16.2-3.2S19.6 24.4 22.5 22a4.8 4.8 0 0 0 1.3-6.5L17 5.1c-.9-1.3-2.1-3.4-4.9-3S2 6.6 2 15.6s7.1 20 16.8 29.7S39.5 62 48.4 62s13.2-8 13.5-10-1.7-4.1-3-5z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"coins-1","key":156},[React.createElement("title",{"key":0},"Coins"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("ellipse",{"data-name":"layer2","cx":"44","cy":"7.1","rx":"18","ry":"5.1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M26 14.9c0 2.8 8.1 5.1 18 5.1s18-2.3 18-5.1m-36 8c0 2.8 8.1 5.1 18 5.1s18-2.3 18-5.1m-36 8c0 2.8 8.1 5.1 18 5.1s18-2.3 18-5.1M38 43.7c1.9.2 3.9.3 6 .3 9.9 0 18-2.3 18-5.1m-36-2.8V7.5","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer2","d":"M62 7.1v39.8c0 2.8-8.1 5.1-18 5.1-2.1 0-4.1-.1-6-.3","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4}),React.createElement("ellipse",{"data-name":"layer1","cx":"20","cy":"40.9","rx":"18","ry":"5.1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":5}),React.createElement("path",{"data-name":"layer1","d":"M2 48.9c0 2.8 8 5.1 18 5.1s18-2.3 18-5.1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":6}),React.createElement("path",{"data-name":"layer1","d":"M38 40.9v16c0 2.8-8.1 5.1-18 5.1S2 59.7 2 56.9V41.3","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":7})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"money-2","key":157},[React.createElement("title",{"key":0},"Money"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M2 49.5V16.2S6 12 18 12s15.2 6 28 6a63.4 63.4 0 0 0 16-2.5v34S57.6 52 48 52s-17.2-6-28-6a44.8 44.8 0 0 0-18 3.5z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M41.9 31.6c1 5.5-2.7 10-8.1 10s-10.6-4.5-11.6-10 2.7-10 8.1-10S41 26 41.9 31.6z","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","d":"M11.9 12.4A10 10 0 0 1 2 24m0 14a10 10 0 0 1 9.9 8.7M62 26a10 10 0 0 1-9.9-8.4m.1 34.2A10.1 10.1 0 0 1 52 50a10 10 0 0 1 10-10","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer2, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"secure-payment-1","key":158},[React.createElement("title",{"key":0},"Secure Payment"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M38 42H4.4A2.4 2.4 0 0 1 2 39.6V12.4A2.4 2.4 0 0 1 4.4 10h43.2a2.4 2.4 0 0 1 2.4 2.4V22M2 18h48m-39.9 8H26m-16 8h7","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M38 38h24v16H38zm6 0V28a6 6 0 0 1 6-6 6 6 0 0 1 6 6v10m-6 6v4","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"bank-cards-1","key":159},[React.createElement("title",{"key":0},"Bank Cards"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M10.3 29l-2.2-6.1a2.4 2.4 0 0 1 1.4-3.1L50.1 5.1a2.4 2.4 0 0 1 3.1 1.4l8.7 24a2.4 2.4 0 0 1-1.4 3.1L50 37.4m-39.9-9.2L55 11.8m-8.3 9.8l4.5-1.6","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":2}),React.createElement("rect",{"data-name":"layer1","x":"2","y":"29","width":"48","height":"30","rx":"2.4","ry":"2.4","fill":"none","stroke":"#101010","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#101010","strokeMiterlimit":"10","d":"M10 43h14m12-6h6M10 51h2m8 0h2m8 0h2m8 0h2","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #101010)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"close-1","key":160},[React.createElement("title",{"key":0},"Close"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeMiterlimit":"10","d":"M41.999 20.002l-22 22m22 0L20 20","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"angle-right-1","key":161},[React.createElement("title",{"key":0},"Angle Right"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeMiterlimit":"10","d":"M26 20.006L40 32 26 44.006","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"angle-left-1","key":162},[React.createElement("title",{"key":0},"Angle Left"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeMiterlimit":"10","d":"M39 20.006L25 32l14 12.006","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"checkmark-1","key":163},[React.createElement("title",{"key":0},"Checkmark"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeMiterlimit":"10","d":"M16 33l11 11 21-22","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"checkmark-2","key":164},[React.createElement("title",{"key":0},"Checkmark"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeMiterlimit":"10","d":"M2 30l21 22 39-40","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"delete-circle-1","key":165},[React.createElement("title",{"key":0},"Delete Circle"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32.001","cy":"32","r":"30","transform":"rotate(-45 32.001 32)","fill":"none","stroke":"#202020","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeMiterlimit":"10","d":"M42.999 21.001l-22 22m22 0L21 21","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"backpack-1","key":166},[React.createElement("title",{"key":0},"Backpack"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M56 26v32a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V26","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M12 62H6a4 4 0 0 1-4-4V42a4 4 0 0 1 4-4h2m44 24h6a4 4 0 0 0 4-4V42a4 4 0 0 0-4-4h-2","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("rect",{"data-name":"layer1","x":"8","y":"10","width":"48","height":"19.98","rx":"4","ry":"4","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M24 10a8 8 0 1 1 16 0M24.1 46h-8v-8h8v8zM48 46h-8v-8h8v8zm-27.9-8V10.2m0 35.8v4M44 38V10.2M44 46v4","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"camping-1","key":167},[React.createElement("title",{"key":0},"Camping"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M62 61.995V45.997L44.531 23.995H20.898L2 45.997v15.998h60z","strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","data-name":"layer2","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"d":"M44.531 23.995L26.004 45.997 26 61.995m29.996.003L44.531 39.996 32.006 61.998m-6.002-16.001H2","strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","data-name":"layer2","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","r":"8","cy":"9.997","cx":"10","data-name":"layer1","style":{"stroke":"var(--layer1, #202020)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"camp-fire-1","key":168},[React.createElement("title",{"key":0},"Camp Fire"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M6 62l46-14m-9.8 9.2L58 62M12 48l9.9 3","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M28 46c-7-1.3-14-4.5-14-12s7.4-9.1 4-14c3.6 2.2 5.7 4.9 6 8 0-6.2 1.3-8.3 4-12s2.9-11.1 2-14c6.4 3.2 13.5 10.7 12 24a18.1 18.1 0 0 0 4-12s16.3 25.2-8 32","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"do-not-disturb-1","key":169},[React.createElement("title",{"key":0},"Do Not Disturb"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M46 32V17a15 15 0 0 0-30 0 4 4 0 0 0 8 .1 7 7 0 1 1 12.2 4.7C30.7 27.1 16 26.2 16 36v24a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V32z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M24 36h14v18H24z","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"colander-1","key":170},[React.createElement("title",{"key":0},"Colander"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M8.3 21H2m60 0h-6.3","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("circle",{"data-name":"layer2","cx":"20","cy":"23","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("circle",{"data-name":"layer2","cx":"28","cy":"23","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":4}),React.createElement("circle",{"data-name":"layer2","cx":"24","cy":"29","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":5}),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"29","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":6}),React.createElement("circle",{"data-name":"layer2","cx":"40","cy":"29","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":7}),React.createElement("circle",{"data-name":"layer2","cx":"36","cy":"35","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":8}),React.createElement("circle",{"data-name":"layer2","cx":"28","cy":"35","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":9}),React.createElement("circle",{"data-name":"layer2","cx":"36","cy":"23","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":10}),React.createElement("circle",{"data-name":"layer2","cx":"44","cy":"23","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":11}),React.createElement("path",{"data-name":"layer1","d":"M56 17a24 24 0 0 1-48 0z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":12}),React.createElement("path",{"data-name":"layer1","d":"M41.1 47a10 10 0 0 0-18.3 0z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":13})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"dome-plate-cover-1","key":171},[React.createElement("title",{"key":0},"Dome Plate Cover"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M6 45v-2a26 26 0 0 1 52 0v2M28.6 17.1a4 4 0 1 1 6.7.1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M2 45h60m-2 0l-2 5a4.2 4.2 0 0 1-4 3H10c-1.7 0-3.2-1.3-4-3l-2-5","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"hot-coffee-1","key":172},[React.createElement("title",{"key":0},"Hot Coffee"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","d":"M52 17.965v22.857c0 9.467-9.582 17.143-19.049 17.143h-1.9C21.58 57.965 12 50.289 12 40.822V17.965zM52 22h1.016A8.984 8.984 0 0 1 62 30.982a8.982 8.982 0 0 1-8.982 8.982H52","data-name":"layer2","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"d":"M32 13.998v-12m-12.002 12V8.002m24.004 5.996V8.002M62 60a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h56a2 2 0 0 1 2 2z","strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","data-name":"layer1","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"donut-1","key":173},[React.createElement("title",{"key":0},"Donut"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("circle",{"data-name":"layer2","cx":"32","cy":"32","r":"10","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M54 24c-6 1.8-7.1-3.5-6-6-4.5 1.2-8.9-1.9-6-8-3.4-.7-5.7-4.3-3.9-7.4A30.3 30.3 0 1 0 61.7 28c-4.4.8-6.8-1-7.7-4z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M28 12l2 2m-8 4l-4 4m-6-4v4m0 8l-2 2m6 4v4m-2 6l2 2m10 2l2 2m10-4l-2 2m10-4v4m1.8-12l4.2 4m4-10v4","style":{"stroke":"var(--layer1, #202020)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"cocktail-glass-1","key":174},[React.createElement("title",{"key":0},"Cocktail Glass"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M32 30v32m-10 0h20m7.3-54a54.4 54.4 0 0 0 .7-6H14a54.2 54.2 0 0 0 .7 6","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M32 30c11.7 0 15.8-13.8 17.3-22H14.7c1.5 8.2 5.6 22 17.3 22z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"spirit-glass-1","key":175},[React.createElement("title",{"key":0},"Spirit Glass"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M20 62h24M32 46v16m21.9-34C53.1 17 46 2 46 2H18s-7.1 14.3-7.9 26","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M10.1 28c0 .7-.1 1.4-.1 2 0 11.1 10.1 16 22 16s22-4.9 22-16c0-.7 0-1.3-.1-2z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"tropical-cocktail-1","key":176},[React.createElement("title",{"key":0},"Tropical Cocktail"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M33 32.1v28m-10 0h20","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M47.3 14.1a8 8 0 1 1 5.2 5.4","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("path",{"data-name":"layer2","d":"M1 4.1h8c5.2 0 9 3.6 10 10","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":4}),React.createElement("path",{"data-name":"layer2","d":"M52.3 19.9a20.8 20.8 0 0 0 2.3-5.8H11.5a20.7 20.7 0 0 0 2.3 5.8","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":5}),React.createElement("path",{"data-name":"layer1","d":"M13.8 19.9C17.9 27.1 26 32.1 33 32.1s15.2-5 19.3-12.2z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"chicken-breast-1","key":177},[React.createElement("title",{"key":0},"Chicken Breast"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","d":"M12.983 44.548l-4.234 4.237A4.131 4.131 0 0 0 3.212 54.9c2.143 2.143 2.934 1.471 3.658 2.2 1 1 .426 1.887 2.2 3.66a4.142 4.142 0 0 0 5.857-5.86 4.123 4.123 0 0 0-.334-.25l4.228-4.228","data-name":"layer2","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","r":"1","cy":"9.97","cx":"43.999","data-name":"layer2","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","r":"1","cy":"11.974","cx":"35.999","data-name":"layer2","style":{"stroke":"var(--layer1, #202020)"},"key":4}),React.createElement("circle",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","r":"1","cy":"17.972","cx":"45.999","data-name":"layer2","style":{"stroke":"var(--layer1, #202020)"},"key":5}),React.createElement("path",{"strokeLinejoin":"round","strokeLinecap":"round","stroke":"#202020","fill":"none","d":"M55.85 8.175a21 21 0 0 0-29.7 0A21.827 21.827 0 0 0 24.618 9.9c-.1.127-.193.268-.291.4-.332.434-.658.869-.951 1.32-6.2 9.3-6.746 23.059-9.244 25.555l-.709.709a5 5 0 0 0 0 7.072l5.658 5.656a5 5 0 0 0 7.07 0l.709-.709c2.676-2.676 17.549-2.391 27.35-10.547a21.513 21.513 0 0 0 1.641-1.475 21 21 0 0 0-.001-29.706z","data-name":"layer1","style":{"stroke":"var(--layer1, #202020)"},"key":6})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"pizza-1","key":178},[React.createElement("title",{"key":0},"Pizza"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M28.1 20v-6a24.1 24.1 0 1 0 21.8 13.9l-5.4 2.5m10.3-12.2l5-2.4A24 24 0 0 0 38.1 2l-.8 5","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M10.1 38a18 18 0 1 0 34.3-7.6L28.1 38V20a18 18 0 0 0-18 18z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("circle",{"data-name":"layer1","cx":"21.1","cy":"35","r":"2","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":4}),React.createElement("circle",{"data-name":"layer1","cx":"25.1","cy":"47","r":"1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":5}),React.createElement("circle",{"data-name":"layer1","cx":"35.1","cy":"43","r":"3","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":6}),React.createElement("path",{"data-name":"layer1","d":"M38.1 7h-.8l-3.2 21 20.7-9.8A18 18 0 0 0 38.1 7z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":7})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"chinese-takeout-1","key":179},[React.createElement("title",{"key":0},"Chinese Takeout"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M53 2L41 16m20-9.2L42.4 22.3","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M3 28l6 34h32l6-34-16-16c-2.6-2.5-9.1-2.8-12 0S3 28 3 28z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M47 28H3l38 34m-26-6l8.2-9.9","style":{"stroke":"var(--layer1, #202020)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"orange-1","key":180},[React.createElement("title",{"key":0},"Orange"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M59.6 32.3c5.9 14.2.1 23.7-12.9 21.3S18.2 37.8 12.3 23.7 12.2 0 25.2 2.3s28.5 15.8 34.4 30z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer2","d":"M59.2 50.6A32.7 32.7 0 0 1 34 62 32 32 0 0 1 2 30C2 20 6.2 10.6 13.4 4.7","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","d":"M20 26l32 4M24 8l28 40M42 18L32 40","style":{"stroke":"var(--layer1, #202020)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"watermelon-1","key":181},[React.createElement("title",{"key":0},"Watermelon"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M56 15h6v4a30 30 0 1 1-60 0v-4h6","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M8 15v4a24 24 0 1 0 48 0v-4zm24 16v4M20 23h-4m31.7 0h-4M24 29l-2.8 2.8M40 29l2.8 2.8","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"french-bread-1","key":182},[React.createElement("title",{"key":0},"French Bread"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M4 35c0-6.428 7.599-20 28-20 20.404 0 28 9.083 28 20 0 10.595-9.981 10.002-21.999 10.002h-24C11.018 45.002 4 42.454 4 35zm15.056-17.793c2.7 1.77 6.945 5.676 6.945 11.792m4-13.999c3 1.383 5.44 6.318 5.999 12m4-11.46c2.701 1.769 5.44 5.78 5.999 11.46","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","d":"M2 51h60","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"birthday-cake-2","key":183},[React.createElement("title",{"key":0},"Birthday Cake"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M6 59.998V29.996a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v30.002","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","d":"M2 59.995h59.998","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("path",{"data-name":"layer2","d":"M5.998 34.998a7.001 7.001 0 0 0 7 7c3.867 0 7-2.133 7-6m.002 0c0 3.867 3.135 6 7 6 3.867 0 7-2.133 7-6m0 0c0 3.867 3.135 6 7 6 3.867 0 7-2.133 7-6m0 0c0 3.867 3.135 6 7 6a6.974 6.974 0 0 0 3.002-.676M31.998 17.998v9.998m-16.002-9.998v9.998M48 17.998v9.998","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":4}),React.createElement("path",{"data-name":"layer1","d":"M18.996 8.998a7.341 7.341 0 0 0-3-5.998s-3 2.679-3 5.998a2.993 2.993 0 0 0 5.86.867 2.594 2.594 0 0 0 .14-.867zm16.002 0a7.341 7.341 0 0 0-3-5.998s-3 2.679-3 5.998a2.993 2.993 0 0 0 5.86.867 2.597 2.597 0 0 0 .14-.867zm16.002 0A7.341 7.341 0 0 0 48 3s-3 2.679-3 5.998a2.993 2.993 0 0 0 5.86.867 2.594 2.594 0 0 0 .14-.867z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"hot-coffee-2","key":184},[React.createElement("title",{"key":0},"Hot Coffee"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M49.997 21.967v22.856c0 9.468-9.581 17.144-19.049 17.144h-1.903c-9.468 0-19.048-7.676-19.048-17.144V21.967z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","d":"M2 62h57.994","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3}),React.createElement("path",{"data-name":"layer2","d":"M49.996 26h3.017a8.984 8.984 0 0 1 8.983 8.984 8.984 8.984 0 0 1-8.983 8.983h-3.017","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":4}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","d":"M29.997 15.999V2M17.995 15.999V8.003m24.004 7.996V8.003","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":5})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"home-button-1","key":185},[React.createElement("title",{"key":0},"Home Button"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M32 4L2.445 34.57a.25.25 0 0 0 .174.43H10v27h15V45h14v17h15V35h7.382a.25.25 0 0 0 .174-.43z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"home-1","key":186},[React.createElement("title",{"key":0},"Home"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","d":"M2 31L32 5l30 26","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer2","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","d":"M54 19v-9h-9","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #202020)"},"key":3}),React.createElement("path",{"data-name":"layer1","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","d":"M10 32.167V62h14V42h16v20h14V32.083","strokeLinejoin":"round","style":{"stroke":"var(--layer2, #202020)"},"key":4})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"homepage-1","key":187},[React.createElement("title",{"key":0},"Homepage"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer1","d":"M52 62V35h9.382a.25.25 0 0 0 .174-.43L32 4 2.445 34.57a.25.25 0 0 0 .174.43H12v27z","fill":"none","stroke":"#202020","strokeLinecap":"round","strokeMiterlimit":"10","strokeLinejoin":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2})]),React.createElement("symbol",{"viewBox":"0 0 64 64","id":"password-1","key":188},[React.createElement("title",{"key":0},"Password"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"data-name":"layer2","d":"M38.5 48l-2.2-17.1a9 9 0 1 0-8.7 0L25.5 48z","fill":"none","stroke":"#202020","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #202020)"},"key":2}),React.createElement("path",{"data-name":"layer1","d":"M62 53.5a8.5 8.5 0 0 1-8.5 8.5h-43A8.5 8.5 0 0 1 2 53.5v-43A8.5 8.5 0 0 1 10.5 2h43a8.5 8.5 0 0 1 8.5 8.5z","fill":"none","stroke":"#202020","strokeMiterlimit":"10","strokeLinejoin":"round","strokeLinecap":"round","style":{"stroke":"var(--layer1, #202020)"},"key":3})]),React.createElement("symbol",{"viewBox":"0 0 428.218 428.218","id":"sleepers-1","key":189},[React.createElement("title",{"key":0},"sleepers"),React.createElement("desc",{"key":1},"A line styled icon from Orion Icon Library."),React.createElement("path",{"d":"M425.548 250.627c-12.814-21.002-46.897-33.038-80.654-44.214-15.859-5.251-30.84-10.211-41.72-15.756-33.374-17.013-67.716-33.249-68.059-33.412a5 5 0 0 0-6.657 2.385c-.024.052-.034.106-.056.158l-.013-.005-17.252 39.932c-111.84-13.387-170.712-32.936-181.161-36.637l-10.283-19a5 5 0 1 0-8.795 4.759l10.265 18.966c-1.702 6.824-7.905 31.293-14.638 52.987-4.843 15.601-5.19 32.376-5.208 35.907-.636 2.713-2.647 12.738.05 21.274a4.999 4.999 0 0 0 4.643 3.492l161.604 4.004c3.528.113 41.257 1.289 87.498 1.289 61.39 0 137.776-2.072 168.976-11.451a4.997 4.997 0 0 0 3.484-3.92c.083-.454 2.311-13.653-2.024-20.758zm-190.034-82.119c10.503 5.011 37.108 17.799 63.119 31.059 11.556 5.891 26.887 10.966 43.118 16.34 27.118 8.978 57.459 19.024 70.909 33.887-78.146 12.849-215.478 7.441-215.478 7.441l38.332-88.727zM16.077 223.757c5.933-19.118 11.458-40.36 13.919-50.07 16.857 5.727 73.717 23.05 177.006 35.604l-20.592 47.666-174.963-4.521c.301-6.349 1.304-17.964 4.63-28.679zm401.965 42.857c-57.401 14.859-248.147 8.924-250.141 8.859l-157.716-3.908c-.408-3.28-.127-6.661.235-9.154l187.222 4.84c98.539 1.81 156.792 1.946 220.044-8.215.483 2.783.48 5.562.356 7.578z","data-name":"layer1","fill":"#000","style":{"fill":"var(--layer1, #000)"},"key":2})])]);
}

OrionSvgSprite.defaultProps = {"width":"0","height":"0","className":"hidden"};

module.exports = OrionSvgSprite;

OrionSvgSprite.default = OrionSvgSprite;


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[320,480,640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hLIj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomImage = props => {
  if (false) {} else {
    return __jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, props);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (CustomImage);

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "mEKR":
/***/ (function(module, exports) {

module.exports = require("next-google-fonts");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pB4U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+/Rj");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hLIj");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Brands = props => {
  const params = {
    containerClass: `swiper-container brands-slider pb-5`,
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    roundLengths: true,
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 6
      },
      991: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      }
    }
  };
  return __jsx("section", {
    className: `py-6 ${props.greyBackground ? "bg-gray-100" : ""}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("h5", {
    className: "text-center text-uppercase letter-spacing-3 mb-5"
  }, props.title), __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, params, props.brands.map((brand, index) => __jsx("div", {
    key: index,
    className: "h-auto d-flex align-items-center justify-content-center"
  }, __jsx("div", {
    className: "w-6rem opacity-7"
  }, __jsx(_CustomImage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    src: `/content/${brand.img}`,
    width: 151,
    height: 150,
    layout: "intrinsic",
    alt: brand.title,
    className: "img-fluid",
    sizes: "(max-width: 576px) 100vw, 530px"
  })))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Brands);

/***/ }),

/***/ "re7B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    children,
    activeClassName
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "activeClassName"]);

  const {
    asPath
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  const childClassName = child.props.className || "";
  const className = asPath === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className: className || null
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ActiveLink);

/***/ }),

/***/ "t7JC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("SXSQ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Discover = props => {
  return __jsx("section", {
    className: props.className
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("div", {
    className: "pb-lg-4"
  }, __jsx("p", {
    className: "subtitle text-secondary"
  }, props.subTitle), __jsx("h2", {
    className: "mb-5"
  }, props.title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, props.blocks.map(block => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    key: block.title,
    sm: "6",
    lg: 12 / props.blocks.length,
    className: "mb-3 mb-lg-0"
  }, __jsx("div", {
    className: "px-0 pr-lg-3"
  }, __jsx("div", {
    className: `icon-rounded mb-3 bg-${block.color}-light`
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    icon: block.icon,
    className: `w-2rem h-2rem text-${block.color}`
  })), __jsx("h3", {
    className: "h6 text-uppercase"
  }, block.title), __jsx("p", {
    className: "text-muted text-sm"
  }, block.content)))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Discover);

/***/ }),

/***/ "tY5m":
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Sail With Us\",\"content\":\"Stay Connected With Us and View Our Social Media Content Below:\",\"social\":[{\"title\":\"twitter\",\"link\":\"#\"},{\"title\":\"facebook\",\"link\":\"#\"},{\"title\":\"instagram\",\"link\":\"#\"},{\"title\":\"pinterest\",\"link\":\"#\"},{\"title\":\"vimeo\",\"link\":\"#\"}],\"lg\":\"4\"},{\"title\":\"Additional Resources\",\"links\":[{\"title\":\"Company Reviews\",\"link\":\"/\"},{\"title\":\"Career Development Advice\",\"link\":\"/category-rooms\"},{\"title\":\"Salary and Benefit Tools\",\"link\":\"/category-2-rooms\"}],\"lg\":\"2\",\"md\":\"6\"},{\"title\":\"Additional Pages\",\"links\":[{\"title\":\"Advertise With Us\",\"link\":\"/compare\"},{\"title\":\"Join Our Team\",\"link\":\"/team\"},{\"title\":\"Contact\",\"link\":\"/contact\"}],\"lg\":\"2\",\"md\":\"6\"},{\"title\":\"Interested In Receiving Updates On Job Openings In Your Industry?\",\"content\":\"Enter your email below so our team can provide you updates when openings become available.\",\"contentBottomMargin\":\"3\",\"form\":{\"placeholder\":\"Your Email Address\"},\"lg\":\"4\"}]");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });