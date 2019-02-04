$(document).ready(function() {
  // initializing values
  let $menu = $(".appIcon");
  let $apps = $(".appLink");
  $apps.hide();

  // initializing the searchBar
  $("#searchBar").on("keydown", function(event){
    if(event.which == "13"){
      event.preventDefault();
      const forwardSlashChecker = /\\/; //prevent forward slash
      const inputField = forwardSlashChecker.test($("#searchBar").val()) ? "" :  $("#searchBar").val(); //search duck-duck-go
      window.open(`https://duckduckgo.com/?q=${inputField}`);//opens an new window
    }
  });

  //fadeIn/Out toggle for app icons
  $menu.click(function(event) {
    $apps.toggle("fast");
    $(".Line2").toggle("fast");
  })
});
