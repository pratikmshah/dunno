$(function(){
  $('body').on('change', '#selection', function() {
    var selectedValue = $("#selection").val().toLowerCase();

    if (selectedValue === 'jquery') {
      setTimeout(function() {
        wrapDiv(returnJqueryDivList());
      }, 1000);
    }

  });
});

//************EXECUTION FUNCTIONS***********

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

function returnJqueryDivList() {
  return {
    'selectors1':   ['#basics-s', '#hierarchy', '#basic-filters', '#content-filters'],
    'selectors2':   ['#visibility-filters', '#attribute', '#child-filters'],
    'attributes':   ['#attributes', '#css', '#dimensions', '#offset', '#data'],
    'manipulation': ['#copying', '#dom-insertion-around', '#dom-insertion-inside',
                     '#dom-insertion-outside', '#dom-removal', '#dom-replacement'],
    'traversing1':  ['#filtering', '#misc-traversing', '#tree-traversal'],
    'events1':      ['#browser-events', '#document-loading', '#event-handler-attachment', '#form-events',
                     '#keyboard-events'],
    'events2':      ['#mouse-events', '#event-object'],
    'effects':      ['#basics-e', '#custom', '#fading', '#sliding'],
    'ajax':         ['#global-ajax-event-handlers', '#helper-functions', '#low-level-interface', '#shorthand-methods'],
    'core1':        ['#jquery-object', '#utilities'],
    'core2':        ['#dom-element-methods', '#internals', '#deferred-object'],
    'core3':        ['#callbacks-object']

  }
}