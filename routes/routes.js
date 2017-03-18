var request = require('request')
var cheerio = require('cheerio'); 
var http = require('http');
//nodejs, first day 
var vategoruUrl = 'http://naruto.wikia.com/wiki/Category:Characters?page=';
var profileUrl = 'http://naruto.wikia.com/wiki/';


var appRouter = function(app) {
    app.get("/", function(req, res) {
       var a = 'hello';
       res.send(a);
    });


    app.get("/character/", function(req, res) {
        var short = 1;
        if(req.param('notshort')) {
            short = 0;
        }
        var name = req.param('name').split(' ').join('_');
        var url = profileUrl  + name;
        console.log(url);

        request(url, (err, response, html) => {
            if(!err && response.statusCode == 200) {
                var $ = cheerio.load(html);
                var a = $('#mw-content-text').find('p').text();
                 
                if(short) {
                    res.json({text: a.substring(0,1000) + '....'});
                } else {
                    res.json({text: a});
                }
                
                
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



