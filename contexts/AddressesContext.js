import React, {useContext, useEffect, useState} from "react";
import Cookies from "js-cookie";

const AddressesContext = React.createContext()

export const AddressesProvider = ({children}) => {
    const [addresses, setAddresses] = useState({
        addresses: [],
        status: "loaded"
    })

    const getAddresses = () => {
        setAddresses({addresses: [], status: "loading"})
        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/address`, {
            method: "GET",
            headers: {
                "Authorization": Cookies.get("Authorization")
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.data?.addresses) {
                    setAddresses({addresses: data.data.addresses, status: "loaded"})
                } else {
                    setAddresses({status: "error"})
                }
            })
            .catch(err => {
                console.log(err)
                setAddresses({status: "error"})
            })
    }

    useEffect(() => {
        getAddresses()
    }, []);

    return (
        <AddressesContext.Provider value={{addresses}}>
            {children}
        </AddressesContext.Provider>
    )
}

export const useAddresses = () => {
    const {addresses} = useContext(AddressesContext)
    return {addresses}
}