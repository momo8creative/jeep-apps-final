import { useState } from "react";
import {
  HiHome,
  HiMenu,
  HiX,
  HiOutlineDocumentAdd,
  HiViewList,
} from "react-icons/hi";
import { useThemeContext } from "../../contexts/ThemeContext";
import logo from "../../assets/vehicle.svg";
import {
  SBrand,
  SButtonNav,
  SButtonTheme,
  SDevider,
  SNav,
  SNavBackdrop,
  SNavLink,
  SSidebar,
  STheme,
  SThemeLabel,
} from "./SidebarStyles";
import { useLocation } from "react-router-dom";

export default function Sidebar({ menu }) {
  const [isShowNav, setIsShowNav] = useState(false);
  const { isLight, toggleTheme } = useThemeContext();

  const location = useLocation();

  return (
    <SSidebar>
      <SButtonNav onClick={() => setIsShowNav(!isShowNav)} show={isShowNav}>
        {isShowNav ? <HiX /> : <HiMenu />}
      </SButtonNav>
      <SBrand>
        <img src={logo} alt="logo" />
        <h1>Jeep Apps</h1>
      </SBrand>
      <SDevider />
      <SNavBackdrop show={isShowNav} />
      <SNav show={isShowNav}>
        {menu.satu.map(({ label, to, icon }, index) => (
          <SNavLink
            to={to}
            key={index}
            active={location.pathname == to ? "true" : null}
            onClick={() => setIsShowNav(false)}
          >
            {icon}
            <div>{label}</div>
          </SNavLink>
        ))}
      </SNav>
      <SDevider />
      <STheme>
        <SThemeLabel>Tema {isLight ? "terang" : "gelap"}</SThemeLabel>
        <SButtonTheme onClick={toggleTheme} light={isLight} />
      </STheme>
    </SSidebar>
  );
}

Sidebar.defaultProps = {
  menu: {
    satu: [
      { label: "Beranda", to: "/", icon: <HiHome /> },
      { label: "Pemakaian", to: "/pemakaian", icon: <HiViewList /> },
      {
        label: "Tambah Pemakaian",
        to: "/pemakaian/add",
        icon: <HiOutlineDocumentAdd />,
      },
    ],
  },
};
