function() {
  var docid = $$("#wiki").docid;
  return {
    view : "recent-comments",
    endkey : [docid, {}],
    startkey : [docid]
  };
};