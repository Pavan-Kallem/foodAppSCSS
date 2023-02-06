import React, {useState, useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import './sass/nav.scss';

export const Nav = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [boolean, setBoolean] = useState(true);

    return (
        <>
            <div id="main-navbar">
                <Link className="home-btn" to='/' >Home</Link>
                <h1>Food App</h1>
                <div className="filters-option"></div>
            </div>
        
        </>
    )
}