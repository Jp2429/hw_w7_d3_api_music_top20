import React, { useState, useEffect } from 'react';
import MusicList from '../components/MusicList.js';



const MusicContainer = () => {
    const [charts, setMusicList] = useState([]);
    const [selectedGenre,setSelectedGenre]=useState("")

    useEffect(()=>{
        getCharts()
    },[selectedGenre])

    const getCharts=function(){
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20${selectedGenre}/json`)
            .then(response=>response.json())
            .then(musicdata=>setMusicList(musicdata.feed.entry))
    }

    const onChartsClicked=function(music){
        setMusicList(music)
    }

    const handleSelectChange=function(event){
        setSelectedGenre(event.target.value)
    }

    
    return(
        <div className="music-box">
            <h1>Top 20 Songs in the Charts</h1><hr></hr>
            <select id="genre-select" onChange={handleSelectChange}>
                <option value="">All</option>
                <option value="/genre=21">Rock</option>
                <option value="/genre=17">Dance</option>
                <option value="/genre=6">Country</option>
            </select>
            {charts.length && <MusicList charts={charts} />}        
        </div>
    )
    
}

export default MusicContainer;