import {Routes, Route} from "react-router-dom";
import MapDemo from "./mapdemo/MapDemo";
import ContextMain from "./context/ContextMain";

export default function Root() {

    return (
        <Routes>
            <Route path={"/maps"} element={
                <MapDemo/>
            }/>
            <Route path={"/context"} element={
                <ContextMain/>
            }/>
        </Routes>
    )
}