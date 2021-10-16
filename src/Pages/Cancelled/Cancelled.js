import React from 'react'
import { useHistory } from 'react-router'
import '../Home/Home.css'


function Cancelled() {
    const history=useHistory()
    const handlePage=(e)=>{
        e.preventDefault()
        return(
        history.push('/'))
    }

    return (
        <div className="activeBody">
        <div className='top'>
            <span className="back" onClick={handlePage}>Home</span>
        </div>
        </div>
    )
}

export default Cancelled
