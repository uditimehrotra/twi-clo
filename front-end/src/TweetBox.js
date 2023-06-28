import React, { useState } from "react";
import "./TweetBox.css";
import db from "./fireBasee";
import {Avatar, Button } from '@mui/material';
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Rafeh Qazi",
          username: "cleverqazi",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
            "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        });
    
        setTweetMessage("");
        setTweetImage("");
      };
  return (
     <div className='tweetBox'>
        <form>
            <div className="tweetBox_input">
                <Avatar src='<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />'/>
            <input type='text' 
             onChange={(e) => setTweetMessage(e.target.value)}
             value={tweetMessage}
            placeholder='whats happening'
            />
            </div>
            <input
             value={tweetImage}
             onChange={(e) => setTweetImage(e.target.value)} type='text' placeholder='enter image URL'
            className='tweetBox_imageInput'/>

            <Button 
              onClick={sendTweet}
              type="submit"
            className='tweetBox_tweetButton'>
                Tweet
            </Button>
        </form>
            
    </div>
  );
  }

export default TweetBox;