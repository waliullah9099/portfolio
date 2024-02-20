import {
  ArrowLeftEndOnRectangleIcon,
  ArrowLeftIcon,
  ArrowRightEndOnRectangleIcon,
  ArrowRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { PiFlagBanner } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { SiNginxproxymanager } from "react-icons/si";
import { LuPenTool } from "react-icons/lu";
import { FaToolbox } from "react-icons/fa";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";

const PrivateLayot = () => {
  const [menuCollaps, setMenuCollaps] = useState(false);
  return (
    <div className="flex gap-3 bg-white text-black">
      <Sidebar
        className="h-screen shadow-lg"
        collapsed={menuCollaps}
        collapsedWidth="80px"
      >
        <div className="border-b py-6 text-center">
          <Link
            to={"/"}
            className="text-blue-500 cursor-pointer font-semibold text-2xl"
          >
            {menuCollaps ? "W" : "WALIULLAH"}
          </Link>
        </div>
        <div
          onClick={() => setMenuCollaps(!menuCollaps)}
          className="flex justify-end m-2"
        >
          {menuCollaps ? (
            <ArrowRightIcon className="dashboardArrow" />
          ) : (
            <ArrowLeftIcon className="dashboardArrow" />
          )}
        </div>

        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : "#00000",
                  backgroundColor: active ? "#eecef9" : undefined,
                  transform: "background-color 0.3s, color 0.3s",
                };
            },
          }}
        >
          <MenuItem
            icon={<UserCircleIcon />}
            component={<Link to={"/dashboard/profile"}></Link>}
          >
            {" "}
            Profile{" "}
          </MenuItem>
          <SubMenu label="Home" icon={<HomeIcon className="h-8 w-8" />}>
            <MenuItem icon={<TbLayoutNavbarCollapse className="h-6 w-6" />}>
              {" "}
              Header
            </MenuItem>
            <MenuItem icon={<PiFlagBanner className="h-6 w-6" />}>
              {" "}
              Banner
            </MenuItem>
            <MenuItem icon={<GiSkills className="h-6 w-6" />}> Skill</MenuItem>
          </SubMenu>
          <SubMenu
            label="Manager"
            icon={<SiNginxproxymanager className="h-8 w-8" />}
          >
            <MenuItem icon={<LuPenTool className="h-6 w-6" />}>
              Manage Al{" "}
            </MenuItem>
            <MenuItem icon={<FaToolbox className="h-6 w-6" />}>
              Manage Toll{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu label="Admin" icon={<RiAdminLine className="h-8 w-8" />}>
            <MenuItem icon={<UserIcon className="h-6 w-6" />}>
              Manage User{" "}
            </MenuItem>
            <MenuItem icon={<FaPeopleGroup className="h-6 w-6" />}>
              Manage Employee{" "}
            </MenuItem>
          </SubMenu>
        </Menu>
        <div className="border-t p-4 text-center">
          <Link to="/" className="cursor-pointer text-blue-500">
            {menuCollaps ? (
              <ArrowRightEndOnRectangleIcon className="dashboarLogout" />
            ) : (
              <div>
                <ArrowLeftEndOnRectangleIcon className="dashboarLogout" />
                Logout
              </div>
            )}
          </Link>
        </div>
      </Sidebar>
      <Outlet />
    </div>
  );
};

export default PrivateLayot;
