import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function useNavigateToDash() {
    const navigate = useNavigate();
    console.log("clicked");
    useEffect(() => {
        navigate("/dashboard")
    })
    return;
}

export default useNavigateToDash