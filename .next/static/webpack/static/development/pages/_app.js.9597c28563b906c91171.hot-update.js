webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, TOGGLE_CART_MUTATION, LOCAL_STATE_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SickButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/SickButton.js */ "./components/styles/SickButton.js");
/* harmony import */ var _styles_CartStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles.js */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Supreme.js */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CloseButton.js */ "./components/styles/CloseButton.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _TakeMyMoney__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TakeMyMoney */ "./components/TakeMyMoney.js");
var _jsxFileName = "D:\\Fullstack Wes Bos\\Advanced-React-master\\sick-fits\\frontend\\components\\Cart.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nmutation{\n    toggleCart @client\n    # cartOpen: !cartOpen\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nquery{\n    cartOpen @client\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject2());

var Cart = function Cart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    if (!me) return null;
    console.log(me);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], {
      mutation: TOGGLE_CART_MUTATION,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, function (toggleCart) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
        query: LOCAL_STATE_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CartStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
          open: data.cartOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CloseButton_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: toggleCart,
          title: "close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Supreme_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, me.name, " Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "You have ", me.cart.length, " item", me.cart.length === 1 ? '' : 's', " in your cart.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, me.cart.map(function (cartItem) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: cartItem.id,
            cartItem: cartItem,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          });
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, " ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__["default"])(me.cart))), me.cart.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TakeMyMoney__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "cheeeckout"))));
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);


/***/ })

})
//# sourceMappingURL=_app.js.9597c28563b906c91171.hot-update.js.map