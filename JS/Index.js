$(function(){
  var $siteSelector =  $("#site-selector");
  
  // Append sites to dropdown list
  Sites.forEach(function(site){
    $siteSelector.append(appendSite(site));
  });

  // Register onClick event on dropdown list
  $siteSelector.on("click",".site",function(){
    $("#site-name-display").html($(this).html());
  });
})

function appendSite(siteObj){
  return $("<li>").append($("<a>").attr({
    value: siteObj.id,
    class: "site",
  }).html(siteObj.name));
}
