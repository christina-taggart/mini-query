/*!
 * minQuery
 */

var _nodeListToArray = function(nl) {
  return [].slice.call(nl) // taken from: http://stackoverflow.com/questions/5501433/nodelist-object-in-javascript
  // var a = []
  // for (var i in nl) { a.push(nl[i]) }
  // // for (var i=0; i<nl.length; ++i) { a.push(nl[i]) }
  // return a
}

var DOM = {

   hide: function(searchTerm) {

    var makeHidden = function(selector) {
      selector.style.display="none"
    }

    if (searchTerm[0] === "#") {

     return document.getElementById(searchTerm.slice(1, searchTerm.length+1)).style.display="none"
    }

    else if (searchTerm[0] === ".") {
     var hideClassNodeList =  document.getElementsByClassName(searchTerm.slice(1, searchTerm.length+1))
     var hideClassNodeArray = _nodeListToArray(hideClassNodeList).map(makeHidden);
    }

    else {
      var hideTagNodeList =   document.getElementsByTagName(searchTerm)
      var hideTagNodeArray = _nodeListToArray(hideTagNodeList).map(makeHidden);
    }
  },



   show: function(searchTerm) {

    var makeVisible = function(selector) {
      selector.style.display="block"
    }

    if (searchTerm[0] === "#") {
     return document.getElementById(searchTerm.slice(1, searchTerm.length+1)).style.display="block"
    }
    else if (searchTerm[0] === ".") {
     var showClassNodeList =  document.getElementsByClassName(searchTerm.slice(1, searchTerm.length+1))
     var showClassNodeArray = _nodeListToArray(showClassNodeList).map(makeVisible);
    }
    else {
     var showTagNodeList =  document.getElementsByTagName(searchTerm)
     var showTagNodeArray = _nodeListToArray(showTagNodeList).map(makeVisible);

    }
  }
}


var sweetSelector = (function(){
  var select = function(searchTerm) {
    if (searchTerm[0] === "#") {
     return document.getElementById(searchTerm.slice(1, searchTerm.length+1))
    }
    else if (searchTerm[0] === ".") {
     return document.getElementsByClassName(searchTerm.slice(1, searchTerm.length+1));
    }
    else {
      return document.getElementsByTagName(searchTerm)
    }
  }
  return {
    select: select
  }
}())


var eventDispatcher = {




  on: function(selector, action, passFunc){

    var selectedThing = sweetSelector.select(selector)
    var selectedThingArray = _nodeListToArray(selectedThing)

    for (i=0; i < selectedThingArray.length; i++){
      // selectedThingArray[i].addEventListener(action, passFunc)
      selectedThingArray[i][action] = passFunc
    }

  },

  trigger: function(selector, action){

    // var event_ = new Event(action)

    var selectedThing = sweetSelector.select(selector)
    var selectedThingArray = _nodeListToArray(selectedThing)
    for (i=0; i < selectedThingArray.length; i++){
      selectedThingArray[i][action]()
    }
  }

}