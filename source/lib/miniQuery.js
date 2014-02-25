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
  hide: function(selector) {
    element = SweetSelector.select(selector);
    element.style.visibility='hidden';
  },

  show: function(selector){
    element = SweetSelector.select(selector);
    element.style.visibility='visible';
  },

  addClass: function(selector, className) {
    element = SweetSelector.select(selector);
    if (element.className) {
      element.className += " " + className;
    }
    else {
      element.className = className;
    }
  },

  removeClass: function(selector) {
    element = SweetSelector.select(selector);
    element.className = "";
  }

}

/* EventDispatcher Module: binds events to elements and dispatches them */
var EventDispatcher = (function() {
  var events = []

  var _select = function(selector) {
    return SweetSelector.select(selector);
  }

  var _findEvent = function(eventName) {
    for (i=0; i < events.length; i++) {
      if (events[i].type === eventName) {
        return events[i];
      }
    }
  }

  return {
    on: function(selector, eventName, callback) {
      element = _select(selector)
      event = new Event(eventName);
      events.push(event);
      element.addEventListener(eventName, callback, false);
    },

    trigger: function(selector, eventName) {
      element = _select(selector)
      event = _findEvent(eventName);
      element.dispatchEvent(event);
    }
  }
}())