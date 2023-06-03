import React, { useState } from 'react'
import './App.css';
import Infos from './components/Infos/Infos';
import Search from './components/Search/Search';
import LastSearches from './components/LastSearches/LastSearches';
import NotFound from './components/NotFound/NotFound';

import {getUser} from "./utils/Request"

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const[user,setUser]= useState();

  const fetchUser = async(userName)=>{
   const data =  await getUser(userName ? userName : searchTerm);
   setUser(data);
  }

  return (
    <div className="container">
      <Search fetchUser={fetchUser} searchTerm ={searchTerm} setSearchTerm={setSearchTerm}/>
      {user?.message!=="Not Found" ? <Infos user={user} />: <NotFound/>}
      {<LastSearches fetchUser={fetchUser} />}
    </div>
  );
}

export default App;
//stargazers_count 
//https://api.github.com/repos/