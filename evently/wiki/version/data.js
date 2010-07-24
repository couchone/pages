function(doc) {
  var app = $$(this).app, markdown = app.require("vendor/couchapp/lib/markdown");
  return {
    body: markdown.encode(doc.markdown)
  }

};