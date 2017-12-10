// Check Off Specific Todos by clicking
$("li").click(function() {
  // TEST alert("You've clicked an LI item");
  // Version 1: $(this).css("color", "gray");
  // Version 1: $(this).css("text-decoratino", "line-through");
  // Version 2: $(this).css({
  //   color: "gray";
  //   textDecoration: "line-through"; // NOTE: js object names with hyphen is not allowed
  // });
  // Version 3: Moved to CSS in a "completed" class
  $(this).toggleClass("completed");
});
