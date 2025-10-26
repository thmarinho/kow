import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../utils/axiosInstance";
import PageLayout from "./_layout";
import {
  ArrowLeftIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Accordion from "../components/Accordion";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id)
      return;

    axiosInstance
      .get(`/api/recipes/${id}?populate=*`)
      .then((res) => setRecipe(res.data.data));
  }, [id]);

  if (!recipe) return null;

  return (
    <PageLayout>
      <div className="flex justify-between">
        <button role="link" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="h-8 aspect-square" />
        </button>
        <div className="flex gap-4 items-center justify-center">
          <HeartIcon className="h-6 aspect-square" />
          <ShareIcon className="h-6 aspect-square" />
        </div>
      </div>
      <h1 className="mb-8 md:mb-12 mt-4 md:mt-6 font-black text-3xl">
        {recipe.name}
      </h1>
      <img
        alt=""
        className="w-full aspect-12/8 object-cover rounded-xl"
        src={`https://kow-api.thmarinho.dev${recipe.photo.formats.small.url}`}
      />
      <div>
        <h2 className="mt-6 md:mt-10 font-semibold text-xl">Description</h2>
        <p className="mt-1 text-sm text-gray-500">{recipe.description}</p>
      </div>

      <Accordion label={`Ingrédients (${recipe.servings} parts)`} initialOpen={true}>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient.id}>
              {ingredient.quantity} {ingredient.unit} {ingredient.product.toLocaleLowerCase()}
            </li>
          ))}
        </ul>
      </Accordion>

      <Accordion label="Étapes" initialOpen={true}>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((instruction, idx) => (
            <li key={instruction.id}>
              <span className="text-gray-800 text-md">{instruction.name || `Étape ${idx + 1}`}</span>
              <p className="text-gray-700 text-sm mb-2">{instruction.text}</p>
            </li>
          ))}
        </ol>
      </Accordion>

        <Accordion label="Valeurs nutritionnelles">
          <p className="mb-2">Pour une portion :</p>
          <div className="mb-2 flex justify-between">
            <span className="text-gray-900 text-base italic">Calories</span>
            <span className="text-gray-800 text-md">{recipe.nutrition.calories} Kcal.</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Graisses</span>
            <span>{recipe.nutrition.fat} g.</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Protéines</span>
            <span>{recipe.nutrition.protein} g.</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Fibres</span>
            <span>{recipe.nutrition.fiber} g.</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Glucides</span>
            <span>{recipe.nutrition.carbohydrate} g.</span>
          </div>
        </Accordion>
    </PageLayout>
  );
};

export default RecipePage;
