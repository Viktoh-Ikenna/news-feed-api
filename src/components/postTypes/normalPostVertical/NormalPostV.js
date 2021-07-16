import React from "react";
import { BiComment } from "react-icons/bi";
import "./NormalPostV.css";
import {
  Link,
  useLocation,
} from "react-router-dom";
import queryString from 'query-string'

export const NormalPostV = (props) => {
  const date=new Date(props.post.publishedAt);
  return (

      <div  style={props.style} className="Normal_postV_cont">
        <div className="Normal_postV_cont_image" style={{backgroundImage:`url(${props.post.urlToImage})`}}></div>
        <div className="Normal_postV_text_cont">
          <h2>a{props.post.title}</h2>
          <div className="Normal_postV_cont_date">
          <div>{`${date.getDate()}-${(date.getMonth()+1)<10?`0${(date.getMonth()+1)}`:`${(date.getMonth()+1)}`}-${date.getFullYear()}`}</div>
            <div>
              <BiComment />
              200
            </div>
          </div>

          <p>
           {props.post.description}
          </p>
          <Link to={`/article/${props.cty}/${queryString.stringify(props.post.url)}`} className="Normal_postV_morebtn">More ...</Link>
        </div>
      </div>
  
  );
};
