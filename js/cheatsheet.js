$(function(){
  $('body').on('change', '#selection', function() {
    var execToolTip = function() {
      $('[data-toggle="tooltip"]').tooltip();
      $('<p>TESTING</p>').insertBefore('#css');
    }

    setTimeout(execToolTip, 3000);
  });
});