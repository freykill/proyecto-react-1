import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "../components/GifItem";

export const GifGrid = ({ categories }) => {


    const {images,isLoading} = useFetchGifs(categories)



    return (
        <>
            <h3>{categories}</h3>

            {
                isLoading && ( <h2> Cargando... </h2>)
            }

            <div className="card-grid">
                {
                
                images.map( (image) => (
                    // <li key={id}> {title} asd</li>
                    <GifItem 
                    key={image.id} 
                    {...image}
                    />
                ))
                
                }
            </div>


        </>
    );
};
