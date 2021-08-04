import React, { Fragment, useState } from 'react'
import { AddCategory } from './Componentes/AgregarCategoria';
import { GifGrid } from './Componentes/GifGrid';

export const GifExpertApp = () => {

    

    /*
    useState es una funcion que recibe un valor y retorna un arreglo cuya primera 
    posicion es el mismo valor y el segundo argumento es una funcion que usualmente 
    se le pone set, se usa para establecer el valor al primer argumento del arreglo */

    /* se usa para poder cambiar el valor de una constante */

    const [categories, setCategories] = useState(['Goku']);
    
   /* const agregar = () => {
        agregarCategorias([...categorias,"Terror"]);
    } */
    
    return (
        
        /* en la linea 28 se envia la referencia a la propiedad agregarCategorias 
        de la linea 15 para hacer la conexion con el componente AgregarCategorias */
        <Fragment>

<h1><span>G</span><span>I</span><span>F</span><span> </span><span>A</span><span>P</span><span>P</span></h1>
            <h2>Busca cualquier GIF en nuestra web.</h2>
            
            
            <AddCategory setCategories = {setCategories}/>
            <hr />

          
            <ol>
                { 
                
                categories.map(category =>(
                    <GifGrid 
                    key = {category}
                    category={category}/>
                ))
                 
                }

            </ol>
            <hr />

            <h4>Juan Villalta    |    <a href="https://github.com/jmvillaltas">github.com/jmvillaltas</a>    |    jmvillalta@outlook.es</h4>
        </Fragment>
    )
}
