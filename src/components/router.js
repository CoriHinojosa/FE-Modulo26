import Main from "./Main";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>     
    )
}

export default Router;