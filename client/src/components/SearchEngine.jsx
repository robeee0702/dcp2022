import React from 'react'
import { TextField} from "@mui/material";


const SearchEngine = ({setSearch,search}) => {

    return (

    <div className="search" style={{paddingLeft:"15px",marginBottom:"34px",width:"260px"}}>
        <TextField
        id="search"
        label="Keresés"
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
    
    </div>
  
  )
}

export default SearchEngine;