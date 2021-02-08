//'use strict';

const func = { 
    handleClick: function(radio) { 
        if(radio.value === 'yes') pagingDN.disabled = false; 
        else if(radio.value === 'no') pagingDN.disabled = true; 
    }, 
    page: "Hello"
};

module.exports = func;