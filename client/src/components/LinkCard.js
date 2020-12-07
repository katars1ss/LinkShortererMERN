import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Деталі посилання</h2>

            <p>Скорочене посилання: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <div className="old_link_container">
                <div className="old_link_title">
                    Оригінальне посилання: 
                </div>
                <div className="old_link_a_container">
                    <a href={link.from} target="_blank" rel="noopener noreferrer" className="old_link_a">{link.from}</a>
                </div>
            </div>
            <p>Кількість переходів за посиланням: <strong>{link.clicks}</strong></p>
            <p>Дата створення: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}