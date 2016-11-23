// Only executed on the server
import { Meteor } from 'meteor/meteor';
import { News } from '../imports/collections/news';
import _ from 'lodash';
import { image, helpers, lorem } from 'faker';


Meteor.startup(() => {
  //great place to generate data

  // check to see if there's any data exists in the collection
  const numberRecords = News.find().count();


  if(!numberRecords){
  	// generate some data
  	_.times(5000, () => {
  		const { name , email ,  phone } = helpers.createCard();
  		const avatar = image.avatar();
  		const words  = lorem.words();
  		const paragraph  = lorem.paragraph();

  		News.insert({
      		name,
      		email,
      		phone,
      		avatar,
      		words,
      		paragraph
  		});


  	});
  };


// publish the newsList data from server side to the client side
  Meteor.publish('news', function(number){
    return News.find({},{ limit: number});
  });

});