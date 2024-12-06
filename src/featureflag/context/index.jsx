import { createContext } from "react";

export const FeatureFlagContext = createContext(null);

import React from 'react'

export default function FeatureFlagGlobalState({ children }) {
    return (
        <FeatureFlagContext.Provider value={{}}>{children}</FeatureFlagContext.Provider>
    )
}
