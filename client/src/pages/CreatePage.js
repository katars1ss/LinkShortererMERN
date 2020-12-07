import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export const CreatePage = () => {
    const message = useMessage()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')
 
    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if(event.key === 'Enter' || event.target.id === "createLink"){
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                message('Створено скорочене посилання')
                history.push(`/detail/${data.link._id}`)
            } catch (e) {}
        }

    }

    return (
        <div className="row">
            <div className="col s12 m10 offset-m1 l6 offset-l3 createpage_container">
                <div className="card light-blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title center-align createpage_title">Скоротити посилання</span>  
                        <div className="input-field">
                            <i className="material-icons prefix">link</i>
                            <input 
                                id="link" 
                                type="text" 
                                className="input_white"
                                value={link}
                                onChange={e => setLink(e.target.value)}
                                onKeyPress={pressHandler}
                                //onBlur={blurHandler}
                            />
                            <label htmlFor="link">Вставте посилання у поле і натисніть Введення</label>
                        </div>
                        <div className="center-align">
                            <button 
                                id="createLink" 
                                className="btn grey lighten-4 black-text waves-effect waves-dark"
                                onClick={pressHandler}
                                >
                                Скоротити
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}