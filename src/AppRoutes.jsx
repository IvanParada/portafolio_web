import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";

export const AppRoute = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="Inicio" element={<HomePage/>} />
          <Route path="Proyectos" element='' />
          <Route path="Acerca de mí" element='' />

          <Route path="/" element={<Navigate to='Inicio' />} />
          <Route path="/*" element={<Navigate to='Inicio' />} />
        </Routes>
      </div>
    </>
  );
};
