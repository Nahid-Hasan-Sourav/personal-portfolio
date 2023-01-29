import React, { createContext, useState } from 'react';

export const featureProvider=createContext()


 const FeaturesContext = ({children}) => {
    const [storedata,setstoredata]=useState([])
    const info={
        storedata,setstoredata
    }

    return (
       <featureProvider.Provider value={info}>
        {
            children
        }
       </featureProvider.Provider>
    );
};

export default FeaturesContext;