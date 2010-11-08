var soda = require('soda')
  , assert = require('assert');

var browser = soda.createClient({
    host: 'localhost'
  , port: 4444
  , url: 'http://localhost:5984/'
  , browser: 'firefox'
});

browser.on('command', function(cmd, args){
  console.log(' \x1b[33m%s\x1b[0m: %s', cmd, args.join(', '));
});

browser
  .chain
  .session()
  .open('/pages/_design/pages/_rewrite/page/index')
  .getTitle(function(title){
    assert.ok(~title.indexOf('Pages'), 'Title did not match, was '+title);
  })
  .testComplete()
  .end(function(err){
    if (err) {
      console.log('err', err)
      // throw err;
    }
    console.log('done');
  });