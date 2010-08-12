var markdown = require("vendor/couchapp/lib/markdown");

function wikilinks(text) {
  return text.replace(/\[\[(.*)\]\]/g,"[$1]($1)").
    replace(/(^|\s)([A-Z][a-z]\w*[A-Z][a-z]\w*)(\s|$)/gm,"$1[$2]($2)$3");
};

exports.encode = function(text) {
  var linked = wikilinks(text);
  return markdown.encode(linked);
};
