import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('perrito')

  const onInputChange = ({target}) =>{
    setInputValue((inputValue)=>{
        return target.value
    })
  }

  const onSubmit = () =>{
    event.preventDefault();
    if(inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
    
    return (
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar Gift"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
    )
}
