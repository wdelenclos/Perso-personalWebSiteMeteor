import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  playlist = new Mongo.Collection( "dataPerso" );

});


