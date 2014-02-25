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
        return document.getElementById(target);
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
  var wrapElementWithArray = function(element) {
    if (element.toString() != "[object NodeList]") {
      return [element];
    } else {
      return element;
    }
  }

  return {
  // public vars and funcs
    hide: function(target){
      target = SweetSelector.select(target)
      target = wrapElementWithArray(target)
      for(i=0; i < target.length; i++){
        target[i].style.display = "none";
      }
    },
    show: function(target) {
      target = SweetSelector.select(target)
      target = wrapElementWithArray(target)
      for(i=0; i < target.length; i++) {
        target[i].style.display = "";
      }
    },
    // ex: DOM.addClass('.klass', 'improved-klass')
    addClass: function(target, nameOfClass) {
      target = SweetSelector.select(target)
      target = wrapElementWithArray(target)
      for(i=0; i < target.length; i++) {
        target[i].className = target[i].className + " " + nameOfClass;
      }
    },
    removeClass: function(target, nameOfClass) {
      target = SweetSelector.select(target)
      target = wrapElementWithArray(target)
      for(i=0; i < target.length; i++) {
        target[i].className = target[i].className.replace(nameOfClass, "")
      }
    }
  };
})();