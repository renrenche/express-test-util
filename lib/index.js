module.exports = {
    /**
     * mock express-request
     */
    mockRequest({ query = {}, body = {}, session = {}, cookies = {}, headers = {}, params = {}, props = {} } = {}) {
        return Object.assign({
            query,
            body,
            session,
            cookies,
            headers,
            params,
            param(key) {
                if (!key || typeof params[key] === 'undefined') {
                    return undefined;
                }
                return params[key];
            },
            get(key) {
                if (!key || typeof headers[key] === 'undefined') {
                    return undefined;
                }
                return headers[key];
            },
        }, props);
    },

    /**
     * mock express-response
     */
    mockResponse() {
        const cookies = {};
        return {
            cookies,
            cookie(key, value, options = {}) {
                cookies[key] = { value, options };
            },
            status(status) {
                this.status = status;
            },
            send(response) {
                this.body = response;
            },
            redirect(url) {
                this.redirectUrl = url;
            },
            jsonp(json) {
                this.jsonp = json;
            },
        };
    },
};

