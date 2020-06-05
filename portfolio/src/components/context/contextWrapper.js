import React, { useReducer } from 'react'
import Context from './context';


export default function ContextWrapper({ children }) {

    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

    const initSetting = {
        theme: {
            dark: { bg: "#ddd" },
            light: { bg: "#fff" }
        }
    }

    const settingReducer = (prevState, updatedProperty) => ({
        ...prevState,
        ...updatedProperty,
    })
    function initialSetting() {
        setSettings(initSetting);
    }

    const [settings, setSettings] = useReducer(settingReducer, initSetting)
    return (
        <Context.Provider value={{ settings, initialSetting, scrollToRef }}>
            {children}
        </Context.Provider>
    )
}