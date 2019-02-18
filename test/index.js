const expect = require('chai').expect;
const util = require('../lib');

describe('#mockRequest', function () {
    it('should have mockRequest method', function () {
        expect(util.mockRequest).to.be.a('function');
    });

    it('should `req` have standard properties', function () {
        const req = util.mockRequest();

        expect(req).to.be.a('object');
        expect(req.query).to.be.a('object');
        expect(req.body).to.be.a('object');
        expect(req.session).to.be.a('object');
        expect(req.cookies).to.be.a('object');
        expect(req.headers).to.be.a('object');
        expect(req.params).to.be.a('object');
        expect(req.param).to.be.a('function');
        expect(req.get).to.be.a('function');
    });

    it('should `req` have custom properties', function () {
        const req = util.mockRequest({
            props: { xxx: 'xxx' },
        });

        expect(req).to.be.a('object');
        expect(req.query).to.be.a('object');
        expect(req.body).to.be.a('object');
        expect(req.session).to.be.a('object');
        expect(req.cookies).to.be.a('object');
        expect(req.headers).to.be.a('object');
        expect(req.params).to.be.a('object');
        expect(req.param).to.be.a('function');
        expect(req.xxx).to.be.equal('xxx');
    });

    it('should `req.get` behave as expected', function () {
        const req = util.mockRequest({
            headers: { 'Content-Type': 'application/json' },
            params: { key: 'value' },
        });

        expect(req.get('Content-Type')).to.equal('application/json');
        expect(req.get('Content-Type2')).to.be.undefined;
    });

    it('should `req.param` behave as expected', function () {
        const req = util.mockRequest({
            params: { key: 'value' },
        });

        expect(req.param('key')).to.equal('value');
        expect(req.param('key2')).to.be.undefined;
    });
});

describe('#mockResponse', function () {
    it('should have mockResponse method', function () {
        expect(util.mockResponse).to.be.a('function');
    });

    it('should `res` have standard properties', function () {
        const res = util.mockResponse();

        expect(res).to.be.a('object');
        expect(res.cookies).to.be.a('object');
        expect(res.status).to.be.a('function');
        expect(res.send).to.be.a('function');
        expect(res.cookie).to.be.a('function');
        expect(res.redirect).to.be.a('function');
    });

    it('should `res.cookie` behave as expected', function () {
        const res = util.mockResponse();

        expect(res.cookies).to.be.a('object');

        res.cookie('key', 'value');
        expect(res.cookies.key.value).to.equal('value');
    });

    it('should `res.status` behave as expected', function () {
        const res = util.mockResponse();

        res.status(200);
        expect(res.status).to.equal(200);
    });

    it('should `res.send` behave as expected', function () {
        const res = util.mockResponse();

        res.send('test');
        expect(res.body).to.equal('test');
    });

    it('should `res.redirect` behave as expected', function () {
        const res = util.mockResponse();

        res.redirect('http://www.baidu.com');
        expect(res.redirectUrl).to.equal('http://www.baidu.com');
    });

    it('should `res.jsonp` behave as expected', function () {
        const res = util.mockResponse();

        res.jsonp({ status: 0 });
        expect(res.jsonp).to.deep.equal({ status: 0 });
    });
});
