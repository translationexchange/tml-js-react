var React = require('react');

module.exports = {
  
  tr() {
    if(window.tr) {
      var args = Array.prototype.slice.call(arguments);
      return React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: window.tr.apply(this, args)
        } 
      });
    }
  },

  trl() {
    if(window.trl) {
      var args = Array.prototype.slice.call(arguments);
      return window.trl.apply(this, args);
    }
  }

};