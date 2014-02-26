window.onload=function(){
// document.addEventListener("load", function(){
  EventDispatcher.on('.klass', 'shadi', function() { console.log("awesome") });
  EventDispatcher.trigger('.klass', 'shadi');
};