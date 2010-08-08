function() {
  var row, ddoc = this,
    mustache = require("vendor/couchapp/lib/mustache"),
    markdown = require("vendor/couchapp/lib/markdown"),
    data = {
      title : "All Comments",
      site_title : this.couchapp.name,
      path : "/pages/comments",
      comments : []
    };
  provides("html", function() {
    while (row = getRow()) {
      log(row);
      data.comments.push(row.value)
    }
    send(mustache.to_html(ddoc.templates.comments, data, ddoc.templates.partials));
  });
};
