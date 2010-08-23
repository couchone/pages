function(doc, req) {
  // make this a commonjs module so you can inline the ddoc in the html
  // only return the parts of the app that we use
  var i, j, path, key, obj, ref, out = {}, ddoc = this,
    resources = ddoc.couchapp && ddoc.couchapp.load && ddoc.couchapp.load.app || [];
  for (i=0; i < resources.length; i++) {
    path = resources[i].split('/');
    obj = ddoc;
    ref = out;
    for (j=0; j < path.length; j++) {
      key = path[j];
      ref[key] = ref[key] || {};
      if (j < path.length - 1) {
        obj = obj[key];
        ref = ref[key];
      }
    };
    ref[key] = obj[key];
  };
  return {json : out};
};