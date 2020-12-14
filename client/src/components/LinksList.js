import React from 'react'
import { useHttp } from '../hooks/http.hook'
import {Link} from 'react-router-dom'

export const LinksList = ({ links, onSort, onDelete, sortDirection }) => {

    const { loading } = useHttp()
    

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
                        onClick={(e)=>{onSort('index', e)}}
                        >
                            №
                            <i className="material-icons prefix table_sort_arrow">arrow_drop_down</i>
                    </button>
                </th>
                <th>
                    <button 
                        className="btn grey lighten-4 black-text waves-effect waves-dark"
                        onClick={(e)=>{onSort('to', e)}}
                        >
                            Коротке посилання 
                            <i className="material-icons prefix table_sort_arrow"></i>   
                    </button>   
                </th>
                <th>
                    <button 
                        className="btn grey lighten-4 black-text waves-effect waves-dark"
                        onClick={(e)=>{onSort('from', e)}}
                        >
                            Оригінальне посилання  
                        <i className="material-icons prefix table_sort_arrow"></i>   
                    </button>         
                </th>
                <th>
                    <button 
                        className="btn grey lighten-4 black-text waves-effect waves-dark">
                            Управління
                    </button> 
                </th>
            </tr>
            </thead>

            <tbody>
            { links.slice(0).reverse().map((link, index) => {
                //Sorting reverse for № column
                switch (sortDirection){
                    case 'ascending':
                        index = index+1
                    break
                    case 'descending':
                        index = links.length - index
                    break
                 }
                return (
                <tr key={link._id}>
                    <td>{index}</td>
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
                        <button className="btn orange lighten-1 waves-effect waves-dark linklist_delete" onClick={()=>{onDelete(link._id)}} name={link._id}>
                            <i className="large material-icons linklist_details_open">delete</i>
                        </button>
                    </td>
                </tr>
                )
            }) }
            </tbody>
        </table>
    )
}