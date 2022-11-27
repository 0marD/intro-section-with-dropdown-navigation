import React, { useState } from 'react'
import Button from './Button'
import { FeatureItems } from './FeatureItems'


function NavMobile(props) {

  const [features, setFeatures] = useState(false)

  function deployFeatures() {
    setFeatures(!features)
  }



  const [company, setCompany] = useState(false)

  function deployCompany() {
    setCompany(!company)
  }


  return (
    <div className={props.className}>
      <nav className="navMobile">
        <div className="navMobile__item" onClick={deployFeatures}>
          <span>Feautures</span>
          <img className={`${features ? "arrow--active" : ""}`} src="/src/assets/icons/icon-arrow-down.svg" alt="Arrow icon" />
        </div>
        <FeatureItems className={`features__items ${features ? "features__items--show" : ""}`} closeNav={props.closeNav} screen="Mobile" />
        <div className="navMobile__item" onClick={deployCompany}>
          <span>Company</span>
          <img className={`${company ? "arrow--active" : ""}`} src="/src/assets/icons/icon-arrow-down.svg" alt="Arrow icon" />
        </div>
        <div className={`companyItems ${company ? "companyItems--show" : ""}`}>
          <p>History</p>
          <p>Our team</p>
          <p>Blog</p>
        </div>
        <div className="navMobile__item">
          <span>Careers</span>
        </div>
        <div className="navMobile__item">
          <span>About</span>
        </div>
        <div className="navMobile-btns">
          <Button action="Login" className="navMobile-btns__btn--noFill" />
          <Button action="Register" className="navMobile-btns__btn--fill" />
        </div>
      </nav >
    </div >
  )
}

export { NavMobile }