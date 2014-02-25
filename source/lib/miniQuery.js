var SweetSelector = {
  select: function(tag) {
    if (/#/.test(tag)) {
      tag = tag.substr(1)
      return document.getElementById(tag);
    } else if (/\./.test(tag)) {
      tag = tag.substr(1)
      return document.getElementsByClassName(tag);
    } else {
      return document.getElementsByTagName(tag);
    }
  }
}

// sweetSelector.select('#eyed');