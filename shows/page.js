function(doc, req) {
  var ddoc = this,
    mustache = require("vendor/couchapp/lib/mustache"),
    markdown = require("vendor/couchapp/lib/markdown"),
    data = {
      docid : JSON.stringify(req.id),
      id : req.id,
      path : "/page/"+req.id,
      site_title : this.couchapp.name
    };
  if (doc) {
    if (doc.markdown) {
      data.body = markdown.encode(doc.markdown);
    }
    data.title = doc.title;
    data.begin = "/";
  } else {
    data.title = "Create page: "+req.id;
    data.begin = "/edit";
  }
  return mustache.to_html(ddoc.templates.page, data, ddoc.templates.partials);
}
