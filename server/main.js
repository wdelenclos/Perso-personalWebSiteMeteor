import { Meteor } from 'meteor/meteor';
import { Houston } from 'meteor/houston';

Houston.methods("Posts", {
    "Publish": function (post) {
        Posts.update(post._id, {$set: {published: true}});
        return post.name + " published successfully.";
    }
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

