import React,{useState,useEffect} from "react";
import { PostListing } from "../postListing/PostListing";
import { Sidebar } from "../sidebar/sidebar";
import {
  useParams
  } from "react-router-dom";
import axios from "axios";

export const PostListingPages = () => {
const params = useParams();
const [data,setData]=useState([])
useEffect(()=>{
  // document.querySelector('.ArticlePage').scrollIntoView({behavior: "smooth"});
  (async()=>{
  const url =`https://newsapi.org/v2/top-headlines?country=${params.country}&apiKey=45e4c0f835124bdfbc8adb10a54735c6`;
    const res=await axios.get(url);
    let result= await res.data
    const store =result.articles;

    setData(store);
})()},[params.country])
console.log(params.country)
console.log(data)
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        margin: "20px auto",
        justifyContent:"space-between"
      }}
    >
      <PostListing data={data} cty={params.country}/>
      <Sidebar />
    </div>
  );
};
