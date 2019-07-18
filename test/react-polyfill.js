'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var createContext = _interopDefault(require('create-react-context'));

React.createContext = createContext;

console.log("react-polyfill is loaded")
