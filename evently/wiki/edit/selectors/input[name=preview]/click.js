function() {
  var form = $(this).parents("form"), app = $$(form).app,
    f = form.serializeObject(),
    markdown = app.require("vendor/couchapp/lib/markdown");
  $.log(f)
  $(".preview", form).html(markdown.encode(f.markdown));
};