/*!
 * minQuery
 */

var SweetSelector = {
  select: function(query) {
    var first_char = query[0];

    switch(first_char){
      case '#':
        return this.selectId(query.substr(1));
        break;
      case '.':
        return this.selectClass(query.substr(1));
        break;
      default:
        return this.selectElement(query);
    }


  },

  selectId: function(id_name) {
    console.log("selectId");
    return document.getElementById(id_name);
  },

  selectClass: function(class_name) {
    console.log("selectClass");
    return document.getElementsByClassName(class_name);
  },

  selectElement: function(element_name) {
    console.log("selectElement");
    return document.getElementsByTagName(element_name);
  }

}
