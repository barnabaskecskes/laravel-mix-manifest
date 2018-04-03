const dom = require('jsdom-global');

global.setUrl = (url = 'http://example.test') => {
    dom(undefined, {url});
}

setUrl();

global.expect = require('expect');
global.sinon = require('sinon');
global._ = require('lodash');
