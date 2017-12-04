// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                    = require("bs-platform/lib/js/list.js");
var $$Array                 = require("bs-platform/lib/js/array.js");
var Caml_int32              = require("bs-platform/lib/js/caml_int32.js");
var Caml_format             = require("bs-platform/lib/js/caml_format.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function splitLines(input) {
  return $$Array.to_list(input.split("\n"));
}

function splitDigits(line) {
  return $$Array.to_list($$Array.map(Caml_format.caml_int_of_string, line.split("\t")));
}

function debug(input) {
  console.log(input);
  return input;
}

function minMax(param, z) {
  var y = param[1];
  var x = param[0];
  var match = +(z > x);
  var match$1 = +(z < y);
  if (match !== 0) {
    return /* tuple */[
            z,
            y
          ];
  } else if (match$1 !== 0) {
    return /* tuple */[
            x,
            z
          ];
  } else {
    return /* tuple */[
            x,
            y
          ];
  }
}

function lineMinMax(line) {
  if (line) {
    var hd = line[0];
    return List.fold_left(minMax, /* tuple */[
                hd,
                hd
              ], line[1]);
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "Empty line"
        ];
  }
}

function part1(input) {
  return List.fold_left((function (total, param) {
                return (total + param[0] | 0) - param[1] | 0;
              }), 0, List.map(lineMinMax, List.map(splitDigits, $$Array.to_list(input.split("\n")))));
}

function hasDivisor(n, _digits) {
  while(true) {
    var digits = _digits;
    if (digits) {
      var m = digits[0];
      var match = +(Caml_int32.mod_(n, m) === 0);
      var match$1 = +(Caml_int32.mod_(m, n) === 0);
      if (match !== 0) {
        return /* Some */[/* tuple */[
                  n,
                  m
                ]];
      } else if (match$1 !== 0) {
        return /* Some */[/* tuple */[
                  m,
                  n
                ]];
      } else {
        _digits = digits[1];
        continue ;
        
      }
    } else {
      return /* None */0;
    }
  };
}

function divisors(_digits) {
  while(true) {
    var digits = _digits;
    if (digits) {
      var rest = digits[1];
      var match = hasDivisor(digits[0], rest);
      if (match) {
        return match[0];
      } else {
        _digits = rest;
        continue ;
        
      }
    } else {
      throw [
            Caml_builtin_exceptions.failure,
            "No divisors found"
          ];
    }
  };
}

function part2(input) {
  return List.fold_left((function (total, param) {
                return total + Caml_int32.div(param[0], param[1]) | 0;
              }), 0, List.map(divisors, List.map(splitDigits, $$Array.to_list(input.split("\n")))));
}

exports.splitLines  = splitLines;
exports.splitDigits = splitDigits;
exports.debug       = debug;
exports.minMax      = minMax;
exports.lineMinMax  = lineMinMax;
exports.part1       = part1;
exports.hasDivisor  = hasDivisor;
exports.divisors    = divisors;
exports.part2       = part2;
/* No side effect */
