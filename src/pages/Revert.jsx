import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Revert = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/h/o")
    })
    return (
        <div>Revert</div>
    )
}

export default Revert