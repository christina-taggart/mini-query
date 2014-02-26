var sweetSelector = (function() {

  return {
    select: function(thingToSelect)
    {
      if (thingToSelect.match(/#/)) {
        thingToSelect = thingToSelect.replace(/#/, "")
        return document.getElementById(thingToSelect);
        }
      else if (thingToSelect.match(/\./))
        {
        thingToSelect = thingToSelect.replace(/\./, "")
        return document.getElementsByClassName(thingToSelect);
        }
      else
        {
        return document.getElementsByTagName(thingToSelect);
        }
      }
    }
  })();


var DOM = (function() {

  return {
    hide: function(elementYouWant){
      var element = sweetSelector.select(elementYouWant)
      element[0].style.display = "none"
    },

    show: function(elementYouWant) {
      var element = sweetSelector.select(elementYouWant)
      element[0].style.display = "block";
    },

    addClass: function(elementYouWant, classToAdd) {
      var element = sweetSelector.select(elementYouWant)
      element[0].classList.add(classToAdd)
    },

    removeClass: function(elementYouWant, classToRemove) {
      var element = sweetSelector.select(elementYouWant)
      element[0].classList.remove(classToRemove)
    }
  }
})();

var AjaxWrapper = (function() {

  return {
    request: function(args)
    var myJax = new XMLHttpRequest();
    myJax.onload = args['success']
    myJax.onfail = args['failure']
    myJax.open(args['action'], args['url'])
    myJax.send();
    }

    }

})();