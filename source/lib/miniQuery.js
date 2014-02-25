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

