import React, { useState } from 'react'
import styles from "./style.module.css"

const Search = ({searchTerm,setSearchTerm,fetchUser}) => {
  return (
    <div className={`row justify-content-between ${styles.searchWrap}`}>
      <div className='col-lg-6 d-flex flex-column'>
      <input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} className={styles.searchInput} placeholder='Github Kullanici Adi' id='searchInput' type="text" />
      </div>
      <button onClick={()=>fetchUser()} className={`col-lg-1 ${styles.searchButton}`}>Ara</button>
    </div>
  )
}

export default Search;
