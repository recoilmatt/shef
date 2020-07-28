import React from 'react'


function Recipe({title,image,url}) {
    return (
        <div className="recipe-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
            <img className="recipe-image" src={image} alt="" /></a>
            <div className="recipe-desc">
            <p>{title}</p>                         
            </div>
        </div>
    )
}

export default Recipe
