function(view) {
  var docid = $$("#wiki").docid,
    linkup = $$("#wiki").app.require("vendor/couchapp/lib/linkup");
  
  return {
    topic : docid,
    title : $$("#wiki").title,
    comments : view.rows.map(function(r) {
      var by = r.value.by || {};
      return {
        gravatar_url : by.gravatar_url,
        by : by.nickname,
        at : r.key[1],
        comment : linkup.encode(r.value.comment) // move to view
      }
    })
  }
};