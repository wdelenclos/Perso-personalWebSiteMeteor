import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
// Listen to incoming HTTP requests, can only be used on the server
    WebApp.rawConnectHandlers.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        return next();
    });

});

Meteor.methods({
    publication: function() {
        scraper = require('medium-scraper');
        var medium = {user: '@wdelenclos'}
        publications = scraper.getPosts(medium).then(function(results) {
            return results;
        })
        return publications;
    }
});

Meteor.methods({
    publicationTitle: function() {
        feedData = Scrape.feed("https://medium.com/feed/@wdelenclos/");
        return feedData;
    }
});

Meteor.methods({
    gallerie: function() {
        feedGitLab = Scrape.url("https://gitlab.com/users/wdelenclos/projects");
        console.log(feedGitLab);

        var data = [
            {
                "title": "Site Mister G Bros",
                "url": "http://mistergbros.com",
                "imgurl": "http://wdelenclos.fr/wp-content/uploads/2016/09/Capture-d%E2%80%99e%CC%81cran-2016-09-19-a%CC%80-18.09.02.png",
                "p":"Création et développement du site de l'agence Mister G"
            },
            {
                "title": "Interface Livebox Orange",
                "url": "",
                "imgurl": "http://wdelenclos.fr/wp-content/uploads/2016/05/Showcase-Devices-Presentatio2n.jpg",
                "p":"Concept d'interface Livebox Orange (non officiel)"
            },
            {
                "title": "Datafood",
                "url": "",
                "imgurl": "http://wdelenclos.fr/wp-content/uploads/2016/01/Sans-titre-13.jpg",
                "p":"Logiciel de gestion de commande Datafood 100% JSON & Javascript, utilisant le LocaStorage."
            }
        ]

        return data;
    }
});

