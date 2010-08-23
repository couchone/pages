function(doc, req) {
  return {
    json : require("vendor/couchapp/lib/code").ddoc(this)
  };
};