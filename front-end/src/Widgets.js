import React from 'react';
import "./Widgets.css";
// import {
//     TwitterTimelineEmbed,
//     TwitterShareButton,
//     TwitterTweetEmbed,
//   } from "react-twitter-embed";
  import SearchIcon from "@mui/icons-material/Search";
function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <SearchIcon className='widgets__searchIcon'/>
            <input placeholder='search Twitter' type='text'/>

        </div>
        <div className='widgets__widgetContainer'>
        {/* <TwitterTweetEmbed tweetId={'858551177860055040'}/>  */}
        <h2>
            whats happening
        </h2>
        </div>
    </div>
  )
}

export default Widgets;