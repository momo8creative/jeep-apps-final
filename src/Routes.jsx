import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import AddPemakaian from "./pages/pemakaian/AddPemakaian";
import Pemakaian from "./pages/pemakaian/Pemakaian";

export default function RoutesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="/pemakaian" element={<Layout />}>
        <Route path="" element={<Pemakaian />} />

        <Route path="add" element={<AddPemakaian />} />
      </Route>
    </Routes>
  );
}
