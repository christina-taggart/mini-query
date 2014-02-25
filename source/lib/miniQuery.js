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
  },

  addClass: function(element, className) {
    var thing = SweetSelector.select(element)[0]
    thing.classList.add(className)
  },

  removeClass: function(element, className) {
    var thing = SweetSelector.select(element)[0]
    thing.classList.remove(className)
  }
}

SweetSelector
DOM