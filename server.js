/**SERVEUR NODE.JS */

var http = require('http');
var url = require("url");
var querrystring = require('querystring');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    var param = querrystring.parse(url.parse(req.url).query);
    console.log(page);
    res.writeHead(200, { "Content-Type": "text/html" });
    if (page == '/') {
        res.write('<!DOCTYPE html>' +
            '<html>' +
            '    <head>' +
            '        <meta charset="utf-8" />' +
            '        <title>Ma page Node.js !</title>' +
            '    </head>' +
            '    <body>' +
            '     	<p>Accueil</p>' +
            '    </body>' +
            '</html>');
    } else if (page == '/page1') {
        res.write('<!DOCTYPE html>' +
            '<html>' +
            '    <head>' +
            '        <meta charset="utf-8" />' +
            '        <title>Ma page Node.js !</title>' +
            '    </head>' +
            '    <body>' +
            '     	<p>Voici la page 1</p>' +
            '    </body>' +
            '</html>');
    } else if (page == '/page1/sub') {
        res.write('<!DOCTYPE html>' +
            '<html>' +
            '    <head>' +
            '        <meta charset="utf-8" />' +
            '        <title>Ma page Node.js !</title>' +
            '    </head>' +
            '    <body>' +
            '       <p>Bienvenue ' + param['prenom'] + ' ' + param['nom'] + '</p>' +
            '     	<p>Voici la page sub</p>' +
            '    </body>' +
            '</html>');
    }

    res.end();
});

server.on('close', function() {
    console.log('bye');
})
server.listen(8080);
/*******************************************************/
/* CUSTOM EVENT*/

/* var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();
jeu.on('gameover', function(message) {
    console.log(message);
})

jeu.emit('gameover', 'tu es nul tu as perdu!'); */


/******************************************************/

/*CUSTOM MODULES */

var monmodule = require('bonjour')


monmodule.direBonjour();
monmodule.direByeBye();

/******************************************************/






server.close();