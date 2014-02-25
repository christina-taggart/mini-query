SweetSelector = {
  select: function(element) {
    return document.querySelectorAll(element);
  }
}

DOM = {
  hide: function(element) {
  var thing = SweetSelector.select(element)[0]
  thing.style.visibility='hidden';
  },

  show: function(element) {
    var thing = SweetSelector.select(element)[0]
    thing.style.visibility = 'visible'
  }
}

SweetSelector
DOM