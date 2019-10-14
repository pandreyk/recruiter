'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modal_controller = require('./modal_controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Renders its contents in a modal div with a backdrop.
 * Use Modal if you want to show a modal without changing the route.
 *
 * The content that is shown is specified by *either* the "component" prop, or by
 * child elements of the Modal.
 * 
 *
 * @param {Object} props
 * @param {Number} props.stackOrder order to stack modals, higher number means "on top"
 * @param {Children} props.children Modal content can be specified as chld elements
 * @param {Component} props.component React component to render in the modal.
 * @param {Object} props.props props to pass to the react component specified by the component property
 * @param {Function} props.onBackdropClick handler to be invoked when the modal backdrop is clicked
 * @param {String} props.className class name to apply to modal container
 * @param {String} props.inClassName class name applied to modal immediately after it is shown to allow for css transitions
 * @param {String} props.outClassName class name applied to modal before modal is hidden to allow for css transitions
 * @param {String} props.backdropInClassName class name applied to backdrop immediately after it is shown to allow for css transitions
 * @param {String} props.backdropOutClassName class name applied to backdrop before modal is hidden to allow for css transitions
 * @param {String} props.outDelay delay, in milliseconds to wait when closing modal, to allow for css transitions to complete before ripping it out of the DOM
 *
 * @example <caption>Modals using a component and props, vs. child elements</caption>
 *
 * const Hello = ({ who }) => (<div>Hello {who}!</div>);
 *
 * // component and props
 * const ComponentExample = () => (
 *   <Modal
 *    component={Hello}
 *    props={{ who: 'World' }}
 *   />
 * );
 *
 * // using child elements
 * const ChildrenExample = () => (
 *   <Modal>
 *     <Hello who='World' />
 *   </Modal>
 * );
 *
 * @example <caption>Specifying stack order</caption>
 * <div>
 *   <Modal
 *     className='top-component-modal'
 *     component={MyTopComponent}
 *     props={ { foo: 'bar'} }
 *     stackOrder={2}
 *   />
 *   <Modal
 *     component={MyBottomComponent}
 *     props={ { bar: 'baz'} }
 *     stackOrder={1}
 *   />
 * </div>
 */

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        modalId: (0, _modal_controller.mountModal)(_extends({
          setId: this.context.setId || 0,
          props: this.props.props || {}
        }, this.props))
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      (0, _modal_controller.updateModal)(this.state.modalId, next);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _modal_controller.unmountModal)(this.state.modalId);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.contextTypes = {
  setId: function setId() {}
};
exports.default = Modal;
module.exports = exports['default'];