var SweetSelector = (function() {
  // private variables and functions
  return {
    // public variables and functions
    select: function(target) { 
      if (typeof(target) != "string") {
        throw "select() only works with strings"
      }

      if (target.charAt(0) == "#") {
        target = target.replace("#", "");
        return [document.getElementById(target)];
      } else if (target.charAt(0) == ".") {
        target = target.slice(1)
        target = target.replace(".", " ")
        return document.getElementsByClassName(target);
      } else {
        return document.getElementsByTagName(target);
      }

    }
  };
})();

var DOM = (function(){
  // private vars and funcs

  return {
  // public vars and funcs
    hide: function(target){
      target = SweetSelector.select(target)
      for(i=0; i < target.length; i++){
        target[i].style.display = "none";
      }
    },
    show: function(target) {
      target = SweetSelector.select(target)
      for(i=0; i < target.length; i++) {
        target[i].style.display = "";
      }
    },
    // ex: DOM.addClass('.klass', 'improved-klass')
    addClass: function(target, nameOfClass) {
      target = SweetSelector.select(target)
      for(i=0; i < target.length; i++) {
        target[i].className = target[i].className + " " + nameOfClass;
      }
    },
    removeClass: function(target, nameOfClass) {
      target = SweetSelector.select(target)
      for(i=0; i < target.length; i++) {
        target[i].className = target[i].className.replace(nameOfClass, "")
      }
    }
  };
})();

var EventDispatcher = (function() {
  // private vars and funcs
  var userCreatedEvents = []
  var validCustomEvent = function(customEventName) {
    for(i=0; i < userCreatedEvents.length; i++) {
      if (userCreatedEvents[i].type == customEventName) {
        return userCreatedEvents[i];
      }
    }
  }

  return {
    // public vars and funcs
    on: function(target, customEventName) {
      target = SweetSelector.select(target)
      var customEvent = new Event(customEventName)
      userCreatedEvents.push(customEvent)
      for(i=0; i < target.length; i++) {
        target[i].addEventListener(customEvent, function() {
          alert('yep, it was triggered');
          console.log('something should be happening here');
        })
      }
    },
    trigger: function(target, customEventName) {
      target = SweetSelector.select(target);
      var customEvent = validCustomEvent(customEventName);
      for(i=0; i < target.length; i++) {
        target[i].dispatchEvent(customEvent);
      }
    }
  };
})();