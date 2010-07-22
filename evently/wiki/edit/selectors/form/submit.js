function() {
  var form = $(this), app = $$(form).app,
    f = form.serializeObject();
  $.log(f);
  app.db.openDoc(f._id, {
    success : function(doc) {
      doc._rev = f._rev;
      doc.markdown = f.markdown;
      doc.edit_at = new Date();
      doc.edit_by = $$("#profile").profile || {};
      doc.log = doc.log || [];
      doc.log.push({
        note : f.note,
        edit_rev : f._rev,
        edit_name : doc.edit_by.name
      });
      app.db.saveDoc(doc, {
        success : function() {
          window.location = window.location.pathname;
        }
      })
    }
  })
  return false;
};
