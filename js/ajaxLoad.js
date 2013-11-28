$(document).ready(
  function() {
    $("#um").click(function() {
      $(this).next().load("cgi-bin/teste.py");
    });
    $('.content')
        .hide()  // hide it initially
        .ajaxStart(function() {
            $(this).show();
        })
        .ajaxStop(function() {
            $(this).hide();
        });
  }
);
