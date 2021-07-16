import React from "react";
import "./imagePost.css";
import {
  Link,
  useLocation,
} from "react-router-dom";
import queryString from 'query-string'

export const ImagePost = (props) => {
  return (
      <div style={{width:props.width,height:props.height,fontSize:props.font}} className="outer">
       <div className="inner" style={{ backgroundImage: `url("${props.post.urlToImage}")`}}>
        </div>
        <Link to={`/article/${props.cty}/${queryString.stringify(props.post.url)}`} className="text">
          <h3>{props.post.title}</h3>
          <div>
            {`${props.post.description}`.slice(0,80)}
          </div>
        </Link>
      </div>
  );
};
