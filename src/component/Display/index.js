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
              <div className={playStyle.content}>
              <a href={avatar_url}>User image</a>
              <p>Bio:{bio}</p>
              <p>@{twitter_username}</p>
              <a href={repos_url}>Repositories Link</a>
              <p>{company}</p>
              <p>{location}</p>
          </div>
</div>
      )
  }


export default Display;