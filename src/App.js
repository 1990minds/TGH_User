import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../src/Home"
import { useEffect, useState } from "react";
import Navbar from "../src/Global/Navbar";
import Head from "../src/Global/Header_for_mobile";
import Footer from "../src/Global/Footer";
import Foot from "../src/Global/Footer_for_mobile";
import Index from "../src/Home";
import IndexListPage from "./Listpage/IndexListPage";
import CabDetails from "./Home/CabDetails";
import IndexSeats from "./Seats/IndexSeats";
import Card from "./Home/Card";
import IndexBooking from "./BookingConfirmation/indexBooking";
import IndexUser from "./UserProfile/IndexUser";
import Signin from "./Register/Signin";
import Signup from "./Register/Signup";
import TermsandCondition from "./UserProfile/TermsandCondition";
import IndexFull from "./FullCars/IndexFull";
import IndexFullcab from "./FullCabBooking/IndexFullcab";
import FullCarBookingConfirmed from "./FullCabBooking/FullCarBookingConfirmed";
import IndexHomemobile from "./HomeMobile/IndexHomemobile";
import IndexHotel from "./Hotel/IndexHotel";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register(
            "/sw.js",
            { scope: "/" }
          );
          console.log(
            registration.installing
              ? "Service worker installing"
              : registration.waiting
              ? "Service worker installed"
              : "Service worker active"
          );
        } catch (error) {
          console.error(`Registration failed with ${error}`);
        }
      }
    };
    registerServiceWorker();
  }, []);

  return (
    <>
      <div>{isMobile ? <Head /> : <Navbar />}</div>
      <div>
        <Routes>
          <Route path="/" element={<IndexHomemobile />} />
          <Route path="/Book-cabs" element={<Index />} />
          <Route path="/sharedcabs" element={<IndexListPage />} />
          <Route path="/Seats/:vid" element={<IndexSeats />} />
          <Route path="/packages" element={<Card />} />
          <Route path="/sharedcabbookingconfirmed" element={<IndexBooking />} />
          <Route path="/userprofile" element={<IndexUser />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms-and-conditions" element={<TermsandCondition />} />
          <Route path="/fullcars" element={<IndexFull />} />
          <Route path="/fullcabbooking" element={<IndexFullcab />} />
          <Route
            path="/fullcabbookingconfirmed"
            element={<FullCarBookingConfirmed />}
          />
          <Route path="/home" element={<IndexHomemobile />} />
          <Route path="/hotels" element={<IndexHotel />} />
        </Routes>
      </div>
      <div>{isMobile ? <Foot /> : <Footer />}</div>
    </>
  );
}
