import React, { useState,useEffect } from "react";
import { Pagination } from "../paginaton/Pagination";
import { NormalPostV } from "../postTypes/normalPostVertical/NormalPostV";
import "./PostListing.css";
export const PostListing = (props) => {
  const [size,setSize]=useState('32%');
  useEffect(() => {
    const w=window.screen.width;
    if(w<1100&&w>900){
      setSize('31%')
    }
    else if(w<900&&w>750){
      setSize('47%')
    } else if(w<750&&w>600){
      setSize('31%')
    }else if(w<600){
      setSize('90%')
    }
   
  }, [])
  window.onresize=()=>{
    const w=window.screen.width;
console.log(w)
    if(w<1100&&w>900){
      setSize('31%')
    }
    else if(w<900&&w>750){
      setSize('47%')
    }
    else if(w<750&&w>600){
      setSize('31%')
    }else if(w<600){
      setSize('90%')
    }
  }
  return (

    <div className="post_listing">
      {props.data.map((e,i)=>{
     return <NormalPostV key={i} style={{ width: size }} cty={props.cty} post={e}/>})}
      
  <Pagination />
    </div>
   
  );
};
