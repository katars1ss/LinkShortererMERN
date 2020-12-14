import React, {useCallback, useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import { LinksList } from '../components/LinksList'
import {useMessage} from '../hooks/message.hook'

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const [dbLinks, setDBLinks] = useState([])
    const [sortDirection, setSortDirection] = useState('ascending')
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const message = useMessage() 

    const fetchLinks = useCallback( async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
            setDBLinks(fetched)
        } catch (e) {}
    }, [token, request])

    const deleteHandler = async linkId => {
        try {
            const deleteConfirmed = window.confirm("Видалити посилання?")
            if (deleteConfirmed) {
                await request('/api/link/delete/' + linkId, 'DELETE', {}, {
                    Authorization: `Bearer ${token}`
                })
                
                message('Видалено скорочене посилання')
                setLinks(links.filter(link => link._id !== linkId))
                return
            }
            message('Скасовано')
        } catch (e) {}      
    }

    const sortHandler = async (field, e) => {
        try {
            let direction = sortDirection
            let sortedLinks = [...links]
            let sortedDBLinks = [...dbLinks]

            const descendingArrow = 'arrow_drop_up'
            const ascendingArrow = 'arrow_drop_down'

            // Bud' laska ne svarit' za ce
            document.querySelectorAll('tr.linklist_table_top i').forEach((el)=>{el.innerHTML = ''})
            // Changing sort direction
            if(direction !== 'ascending'){
                direction = 'ascending'
                e.target.querySelector('i').innerHTML = ascendingArrow
            }else{
                direction = 'descending'
                e.target.querySelector('i').innerHTML = descendingArrow
            }
            setSortDirection(direction)

            // If the field (parameter) user sorts by is №
            if(field === 'index'){
                switch (sortDirection){
                    case 'ascending':
                        sortedDBLinks.sort((link1, link2) => (link1._id < link2._id) ? 1 : -1)
                    break
                    case 'descending':
                        sortedDBLinks.sort((link1, link2) => (link1._id > link2._id) ? 1 : -1)
                    break
                }
                setLinks(sortedDBLinks)
                return
            }

            switch (sortDirection){
                case 'ascending':
                    sortedLinks.sort((link1, link2) => (link1[field] > link2[field]) ? 1 : -1)
                break
                case 'descending':
                    sortedLinks.sort((link1, link2) => (link1[field] < link2[field]) ? 1 : -1)
                break
            }
            setLinks(sortedLinks)
            
        } catch (e) {console.log(e)}      
    }

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            { !loading && <LinksList links={ links } sortDirection={ sortDirection } onSort={ sortHandler } onDelete = { deleteHandler }/> }
        </>
    )
}