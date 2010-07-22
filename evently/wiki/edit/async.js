function(cb) {
  var wiki = $(this), app = $$(wiki).app, docid = $$(wiki).docid;
  app.db.openDoc(docid, {
    success : function(doc) {
      cb(doc);
    },
    error : function(code) {
      if (code == 404) {
        cb({_id : docid})
      }
    }
  });
};