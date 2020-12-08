import { useState, useCallback, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import {useHistory} from 'react-router-dom'


export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const auth = useContext(AuthContext)
    const history = useHistory()

    const logoutHandler = () => {
        auth.logout()
        history.push('/')
    }

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
                logoutHandler()
                throw new Error(data.message || 'Щось пішло не так')
            }

            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}