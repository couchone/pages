function(cb) {
  var wiki = $(this), app = $$(wiki).app, docid = $$("#wiki").docid;
  app.db.openDoc(docid, {
    success : function(doc) {
      cb(doc);
    }
  });
};
