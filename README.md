# express-test-util

> test utils for express middlewares (which must call next)

## Installation

```sh
$ npm install --save express-test-util
```

## Usage

```js
const config = require('config');
const expect = require('chai').expect;
const util = require('express-test-util');

const middleware = function (req, res, next) {
    res.cookie('key', 'value');
    next();
};

describe('#default', function () {
    it('should use req.param.city when exists', function (done) {
        const req = util.mockRequest({ params: { city: 'bj' }, props: { cityList } });
        const res = util.mockResponse();

        middleware(req, res, function (err) {
            if (err) {
                return done(err);
            }

            expect(req.param('city')).to.equal('bj');
            expect(res.cookies.key).to.deep.equal({ value: 'bj', options: {} });
            done();
        });
    });

});
```

## License

Apache-2.0 © [wangshijun](wangshijun@renrenche.com)
