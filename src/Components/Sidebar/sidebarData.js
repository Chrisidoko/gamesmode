import React from "react";
import { MdHomeFilled, MdPeopleAlt, MdSettings } from "react-icons/md";
import { AiFillFire, AiFillAppstore, AiOutlineDownload } from "react-icons/ai";
import { BsBroadcast } from "react-icons/bs";

export const sidebarData = [
  {
    title: "Home",
    icon: <MdHomeFilled />,
    path: "/home",
  },
  {
    title: "Store",
    icon: <AiFillFire />,
    path: "/store",
  },
  {
    title: "Library",
    icon: <AiFillAppstore />,
    path: "/library",
  },
  {
    title: "Friends",
    icon: <MdPeopleAlt />,
    path: "/friends",
  },
  {
    title: "Live",
    icon: <BsBroadcast />,
    path: "/live",
  },
];

export const sidebarData2 = [
  {
    title: "Cart",
    icon: <AiOutlineDownload />,
    path: "/cart",
  },
  {
    title: "Settings",
    icon: <MdSettings />,
    path: "/settings",
  },
];
