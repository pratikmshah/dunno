$(function(){
  $('body').on('change', '#selection', function() {
    var selectedValue = $("#selection").val().toLowerCase();

    if (selectedValue === 'jquery') {
      var appendDivsTo = {
        '1':['#basics-s', '#hierarchy', '#basic-filters', '#content-filters'],
        '2':['#visibility-filters', '#attribute', '#child-filters'],
      }

      setTimeout(function() {
        wrapDiv(appendDivsTo);
      }, 1100);
    }

  });
});

// EXECUTION FUNCTIONS

// bootstrap 3 tooltip has bugs - FIXING REQUIRED
function execToolTip() {
  $('[data-toggle="tooltip"]').tooltip();
}

// append divs by taking a collection of arrays in an object
function wrapDiv(wrapList) {
  for (var key in wrapList) {
    $(wrapList[key].toString()).wrapAll('<div>');
  }
}