import React, {useState} from "react";
import {OpenStreetMapLocation} from "./types/OpenStreetMapLocation";
import axios from "axios";

export default function LocationSearchBar() {

    const [searchString, setSearchString] = useState<string>("");
    const [searchResults, setSearchResults] = useState<OpenStreetMapLocation[]>([])

    const baseUrl: string = "https://nominatim.openstreetmap.org/search";

    const onSearchRequest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            (async () => {
                try {
                    const nominatimResponse = await axios.get(`${baseUrl}`, {
                        params: {
                            q: searchString,
                            "accept-language": "de-de",
                            format: "jsonv2",
                            addressdetails: 1
                        }
                    });
                    console.log(nominatimResponse.data);
                    setSearchResults(nominatimResponse.data);
                } catch (error) {
                    console.log("Something went wrong: " + error)
                }
            })()
    }

    return(
        <>
            <form onSubmit={onSearchRequest}>
                <input type={"text"} value={searchString} onChange={(event) => setSearchString(event.target.value)}/>
                <button type={"submit"}>GO!</button>
            </form>
            {searchResults.length > 0 &&
                searchResults.map(location => <p key={location.place_id}>{location.display_name}</p>)
            }
        </>
    )
}