import { useEffect } from "react"
import { useState } from "react"

const useServicesHook = () => {

    const [services, setServices] = useState([])

    useEffect(() => {

        fetch(`ServiceData.json`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);

    return [services, setServices]
}

export default useServicesHook;