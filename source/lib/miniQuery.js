miniQuery = {

  SweetSelector: {
    select: function(element) {
      return document.querySelectorAll(element);
    }
  },

  DOM: (function() {
    var _desiredElement = function(element) {
      return miniQuery.SweetSelector.select(element)[0];
    }
    return{
      hide: function(element) {
        _desiredElement(element).style.visibility='hidden';
      },
      show: function(element) {
        _desiredElement(element).style.visibility = 'visible'
      },
      addClass: function(element, className) {
        _desiredElement(element).classList.add(className)
      },
      removeClass: function(element, className) {
        _desiredElement(element).classList.remove(className)
      }
    }
  }()),

  EventDisptacher: (function() {
    var _desiredElement = function(element) {
      return miniQuery.SweetSelector.select(element)[0];
    }
    return {
      on: function(element, customEvent, toDoFunction){
        _desiredElement(element)[customEvent] = toDoFunction;
        _desiredElement(element).addEventListener(customEvent, toDoFunction, false);
      },
      trigger: function(element, customEvent) {
        _desiredElement(element)[customEvent]()
      }
    }
  }()),

  Jaxinator: (function() {
    return {
    request: function(parameters) {
      var ourJax = new XMLHttpRequest();
      ourJax.onload = parameters['success']
      ourJax.onerror = parameters['failure']
      ourJax.open(parameters['method'], parameters['url'])
      ourJax.send()
    }
  }})()

}
