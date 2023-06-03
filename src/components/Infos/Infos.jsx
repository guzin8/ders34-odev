
import styles from "./style.module.css"
import PersonalInformations from '../PersonalInformations/PersonalInformations';
import Repo from '../Repos/Repo';
import { getUserRepos } from '../../utils/Request'
import { useEffect, useState } from 'react'

const Infos = ({user}) => {

  const[userRepos,setUserRepos]= useState();

  useEffect(()=>{  
  setUserRepos(getUserRepos(user?.login));
  },[])

  // console.log(user);
  return (
    <div>
    <PersonalInformations user={user} />
    
    <Repo userName={user?.login}/>
    </div>
  )
}
export default Infos