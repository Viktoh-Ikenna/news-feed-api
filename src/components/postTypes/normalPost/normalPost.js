import React from "react";
import "./normalPost.css";
import {BiComment} from 'react-icons/bi'
import {
  Link,
  useLocation,
} from "react-router-dom";
import queryString from 'query-string'

export const NormalPost = (props) => {
  const date=new Date(props.post.publishedAt);
  console.log()
  return (
    <Link to={`/article/${props.cty}/${queryString.stringify(props.post.url)}`} className="Normal_post_cont">
      <div className='Normal_post_cont_image' style={{backgroundImage:`url(${props.post.urlToImage})`}}></div>
      <div className='Normal_post_text_cont'>
        <h5>{`${props.post.title}`.slice(0,70)}</h5>
        <div>
          <div>{`${date.getDate()}-${(date.getMonth()+1)<10?`0${(date.getMonth()+1)}`:`${(date.getMonth()+1)}`}-${date.getFullYear()}`}</div>
          <div><BiComment/>200</div>
        </div>
      </div>
    </Link>
  );
};
