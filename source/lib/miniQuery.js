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