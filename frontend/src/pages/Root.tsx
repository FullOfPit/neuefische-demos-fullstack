import {Routes, Route} from "react-router-dom";
import MapDemo from "./mapdemo/MapDemo";

export default function Root() {

    return (
        <Routes>
            <Route path={"/maps"} element={
                <MapDemo/>
            }/>
        </Routes>
    )
}