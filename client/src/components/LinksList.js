import React from 'react'
import {Link} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'

export const LinksList = ({ links }) => {

    const { loading } = useHttp()

    const sortHandler = event => {
        event.preventDefault()
    }

    if (!links.length) {
        return <h5 className="center">У вас поки нема посилань</h5>
    }
    return (
            <table className="striped">
            <thead>
            <tr className="linklist_table_top">
                <th>
                    <button 
                        className="btn grey lighten-4 black-text waves-effect waves-dark"
                        onClick={sortHandler}
                        disabled={loading}
                        >
                            №
                            <i className="material-icons prefix table_sort_arrow">arrow_drop_down</i>
                    </button>
                </th>
                <th>
                    <button 
                        className="btn grey lighten-4 black-text waves-effect waves-dark"
                        onClick={sortHandler}
                        disabled={loading}
                        >
                            Коротке посилання
                            <i className="material-icons prefix table_sort_arrow">arrow_drop_down</i>
                    </button>
                </th>
                <th>
                    <button 
                        className="btn grey lighten-4 black-text waves-effect waves-dark"
                        onClick={sortHandler}
                        disabled={loading}
                        >
                            Оригінальне посилання
                            <i className="material-icons prefix table_sort_arrow">arrow_drop_down</i>
                    </button>
                </th>
                <th>
                    <button 
                        className="btn grey lighten-4 black-text waves-effect waves-dark"
                        onClick={sortHandler}
                        disabled={loading}
                        >
                            Деталі
                            <i className="material-icons prefix table_sort_arrow">arrow_drop_down</i>
                    </button>
                </th>
            </tr>
            </thead>

            <tbody>
            { links.slice(0).reverse().map((link, index) => {
                return (
                <tr key={link._id}>
                    <td>{index+1}</td>
                    <td><a href={link.to} target="_blank" rel="noopener noreferrer" className="old_link_a">{link.to}</a></td>
                    <td className="linkslist_oldlink">
                        <div className="linkslist_oldlink_inner">
                            <a href={link.from} target="_blank" rel="noopener noreferrer" className="old_link_a">{link.from}</a>
                        </div>
                    </td>
                    <td>
                        <button className="btn light-blue darken-1 black-text waves-effect waves-light linklist_details">
                            <Link to={`/detail/${link._id}`} className="linklist_details_open">Відкрити</Link>
                        </button>
                    </td>
                </tr>
                )
            }) }
            </tbody>
        </table>
    )
}