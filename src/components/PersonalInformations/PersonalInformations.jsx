import React, { useState } from 'react'
import styles from "./style.module.css"
import ProfilInfoBadge from '../ProfilInfoBadge/ProfilInfoBadge'

const PersonalInformations = ({ user }) => {
  return (
    <div className={styles.personalInformations}>
      <div className={styles.leftSide}>
        <h2>Hi! IAm {user?.name}</h2>
        <p>{user?.bio}</p>
      </div>
      <div className={styles.rightSide}>
        <img src={user?.avatar_url} alt="" />
        <div className={styles.profilInfoBadge}>
        <ProfilInfoBadge number={user?.followers} text={"Takipci"} />
        <ProfilInfoBadge number={user?.following} text={"Takip edilen"} />
        <ProfilInfoBadge number={user?.public_repos} text={"Repolar"} />
      </div>
      </div>
    </div>
  )
}

export default PersonalInformations