function() {
  var wiki = $(this), app = $$(wiki).app, m, pages = {}, keys = [];
  $("a",wiki).each(function() {
    m = this.href.match(/.*\/page\/([^\/]+)$/);
    if (m && m[1]) {
      pages[m[1]] = true;
    }
  });
  // unique keys will be faster on big pages
  for (m in pages) {
    keys.push(m);
  }
  if (keys.length > 0) {
    app.view("all-pages", {
      keys : keys,
      success : function(resp) {
        var i, p;
        for (i=0; i < resp.rows.length; i++) {
          p = resp.rows[i].key;
          delete pages[p];
        }
        for (m in pages) {
          $("a[href='"+m+"']", wiki).addClass("missing");
        }
      },
      error : function() {}
    });
  }
};
