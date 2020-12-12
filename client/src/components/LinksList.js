import React, { useContext, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export const LinksList = ({ links }) => {

    const { loading, request } = useHttp()
    const [link] = useState('')
    const message = useMessage()
    const auth = useContext(AuthContext)
    const history = useHistory()

    const sortHandler = event => {
        event.preventDefault()
    }

    if (!links.length) {
        return <h5 className="center">У вас поки нема посилань</h5>
    }

    const deleteHandler = async event => {
        //if(event.key === 'Enter' || event.target.id === "createLink"){}
            try {
                console.log(event.target.getAttribute('name'))
                const data = await request('/api/link/delete', 'DELETE', {id: event.target.getAttribute('name')}, {
                    Authorization: `Bearer ${auth.token}`
                })

                message('Видалено скорочене посилання')
                //history.push(`/links`)
            } catch (e) {}      
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
                            {/* <i className="material-icons prefix table_sort_arrow">arrow_drop_down</i> */}
                    </button>
                </th>
                <th>
                    <button 
                        className="btn grey lighten-4 black-text waves-effect waves-dark"
                        onClick={sortHandler}
                        disabled={loading}
                        >
                            Коротке посилання
                            {/* <i className="material-icons prefix table_sort_arrow">arrow_drop_down</i> */}
                    </button>
                </th>
                <th>
                    <button 
                        className="btn grey lighten-4 black-text waves-effect waves-dark"
                        onClick={sortHandler}
                        disabled={loading}
                        >
                            Оригінальне посилання
                            {/* <i className="material-icons prefix table_sort_arrow">arrow_drop_down</i> */}
                    </button>
                </th>
                <th>
                    <button className="btn grey lighten-4 black-text waves-effect waves-dark">
                            Управління
                    </button>
                </th>
            </tr>
            </thead>

            <tbody>
            { links.slice(0).reverse().map((link, index) => {
                return (
                <tr key={link._id}>
                    <td>{index+1}</td>
                    <td>
                        <div className="linkslist_oldlink_inner">
                            <a href={link.to} target="_blank" rel="noopener noreferrer" className="old_link_a">{link.to}</a>
                        </div>
                    </td>
                    <td className="linkslist_oldlink">
                        <div className="linkslist_oldlink_inner">
                            <a href={link.from} target="_blank" rel="noopener noreferrer" className="old_link_a">{link.from}</a>
                        </div>
                    </td>
                    <td className="linkslist_buttons">
                        <button className="btn light-blue darken-1 waves-effect waves-light linklist_details">
                            <Link to={`/detail/${link._id}`} className="linklist_details_open">Деталі</Link>
                        </button>
                        <button className="btn orange lighten-1 waves-effect waves-dark linklist_delete" onClick={deleteHandler} name={link._id}>
                            {/* <Link to={`/delete/${link._id}`} className="linklist_details_open">Видалити</Link> */}<i className="large material-icons linklist_details_open">delete</i>
                        </button>
                    </td>
                </tr>
                )
            }) }
            </tbody>
        </table>
    )
}