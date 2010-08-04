function() {
  var ta = $(this);
  setTimeout(function() {
    ta.trigger("keyup");
  },50);
};
