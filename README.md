# shotratio

Predictive tools for Football (Soccer) leagues.

## Getting Started
Install the module with: `npm install shotratio`

```javascript
var shotratio = require('shotRatio');
shotratio.TSR(10, 10); // 0.5
```

## Documentation

Leverages [Total Shots Ratio, Relative Shots Ratio](http://11tegen11.net/2012/12/01/introducing-the-relative-shots-rate/), and [QualCompTSR](http://jameswgrayson.wordpress.com/2013/02/20/a-primer-qualcomptsr/),

**TSR**

_The fraction of shots created by a team._

```
10 shots created / (10 shots created + 10 shots conceded) = 0.5
```

Supports numbers `shotratio.TSR(10,10);`, and arrays `shotratio.TSR([5, 5], [10, 10]);`.

**RSR**
_(Coming Soon)_

**QualCompTSR**
_(Coming Soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 jacquestardie  
Licensed under the MIT license.
