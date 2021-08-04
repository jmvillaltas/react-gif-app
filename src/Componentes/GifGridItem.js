import React from 'react'

export const GifGridItem = ({title,url}) => {
    
   
    
    return (
        <div className= "animate__animated animate__wobble">
            <img src={url} alt={title} />
            
        </div>
    )
}
