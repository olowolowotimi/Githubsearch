import React from "react";
import searchStyle from "./style/Search.module.css";
import Input from "../../component/Input";

const Search = () => {
  const [data, setData] = React.useState([]);
  const [user, setUser] = React.useState("");
  const getInput = (e) => {
    setUser(e.target.value);
    console.log(user);
  };
  const submit = async() => {
    const result = await fetchUser(user);
    console.log(result);

  }
  const fetchUser = async(user) => {
    fetch("https://api.github.com/users/"+user)
         .then((response) => response.json())
           .then((data) => {
            setData(data);
             console.log(data);
         });
  }



  return (
    <div>
      <Input onchange={getInput} />
      <button onClick={submit}>Submit </button>
    </div>
  );
};

export default Search;
