function() {
  var form = $(this).parents("form"), prev = $(".preview", form), app = $$(this).app,
    f = form.serializeObject(),
    wiki = app.require("lib/wiki");
  if ($$(prev).markdown != f.markdown) {
    $$(prev).markdown = f.markdown;
    $(prev).html(wiki.encode(f.markdown));
    if (!$$(prev).timeout) {
      $$(prev).timeout = setTimeout(function() {
        $("#wiki").trigger("_init");
        $$(prev).timeout = false;
      }, 1100);
    }
  }
}
