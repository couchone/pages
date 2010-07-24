function() {
  var form = $(this), app = $$(form).app,
    f = form.serializeObject();
  function saveDoc(doc) {
    doc.title = f.title;
    doc.markdown = f.markdown;
    doc.edit_at = new Date();
    doc.edit_by = $$("#profile").profile || {};
    doc.log = doc.log || [];
    doc.log.push({
      note : f.note,
      prev_rev : f._rev,
      rev_num : (parseInt(f._rev.split("-")[0]) + 1) || 1,
      edit_name : doc.edit_by.name,
      edit_at : doc.edit_at
    });
    app.db.saveDoc(doc, {
      success : function() {
        window.location = window.location.pathname;
      }
    });    
  };
  if (f._rev) {
    app.db.openDoc(f._id, {
      success : function(doc) {
        doc._rev = f._rev;
        saveDoc(doc);
      }
    }); 
  } else {
    // create a new page
    saveDoc({
      _id : f._id,
      "jquery.couch.attachPrevRev" : true
    });
  }
  return false;
};
