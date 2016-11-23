import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { News } from '../../imports/collections/news';
import  NewsDetail  from './news_detail';


const NewsList = (props) =>{
   return (
     <div className="container">
      <div className="row">
       {props.news.map( (news)=> <NewsDetail key={ news._id } news={news} /> )}
      </div>
     </div>
   );




};




export default createContainer(()=>{
	// set up subscription
	Meteor.subscribe('news',5000);
	// return an object. Whatever we return will be sent ot NewsList
	// as props

	return { news: News.find({}).fetch() };
}, NewsList);

