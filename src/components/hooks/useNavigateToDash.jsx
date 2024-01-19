import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function useNavigateToDash() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/dashboard")
    })
    return;
}

export default useNavigateToDash