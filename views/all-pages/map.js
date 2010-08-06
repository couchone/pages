function(doc) {
  if (doc.title && doc.markdown) {
    emit(doc._id, 1);
  }
};