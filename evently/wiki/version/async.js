function(cb, e, params) {
  var wiki = $(this), app = $$(wiki).app, docid = $$(wiki).docid;
  $.ajax({
    type: "GET", url: app.db.uri + $.couch.encodeDocId(docid) + "/rev-" + params.num,
    complete: function(req) {
      var resp = $.httpData(req, "json");
      if (req.status == 200) {
        cb(resp);
      } else {
        alert("Could not open version: " + resp.reason);
      }
    }
  });

};