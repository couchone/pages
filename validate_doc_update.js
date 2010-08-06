function (newDoc, oldDoc, userCtx, secObj) {
  var v = require("vendor/couchapp/lib/validate").init(newDoc, oldDoc, userCtx, secObj);
  
  if (v.isAdmin()) {
    return true; // admin can do anything
  }
  
  if (!userCtx.name) {
    // this could be configurable based on secObj
    v.unauthorized("please login to make changes");
  }
  
  // only admin may delete
  if (newDoc._deleted) {
    v.unauthorized("only admin may delete docs");
  }
  
  // attached versions must be preserved
  if (oldDoc && oldDoc._attachments) {
    for (var n in oldDoc._attachments) {
      if (n.indexOf("rev") == 0) {
        if (!(newDoc._attachments && newDoc._attachments[n] 
            && newDoc._attachments[n].stub === true)) {
          v.forbidden("old versions may not be deleted")
        }
      }
    }
  }
}
