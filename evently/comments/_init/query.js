function() {
  var docid = $$("#wiki").docid;
  return {
    view : "recent-comments",
    startkey : [docid, {}],
    endkey : [docid],
    descending : true
  };
};