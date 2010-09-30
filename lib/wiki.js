var markdown = require("vendor/couchapp/lib/markdown");

function wikilinks(text) {
  return text.replace(/\[\[(.*)\]\]/g,"[$1]($1)");
};

exports.encode = function(text) {
  var linked = wikilinks(text);
  return markdown.encode(linked);
};
