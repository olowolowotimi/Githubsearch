import React from "react";
import playStyle from "./style/Display.module.css";
import {FaTwitterSquare} from "react-icons/fa";
import {IoLocationOutline} from "react-icons/io";
import {ImLocation, ImOffice} from "react-icons/im";
import {CgProfile} from "react-icons/cg";




const Display = ({
    name,
    avatar_url,
    bio,
    twitter_username,
    html_url,
    company,
    location,
  }) => {
      return(
          <div className={playStyle.card}>
              <div className={playStyle.content}>
                  <h4>Name: {name}</h4>
              <img src={avatar_url} alt="user image"/>
              <p>Bio:  {bio}</p>
              <p><span><FaTwitterSquare/></span>  {twitter_username}</p>
             <span><CgProfile/></span> <a href={html_url}>{html_url}</a>
              <p><span><ImOffice/></span>  {company}</p>
              <p><span><ImLocation/></span>  {location}</p>
          </div>
</div>
      )
  }


export default Display;