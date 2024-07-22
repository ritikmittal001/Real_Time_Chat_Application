import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
    const [filter, setFilter] = React.useState(''); // State for filtering

    const filteredRecipes = recipes.filter(recipe => {
        if (filter === '') return true; // No filter applied
        // Assuming each recipe has a 'category' property, adjust as per your data structure
        return recipe.category === filter;
    });

    return (
        <div>
            <select onChange={e => setFilter(e.target.value)}>
                <option value="">All</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
            </select>
            {filteredRecipes.map(recipe => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
