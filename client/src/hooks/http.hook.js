import { useState, useCallback, useContext } from "react"
import { useMessage } from "./message.hook"
import {useHistory} from 'react-router-dom'
import { AuthContext } from "context/AuthContext"


export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const message = useMessage()
    const history = useHistory()
    const auth = useContext(AuthContext)

    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if(body){
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {

                if(response.status === 401){
                    message('Час сессії минув, будь ласка авторизуйтесь')
                    auth.logout()
                    history.push('/')
                }

                throw new Error(data.message || 'Щось пішло не так, спробуйте ще раз')
            }

            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [message, auth, history])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}