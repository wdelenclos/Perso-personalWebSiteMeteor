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
        feedGitLab = Scrape.url("https://gitlab.com/api/v3/projects?private_token=syaM4segXp8C_5GLHTSU");
        return feedGitLab;
    }
});

Meteor.methods({
    titre: function() {
        feedLinkedin = Scrape.feed("https://www.linkedin.com/in/wdelenclos");
        return feedLinkedin;
    }
});
