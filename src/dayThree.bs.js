// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array                 = require("bs-platform/lib/js/array.js");
var Block                   = require("bs-platform/lib/js/block.js");
var Curry                   = require("bs-platform/lib/js/curry.js");
var Js_exn                  = require("bs-platform/lib/js/js_exn.js");
var Caml_array              = require("bs-platform/lib/js/caml_array.js");
var Utils$Advent2017        = require("./Utils.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function abs(prim) {
  return Math.abs(prim);
}

var cases = /* :: */[
  /* tuple */[
    1,
    0
  ],
  /* :: */[
    /* tuple */[
      12,
      3
    ],
    /* :: */[
      /* tuple */[
        23,
        2
      ],
      /* :: */[
        /* tuple */[
          1024,
          31
        ],
        /* [] */0
      ]
    ]
  ]
];

function spiral(n) {
  var _x = 0;
  var _y = 0;
  var _count = 1;
  while(true) {
    var count = _count;
    var y = _y;
    var x = _x;
    var finished = +(count === n);
    var pivot = +(Math.abs(x) <= Math.abs(y) && (x !== y || x >= 0));
    if (finished !== 0) {
      return /* tuple */[
              x,
              y
            ];
    } else if (pivot !== 0) {
      var match = +(y >= 0);
      var x$prime = x + (
        match !== 0 ? 1 : -1
      ) | 0;
      _count = count + 1 | 0;
      _x = x$prime;
      continue ;
      
    } else {
      var match$1 = +(x >= 0);
      var y$prime = y + (
        match$1 !== 0 ? -1 : 1
      ) | 0;
      _count = count + 1 | 0;
      _y = y$prime;
      continue ;
      
    }
  };
}

function distance(param) {
  return Math.abs(param[0]) + Math.abs(param[1]) | 0;
}

function solve(n) {
  return distance(spiral(n));
}

var Part1 = /* module */[
  /* cases */cases,
  /* spiral */spiral,
  /* distance */distance,
  /* solve */solve
];

var Part1Test = Utils$Advent2017.Test([
      cases,
      solve
    ]);

function makeGrid(n) {
  var d = n / 2 | 0;
  return $$Array.init(n, (function (y) {
                return $$Array.init(n, (function (x) {
                              return /* Coordinates */Block.__(0, [
                                        x - d | 0,
                                        (-y | 0) + d | 0
                                      ]);
                            }));
              }));
}

function get(grid, d, x, y) {
  var exit = 0;
  var val;
  try {
    val = Caml_array.caml_array_get(Caml_array.caml_array_get(grid, -(y - d | 0) | 0), x + d | 0);
    exit = 1;
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Caml_builtin_exceptions.invalid_argument) {
      return 0;
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    if (val.tag) {
      return val[0];
    } else {
      return 0;
    }
  }
  
}

function set(grid, d, x, y, el) {
  return Caml_array.caml_array_set(Caml_array.caml_array_get(grid, -(y - d | 0) | 0), x + d | 0, el);
}

function spiralNeighbors(magicNumber, n) {
  var grid = makeGrid(magicNumber);
  var partial_arg = magicNumber / 2 | 0;
  var get$1 = function (param, param$1) {
    return get(grid, partial_arg, param, param$1);
  };
  var partial_arg$1 = magicNumber / 2 | 0;
  var set$1 = function (param, param$1, param$2) {
    return set(grid, partial_arg$1, param, param$1, param$2);
  };
  Curry._3(set$1, 0, 0, /* Number */Block.__(1, [1]));
  var _x = 1;
  var _y = 0;
  while(true) {
    var y = _y;
    var x = _x;
    var pivot = +(Math.abs(x) <= Math.abs(y) && (x !== y || x >= 0));
    var n1 = Curry._2(get$1, x + 1 | 0, y + 0 | 0);
    var n2 = Curry._2(get$1, x + 1 | 0, y + 1 | 0);
    var n3 = Curry._2(get$1, x + 0 | 0, y + 1 | 0);
    var n4 = Curry._2(get$1, x - 1 | 0, y + 1 | 0);
    var n5 = Curry._2(get$1, x - 1 | 0, y + 0 | 0);
    var n6 = Curry._2(get$1, x - 1 | 0, y - 1 | 0);
    var n7 = Curry._2(get$1, x + 0 | 0, y - 1 | 0);
    var n8 = Curry._2(get$1, x + 1 | 0, y - 1 | 0);
    var sum = ((((((n1 + n2 | 0) + n3 | 0) + n4 | 0) + n5 | 0) + n6 | 0) + n7 | 0) + n8 | 0;
    var finished = +(sum > n || x === (magicNumber / 2 | 0) && y === (magicNumber / 2 | 0));
    Curry._3(set$1, x, y, /* Number */Block.__(1, [sum]));
    if (finished !== 0) {
      return sum;
    } else if (pivot !== 0) {
      var match = +(y >= 0);
      var x$prime = x + (
        match !== 0 ? 1 : -1
      ) | 0;
      _x = x$prime;
      continue ;
      
    } else {
      var match$1 = +(x >= 0);
      var y$prime = y + (
        match$1 !== 0 ? -1 : 1
      ) | 0;
      _y = y$prime;
      continue ;
      
    }
  };
}

function solve$1(param) {
  return spiralNeighbors(11, param);
}

var Part2_000 = /* cases : :: */[
  /* tuple */[
    1,
    2
  ],
  /* :: */[
    /* tuple */[
      2,
      4
    ],
    /* :: */[
      /* tuple */[
        11,
        23
      ],
      /* :: */[
        /* tuple */[
          30,
          54
        ],
        /* :: */[
          /* tuple */[
            150,
            304
          ],
          /* [] */0
        ]
      ]
    ]
  ]
];

var Part2 = /* module */[
  Part2_000,
  /* solve */solve$1
];

var test_part1 = Part1Test[/* check */0];

var Part2Test = Utils$Advent2017.Test(Part2);

var test_part2 = Part2Test[/* check */0];

var part1 = solve;

var part2 = solve$1;

exports.abs             = abs;
exports.Part1           = Part1;
exports.Part1Test       = Part1Test;
exports.makeGrid        = makeGrid;
exports.get             = get;
exports.set             = set;
exports.spiralNeighbors = spiralNeighbors;
exports.Part2           = Part2;
exports.part1           = part1;
exports.test_part1      = test_part1;
exports.part2           = part2;
exports.Part2Test       = Part2Test;
exports.test_part2      = test_part2;
/* Part1Test Not a pure module */
