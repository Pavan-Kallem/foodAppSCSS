import {Routes, Route} from "react-router-dom";
import { Home } from "../components/Home";
import { ItemPage } from "../components/ItemPage";
import { Nav } from "../components/Nav";
import { NotFound } from "../components/NotFound";
import { PopUp } from "../components/uitls/PopUp";

export const Routers = () => {

    return (
        <>
            <div>
                <Nav/>
            </div>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path="/item/:id" element={<ItemPage/>} />
                <Route exact path="/popup" element={<PopUp/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </>
    )
}