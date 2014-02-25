/*!
 * minQuery
 */

var SweetSelector = {
  select: function(query) {
    return document.querySelectorAll(query);
  }
};

var Dom = {

  hide: function() {
    for(var i = 0; i < this.length; i++) {
      this[i].style.display = 'none';
    }
    return this;
  },

  show: function() {
    for(var i = 0; i < this.length; i++) {
      this[i].style.display = '';
    }
    return this;
  },

  addClass: function(klass) {
    for(var i = 0; i < this.length; i++) {
      this[i].className += ' ' + klass;
    }
    return this;
  },

  removeClass: function(klass) {
    for(var i = 0; i < this.length; i++) {
      var newClassName = this[i].className.replace(klass, '');
      this[i].className = newClassName;
    }
    return this;
  }
}

var EventDispatcher = {
  on: function(event, callback) {
    for(var i = 0; i < this.length; i++) {
      this[i][event] = callback;
    }
    return this;
  },

  trigger: function(event) {
    for(var i = 0; i < this.length; i++) {
      this[i][event].call();
    }
    return this;
  }

}

var AjaxWrapper = (function() {
  var request = new XMLHttpRequest();
  return {
    request: function(params) {
      request.onload = function(requestEvent) {
        params.success(requestEvent.currentTarget.responseText)
      };
      request.onerror = params.fail;
      request.open(params.type, params.url);
      request.send();
    }
  }
}())

var miniFunctions = (function(){
  var _hide        = Dom.hide;
  var _show        = Dom.show;
  var _addClass    = Dom.addClass;
  var _removeClass = Dom.removeClass;
  var _on          = EventDispatcher.on;
  var _trigger     = EventDispatcher.trigger;
  var _request     = AjaxWrapper.request;
  return {
    hide:        _hide,
    show:        _show,
    addClass:    _addClass,
    removeClass: _removeClass,
    on:          _on,
    trigger:     _trigger,
    request:     _request
  }
}())

var miniQuery = function(query) {
  return SweetSelector.select(query)
}

miniQuery.ajax = miniFunctions.request;

NodeList.prototype.hide = miniFunctions.hide;
NodeList.prototype.show = miniFunctions.show;
NodeList.prototype.addClass = miniFunctions.addClass;
NodeList.prototype.removeClass = miniFunctions.removeClass;
NodeList.prototype.on = miniFunctions.on;
NodeList.prototype.trigger = miniFunctions.trigger;