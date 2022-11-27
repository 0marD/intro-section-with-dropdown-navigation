import React, { useState } from 'react'
import { FeatureItems } from './FeatureItems'
import Button from './Button';
import arrow from "../assets/icons/icon-arrow-down.svg"

function DeskNav(props) {

  const [features, setFeatures] = useState(false)

  function deployFeatures() {
    setFeatures(!features)
  }



  const [company, setCompany] = useState(false)

  function deployCompany() {
    setCompany(!company)
  }


  return (
    <nav className="navDesk">
      <section className="navDesk-items">
        <div className="navDesk-items__item" onClick={deployFeatures}>
          <span>Feautures</span>
          <img className={`${features ? "arrow--active" : ""}`} src={arrow} alt="Arrow icon" />
        </div>
        <FeatureItems className={`features__items ${features ? "features__items--show" : ""}`} closeNav={props.closeNav} screen="Desk" />
        <div className="navDesk-items__item" onClick={deployCompany}>
          <span>Company</span>
          <img className={`${company ? "arrow--active" : ""}`} src={arrow} alt="Arrow icon" />
        </div>
        <div className={`companyItems ${company ? "companyItems--show" : ""}`}>
          <p>History</p>
          <p>Our team</p>
          <p>Blog</p>
        </div>
        <div className="navDesk-items__item">
          <span>Careers</span>
        </div>
        <div className="navDesk-items__item">
          <span>About</span>
        </div>
      </section>
      <div className="navDesk-btns">
        <Button action="Login" className="navDesk-btns__btn--noFill" />
        <Button action="Register" className="navDesk-btns__btn--fill" />
      </div>
    </nav>
  )
}

export { DeskNav }