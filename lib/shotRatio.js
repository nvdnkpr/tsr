/*
 * shotRatio
 * https://github.com/jacquestardie/shotratio
 *
 * Copyright (c) 2013 jacquestardie
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');


// Total Shots Ratio (TSR)
// TSR is the fraction of shots created by a football team.
// via [11tegen1](http://11tegen11.net/2012/12/01/introducing-the-relative-shots-rate/)

var total, aggCreated, aggConceded;

exports.TSR = function(created, conceded) {

  // If passing in an array, sum the contents.
  if (created && conceded instanceof Array) {

    aggCreated  = _.reduce(created, function(memo, num) { return memo + num; }, 0);
    aggConceded = _.reduce(conceded, function(memo, num) { return memo + num; }, 0);

    return total = aggCreated / (aggCreated + aggConceded);

  // If passing in numbers, use them!
  } else {
    return total = created / (created + conceded);
  }

};


// Relative Shots Ratio (RSR)
// Coming soon
// via [11tegen1](http://11tegen11.net/2012/12/01/introducing-the-relative-shots-rate/)

exports.RSR = function(){
  return 'Not yet implemented';
};


// Quality of Competition Total Shots Ratio (QualCompTSR)
// Coming soon
// via [James Grayson](http://jameswgrayson.wordpress.com/2013/02/20/a-primer-qualcomptsr/)

exports.QualCompTSR = function(){
  return 'Not yet implemented';
};
