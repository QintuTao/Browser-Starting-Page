$(document).ready(function() {
  $("#searchBar").on("keydown", function(event){
    if(event.which == "13"){
      event.preventDefault();
      const forwardSlashChecker = /\\/;
      const inputField = forwardSlashChecker.test($("#searchBar").val()) ? "" :  $("#searchBar").val();
      window.open(`https://duckduckgo.com/?q=${inputField}`);
    }
  });
});
