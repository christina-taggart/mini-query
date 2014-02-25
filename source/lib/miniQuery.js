/*!
 * minQuery
 */

/* SweetSelector module: select elements within the DOM! */
var SweetSelector = {
  select: function(selector) {
    var choppedSelector = selector.slice(1, selector.length)
    if (selector[0] === "#") {
      return document.getElementById(choppedSelector);
    }
    else if (selector[0] === ".") {
      return document.getElementsByClassName(choppedSelector)[0];
    }
    else {
      return document.getElementsByTagName(selector)[0];
    }
  }
}

/* DOM Module: hide and show elements, add and remove Class names */

var DOM = {
  hide: function(selector){
    element = SweetSelector.select(selector);
    element.style.visibility='hidden';
  },

  show: function(selector){
    element = SweetSelector.select(selector);
    element.style.visibility='visible';
  },

  addClass: function(selector, className){
    element = SweetSelector.select(selector);
    if (element.className) {
      element.className += " " + className;
    }
    else {
      element.className = className;
    }
  },

  removeClass: function(selector){
    element = SweetSelector.select(selector);
    element.className = "";
  }

}

/* EventDispatcher Module: */