import React, {useState, useEffect} from "react";
import axios from "axios";
import './sass/homePage.scss';
import { MButton } from "./uitls/MButton";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => {
            setData(res.data.categories);
            localStorage.setItem("data",JSON.stringify(res.data.categories));
        })
    },[]);

    const handleOrders = (e) => {
        navigate(`/item/${e.idCategory}`);
    }


    return (
        <>
            <div className="home-page-main-div">
                {
                    data.map((elem) => {
                        return (
                            <div key={elem.idCategory} >
                                <h2>{elem.strCategory}</h2>
                                <img src={elem.strCategoryThumb} alt="" />
                                <MButton buttonClick={() => { handleOrders(elem) }} buttonName='Order Now' />
                            </div>
                        )
                    })
                } 
            </div> 
        </>
    )
}