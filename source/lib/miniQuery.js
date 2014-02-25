/*!
 * minQuery
 */

/* SweetSelector module: select elements within the DOM! */
var SweetSelector = {
  select: function(selector) {
    var choppedSelector = selector.slice(1, selector.length)
    if (selector[0] === "#") {
      return document.getElementById(choppedSelector);
    }
    else if (selector[0] === ".") {
      return document.getElementsByClassName(choppedSelector);
    }
    else {
      return document.getElementsByTagName(selector);
    }
  }
}