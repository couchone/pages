var markdown = require("vendor/couchapp/lib/markdown");

function wikilinks(text) {
  return text.replace(/\[\[(.*)\]\]/g,"[$1]($1)").
    replace(/(^|\W)([A-Z]\w*[A-Z]\w*)(\W|$)/gm,"$1[$2]($2)");
};

exports.encode = function(text) {
  var linked = wikilinks(text);
  return markdown.encode(linked);
};
