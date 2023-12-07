import React, {useContext, useEffect, useState} from "react";

const CommunicationContext = React.createContext()

export const CommunicationProvider = ({children}) => {
    const [communicationWays, setCommunicationWays] = useState("loading")

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/about_us/communication_ways`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                if (data.data.communication_ways) {
                    setCommunicationWays(data.data.communication_ways)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <CommunicationContext.Provider value={{communicationWays}}>
            {children}
        </CommunicationContext.Provider>
    )
}

export const useCommunication = () => {
    const {communicationWays} = useContext(CommunicationContext)
    return {communicationWays}
}