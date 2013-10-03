/*
 * tsr
 * https://github.com/jacquestardie/tsr
 *
 * Copyright (c) 2013 jacquestardie
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

// Total Shots Ratio (TSR)
// TSR is the fraction of shots created by a football team to shots conceded.
// via [11tegen1](http://11tegen11.net/2012/12/01/introducing-the-relative-shots-rate/)

var total, aggCreated, aggConceded;

exports.TSR = function(created, conceded) {

  // when an array is passed
  if (created && conceded instanceof Array) {
    aggCreated  = _.reduce(created, function(memo, num) { return memo + num; }, 0);
    aggConceded = _.reduce(conceded, function(memo, num) { return memo + num; }, 0);
    return total = aggCreated / (aggCreated + aggConceded);

  // when numbers are passed in
  } else {
    return total = created / (created + conceded);
  }

};
