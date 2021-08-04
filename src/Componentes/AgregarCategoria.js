import React, { useState} from 'react';
import PropTypes from 'prop-types';




export const AddCategory = ({setCategories}) => {
    
    const [inputValue,setInputValue] = useState('')
    
    const handleInputChange = (evento) => {
        
        setInputValue(evento.target.value);
    }
    
    const handleSubmit = (evento) => {
        evento.preventDefault();

        if ( inputValue.trim().length> 2 ){

            setCategories(cats =>[inputValue]);
            setInputValue('');
        }

    }


    return (
        
            <form onSubmit = {handleSubmit}>

                <input 
                 type="text"
                 placeholder="Ingrese su busqueda:"
                 value={inputValue}
                 onChange={handleInputChange}
                
                />

            </form>
           
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}