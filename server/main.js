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
        feedGitLab = Scrape.url("https://www.behance.net/v2/users/wdelenclosa55e/projects?api_key=XVZeqTYLSrh9O2wNbqFJf8bfZXDE9M9w");
        return feedGitLab;
    }
});

Meteor.methods({
    titre: function() {
        feedLinkedin = Scrape.feed("https://www.linkedin.com/in/wdelenclos");
        return feedLinkedin;
    }
});
