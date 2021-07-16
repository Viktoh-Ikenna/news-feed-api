import React from 'react'
import {BiCommentDots} from 'react-icons/bi'
import './Comments.css'
export const Comments = (props) => {
    return (
        <div className='Comments'>
            <div><h3>{props.data.title}</h3></div>
            <div>
            <div className='commenter'>
                <span><BiCommentDots/></span>
                <div>
                    <p>{props.data.name}</p>
                    <p>Jan-15-2021 {' '}v{props.data.Email} </p>
                </div>
            </div>
            <div className='the_comment'>
                <div className='comment_text'>{props.data.message}</div>
                <div className='reply'>reply</div>
            </div>
            </div> 
                      
        </div>
    )
}
