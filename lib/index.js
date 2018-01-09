"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, target) {
  if (!(target instanceof type)) {
    throw new Error(target + " is not a " + type);
  }
  return target;
};