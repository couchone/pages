function() {
  var form = $(this).parents("form"), app = $$(this).app,
    f = form.serializeObject(),
    markdown = app.require("vendor/couchapp/lib/markdown");
  $.log(f)
  $(".preview", form).html(markdown.encode(f.markdown));
};
