window.onload=function(){
  EventDispatcher.on('.klass', 'shadi', function() { console.log("awesome") });
  EventDispatcher.trigger('.klass', 'shadi');

  // AjaxWrapper.request({
  //   url: '/',
  //   type: 'GET',
  //   success: function() {
  //     alert('success');
  //   },
  //   fail: function() {
  //     alert('failure');
  //   }
  // });

  AjaxWrapper.request({
    url: '/lamer',
    type: 'GET',
    success: function() {
      alert('success');
    },
    fail: function() {
      alert('failure');
    }
  });
};