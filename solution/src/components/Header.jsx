import React, { useState } from 'react'
import { DeskNav } from './DeskNav'
import { NavMobile } from './NavMobile'
import snapLogo from "../assets/images/logo.svg"
import menuIcon from "../assets/icons/icon-menu.svg"
import closeMenuIcon from "../assets/icons/icon-close-menu.svg"

function Header(props) {

  const [icon, setIcon] = useState(false)

  function changeIcon() {
    setIcon(!icon)
  }

  function closeNav() {
    setIcon(!icon)
  }

  return (
    <>
      <header className="header">
        <img src={snapLogo} alt="snap logo" className="header-logo" />
        <figure className="header-hamburger" onClick={changeIcon}>
          <img src={menuIcon} alt="Menu bars icon" className={`bars-icon ${!icon ? 'icon--show' : ""}`} title="open menu" />
          <img src={closeMenuIcon} alt="Menu close icon" className={`xmark-icon ${icon ? 'icon--show' : ""}`} title="close menu" />
        </figure>
        <DeskNav />
      </header>
      <NavMobile className={`navMobileBg ${icon ? "navMobileBg--show" : ""}`} closeNav={closeNav} />
    </>
  )
}

export { Header }