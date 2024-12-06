import { createContext, useEffect, useState } from "react";

export const FeatureFlagContext = createContext(null);

import React from 'react'
import featureFlagsDataServiceCall from "../data";

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enableFlags, setEnableFlags] = useState({});


    async function fetchFeatureFlags() {
        try {
            setLoading(true)

            const response = await featureFlagsDataServiceCall();
            // console.log(response);
            setEnableFlags(response);
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
            throw new Error(error);

        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, [enableFlags])



    return (
        <FeatureFlagContext.Provider value={{ enableFlags, loading }}>{children}</FeatureFlagContext.Provider>
    )
}
