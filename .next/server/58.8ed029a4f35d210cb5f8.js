exports.ids = [58];
exports.modules = {

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

/***/ "bMVF":
/***/ (function(module, exports) {



/***/ }),

/***/ "sa1V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AuoD");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bMVF");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CIrI");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MapLeaflet = props => {
  const tileLayers = [{
    tiles: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd"
  }, {
    tiles: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }, {
    tiles: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }, {
    tiles: "https://mapserver.mapy.cz/base-m/{z}-{x}-{y}",
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://seznam.cz">Seznam.cz, a.s.</a>'
  }, {
    tiles: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd"
  }, {
    tiles: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia maps</a>'
  }];
  const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [focus, setFocus] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const icon = L.icon({
    iconUrl: "/content/svg/marker.svg",
    shadowUrl: "",
    iconRetinaUrl: "/content/svg/marker.svg",
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19]
  });
  const highlightIcon = L.icon({
    iconUrl: "/content/svg/marker-hover.svg",
    shadowUrl: "",
    iconRetinaUrl: "/content/svg/marker-hover.svg",
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19]
  });
  const markers = props.geoJSON && props.geoJSON.features && props.geoJSON.features.map(feature => [feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
  return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    center: props.center && props.center,
    zoom: props.zoom,
    scrollWheelZoom: focus,
    className: props.className,
    dragging: props.dragging,
    tap: props.tap,
    bounds: props.geoJSON ? markers : null,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], {
    url: tileLayers[0].tiles,
    attribution: tileLayers[0].attribution
  }), props.geoJSON && props.geoJSON.features && props.geoJSON.features.map(feature => {
    const data = feature.properties;
    return props.popupVenue ? __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      key: data.id,
      position: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
      onMouseOver: () => {
        setHover(data.id);
      },
      onMouseOut: () => {
        setHover(false);
      },
      icon: hover === data.id || props.hoverCard === feature.properties.id ? highlightIcon : icon
    }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
      className: "map-custom-popup",
      maxWidth: "600",
      minWidth: "200"
    }, __jsx("div", {
      className: "popup-venue"
    }, data.image ? __jsx("div", {
      className: `image d-none d-md-block`,
      style: {
        backgroundImage: `url(/content/img/photo/${data.image})`
      }
    }) : __jsx("div", {
      className: "image"
    }), __jsx("div", {
      className: "text"
    }, data.name && __jsx("h6", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: data.link
    }, __jsx("a", null, data.name))), data.about && __jsx("p", null, data.about), data.address && __jsx("p", {
      className: "text-muted mb-1"
    }, data.address), data.email && __jsx("p", {
      className: "text-muted mb-1"
    }, __jsx("i", {
      className: "fas fa-envelope-open fa-fw text-dark mr-2"
    }), __jsx("a", {
      href: `mailto:${data.email}`
    }, data.email)), data.phone && __jsx("p", {
      className: "text-muted mb-1"
    }, __jsx("i", {
      className: "fa fa-phone fa-fw text-dark mr-2"
    }), data.phone))))) : __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      key: data.id,
      icon: icon,
      opacity: 0,
      position: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
      onMouseOver: () => {
        setHover(data.id);
      },
      onMouseOut: () => {
        setHover(false);
      }
    }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      permanent: true,
      interactive: true,
      direction: "top",
      className: `map-custom-tooltip ${hover === data.id || props.hoverCard === feature.properties.id ? "active" : ""}`
    }, "$", data.price), __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
      className: "map-custom-popup",
      maxWidth: "600",
      minWidth: "200"
    }, __jsx("div", {
      className: "popup-rental"
    }, data.image ? __jsx("div", {
      className: `image d-none d-md-block`,
      style: {
        backgroundImage: `url(/content/img/photo/${data.image})`
      }
    }) : __jsx("div", {
      className: "image"
    }), __jsx("div", {
      className: "text"
    }, data.name && __jsx("h6", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: data.link
    }, __jsx("a", null, data.name))), __jsx("div", {
      className: "text-xs"
    }, __jsx(_Stars__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      stars: data.stars
    }))))));
  }), props.markerPosition && __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    position: props.markerPosition,
    icon: icon
  }), props.circlePosition && __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Circle"], {
    center: props.circlePosition,
    color: "#4E66F8",
    fillColor: "#8798fa",
    opacity: 0.5,
    radius: props.circleRadius,
    weight: 2
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MapLeaflet);

/***/ })

};;