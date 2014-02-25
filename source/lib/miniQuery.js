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

EventDisptacher = {
  bitchIsClicked: function(element, toDoFunction) {
    var thing = SweetSelector.select(element)[0]
    thing.onclick = function() {
     toDoFunction()
    }
  },
  on: function(element, customEvent, toDoFunction){
    var thing = SweetSelector.select(element)[0]
    thing.addEventListener(customEvent, toDoFunction, false)
  },
  trigger: function(element, customEvent) {
    var thing = SweetSelector.select(element)[0]
    thing.dispatchEvent(customEvent)
  }
}

SweetSelector
DOM
EventDisptacher