function atualizaAjax(event, ui) {
  $.ajax({
    type: "GET",
    url: "cgi-bin/teste.py",
    beforeSend: function() {alert('ajax before send')},
    complete: function(xhr, textStatus) {completouAjax(xhr, textStatus, event, ui)}
  });
}

function completouAjax(xhr, textStatus, event, ui) {
  alert('Completou ajax...');
  $(ui.newPanel).html(xhr.responseText);
}
