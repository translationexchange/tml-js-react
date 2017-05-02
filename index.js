var React = require('react');

module.exports = {

  tr() {
    var args = Array.prototype.slice.call(arguments);
    if(!window.trl || !args[0]) {
      return args[0];
    }
    return React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: window.tr.apply(this, args)
      }
    });
  },

  trl() {
    var args = Array.prototype.slice.call(arguments);
    if(!window.trl || !args[0]) {
      return args[0];
    }
    return window.trl.apply(this, args);
  }

};
