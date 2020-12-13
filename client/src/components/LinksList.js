import React, { useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import {Link} from 'react-router-dom'

export const LinksList = ({ links }) => {

    const { loading, request } = useHttp()
    const message = useMessage()
    const auth = useContext(AuthContext)
    //const history = useHistory()

    const sortHandler = event => {
        event.preventDefault()
    }

    if (!links.length) {
        return <h5 className="center">У вас поки нема посилань</h5>
    }

    const deleteHandler = async event => {
            try {
                const linkId = event.currentTarget.getAttribute('name')
                const deleteConfirmed = window.confirm("Видалити посилання?");
                if (deleteConfirmed) {
                    await request('/api/link/delete/' + linkId, 'DELETE', {}, {
                        Authorization: `Bearer ${auth.token}`
                    })
                    
                    message('Видалено скорочене посилання')
                    window.location.reload()
                    return
                }
                message('Скасовано')
            } catch (e) {}      
    }

    return (
            <table className="striped">
            <thead>
            <tr className="linklist_table_top">
                <th>
                    №
                </th>
                <th>
                    Коротке посилання       
                </th>
                <th>
                    Оригінальне посилання        
                </th>
                <th>
                    Управління
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