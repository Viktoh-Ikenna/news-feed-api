import React,{useEffect,useContext} from "react";
import "./HomeCategListing.css";
import { NormalPost } from "../postTypes/normalPost/normalPost";
import { GrFormNextLink } from "react-icons/gr";
import { NormalPostV } from "../postTypes/normalPostVertical/NormalPostV";
import axios from 'axios';
import {ThemeContext} from '../../index'
import {
Link
} from "react-router-dom";

export const HomeCateglisting = (props) => {
  const url ='https://newsapi.org/v2/top-headlines?country=ng&apiKey=45e4c0f835124bdfbc8adb10a54735c6';
  const us ='https://newsapi.org/v2/top-headlines?country=us&apiKey=45e4c0f835124bdfbc8adb10a54735c6';
  const Ru ='https://newsapi.org/v2/top-headlines?country=ru&apiKey=45e4c0f835124bdfbc8adb10a54735c6';
  
const store =useContext(ThemeContext);
useEffect(()=>{
  store.setToday(url);
  axios.get(us)
  .then(res=>res.data)
  .then(data=>store.Us=data.articles)
  axios.get(Ru)
  .then(res=>res.data)
  .then(data=>store.Ru=data.articles)
},[])

  return (
    <div>
      <div className="HomeCateglisting_categName">
        <h4>{props.name ? props.name : "category"}</h4>
      </div>
      <div className="HomeCateglisting_posts">
        <div>
        {props.data
        .filter((w,z)=>z>1)
          .filter((i, z) => z < 4)
          .map((el,i) => {
            return (
          <NormalPost key={i} cty={props.cty} post={el}/>
            );
          })}
        </div>
        <div>
        {props.data
          .filter((i, z) => z < 1)
          .map((el,i) => {
            return (
          <NormalPostV key={i} cty={props.cty} post={el}/>
            );
          })}
        </div>
      </div>
      <Link to={`posts/${props.cty}`} className="HomeCateglisting_contBtn">
        <div className="HomeCateglisting_nextBtn">
          next <GrFormNextLink />
        </div>
      </Link>
    </div>
  );
};
