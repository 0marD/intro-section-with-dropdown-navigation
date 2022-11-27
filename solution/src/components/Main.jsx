import React from 'react'
import Button from './Button'


function Main() {
  return (
    <main className="main">
      <figure className="main-cover" >
        <img src="./src/assets/images/image-hero-mobile.png" alt="Cover image" className="main-cover__mobile" />
        <img src="./src/assets/images/image-hero-desktop.png" alt="Cover image" className="main-cover__desk" />
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
          <img src="/src/assets/images/client-databiz.svg" alt="databiz logo" className="mainBodyPatners__pantner" />
          <img src="/src/assets/images/client-audiophile.svg" alt="audiophile logo" className="mainBodyPatners__pantner mainBodyPatners__pantner--lg" />
          <img src="/src/assets/images/client-meet.svg" alt="meet logo" className="mainBodyPatners__pantner" />
          <img src="/src/assets/images/client-maker.svg" alt="maker" className="mainBodyPatners__pantner mainBodyPatners__pantner--mm" />
        </div>
      </div>
    </main>
  )
}

export { Main }