import React from "react";
import Logo from "../atoms/Logo";
import SideBarTab from "../molecules/SideBarTab";
import MenuIcon from "../../assets/menu.png";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Starships",
    backgroundColor: "#a9c1ff",
    route: '/dashboard/starships'
  },
  {
    title: "People",
    backgroundColor: "#ffa9ec",
    route: '/dashboard/people'
  },
  {
    title: "Species",
    backgroundColor: "#fdffa9",
    route: '/dashboard/species'

  },
];
const SideBar = () => {
  return (
    <div className="bg-[#031434] py-8 pr-4 pl-6 w-[100%] h-[100vh] flex flex-col gap-[70px]">
      <div className="flex flex-col gap-[30px]">
        <Logo className="w-[107px] h-[46px] mx-auto" />
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            `no-underline rounded-sm ${isActive ? 'bg-blue-600' : ''}`
          }
        >
          <SideBarTab
            icon={true}
            title="Overview"
            src={MenuIcon}
            iconStyles="h-[24px]"
          />
        </NavLink>

      </div>
      <div className="flex flex-col gap-[25px]">
        {items.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.route}
            className={({ isActive }) =>
              `no-underline rounded-sm ${isActive ? 'bg-blue-600' : ''}`
            }
          >
            <SideBarTab
              title={item.title}
              divBackgroundColor={item.backgroundColor}
            />
          </NavLink>
        ))}

      </div>
    </div>
  );
};

export default SideBar;