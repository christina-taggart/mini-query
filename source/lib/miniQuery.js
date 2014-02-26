var SweetSelector = {
  select: function(tag) {
    if (/#/.test(tag)) {
      tag = tag.substr(1)
      return document.getElementById(tag);
    } else if (/\./.test(tag)) {
      tag = tag.substr(1)
      return document.getElementsByClassName(tag);
    } else {
      return document.getElementsByTagName(tag);
    }
  }
}

var DOM = {
  hide: function(tag) {
    var element = SweetSelector.select(tag);
    element.style.display = 'none';
  },
  show: function(tag) {
    var element = SweetSelector.select(tag);
    element.style.display = 'initial';
  }
}

var EventDispatcher = {
  on: function(tag, eventName, handler) {
    var elements = SweetSelector.select(tag);
    for (var i = 0; i < elements.length; i += 1) {
      elements[i][eventName] = handler
    }
  },

  trigger: function(tag, eventName) {
    var elements = SweetSelector.select(tag);
    for (var i = 0; i < elements.length; i += 1) {
      elements[i][eventName]();
    }
  }
}
