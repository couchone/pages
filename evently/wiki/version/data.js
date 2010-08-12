function(doc) {
  var app = $$(this).app, wiki = app.require("lib/wiki");
  return {
    body: wiki.encode(doc.markdown)
  }

};