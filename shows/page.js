function(doc, req) {  
  var ddoc = this,
    mustache = require("vendor/couchapp/lib/mustache"),
    markdown = require("vendor/couchapp/lib/markdown"),
    data = {};
  if (doc) {
    data.docid = doc._id;
    if (doc.markdown) {
      data.body = markdown.encode(doc.markdown);
    }
    data.title = doc.title;
  } else {
    data.title = "No page";
  }
  return mustache.to_html(ddoc.templates.page, data);
}
