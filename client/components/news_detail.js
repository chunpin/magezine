import React from 'react';

const NewsDetail = (props) => {
  const { name , email, phone , avatar, words, paragraph } = props.news;


  return (
  	<div className="col-xs-6 col-sm-3">
		<div className="card">
		  <img className="card-img-top" src={ avatar } alt= { avatar } />
		  <div className="card-block">
		    <h4 className="card-title">{ name }</h4>
		    <p className="card-text">{ paragraph }</p>
		    <a href="#" className="btn btn-primary">Go somewhere</a>
		  </div>
		</div>
  	</div>
  );

};



export default NewsDetail;




