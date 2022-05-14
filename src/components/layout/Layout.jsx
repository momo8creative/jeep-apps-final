import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { SFooter, SLayout, SMain } from "./LayoutStyles";

export default function Layout() {
  return (
    <SLayout>
      <Sidebar />
      <SMain>
        <Outlet />
        <SFooter>
          <div>&copy; Copyright 2022 Jeep Apps</div>
        </SFooter>
      </SMain>
    </SLayout>
  );
}
