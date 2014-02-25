var SweetSelector = (function() {
  // private variables and functions
  var myPrivateVar, myPrivateMethod;
  return {
    // public variables and functions
    myPublicVar: "foo",
    select: function(target) { 
      if (typeof(target) != "string") {
        throw "select() only works with strings"
      }

      if (target.charAt(0) == "#") {
        target = target.replace("#", "");
        return document.getElementById(target);
      } else if (target.charAt(0) == ".") {
        target = target.slice(1)
        target = target.replace(".", " ")
        return document.getElementsByClassName(target);
      } else {
        return document.getElementsByTagName(target);
      }

      console.log(target); // remove me
    }
  };
})();