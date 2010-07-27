function() {
  var form = $(this), app = $$(form).app,
    f = form.serializeObject();
  f.type = "comment";
  f.at = new Date();
  f.by = $$("#profile").profile;
  app.db.saveDoc(f, {
    success : function() {
      $("#comments").trigger("_init");
    }
  })
  return false;
};