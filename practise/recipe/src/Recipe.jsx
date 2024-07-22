import React from 'react';

const Recipe = ({ recipe }) => {
    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;
