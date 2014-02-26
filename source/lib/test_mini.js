window.onload=function(){
// document.addEventListener("load", function(){
  // EventDispatcher.on('.klass', 'shadi', function() { console.log("awesome") });
  // EventDispatcher.trigger('.klass', 'shadi');

  var foo = function() {
    var selector = "happy"
    var eve = "something"
    var handler = "handles"

    function functionName() {
      debugger
      console.log( " " + eve + " " + handler)
    };

    function bar(selector) {
      // debugger;
      functionName();
    };

    bar();

  }

  foo();
};