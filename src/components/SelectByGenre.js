import React from "react";

const SelectByGenre=({handleSelectChange})=>{
    return(
        <select id="genre-select" onChange={handleSelectChange}>
            <option value="">All</option>
            <option value="/genre=21">Rock</option>
            <option value="/genre=17">Dance</option>
            <option value="/genre=6">Country</option>
        </select>
    )
}
export default SelectByGenre;