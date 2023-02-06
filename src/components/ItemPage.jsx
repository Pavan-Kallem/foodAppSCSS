import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./sass/itemPage.scss";
import { MButton } from "./uitls/MButton";

export const ItemPage = () => {
    const [details, setDetails] = useState({});
    const id = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('data'));
        data.map((e) => {
            if(e.idCategory == id.id) {
                setDetails(e);
            }
        });
    },[])

    const confirmOrder = () => {
        navigate(`/popup?name=${details.strCategory}`)
    }

    return (
        <>
            <div className="details-page">
                <div className="details-page-img">
                    <img src={details.strCategoryThumb} alt="" />
                </div>
                <div className='details-page-title'>
                    <div>
                        <h2>{details.strCategory}</h2>
                        <p> <span className="details-page-title-description"> Description : </span> { details.strCategoryDescription }</p>
                    </div>
                    <div className="details-page-ordernow-btn">
                        <MButton buttonClick={() => {confirmOrder()}} buttonName='Confirm Order' />
                    </div>
                </div>
            </div>
        </>
    )
}