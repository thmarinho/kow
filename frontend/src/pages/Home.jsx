import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import PageLayout from "./_layout";
import { Link } from "react-router";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(-1);
  const {register, handleSubmit} = useForm()


  useEffect(() => {
    // &filters[name][&contains]=risotto
    // &filters[ingredients][product][$contains]=œuf
    // &filters[tags][$contains]=soupe

    axiosInstance
      .get(`/api/recipes?pagination[page]=${page}&pagination[pageSize]=32&populate=photo&filters[type][$eq]=Salé`)
      .then((res) => {
        setRecipes(res.data.data);
        setTotal(res.data.meta.pagination.total);
      });
  }, []);

  const onSubmit = (e) => {
    console.log(e)
      axiosInstance
      .get(`/api/recipes?pagination[page]=${page}&pagination[pageSize]=32&populate=photo&filters[type][$eq]=Salé&_q=${e.search}`)
      .then((res) => {
        setRecipes(res.data.data);
        setTotal(res.data.meta.pagination.total);
      });
  }

  return (
    <PageLayout>
      <h1 className="my-8 md:my-12 font-extrabold text-3xl ">Nos recommandations du moment !</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("search")} type="search" placeholder="Un mot clef, un ingrédient..." />
      </form>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.documentId}`} key={recipe.documentId}>
            <img
              alt=""
              className="w-full aspect-10/12 object-cover rounded-sm"
              src={`https://kow-api.thmarinho.dev${recipe.photo.formats.small.url}`}
            />
            <h2 className="mt-2 text-accent font-semibold text-sm text-ellipsis overflow-hidden text-nowrap">{recipe.name}</h2>
            <p className="mt-1 text-xs text-gray-500 text-ellipsis overflow-hidden text-nowrap">{recipe.description}</p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default HomePage;
