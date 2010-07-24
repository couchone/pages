function(cb) {
  var wiki = $("#wiki"), app = $$(wiki).app, docid = $$(wiki).docid;
  app.db.openDoc(docid, {
    success : function(doc) {
      cb(doc);
    }
  });
};
