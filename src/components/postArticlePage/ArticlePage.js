import React,{useEffect,useContext, useState} from "react";
import './ArticlePage.css'
import { AiOutlineUser } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { Sidebar } from "../sidebar/sidebar";
import { LeaveC } from "../LeaveComments/LeaveC";
import { Comments } from "../Comments/Comments";
import { ThemeContext } from "../..";
import {
  useParams
} from "react-router-dom";
import queryString from 'query-string'
import axios from "axios";
import { observer } from "mobx-react";


export const ArticlePage = observer((props) => {
  const params = useParams()
  console.log(params)
  const MobStore =useContext(ThemeContext);
  const [data,setData]=useState({})
useEffect(()=>{
  document.querySelector('.ArticlePage').scrollIntoView({behavior: "smooth"});
  (async()=>{
  const url =`https://newsapi.org/v2/top-headlines?country=${params.country}&apiKey=45e4c0f835124bdfbc8adb10a54735c6`;
    const res=await axios.get(url);
    let result= await res.data
    const store =(result.articles);
    setData(()=>{return {...store.filter(e=>queryString.stringify(e.url)===params.id)[0]}});
})()},[params.id])
console.log(data)
const date=new Date(data.publishedAt);
  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div className='ArticlePage'>
       
      {data.title?(<div className="article">
        <h1 className="title">{data.title}</h1>
        <div className="artice_details">
          <div>
            <AiOutlineUser />
            don-viktoh
          </div>
          <div>
            <MdUpdate />
            {`${date.getDate()}-${(date.getMonth()+1)<10?`0${(date.getMonth()+1)}`:`${(date.getMonth()+1)}`}-${date.getFullYear()}`}
          </div>
        </div>
        <div className='article_text'>
        {data.description}<br/>
       {data.content}
       <img src={`${data.urlToImage}`} style={{width:'80%',height:'200px'}} alt={data.title}/>
        </div>
      </div>):'loading....'}
      <Sidebar/>
    </div>
    {MobStore.getComments[0]?
    MobStore.getComments.map((e,i)=><Comments key={i} data={e}/>):<div style={{marginLeft:0}}>{MobStore.getComments[0]}</div>}
    <LeaveC title={data.title}/>
    </div>
  );
})
