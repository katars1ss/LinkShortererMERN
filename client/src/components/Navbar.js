import { AuthContext } from 'context/AuthContext'
import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper light-blue darken-1 page_navbar">
                <div className="container">
                        <span className="brand-logo">SL1nk</span>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger" ><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/create">Створити</NavLink></li>
                            <li><NavLink to="/links">Мої посилання</NavLink></li>
                            <li><a href="/" onClick={logoutHandler}>Вийти</a></li>
                        </ul>
                    <ul className="sidenav" id="mobile-demo">
                        <li><NavLink to="/create">Створити</NavLink></li>
                        <li><NavLink to="/links">Мої посилання</NavLink></li>
                        <li><a href="/" onClick={logoutHandler}>Вийти</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}