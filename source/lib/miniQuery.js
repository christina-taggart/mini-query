/*!
 * minQuery
 */
var SweetSelector = {
  select: function(query) {
    return document.querySelector(query)
  },

  hide: function(query) {
    this.select(query).style.display = 'none'
  },

  show: function(query) {
    this.select(query).style.display = ''
  },

  addClass: function(query, klass) {
    this.select(query).className += ' ' + klass
  },

  removeClass: function(query, klass) {
    var newClassName = this.select(query).className.replace(' ' + klass, '');
    this.select(query).className = newClassName;
  }

};