import React from "react";
import searchStyle from "./style/Search.module.css";
import Input from "../../component/Input";



const Search = () => {
    const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data.users);
        console.log(data);
      });
  }, []);

return(
  <div>
    <Input/>
  </div>
)
}



export default Search;