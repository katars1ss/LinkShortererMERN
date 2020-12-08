import { AuthContext } from 'context/AuthContext'
import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import M from 'materialize-css'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    const sidenavHandler = e => {
        e.preventDefault()
        const elems = document.querySelectorAll('.sidenav')
        // @ts-ignore
        M.Sidenav.init(elems, {draggable: true, preventScrolling: true})
      }

    return (
        <nav>
            <div className="nav-wrapper light-blue darken-1 page_navbar">
                <div className="container">
                        <span className="brand-logo">SL1nk</span>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger" onClick={sidenavHandler}><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/create">Створити</NavLink></li>
                            <li><NavLink to="/links">Мої посилання</NavLink></li>
                            <li><a href="/" onClick={logoutHandler}>Вийти</a></li>
                        </ul>
                    <ul className="sidenav" id="mobile-demo">
                        <li><NavLink to="/create" className="sidenav-close">Створити</NavLink></li>
                        <li><NavLink to="/links" className="sidenav-close">Мої посилання</NavLink></li>
                        <li><a href="/" className="sidenav-close" onClick={logoutHandler}>Вийти</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}