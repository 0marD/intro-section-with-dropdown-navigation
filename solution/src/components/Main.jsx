import React from 'react'
import Button from './Button'
import deskHero from "../assets/images/image-hero-desktop.png"
import mobileHero from "../assets/images/image-hero-mobile.png"
import databiz from "../assets/images/client-databiz.svg"
import audiophile from "../assets/images/client-audiophile.svg"
import meet from "../assets/images/client-meet.svg"
import maker from "../assets/images/client-maker.svg"

function Main() {
  return (
    <main className="main">
      <figure className="main-cover" >
        <img src={mobileHero} alt="Cover image" className="main-cover__mobile" />
        <img src={deskHero} alt="Cover image" className="main-cover__desk" />
      </figure>
      <div className="mainBody">
        <h2 className="mainBody__header">Make remote work</h2>
        <p className="mainBody__content">
          Get your team in sync, no matter your location.
          Streamline processes, create team rituals, and
          watch productivity soar.
        </p>
        <div className="mainBodyBtns">
          <Button action="Learn more" className="mainBodyBtns__btn" />
        </div>
        <div className="mainBodyPatners">
          <img src={databiz} alt="databiz logo" className="mainBodyPatners__pantner" />
          <img src={audiophile} alt="audiophile logo" className="mainBodyPatners__pantner mainBodyPatners__pantner--lg" />
          <img src={meet} alt="meet logo" className="mainBodyPatners__pantner" />
          <img src={maker} alt="maker" className="mainBodyPatners__pantner mainBodyPatners__pantner--mm" />
        </div>
      </div>
    </main>
  )
}

export { Main }