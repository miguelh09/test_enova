$( document ).ready(function() {

  // Funciones declaradas
  var open_sidemenu = function() {
    $( "#open_sidemenu" ).on( "click", function() {
      $( "#side_menu" ).animate({
        width: "80%",
      }, 500 );
    });
  }

  var close_sidemenu = function() {
    $( "#close_sidemenu" ).on( "click", function() {
      $( "#side_menu" ).animate({
        width: 0,
      }, 500 );
    });
  }

  var change_tab = function() {
    $('.tabs span').on( "click", function() {
      $('.tabs span').removeClass('active');
      $(this).addClass('active');
    });
  }

  // ejecucion de funciones
  open_sidemenu();
  change_tab();
  close_sidemenu();

  // resize
  $( window ).resize(function() {
    open_sidemenu();
  });
});
