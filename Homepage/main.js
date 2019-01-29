$(document).ready(function() {
  $("#searchBar").on("keydown", function(event){
    if(event.which == "13"){
      const inputField = $("#searchBar").val();
      window.open(`https://duckduckgo.com/?q=${inputField}`);
    }
  });
});
