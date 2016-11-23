import React from 'react';
import ReactDom from 'react-dom';
import NewsList from './components/news_list';





const App = () => {
  return (
  	<NewsList />
  );

};






Meteor.startup(() => {
	ReactDom.render(<App />, document.getElementById('container'));
});