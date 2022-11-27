
import React from 'react'

function FeatureItems(props) {
  return (
    <div className={props.className}>
      <div className={`nav${props.screen}__item-line`} onClick={props.closeNav}>
        <img src="./src/assets/icons/icon-todo.svg" alt="Todo icon" />
        <span>Todo list</span>
      </div>
      <div className={`nav${props.screen}__item-line`} onClick={props.closeNav}>
        <img src="./src/assets/icons/icon-calendar.svg" alt="Calendar icon" />
        <span>Calendar</span>
      </div>
      <div className={`nav${props.screen}__item-line`} onClick={props.closeNav}>
        <img src="/src/assets/icons/icon-reminders.svg" alt="Bell icon" />
        <span>Reminders</span>
      </div>
      <div className={`nav${props.screen}__item-line`} onClick={props.closeNav}>
        <img src="/src/assets/icons/icon-planning.svg" alt="Watch icon" />
        <span>Planning</span>
      </div>
    </div>
  )
}

export { FeatureItems }