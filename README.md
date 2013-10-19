# tsr [![Build Status](https://travis-ci.org/jacquestardie/tsr.png?branch=master)](https://travis-ci.org/jacquestardie/tsr) [![NPM](https://nodei.co/npm/tsr.png?mini=true)](https://nodei.co/npm/tsr/)


*Total Shots Ratio (tsr) is a means of expressing the number of shots taken by a team to the number of shots condeded. Theoretically, more successful teams should have higher TSR's.*

TSR is a very simple calculation. The number of shots created by a team is divided by the numbers of shot created plus the number of shots conceded.

`TSR = (taken / ( taken + conceded))`

### Getting started

**Install** the module with: `npm install tsr`

**Require** the module in your js: `var tsr = require('tsr');`

TSR takes two arguments: shots taken + shots conceded. You can pass in either numbers or arrays.

```javascript
tsr(taken, conceded);
tsr(10, 10); // 0.5
tsr(10, 30); // 0.25
tsr([5,5], [15,15]); // 0.25
```

There is a fantastic overview of TSR and a few more complex alternatives over at [11tegen11](http://11tegen11.net/2012/12/01/introducing-the-relative-shots-rate/) that you might want to check out. Thanks [@11tegen11](http://twitter.com/11tegen11)

### License
Copyright (c) 2013 jacquestardie  
Licensed under the MIT license.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/jacquestardie/tsr/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

