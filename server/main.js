import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {



});



Meteor.methods({
    publication: function() {
        feedData = Scrape.feed("https://medium.com/feed/@wdelenclos");
        publications = feedData.items;
        return publications;
    }
});




