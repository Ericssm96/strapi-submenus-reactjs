import {useState, createContext, useContext} from 'react';

const AppContext = createContext();

export const AppProvider = (props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <AppContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar}}>
            {props.children}
        </AppContext.Provider>
    )
}