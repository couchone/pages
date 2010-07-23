function(doc) {
  if (doc.edit_at && doc.edit_by && doc.title && doc.log && doc.log.length) {
    var log = doc.log.pop();
    emit(doc.edit_at, {
      title : doc.title,
      note : log.note,
      edit_by : doc.edit_by
    });
  }
};