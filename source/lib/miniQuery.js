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

// ex: EventDispatcher.on('.klass', 'dogecoin');
var userCreatedEvents = []
var EventDispatcher = (function() {
  return {
    on: function(target, eventName) {
      target = SweetSelector.select(target)
      for(i=0; i < target.length; i++) {
        userCreatedEvents.push(new Event(eventName))
        target[i].addEventListener(eventName, function(e) {
          alert('event was triggered!');
        })
      }
    },
    trigger: function(target, eventName) {
      target = SweetSelector.select(target)
      for (i=0; i < target.length; i++) {
        for(j=0; j < userCreatedEvents.length; j++) {
          if (userCreatedEvents[j].type == eventName) {
            target[i].dispatchEvent(userCreatedEvents[j])
            break;
          }
        }
      }
    }
  };
})();