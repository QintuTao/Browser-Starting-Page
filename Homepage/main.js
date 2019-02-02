$(document).ready(function() {

  // initializing the searchBar
  $("#searchBar").on("keydown", function(event){
    if(event.which == "13"){
      event.preventDefault();
      const forwardSlashChecker = /\\/;
      const inputField = forwardSlashChecker.test($("#searchBar").val()) ? "" :  $("#searchBar").val();
      window.open(`https://duckduckgo.com/?q=${inputField}`);
    }
  });

  let $menu = $(".appIcon");

  $menu.on("click", function(event) {
    $menu.css({
      'animation':"rotatebox 1s"
    });
    if ($(".menu-links").hasClass("closed")){
      $(".menu-links").removeClass("closed");
    }else{
      $(".menu-links").addClass("closed");
    }
  })
});
