$(function() {
  "use strict";

  $(".green-food").hover(
    function() {
    $(".container").addClass("container-green-food");
    $(".projects").addClass("projects-green-food");
    $(".title").addClass("title-green-food");
  }, function() {
    $(".container").removeClass("container-green-food");
    $(".projects").removeClass("projects-green-food");
    $(".title").removeClass("title-green-food");
  });

  $(".heap-sort").hover(
    function() {
    $(".container").addClass("container-heap-sort");
    $(".projects").addClass("projects-heap-sort");
    $(".title").addClass("title-heap-sort");
  }, function() {
    $(".container").removeClass("container-heap-sort");
    $(".projects").removeClass("projects-heap-sort");
    $(".title").removeClass("title-heap-sort");
  });

});
