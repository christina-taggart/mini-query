/*!
 * minQuery
 */

/* SweetSelector module: select elements within the DOM! */
var SweetSelector = {
  select: function(selector) {
    var slicedSelector = selector.slice(1)
    if (selector[0] === "#") {
      return document.getElementById(slicedSelector);
    }
    else if (selector[0] === ".") {
      return document.getElementsByClassName(slicedSelector)[0];
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

  var subscriptions = []

  var _select = function(selector) {
    return SweetSelector.select(selector);
  }

  var Subscription = function(selector, eventName, callback) {
    this.element = _select(selector);
    this.event = new Event(eventName);
    this.callback = callback;
  }

  var _subscribe = function(selector, eventName, callback) {
    newSubscription = new Subscription(selector, eventName, callback);
    subscriptions.push(newSubscription);
  }

  var _publish = function(eventName) {
    for (i=0; i < subscriptions.length; i++) {
      if (subscriptions[i].event.type === eventName) {
        subscriptions[i].callback.call();
      }
    }
  }

  return {
    on: _subscribe,

    trigger: _publish
  }
}())

/* AjaxWrapper Module: sends an ajax request to the url and calls the success or fail callback */

var AjaxWrapper = (function(){
  var ponyRainbowMagic = new XMLHttpRequest();

  var _request = function(args){
    ponyRainbowMagic.open(args.type, args.url, true);
    ponyRainbowMagic.onload = args.success
    ponyRainbowMagic.onerror = args.fail
    ponyRainbowMagic.send();
  }

  return {
    request: _request
  }
}())