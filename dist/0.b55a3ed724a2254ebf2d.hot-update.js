webpackHotUpdate(0,{

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(155); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(155);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(283);

	__webpack_require__(387);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Autumn = function (_Component) {
	  _inherits(Autumn, _Component);

	  function Autumn() {
	    _classCallCheck(this, Autumn);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Autumn).apply(this, arguments));
	  }

	  _createClass(Autumn, [{
	    key: 'slideBar',
	    value: function slideBar() {

	      var result = [];
	      for (var i = 0; i < 10; i++) {
	        result.push(_react2.default.createElement(
	          'li',
	          { key: i, className: 'item' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/autumn/msg/' + i, activeClassName: 'selected' },
	            '图片',
	            i
	          )
	        ));
	      }

	      return _react2.default.createElement(
	        'ul',
	        { className: 'navHeaderAutumn' },
	        result,
	        _react2.default.createElement(
	          'li',
	          { className: 'item' },
	          '路由实现2'
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        null,
	        this.slideBar(),
	        _react2.default.createElement(
	          'div',
	          { className: 'imgSingle' },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Autumn;
	}(_react.Component);

	exports.default = Autumn;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(356); if (makeExportsHot(module, __webpack_require__(155))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "autumn.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})