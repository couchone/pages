function() {  
  var redirect = require("vendor/couchapp/lib/redirect");
  // todo make this work in both modes
  return redirect.permanent("/page/index");
}
