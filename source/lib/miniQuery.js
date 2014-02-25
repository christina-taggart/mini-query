/*!
 * minQuery
 */

 var sweetSelector = {

  select: function(searchTerm) {
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
 }

