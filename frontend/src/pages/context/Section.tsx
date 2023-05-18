import React, {useContext} from "react";
import {LevelContext} from "./LevelContext";

export default function Section({children}: {children: React.ReactNode}) {

    const object = useContext(LevelContext);

    return (
        <section className="section">
            <LevelContext.Provider value={object}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}