$(document).ready(function() {
  // initializing values
  let $menu = $(".appIcon");
  let $apps = $(".appLink");
  // initializing the searchBar
  $("#searchBar").on("keydown", function(event){
    if(event.which == "13"){
      event.preventDefault();
      const forwardSlashChecker = /\\/;
      const inputField = forwardSlashChecker.test($("#searchBar").val()) ? "" :  $("#searchBar").val();
      window.open(`https://duckduckgo.com/?q=${inputField}`);
    }
  });



  $menu.click(function(event) {
    $apps.toggle("fast", function() {

    })
  })
});
