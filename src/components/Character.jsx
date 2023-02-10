import './Character.css';
import {useState} from "react";

const SIZE = 200

export const Character = ({id, name, status, image}) => {

    const [displayStatus, setDisplayStatus] = useState(false);

    const handleToggle = () => {
        setDisplayStatus(() => !displayStatus)
    }

    return (
        <div className='character'>
            {displayStatus && <div className="status" onClick={handleToggle}>{status}</div>}

            <img src={image} alt={name}/>
            <div className="info">
                <p>{name}</p>
                <button>status</button>
            </div>
        </div>
    )
}