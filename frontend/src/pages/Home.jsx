import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import PageLayout from "./_layout";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(-1);

  useEffect(() => {
    axiosInstance
      .get(`/api/recipes?pagination[page]=${page}&pagination[pageSize]=32&populate=*`)
      .then((res) => {
        // console.log(res.data)
        setRecipes(res.data.data);
        setTotal(res.data.meta.pagination.total);
      });
  }, []);

  return (
    <PageLayout>
      <h1>recettes </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <>
            <img
              alt=""
              src={`https://kow-api.thmarinho.dev/uploads${recipe.photo}`}
            />
            <div>{recipe.name}</div>
          </>
        ))}
      </div>
    </PageLayout>
  );
};

export default HomePage;
