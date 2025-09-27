import React, { useState, createContext } from "react";
import {defaultSelectedItem} from "../components/utils/helpers"

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState(defaultSelectedItem)

    return (
        <AppContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </AppContext.Provider>
    )
}