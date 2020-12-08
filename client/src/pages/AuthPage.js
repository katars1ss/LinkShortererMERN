import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm]= useState({
        email: '', password:''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }
    
    const loginHandler = async (event) => {
        if(event.key === 'Enter' || event.target.id === "loginUser")
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            message(data.message)
            // @ts-ignore
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    /*const blurHandler = useCallback(() => {
        
    }, [])*/

    return (
        <div className="row">
            <div className="col s12 m10 offset-m1 l6 offset-l3 center-align">
                <h1>SL1nk</h1>
                <div className="card light-blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title center-align">Авторизація</span>  
                        <div>
                            <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                <input 
                                    id="email" 
                                    type="text" 
                                    name="email"
                                    className="input_white"
                                    value={form.email}
                                    onChange={changeHandler}
                                    onKeyPress={loginHandler}
                                    //onBlur={blurHandler}
                                />
                                <label htmlFor="email">Імейл</label>
                            </div>
                            <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                <input 
                                    id="password" 
                                    type="password"
                                    name="password"
                                    className="input_white" 
                                    value={form.password}
                                    onChange={changeHandler}
                                    onKeyPress={loginHandler}
                                    //onBlur={blurHandler}
                                />
                                <label htmlFor="password">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action right-align">
                        <button 
                            id="loginUser"
                            className="btn yellow darken-2 waves-effect waves-light sign_in_btn"
                            onClick={loginHandler}
                            disabled={loading}
                        >
                            Вхід
                        </button>
                        <button 
                            className="btn grey lighten-4 black-text waves-effect waves-dark"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Реєстрація
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}