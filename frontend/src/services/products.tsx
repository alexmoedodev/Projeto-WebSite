import React from "react";
import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export type ProductsProps = {
  id: string; // <-- adicionado
  code: number;
  name: string;
  stars: React.ReactNode;
  price: string;
  filters: "All" | "New In" | "Top Rated" | "Tensing Items";
  img: string;
  off: string | null | undefined;
  status: boolean;
  topSale: boolean;
};

export const products: ProductsProps[] = [
  /* 01 */
  {
    id: "1",
    code: 1,
    name: "Stylish Grey Chair",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 150,00",
    off: "10% OFF",
    filters: "New In",
    img: "/defaultProduct1.png",
    status: true,
    topSale: false,
  },
  /* 02 */
  {
    id: "2",
    code: 2,
    name: "Chair pillow",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 190,00",
    off: "10% OFF",
    filters: "New In",
    img: "/defaultProduct2.png",
    status: true,
    topSale: false,
  },
  /* 03 */
  {
    id: "3",
    code: 3,
    name: "Seater Gray Sofa",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 300,00",
    off: "15% OFF",
    filters: "New In",
    img: "/defaultProduct3.png",
    status: true,
    topSale: false,
  },
  /* 04 */
  {
    id: "4",
    code: 4,
    name: "Wooden Chair",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 129,00",
    off: null,
    filters: "Top Rated",
    img: "/defaultProduct4.png",
    status: true,
    topSale: true,
  },
  /* 05 */
  {
    id: "5",
    code: 5,
    name: "Alexander Sofa",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 150,00",
    off: null,
    filters: "Top Rated",
    img: "/defaultProduct5.png",
    status: true,
    topSale: true,
  },
  /* 06 */
  {
    id: "6",
    code: 6,
    name: "Stylish Grey Chair",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 150,00",
    off: "7% OFF",
    filters: "Tensing Items",
    img: "/defaultProduct6.png",
    status: true,
    topSale: true,
  },
  /* 07 */
  {
    id: "7",
    code: 7,
    name: "Chair Nobody Armchair",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 80,00",
    off: null,
    filters: "Tensing Items",
    img: "/defaultProduct7.png",
    status: true,
    topSale: true,
  },
  /* 08 */
  {
    id: "8",
    code: 8,
    name: "Realistic Sofa",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 49,00",
    off: "50% OFF",
    filters: "Tensing Items",
    img: "/defaultProduct8.png",
    status: false,
    topSale: true,
  },
  /* 09 */
  {
    id: "9",
    code: 9,
    name: "Modern Lamp",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 89,00",
    off: "30% OFF",
    filters: "New In",
    img: "/defaultProduct9.png",
    status: true,
    topSale: false,
  },
  /* 10 */
  {
    id: "10",
    code: 10,
    name: "Wooden Table",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 199,00",
    off: "20% OFF",
    filters: "Top Rated",
    img: "/defaultProduct10.png",
    status: true,
    topSale: true,
  },
  /* 11 */
  {
    id: "11",
    code: 11,
    name: "Velvet Chair",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 129,00",
    off: "40% OFF",
    filters: "Tensing Items",
    img: "/defaultProduct11.png",
    status: false,
    topSale: false,
  },
  /* 12 */
  {
    id: "12",
    code: 12,
    name: "Glass Coffee Table",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 159,00",
    off: "25% OFF",
    filters: "Top Rated",
    img: "/defaultProduct12.png",
    status: true,
    topSale: true,
  },
  /* 13 */
  {
    id: "13",
    code: 13,
    name: "Abstract Painting",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 79,00",
    off: "35% OFF",
    filters: "New In",
    img: "/defaultProduct13.png",
    status: true,
    topSale: false,
  },
  /* 14 */
  {
    id: "14",
    code: 14,
    name: "Classic Rug",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 249,00",
    off: "10% OFF",
    filters: "All",
    img: "/defaultProduct14.png",
    status: false,
    topSale: true,
  },
  /* 15 */
  {
    id: "15",
    code: 15,
    name: "Minimalist Bookshelf",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 179,00",
    off: "45% OFF",
    filters: "Tensing Items",
    img: "/defaultProduct15.png",
    status: true,
    topSale: false,
  },
  /* 16 */
  {
    id: "16",
    code: 16,
    name: "Luxury Bed Frame",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 799,00",
    off: "50% OFF",
    filters: "Top Rated",
    img: "/defaultProduct16.png",
    status: true,
    topSale: true,
  },
];
