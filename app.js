var app = require('./configs/express')();

var hostname = "";
var port = 3000;

app.get('/products', function (req, res) {
    //res.send("<html><body><h1>Product List Requested</h1></body></html>");
    console.log('product list request');
    
    res.render('product/listProduct');
});

app.listen(port, function() {
    console.log('Server running.');
});