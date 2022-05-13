import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { SLayout, SMain } from "./LayoutStyles";

export default function Layout() {
  return (
    <SLayout>
      <Sidebar />
      <SMain>
        <Outlet />
      </SMain>
    </SLayout>
  );
}
