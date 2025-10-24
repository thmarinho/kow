import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/button";
import PageLayout from "./_layout";
import axiosInstance from "../utils/axiosInstance";
import { useUser } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { setLoggedIn, setUser } = useUser();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    const res = await axiosInstance.post("/api/auth/local", e);

    if (res && res.status === 200) {
      toast.success("Welcome back!");
      res.data.jwt;
      document.cookie = `Authorization=${res.data.jwt}`;
      setUser(res.data.user);
      setLoggedIn(true);
      navigate("/");
    }
  };

  return (
    <PageLayout className="flex items-center justify-center md:justify-evenly">
      <img src="/cow.png" alt="" className="max-h-96 hidden md:block" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-xl w-full max-w-sm p-8 flex flex-col gap-4"
      >
        <h1 className="text-4xl font-black">Bon retour parmis nous !</h1>
        <Input
          label="Email"
          id="identifier"
          type="email"
          autoComplete="email"
          placeholder="john.doe@outlook.com"
          {...register("identifier")}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="password"
          autoComplete="current-password"
          {...register("password")}
        />
        <Button type="submit">Envoyer</Button>
      </form>
    </PageLayout>
  );
};

export default LoginPage;
