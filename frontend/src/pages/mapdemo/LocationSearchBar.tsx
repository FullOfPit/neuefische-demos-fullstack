import React, {useEffect, useState} from "react";
import {OpenStreetMapLocation} from "./types/OpenStreetMapLocation";
import axios from "axios";

export default function LocationSearchBar() {

    const [searchString, setSearchString] = useState<string>("");
    const [searchResults, setSearchResults] = useState<OpenStreetMapLocation[]>([])

    const baseUrl: string = "https://nominatim.openstreetmap.org/";

    const useSearchRequest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            (async () => {
                try {
                    const nominatimResponse = await axios.get(`${baseUrl}search?q=${searchString}&format=json&addressdetails=1`);
                    console.log(nominatimResponse.data);
                    setSearchResults(nominatimResponse.data);
                } catch (error) {
                    console.log("Something went wrong: " + error)
                }
            })()
    }

    return(
        <>
            <form onSubmit={useSearchRequest}>
                <input type={"text"} value={searchString} onChange={(event) => setSearchString(event.target.value)}/>
                <button type={"submit"}>GO!</button>
            </form>
            {searchResults.length > 0 &&
                searchResults.map(location => <p key={location.osm_id}>{location.display_name}</p>)
            }
        </>
    )
}