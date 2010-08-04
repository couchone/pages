function() {
  var form = $(this).parents("form"), app = $$(this).app,
    f = form.serializeObject(),
    markdown = app.require("vendor/couchapp/lib/markdown");
  if ($$(".preview", form).markdown != f.markdown) {
    $$(".preview", form).markdown = f.markdown;
    $(".preview", form).html(markdown.encode(f.markdown));
    $("#wiki").trigger("_init");
  }
};
