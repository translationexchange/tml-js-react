import React from 'react';

export default {
  
  tr(...args) {
    if(window.tr) {
      return React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: window.tr.apply(this, args)
        } 
      });
    }
  },

  trl(...args){
    if(window.trl) {
      window.trl.apply(this, args);
    }
  }

};