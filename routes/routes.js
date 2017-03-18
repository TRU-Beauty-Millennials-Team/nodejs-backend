var request = require('request')
var cheerio = require('cheerio'); 
var http = require('http');

var vategoruUrl = 'http://naruto.wikia.com/wiki/Category:Characters?page=';
var profileUrl = 'http://naruto.wikia.com/wiki';

var f = () => {
    var b = 0;
    for(var i = 0; i < 100; i++)
    {
        b = b + 1;
    }
    console.log(b);
    return(b);
}

var appRouter = function(app) {
    app.get("/", function(req, res) {
       var a = 'hello';
       res.send(a);
    });


    app.get("/character/:name", function(req, res) {
        var name = req.params.name.split(' ').join('_');
        var url = profileUrl + name;

        request(url, (err, response, html) => {
            if(!err && response.statusCode == 200) {
                var $ = cheerio.load(html);

            } else {
                res.json({err: 'error'});
            }
        });
    });    

    app.get("/characters/", function(req, res) {
        var id = req.param('page');
        request(vategoruUrl+id, function (error, response, html) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(html);
                var names = [];
                var urls = [];
                
                $("div.category-gallery-item-image" ).each(function( index ) {
                    urls[index]  = $(this).find('img').attr('src');
                    names[index] = $(this).find('img').attr('alt');
                });
                
                var buffer = {};
                var iterator = (index) => {
                    if(index == names.length) {
                        res.json(buffer);
                        return(null);
                    }
                    
                    buffer[names[index]] = urls[index];
                    iterator(index+1);
                    
                };

                iterator(0);        
            }
            else {
                res.json({err: 'error'});
            }
        });
    });
}
 


module.exports = appRouter;



