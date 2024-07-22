import React from 'react';
import RecipeList from './RecipeList';

const App = () => {
    const recipes = [
        {
            id: 1,
            title: 'Scrambled Eggs',
            description: 'Classic scrambled eggs recipe',
            ingredients: ['Eggs', 'Salt', 'Pepper', 'Butter']
        },
        // Add more recipes as needed
    ];

    return (
        <div>
            <h1>Recipe App</h1>
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default App;
