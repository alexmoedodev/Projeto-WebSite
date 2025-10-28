import React from "react";

import { FaTruck } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export type WhyChooseProps = {
  code: number;
  icon: React.ReactNode;
  name: string;
  details: string;
  status: boolean
  createdAt: string
};

export const WhyChooseService: WhyChooseProps[] = [
  {
    code: 1,
    icon: <FaTruck />,
    name: "Free Delivery",
    details: "Free shopping on all order",
    status: true,
    createdAt: "11-10-2028 16:15"
  },
  {
    code: 2,
    icon: <FaCreditCard />,
    name: "Monet Return",
    details: "Back guarantee under 7 day",
    status: true,
    createdAt: "11-10-2028 16:15"
  },
  {
    code: 3,
    icon: <MdOutlineSupportAgent />,
    name: "Online Support",
    details: "Support online 24 hours a day",
    status: true,
    createdAt: "11-10-2028 16:15"
  },
  {
    code: 4,
    icon: <VscWorkspaceTrusted />,
    name: "Reliable",
    details: "Trusted by 1000+ brands",
    status: true,
    createdAt: "11-10-2028 16:15"
  },
];
