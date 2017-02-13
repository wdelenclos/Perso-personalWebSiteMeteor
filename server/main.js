import { Meteor } from 'meteor/meteor';
import { Behance } from 'meteor/behance-api';

Be = new Behance('XVZeqTYLSrh9O2wNbqFJf8bfZXDE9M9w');

    id="wdelenclosa55e";

    Be.userProjects(id, opts, function(err, res, data) {
        console.dir(data);
    });

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

    }
});

