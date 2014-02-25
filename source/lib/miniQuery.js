/*!
 * minQuery
 */

var SweetSelector = {
  select: function(query) {
    return document.querySelectorAll(query);
  }
};

var Dom = {
  hide: function(query) {
    var elements = SweetSelector.select(query);
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  },

  show: function(query) {
    var elements = SweetSelector.select(query);
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.display = '';
    }
  },

  addClass: function(query, klass) {
    var elements = SweetSelector.select(query);
    for(var i = 0; i < elements.length; i++) {
      elements[i].className += ' ' + klass;
    }
  },

  removeClass: function(query, klass) {
    var elements = SweetSelector.select(query);
    for(var i = 0; i < elements.length; i++) {
      var newClassName = elements[i].className.replace(klass, '');
      elements[i].className = newClassName;
    }
  }
}

var EventDispatcher = {
  on: function(observer, event, callback) {
    var elements = SweetSelector.select(observer);
    for(var i = 0; i < elements.length; i++) {
      elements[i][event] = callback;
    }
  },

  trigger: function(observer, event) {
    var elements = SweetSelector.select(observer);
    for(var i = 0; i < elements.length; i++) {
      elements[i][event].call();
    }
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


var miniQuery = (function(){
  var _select      = SweetSelector.select;
  var _hide        = Dom.hide;
  var _show        = Dom.show;
  var _addClass    = Dom.addClass;
  var _removeClass = Dom.removeClass;
  var _on          = EventDispatcher.on;
  var _trigger     = EventDispatcher.trigger;
  var _request     = AjaxWrapper.request;
  return {
    select:      _select,
    hide:        _hide,
    show:        _show,
    addClass:    _addClass,
    removeClass: _removeClass,
    on:          _on,
    trigger:     _trigger,
    request:     _request
  }
}())