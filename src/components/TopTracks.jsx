import { useEffect, useState } from "react";
import { getTracks } from "../api";

function TopTracks() {

    const [tracks,setTracks] = useState();
    
    useEffect(() => {
        handleFetch();
    },[])
 
    const handleFetch = async() =>{
        const data = await getTracks();
        setTracks(data);
        console.log(data);
    }

    return ( 
        <div className="grid grid-cols-1 text-white text-center place-items-center">
            {tracks ? <div className="grid grid-cols-3">{tracks.items.map(item => 
            <div className="flex flex-row text-center items-center justify-center">
                <div>{item.name}</div>
                <div className="font-bold">{"--" + item.artists[0].name}</div>
            </div>
            )}</div> : null}
        </div>
     );
}

export default TopTracks;