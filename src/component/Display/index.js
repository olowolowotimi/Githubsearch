import React from "react";
import playStyle from "./style/Display.module.css";




const Display = ({
    avatar_url,
    bio,
    twitter_username,
    repos_url,
    company,
    location,
  }) => {
      return(
          <div className={playStyle.card}>
              <h4>{avatar_url}</h4>
              <p>{bio}</p>
          </div>
      )
  }


export default Display;