import React from 'react'
import './TaskCard.scss'

export default function TaskCard({ ticket, title, description }) {
    
    return (
        <div className="task">
            <div className="task__section">
                <span className="task__ticket">#WF-102{ticket}</span>
                <button className="task__options">...</button>
            </div>

            <div className="task__section">
                <h4 className="task__title">UI For Components{title}</h4>
                <p className="task__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium, dolorum sed velit cum rem aperiam deserunt ad id laborum neque nostrum iste sequi accusantium sapiente quibusdam eum eos incidunt.{description}</p>
            </div>

            <div className="task__section">
                <button className="task__toggle">toggle</button>
                <button className="task__button">Mark as Complete</button>
            </div>
        </div>

    )
}