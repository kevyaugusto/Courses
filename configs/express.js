var express = require('express');
var app = express();

// app.set defines variables that might be used in the whole system
app.set('view engine', 'ejs'); // Embedded Javascript Templating - http://ejs.co/

module.exports = function() {
    console.log('module is being loaded');
    
    return app;
};