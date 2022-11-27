import iconTodo from "../assets/icons/icon-todo.svg"
import iconCalendar from "../assets/icons/icon-calendar.svg"
import iconReminders from "../assets/icons/icon-reminders.svg"
import iconPlanning from "../assets/icons/icon-planning.svg"


import React from 'react'

function FeatureItems(props) {
  return (
    <div className={props.className}>
      <div className={`nav${props.screen}__item-line`} onClick={props.closeNav}>
        <img src={iconTodo} alt="Todo icon" />
        <span>Todo list</span>
      </div>
      <div className={`nav${props.screen}__item-line`} onClick={props.closeNav}>
        <img src={iconCalendar} alt="Calendar icon" />
        <span>Calendar</span>
      </div>
      <div className={`nav${props.screen}__item-line`} onClick={props.closeNav}>
        <img src={iconReminders} alt="Bell icon" />
        <span>Reminders</span>
      </div>
      <div className={`nav${props.screen}__item-line`} onClick={props.closeNav}>
        <img src={iconPlanning} alt="Watch icon" />
        <span>Planning</span>
      </div>
    </div>
  )
}

export { FeatureItems }