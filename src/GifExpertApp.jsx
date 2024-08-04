import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Puch Man"
  ]);
  

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;

    setCategories([NewCategory,...categories]);

  };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
            onNewCategory={onAddCategory}
            />


            <ol>
                {categories.map((categories) => (
                    <GifGrid key={categories} categories={categories} />
                ))}
            </ol>



        </>
    );
};
