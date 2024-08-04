import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (categories) => {

    const [images, setimages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImaganes = async () => {
        const newImagaes = await getGifs(categories);
        setimages(newImagaes)
        setisLoading(false)
    }
    useEffect(() => {
        getImaganes();
    }, [])



return {
    images,
    isLoading
}

}
