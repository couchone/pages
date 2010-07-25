function(doc) {
  var topVer, name, stub, log, revNum, versions = [];
  
  function topVersionNum(doc) {
    var topVer = 0, topLog = 0, name, revNum;
    if (doc._attachments) {
      for (name in doc._attachments) {
        if (name.indexOf("rev") == 0) {
          revNum = parseInt(name.split('-')[1]);
          if (revNum > topVer) {
            topVer = revNum;
          }
        }
      }
    }
    if (doc.log) {
      for (var i=0; i < doc.log.length; i++) {
        revNum = doc.log[i].rev_num;
        if (revNum > topLog) {
          topLog = revNum;
        }
      };
    }
    return Math.max(topLog, topVer);
  };

  topVer = topVersionNum(doc);
  
  for (var i=1; i <= topVer; i++) {
    name = "rev-"+i;
    stub = doc._attachments && doc._attachments[name];
    for (var j=0; j < doc.log.length; j++) {
      log = doc.log[j];
      if (log.rev_num == i) break;
      // backwards compatibility for jchris's docs
      if ((parseInt(log.prev_rev || log.edit_rev) + 1) == i) break;
      log = {};
    };
    versions.push({
      available : !!stub,
      missing : !stub,
      rev : i == parseInt(doc._rev) ? "current" : i,
      name : log.edit_name,
      note : log.note
    });
  };

  return {
    _id : doc._id,
    title : doc.title,
    versions : versions.reverse()
  };
};