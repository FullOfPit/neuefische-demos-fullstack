import {createContext, useState} from "react";

const objectOfEverything = {
    id: "4af",
    name: "Christian",
    number: 3,
    listOfRandomNumbers: [1, 7, 2],
    helloFunction: (word: string) => {console.log(word)}
}

export const LevelContext = createContext(objectOfEverything);