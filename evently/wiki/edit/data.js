function(doc) {
  return {
    _id : doc._id,
    _rev : doc._rev,
    title : doc.title,
    markdown : doc.markdown
  };
};