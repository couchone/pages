function(doc) {
  if (doc.type == "comment" && doc.comment) {
    emit(doc.at, doc);
  }
};
