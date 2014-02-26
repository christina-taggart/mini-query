var SweetSelector = (function(){

  var selectId = function(id) {
    return document.getElementById(id);
  }

  var selectClass = function(klass) {
    return document.getElementsByClassName(klass);
  }

  var selectTag = function(tagName) {
    return document.getElementsByTagName(tagName);
  }

  var selectFuncs = new Object();
  selectFuncs['.'] = selectClass;
  selectFuncs['#'] = selectId;
  selectFuncs['default'] = selectTag;

  return {
    select: function(selector) {
      if (selectFuncs[selector[0]]) {
        return selectFuncs[selector[0]](selector.slice(1));
      } else {
        return selectFuncs['default'](selector);
      }
    }
  }
})()

var DOM = (function(){

  var _modifyDisplay = function(selector, displayType){
    var nodeArray = SweetSelector.select(selector);
    for (var i = 0; i < nodeArray.length; i++){
      nodeArray[i].style.display=displayType;
    }
  }

  return{
    hide: function(selector){
      return _modifyDisplay(selector, 'none');
    },

    show: function(selector){
      return _modifyDisplay(selector, '');
    },

    addClass: function(selector, className){
      var nodeArray = SweetSelector.select(selector)
      for (var i = 0; i < nodeArray.length; i++){
        nodeArray[i].className += " " + className;
      }
      return nodeArray;
    },

    removeClass: function(selector, className){
      var nodeArray = SweetSelector.select(selector)
      for (var i = 0; i < nodeArray.length; i++){
        var classArray = nodeArray[i].className.split(' ');
        var index = classArray.indexOf(className);
        classArray.splice(index, 1);
        nodeArray[i].className = classArray.join(' ');
      }
      return nodeArray;
    }
  }
})()


var EventDispatcher = (function(){

  return {
    on: function(element, eventName, action){
      var elements = SweetSelector.select(element);
      for (var i=0; i<elements.length; i++){
        elements[i]['on'+eventName] = action;
      }
    },

    trigger: function(element, eventName){
      var elements = SweetSelector.select(element);
      for (var i=0; i<elements.length; i++){
        elements[i]['on'+eventName]();
      }
    }
  }
})()

var AjaxWrapper = (function(){
  return {
    request: function(options){
      var url = options['url']
      var type = options['type']
      var success = options['success']
      var fail = options['fail']
      var req = new XMLHttpRequest();
      req.open(type, url, true);
      req.send();
      req.addEventListener('load', function(){
        if (req.status === 200){
          success(req.response, req.status, req)
        }
        else
        {
          fail(req, req.status, req.statusText)
        }
      })
    }
  }
})()

