function(doc, req) {
  var redirect = require("vendor/couchapp/lib/redirect");
  // this would be the right way to do it (absolute URI)
  // except req.path reflects the post-rewrite state
  // return redirect.permanent([""].concat(req.path,"page","index").join("/"));
  // for now, cheat and do a relative Location header
  return redirect.permanent("page/index");
}
