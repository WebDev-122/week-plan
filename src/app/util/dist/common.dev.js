"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePlanStr = void 0;

var format = function format(str) {
  if (str.toString().length === 1) return '0' + str;
  return str;
};

var getStrFromDate = function getStrFromDate(value) {
  if (value.getHours() === 0 && value.getMinutes() === 0) return '';
  return format(value.getHours()) + ':' + format(value.getMinutes());
};

var makePlanStr = function makePlanStr(event) {
  var result = '';
  var start = event.start;
  var end = event.end;
  result += getStrFromDate(start);
  if (result) result += '~' + getStrFromDate(end);
  return result;
};

exports.makePlanStr = makePlanStr;