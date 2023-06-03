import React from 'react'
import styles from "./style.module.css"
import { getLocalStorage } from '../../utils/localStorage'
const LastSearches = ({fetchUser}) => {

const lastUsers = getLocalStorage();
  return (
    <ul>    
    {
      lastUsers?.map((user)=><li key={user.id} onClick={()=>fetchUser(user)}>{user}</li>)
    }
    </ul>
  )
}

export default LastSearches