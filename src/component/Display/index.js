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
                  {name && <h4>Name:  {name}</h4>}
              {avatar_url && <img src={avatar_url} alt="user image"/>}
              {bio && <p>Bio:  {bio}</p>}
              {twitter_username && <p><span><FaTwitterSquare/></span>  {twitter_username}</p>}
             {html_url && <p><span><CgProfile/></span> <a href={html_url} target="_blank">{html_url}</a></p> }
              {company &&<p><span><ImOffice/></span>  {company}</p>}
              {location &&<p><span><ImLocation/></span>  {location}</p>}
          </div>
</div>
      )
  }


export default Display;