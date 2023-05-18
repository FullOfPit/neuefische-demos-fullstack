import {useContext} from "react";
import {LevelContext} from "./LevelContext";

export default function NewSuperDiv() {

    const object = useContext(LevelContext)

    return (
        <div>
            {object.listOfRandomNumbers}
        </div>
    )
}