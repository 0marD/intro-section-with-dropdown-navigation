import React, { useState } from 'react'
import { DeskNav } from './DeskNav'
import { NavMobile } from './NavMobile'


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
        <img src="/src/assets/images/logo.svg" alt="snap logo" className="header-logo" />
        <figure className="header-hamburger" onClick={changeIcon}>
          <img src="./src/assets/icons/icon-menu.svg" alt="Menu bars icon" className={`bars-icon ${!icon ? 'icon--show' : ""}`} title="open menu" />
          <img src="./src/assets/icons/icon-close-menu.svg" alt="Menu close icon" className={`xmark-icon ${icon ? 'icon--show' : ""}`} title="close menu" />
        </figure>
        <DeskNav />
      </header>
      <NavMobile className={`navMobileBg ${icon ? "navMobileBg--show" : ""}`} closeNav={closeNav} />
    </>
  )
}

export { Header }