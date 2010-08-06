function() {
  var ta = $(this);
  // set text area rows to number of linebreaks, look ma no scroll bars
  ta.attr("rows", ta.val().split("\n").length);
  setTimeout(function() {
    ta.trigger("keyup");
  },50);
};
