/*!
 * minQuery
 */

// var SweetSelector = {
//   select: function(query) {
//     var first_char = query[0];

//     switch(first_char){
//       case '#':
//         return this.selectId(query.substr(1));
//         break;
//       case '.':
//         return this.selectClass(query.substr(1));
//         break;
//       default:
//         return this.selectElement(query);
//     }
//   },

//   selectId: function(id_name) {
//     console.log("selectId");
//     return document.getElementById(id_name);
//   },

//   selectClass: function(class_name) {
//     console.log("selectClass");
//     return document.getElementsByClassName(class_name);
//   },

//   selectElement: function(element_name) {
//     console.log("selectElement");
//     return document.getElementsByTagName(element_name);
//   }

// }

var SweetSelector = (function(){
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


  return {
    select: function(query) {
      return _select(query);
    }
  }
}())

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
      hide: function(element) {
        _hide(element)
      },
      show: function(element) {
        _show(element)
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
  // on: function(selector, event, handler) {
  //   var elements = SweetSelector.select(selector);
  //   for(var i = 0; i < elements.length; i++) {
  //     elements[i]["on"+event] = handler;
  //   }
  // },
  // trigger: function(selector, event) {
  //   var elements = SweetSelector.select(selector);
  //   for(var i = 0; i < elements.length; i++) {
  //     elements[i]["on"+event]();
  //   }
  // }

  function(){
    var _on = function(selector, event, handler) {
      var elements = SweetSelector.select(selector);
      for(var i = 0; i < elements.length; i++) {
        elements[i]["on"+event] = handler;
      }
    };
    var _trigger = function(selector, event) {
      var elements = SweetSelector.select(selector);
      for(var i = 0; i < elements.length; i++) {
        elements[i]["on"+event]();
      }
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
