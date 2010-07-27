function(view) {
  var docid = $$("#wiki").docid,
    linkup = $$("#wiki").app.require("vendor/couchapp/lib/linkup");
  
  return {
    topic : docid,
    comments : view.rows.map(function(r) {
      return {
        gravatar_url : r.value.by.gravatar_url,
        by : r.value.by.nickname,
        at : r.key[1],
        comment : linkup.encode(r.value.comment) // move to view
      }
    })
  }
};