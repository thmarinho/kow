import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router";
import AuthProvider, { useUser } from "./contexts/AuthContext";
import LoginPage from "./pages/Login";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/Home";

const ProtectedRoutes = ({}) => {
  const { loggedIn } = useUser();

  if (!loggedIn) return <Navigate to="/login" replace />;
  return <Outlet />;
};

function App() {
  return (
    <div className="h-full flex flex-col">
      <AuthProvider>
        <header>aze</header>
        <main className="flex-1 bg-gray-50">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/" index element={<HomePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </main>
      </AuthProvider>
      <footer>aze</footer>
      <Toaster />
    </div>
  );
}

export default App;
