function atualizaAjax(event, ui) {
  var baseUrl = "cgi-bin/";
  var script = $(ui.newHeader).text();
  if (script == "") return;
  var scriptUrl = baseUrl + script;
  $.ajax({
    type: "GET",
    url: scriptUrl,
    beforeSend: function() {alert('ajax before send')},
    complete: function(xhr, textStatus) {completouAjax(xhr, textStatus, event, ui)}
  });
}

function completouAjax(xhr, textStatus, event, ui) {
  alert('Completou ajax...');
  $(ui.newPanel).html(xhr.responseText);
}
