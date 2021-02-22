import React from "react";
import searchStyle from "./style/Search.module.css";
import Input from "../../component/Input";
import Display from "../../component/Display";

const Search = () => {
  const [data, setData] = React.useState(null);
  const [user, setUser] = React.useState("");

  console.log(
    "data", data
  );
  const getInput = (e) => {
    setUser(e.target.value);
    console.log(user);
  };
   const submit = async() => {
    const result = await fetchUser(user);
    console.log(result);

   }
  const fetchUser = async(user) => {
    fetch(`https://api.github.com/users/`+user,{
    method: "GET",
    headers: {
      Authorization: `2b459114e4ede0c20e9cd22bd32700615eb04978 ` 
    }
  })
         .then((response) => response.json())
           .then((data) => {
            setData(data);
             console.log(data);
         });
  }

return (
<div className={searchStyle.container}>
  <Input onchange={getInput} />
  <button onClick={submit}>Submit</button>
  {
    data && (
    <Display
    name={data.name}
    avatar_url={data.avatar_url}
    bio={data.bio}
    twitter_username={data.twitter_username}
    html_url={data.html_url}
    company={data.company}
    location={data.location}
    /> 
    )
  }
</div>
);
};

export default Search;
