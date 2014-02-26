/*!
 * minQuery
 */
var miniQuery = (function(){
  var SweetSelector = function(query){
      var selectId = function(id_name) {
        return document.getElementById(id_name);
      };

      var selectClass = function(class_name) {
        return document.getElementsByClassName(class_name);
      };

      var selectElement = function(element_name) {
        return document.getElementsByTagName(element_name);
      };
      var _select = function(query) {
        var first_char = query[0];

        switch(first_char){
          case '#':
            return selectId(query.substr(1));
            break;
          case '.':
            return selectClass(query.substr(1));
            break;
          default:
            return selectElement(query);
        }
      }; 

    var results = _select(query);

    if (results instanceof Node)
      return new MiniQuery(results);
    else if (results instanceof NodeList) {
      var arrayQ = []
      for(var i = 0; i < results.length ; i++) {
        arrayQ.push( new MiniQuery(results[i]) )
      }
      return arrayQ;
    }
  }

  var MiniQuery = function(element) {
    this.element = element;
  }

  MiniQuery.prototype = {
    show: function() {
      DOM.show(this.element);
    },
    hide: function() {
      DOM.hide(this.element);
    }

  }

  var DOM = (
    function(){
        var _hide = function(element){
          if(!element.id)
            element.id = CACHE.counter++;
          style = window.getComputedStyle(element);
          CACHE.previous_displays[element.id] = style.getPropertyValue('display');
          element.style.display = 'none';
        }

        var _show = function(element){
          oldDisplayValue = CACHE.previous_displays[element.id];
          element.style.display = oldDisplayValue;
        }
      return{
        hide: function(query) {
          _hide(query)
        },
        show: function(query) {
          _show(query)
        }
      }
    }()
  )

  CACHE = {
    counter: 0,
    previous_displays: {

    }
  }

  EventDispatcher = (

    function(){

      var _perform_for_each = function(selector, callback) {
        var elements = SweetSelector.select(selector);
        for(var i = 0; i < elements.length; i++){
          callback.call(elements[i])
        }
      }
      var _on = function(selector, event, handler) {
        _perform_for_each(selector, function() {
          this["on"+event] = handler;
        });
      };
      var _trigger = function(selector, event) {
        _perform_for_each(selector, function() {
          this["on"+event]();
        });
      };

      return {
        on: function(selector, event, handler){
          _on(selector, event, handler);
        },
        trigger: function(selector, event) {
          _trigger(selector, event);
        }
      }
    }()
  )

  AjaxWrapper = (function(){
    var _request = function(options) {
      var oReq = new XMLHttpRequest();
      function handleLoad() {
        if (event.target.status == 422)
          options.fail();
        else
          options.success();
      }

      oReq.open(options.type, options.url, true);
      oReq.addEventListener("load", handleLoad, false);
      oReq.addEventListener("error", options.fail, false);
      oReq.send();
    };
    return {
      request: function(options) {
        _request(options);
      }
    };
  }())

  return function(global) {
    // SweetSelector: SweetSelector,
    // DOM: DOM,
    // EventDispatcher: EventDispatcher,
    // AjaxWrapper:  AjaxWrapper
    global.$ = SweetSelector;
    global.miniQuery = SweetSelector;
  }

}());



(function(global, miniQuery) {
  miniQuery(global);
}(window, miniQuery));
