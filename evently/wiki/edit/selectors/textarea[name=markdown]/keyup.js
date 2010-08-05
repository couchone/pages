function() {
  var form = $(this).parents("form"), prev = $(".preview", form), app = $$(this).app,
    f = form.serializeObject(),
    markdown = app.require("vendor/couchapp/lib/markdown");
  if ($$(prev).markdown != f.markdown) {
    $$(prev).markdown = f.markdown;
    $(prev).html(markdown.encode(f.markdown));
    if (!$$(prev).timeout) {
      $$(prev).timeout = setTimeout(function() {
        $("#wiki").trigger("_init");
        $$(prev).timeout = false;
      }, 1100);
    }
  }
}
