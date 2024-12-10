export default function RecipeDetail({ params }) {
    const { id } = params;
    
        // Simulasi data untuk detail resep
        const recipe = { id, title: `Recipe ${id}`, description: `Detailed description of recipe ${id}.` };
    
        return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{recipe.title}</h1>
            <p className="mt-2">{recipe.description}</p>
        </div>
        );
    }
