import {
  BadgeDollarSign,
  CircleUserRound,
  CirclePercent,
  BadgeInfo,
  UsersRound,
  LayoutDashboard,
  Wallet,
  Box,
} from "lucide-react";
import React from "react";
import { RiDashboard3Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Link from 'next/link';
import SidebarItem from "./item";

const items = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Product",
    icon: Box,
    path: "/product",
  },
  {
    name: "Customers",
    icon: UsersRound,
    path: "/customer",
  },
  {
    name: "Income",
    icon: Wallet,
    path: "/income",
  },
  {
    name: "Promote",
    icon: CirclePercent,
    path: "/promote",
  },
  {
    name: "Help",
    icon: BadgeInfo,
    path: "/help",
  },
];

let profileImg="/mypic.jpeg";

function Sidebar() {
  return (
    <div className="  w-80 bg-white shadow-lg z-10 p-4 mb-5 rounded-2xl gap-8  flex flex-col">
      <div className="flex items-center gap-2">
        <RiDashboard3Line className="text-3xl mt-2" />
        <div className="flex items-start justify-center gap-1 mt-2">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <p className="text-sm pt-3 text-slate-500">v.01</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        {items.map((item) => (
          <Link href={item.path} key={item.path} legacyBehavior>
            <a className="flex items-center p-2 rounded-md group hover:bg-blue-700">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                  <item.icon className="text-xl text-slate-500 group-hover:text-white transition-colors duration-200" />
                  <SidebarItem key={item.path} item={item} className="group-hover:text-white transition-colors duration-200" />
                </div>
                <p className="text-sm text-slate-500 group-hover:text-white transition-colors duration-200">
                  <FaAngleRight />
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div>
        <div className="mt-[80%] w-[100%] bg-blue-500 rounded-xl p-6 gap-4 flex flex-col justify-center items-center">
          <p className="text-sm text-white ml-5 ">Upgrade to PRO to Get access all Features!</p>
          <button className="p-2 w-[85%] font-bold hover:bg-orange-400 hover:text-white text-sm rounded-2xl bg-white text-blue-700">Get Pro Now!</button>
        </div>

          <div className="flex w-[100%] mt-[30%] gap-x-3 items-center justify-center    ">
           
            <div><img src={profileImg} className="h-[60px] w-[60px] rounded-full mt-1" /></div>
            <div className="text-sm">
              <p className="text-black font-bold">Evano</p>
              <p className="text-slate-500">Project Manager</p>
            </div>
            <div>
            <FaAngleDown  className="text-slate-500 mb-2"/>
            </div>
          
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
