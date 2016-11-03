# express-test-util
> test utils for express middlewares

## Installation

```sh
$ npm install --save express-test-util
```

## Usage

```js
const config = require('config');
const expect = require('chai').expect;
const util = require('express-test-util');

const middleware = require(/path/to/middleware);
describe('#default', function () {
    it('should use req.param.city when exists', function (done) {
        const req = util.mockRequest({ params: { city: 'bj' }, props: { cityList } });
        const res = util.mockResponse();

        mw(req, res, function (err) {
            if (err) {
                return done(err);
            }

            expect(req.cityInfo).to.deep.equal(cityList.bj);
            expect(res.cookies[cityinfo.COOKIE_RECORD_CITY]).to.deep.equal({ value: 'bj', options: config.cookie });
            done();
        });
    });

});
```
## License

Apache-2.0 © [wangshijun](wangshijun@renrenche.com)

