import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { BsBoxFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AiFillHome from "../Images/lion.png";
import TGH from "../Images/tgh.png";
import { PiShoppingCartFill } from "react-icons/pi";
import { useSelector } from "react-redux";
// import { cartProductSelector } from "../../Api/cartSlice";
import ScrollToTop from "react-scroll-to-top";
import { FaCar } from "react-icons/fa6";
import Hotel from "../Images/resorts.png";
import Courier from "../Images/delivery.png";
import Tours from "../Images/Tours.png";
import Cabs from "../Images/transport.png"
import Cry from '../Images/download.jpeg' 


function Footer() {
  // Replace with the actual cartProducts logic
//   const { cartProducts } = useSelector(cartProductSelector);

  return (
    <FooterWrap>
      {/* <ScrollToTop smooth top="50" /> */}
      <div className="bg-[#FFFFFF] top-border flex justify-around items-center mx-auto py-2 footer md:hidden sm:block fixed bottom-0 left-0 right-0 top-border z-auto">
        <Link to="/Book-cabs" className="flex flex-col items-center justify-center w-16 mt-1">
          <img src={Cabs} className="h-8 w-8" />
          <span className="text-xs text-gray-700 font-bold">Cabs</span>
        </Link>

        <Link to="/hotels" className="flex flex-col items-center justify-center w-16">
          <img src={Hotel} className="h-8 w-8 mt-1" />
          <span className="text-xs text-gray-700 font-bold">Hotels</span>
        </Link>

        <Link to="/" className="flex flex-col items-center justify-center w-16 mb-5">
          <img className="w-12 h-12 bg-white p-1 mb-2 rounded-full shadow-xl border-t border-[#696969]" src={TGH} alt="Home" />
          <span className="text-xs text-gray-700 font-bold">Home</span>
        </Link>

        <Link to="/packages" className="relative flex flex-col items-center justify-center w-16">
          <img src={Tours} className="h-8 w-8 mt-1" />
          {/* {cartProducts?.length > 0 && ( */}
            {/* <div className="absolute -top-2 right-2  bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartProducts?.length}
            </div> */}
          {/* )} */}
          <span className="text-xs text-gray-700 font-bold">Packages</span>
        </Link>

        <Link to="/userprofile" className="flex flex-col items-center justify-center w-16">
          <img src={Cry} className="h-8 w-12 mt-1" />
          <span className="text-xs text-gray-700 font-bold">Profile</span>
        </Link>
      </div>
    </FooterWrap>
  );
}

// const FooterWrap = styled.div`
//   .footer {
//     width: 100%;
//     height: 3.0rem;
//     position: fixed;
//     bottom: 0%;
//     left: 0%;
//     margin-Top: 0px;
//     z-index: 40;
//   }

//   .dropdown:hover .dropdown-menu {
//     display: block;
//   }

//   .navbtn {
//     li {
//       list-style: none;
//       height: 2px;
//       background-color: grey;
//       margin: 4px 0;
//     }
//   }

//   .badge,
//   .notification {
//     position: absolute;
//     z-index: auto;
//     min-width: 15px;
//     height: 15px;
//     padding: 0 3px;
//     color: #f9f9f9;
//     font-size: 10px;
//     line-height: 16px;
//     white-space: nowrap;
//     text-align: center;
//     background: #ff4d4f;
//     font-weight: bold;
//     border-radius: 10px;
//     -webkit-box-shadow: 0 0 0 1px #fff;
//     box-shadow: 0 0 0 1px #fff;
//   }

//   .badge {
//     transform: translate(14px, -28px);
//   }

//   .notification {
//     transform: translate(11px, -26px);
//   }
// `;
const FooterWrap = styled.div`
  .footer {
    width: 100%;
    height: 4.0rem;
    position: fixed;
    bottom: 2px;
    left: 0%;
    margin-top: 1px;
    z-index: 40;
    border-top: 1px solid #696969; 
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .navbtn {
    li {
      list-style: none;
      height: 2px;
      background-color: grey;
      margin: 4px 0;
    }
  }

  .badge,
  .notification {
    position: absolute;
    z-index: auto;
    min-width: 15px;
    height: 15px;
    padding: 0 3px;
    color: #f9f9f9;
    font-size: 10px;
    line-height: 16px;
    white-space: nowrap;
    text-align: center;
    background: #ff4d4f;
    font-weight: bold;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff;
  }

  .badge {
    transform: translate(14px, -28px);
  }

  .notification {
    transform: translate(11px, -26px);
  }
`;

export default Footer;