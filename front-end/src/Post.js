import React from 'react'
import "./Post.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from '@mui/material';
function Post( {
    displayName,
    username,
    Verified,
    text,
    image,
    avatar}){
  return (
    <div className='post'>
        <div className='post_avatar'>
        <Avatar src={avatar} />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        {displayName}{" "}
                    </h3>
                </div>
                <div className="post__headerDescription">
              <p>{text}</p>
            </div>

            </div>
            <img src={image} alt=''/>
            <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
    </div>
  )
}

export default Post