function() {
  var form = $(this), app = $$(form).app,
    f = form.serializeObject();
  
  form.ajaxSubmit({
    url: app.db.uri + $.couch.encodeDocId(f._id),
    success: function(resp) {
      window.location = window.location.pathname;
    }
  });
  
  return false;
};
