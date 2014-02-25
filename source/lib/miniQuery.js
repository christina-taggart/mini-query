/*!
 * minQuery
 */

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
     var hideClassNodeArray = [].slice.call(hideClassNodeList).map(makeHidden);
    }

    else {
      var hideTagNodeList =   document.getElementsByTagName(searchTerm)
      var hideTagNodeArray = [].slice.call(hideTagNodeList).map(makeHidden);
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
     var showClassNodeArray = [].slice.call(showClassNodeList).map(makeVisible);
    }
    else {
     var showTagNodeList =  document.getElementsByTagName(searchTerm)
     var showTagNodeArray = [].slice.call(showTagNodeList).map(makeVisible);

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


