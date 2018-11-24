'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _phones = require('../shop/phones');

var _phones2 = _interopRequireDefault(_phones);

require('../css/phones.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            phone: '',
            arrows_display: ''
        };
        return _this;
    }

    _createClass(App, [{
        key: 'age',
        value: function age(phone) {
            this.setState({
                phone: phone,
                arrows_display: 'block'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'box' },
                _react2.default.createElement(PhoneList, { age: this.age.bind(this) }),
                _react2.default.createElement(Details, { arrows: this.state.arrows_display,

                    phone: this.state.phone })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

var Details = function (_React$Component2) {
    _inherits(Details, _React$Component2);

    function Details(props) {
        _classCallCheck(this, Details);

        var _this2 = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this, props));

        _this2.state = {
            imageUrl: '',
            count: 0,
            arg: _this2.props
        };
        return _this2;
    }

    _createClass(Details, [{
        key: 'arrowClick',
        value: function arrowClick(num) {
            console.log('this.state.count', this.state.count);
            console.log('this.state.imageUrl', this.state.imageUrl);
            var url = void 0;
            if (this.state.imageUrl === '') {
                url = this.props.phone.imageUrl;
            } else {
                url = this.state.imageUrl;
            }
            var count = this.state.count;
            var new_count = parseInt(count) + num;
            url = url.replace(count + '.jpg', new_count + '.jpg');
            this.setState({
                imageUrl: url,
                count: new_count
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var phone = this.props.phone;
            var url = void 0;
            if (this.state.imageUrl === '') {
                url = phone.imageUrl;
            } else {
                url = this.state.imageUrl;
            }
            return _react2.default.createElement(
                'div',
                { className: 'phone_details' },
                _react2.default.createElement(
                    'h3',
                    null,
                    phone.name
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    phone.id
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { src: url })
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    phone.snippet
                )
            );
        }
    }]);

    return Details;
}(_react2.default.Component);

var Arrows = function (_React$Component3) {
    _inherits(Arrows, _React$Component3);

    function Arrows(props) {
        _classCallCheck(this, Arrows);

        return _possibleConstructorReturn(this, (Arrows.__proto__ || Object.getPrototypeOf(Arrows)).call(this, props));
    }

    _createClass(Arrows, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { display: this.props.display }, className: 'arrows' },
                _react2.default.createElement('div', { onClick: this.props.leftClick,
                    className: 'arrow-left' }),
                _react2.default.createElement('div', { onClick: this.props.rightClick,
                    className: 'arrow-right' })
            );
        }
    }]);

    return Arrows;
}(_react2.default.Component);

var PhoneList = function (_React$Component4) {
    _inherits(PhoneList, _React$Component4);

    function PhoneList(props) {
        _classCallCheck(this, PhoneList);

        var _this4 = _possibleConstructorReturn(this, (PhoneList.__proto__ || Object.getPrototypeOf(PhoneList)).call(this, props));

        _this4.state = {
            elem: ''
        };
        return _this4;
    }

    _createClass(PhoneList, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            var phone_list = (0, _phones2.default)().map(function (phone) {
                return _react2.default.createElement(
                    'li',
                    { onClick: _this5.props.age.bind(null, phone),
                        key: phone.age },
                    _react2.default.createElement(
                        'h5',
                        null,
                        phone.id
                    ),
                    _react2.default.createElement('img', { src: phone.imageUrl })
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'phone_list' },
                _react2.default.createElement(
                    'ul',
                    { className: 'list' },
                    phone_list
                )
            );
        }
    }]);

    return PhoneList;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('#phone'));
