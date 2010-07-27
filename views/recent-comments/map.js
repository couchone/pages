function(doc) {
  if (doc.type == "comment") {
    emit([doc.topic, doc.at], doc);
  }
};