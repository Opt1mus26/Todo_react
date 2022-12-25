import React from "react";

export const SearchPanel = () => {
    const searchText = 'Search'
    const searchStyle = {
      fontSize: '20px'
    }
    return <input 
    style={searchStyle}
    placeholder={searchText} />
  };