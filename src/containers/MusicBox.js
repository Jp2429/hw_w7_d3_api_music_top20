import React, { useState, useEffect } from 'react';
import MusicList from '../components/MusicList.js';



const MusicContainer = () => {
    const [charts, setMusicList] = useState([]);
    // const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(()=>{
        getCharts()
    },[])

    const getCharts=function(){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(response=>response.json())
            .then(musicdata=>setMusicList(musicdata.feed.entry))
    }

    const onChartsClicked=function(music){
        setMusicList(music)
    }

    
    return(
        <div className="music-box">
            <h1>Top 20 Songs in the Charts</h1><hr></hr>
            {charts.length && <MusicList charts={charts} />}
            {/* onChartsClicked={onChartsClicked} */}
            {/* <CountryList countries={countries} onCountryClicked={onCountryClicked}/> */}
        </div>
    )
    
}

export default MusicContainer;