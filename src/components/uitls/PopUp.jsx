import React from "react";
import { useLocation } from "react-router-dom";
import '../sass/popup.scss';

export const PopUp = () => {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');

    return (
        <div className="order-successful-popup">
            <div className="order-successful-popup-img">
                <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" alt="payment done" />
            </div>
            <h4>Your order {name} is now confirmed</h4>
        </div>
    )
}