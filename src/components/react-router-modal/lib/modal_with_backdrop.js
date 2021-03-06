'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _get_aria_props = require('./get_aria_props');

var _get_aria_props2 = _interopRequireDefault(_get_aria_props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalWithBackdrop = function (_React$Component) {
  _inherits(ModalWithBackdrop, _React$Component);

  function ModalWithBackdrop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalWithBackdrop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalWithBackdrop.__proto__ || Object.getPrototypeOf(ModalWithBackdrop)).call.apply(_ref, [this].concat(args))), _this), _this.state = { rendered: false }, _this.done = false, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalWithBackdrop, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          if (!_this2.done && !_this2.rendered) {
            _this2.setState({
              rendered: true
            });
          }
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.done = true;
    }
  }, {
    key: 'getClassName',
    value: function getClassName(mainClassName, inClassName, outClassName) {
      var names = [mainClassName || ''];
      if (this.state.rendered && !this.props.isOut) names.push(inClassName || '');
      if (this.props.isOut) names.push(outClassName || '');
      return names.filter(function (n) {
        return !!n;
      }).join(' ') || '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          props = _props.props,
          onBackdropClick = _props.onBackdropClick,
          backdropClassName = _props.backdropClassName,
          backdropInClassName = _props.backdropInClassName,
          backdropOutClassName = _props.backdropOutClassName,
          modalClassName = _props.modalClassName,
          modalInClassName = _props.modalInClassName,
          modalOutClassName = _props.modalOutClassName,
          wrapperClassName = _props.wrapperClassName;


      var calculatedBackdropClassName = this.getClassName(backdropClassName, backdropInClassName, backdropOutClassName);
      var calculatedModalClassName = this.getClassName(modalClassName, modalInClassName, modalOutClassName);

      var Component = component;

      var ariaProps = (0, _get_aria_props2.default)(this.props);

      return _react2.default.createElement(
        'div',
        { className: wrapperClassName },
        _react2.default.createElement('div', { className: calculatedBackdropClassName, onClick: onBackdropClick },
          _react2.default.createElement(
            'div',
            _extends({
              className: calculatedModalClassName,
              role: 'dialog',
              'aria-modal': true
            }, ariaProps),
            !Component && children,
            Component && _react2.default.createElement(Component, _extends({}, props, { context: this.props.context }))
          )),
      );
    }
  }]);

  return ModalWithBackdrop;
}(_react2.default.Component);

ModalWithBackdrop.childContextTypes = {
  setId: function setId() {}
};
exports.default = ModalWithBackdrop;
module.exports = exports['default'];


























































// 'use strict';

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });

// var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// var _react = require('react');

// var _react2 = _interopRequireDefault(_react);

// var _get_aria_props = require('./get_aria_props');

// var _get_aria_props2 = _interopRequireDefault(_get_aria_props);

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var ModalWithBackdrop = function (_React$Component) {
//   _inherits(ModalWithBackdrop, _React$Component);

//   function ModalWithBackdrop() {
//     var _ref;

//     var _temp, _this, _ret;

//     _classCallCheck(this, ModalWithBackdrop);

//     for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
//       args[_key] = arguments[_key];
//     }

//     return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalWithBackdrop.__proto__ || Object.getPrototypeOf(ModalWithBackdrop)).call.apply(_ref, [this].concat(args))), _this), _this.state = { rendered: false }, _this.done = false, _temp), _possibleConstructorReturn(_this, _ret);
//   }

//   _createClass(ModalWithBackdrop, [{
//     key: 'getChildContext',
//     value: function getChildContext() {
//       return this.props.context;
//     }
//   }, {
//     key: 'componentDidMount',
//     value: function componentDidMount() {
//       var _this2 = this;

//       requestAnimationFrame(function () {
//         requestAnimationFrame(function () {
//           if (!_this2.done && !_this2.rendered) {
//             _this2.setState({
//               rendered: true
//             });
//           }
//         });
//       });
//     }
//   }, {
//     key: 'componentWillUnmount',
//     value: function componentWillUnmount() {
//       this.done = true;
//     }
//   }, {
//     key: 'getClassName',
//     value: function getClassName(mainClassName, inClassName, outClassName) {
//       var names = [mainClassName || ''];
//       if (this.state.rendered && !this.props.isOut) names.push(inClassName || '');
//       if (this.props.isOut) names.push(outClassName || '');
//       return names.filter(function (n) {
//         return !!n;
//       }).join(' ') || '';
//     }
//   }, {
//     key: 'render',
//     value: function render() {
//       var _props = this.props,
//           children = _props.children,
//           component = _props.component,
//           props = _props.props,
//           onBackdropClick = _props.onBackdropClick,
//           backdropClassName = _props.backdropClassName,
//           backdropInClassName = _props.backdropInClassName,
//           backdropOutClassName = _props.backdropOutClassName,
//           modalClassName = _props.modalClassName,
//           modalInClassName = _props.modalInClassName,
//           modalOutClassName = _props.modalOutClassName,
//           wrapperClassName = _props.wrapperClassName;


//       var calculatedBackdropClassName = this.getClassName(backdropClassName, backdropInClassName, backdropOutClassName);
//       var calculatedModalClassName = this.getClassName(modalClassName, modalInClassName, modalOutClassName);

//       var Component = component;

//       var ariaProps = (0, _get_aria_props2.default)(this.props);

//       return _react2.default.createElement(
//         'div',
//         { className: wrapperClassName },
//         _react2.default.createElement('div', { className: calculatedBackdropClassName, onClick: onBackdropClick }),
//         _react2.default.createElement(
//           'div',
//           _extends({
//             className: calculatedModalClassName,
//             role: 'dialog',
//             'aria-modal': true
//           }, ariaProps),
//           !Component && children,
//           Component && _react2.default.createElement(Component, _extends({}, props, { context: this.props.context }))
//         )
//       );
//     }
//   }]);

//   return ModalWithBackdrop;
// }(_react2.default.Component);

// ModalWithBackdrop.childContextTypes = {
//   setId: function setId() {}
// };
// exports.default = ModalWithBackdrop;
// module.exports = exports['default'];