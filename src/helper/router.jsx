import { Outlet, Navigate, Route , Routes} from "react-router";
import { useSelector } from "react-redux";
import Navbar from "../layout/navbar/Navbar";
import ProductHome from "../pages/Home/ourProduct/product";
import CasesHome from "../pages/Home/cases/casesHome";
import FeaturesHome from "../pages/Home/features/featuresHome";
import FrequentlyHome from "../pages/Home/frequently/frequentlyHome";
import SliderHome from "../pages/Home/slider/sliderHome";
import Landinghome from "../pages/Home/landing/Landhome";
import TodayHome from "../pages/Home/today/todayHome";
import Footer from "../layout/footer/footer";
import LandinCareers from "../pages/Careers/landing/landinCareers";
import ValuesCareers from "../pages/Careers/values/valuesCareers";
import BenefitsCareers from "../pages/Careers/benefits/benefitsCareers";
import JobCarees from "../pages/Careers/jobCareers/jobCarees";
import LandingAbout from "../pages/About/landing/landingAbout";
import MissionAbout from "../pages/About/mission/missionAbout";
import PressAbout from "../pages/About/press/pressAbout";
import LandingSecurity from "../pages/SecurityPage/landing/landingSecurity";
import SectionSceurity from "../pages/SecurityPage/section_2/sectionSecurity";
import Login from "../pages/login/login";
import Sigup from "../pages/signUp/sigup";
import ForgotPassword from "../pages/forget/forgotPassword";
import Profile from "../pages/profile/profile";
// import { useSelector } from "react-redux";
import VerificationCode from "../pages/verification Code/verificationCode";
import ResetPassword from "../pages/resetPassword/verificationCode";
 const ProductRouter = () => {
  const user = useSelector((state) => state.auth.user);
  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};
export const Routers = () => {
  return (
    <>
<Routes>
  <Route element={
<ProductRouter/>
  }
  >
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Landinghome />
            <ProductHome />
            <CasesHome />
            <FeaturesHome />
            <FrequentlyHome />
            <SliderHome />
            <TodayHome />
            <Footer />
          </>
        }
      />
      <Route
        path="/careers"
        element={
          <>
            <Navbar />
            <LandinCareers />
            <ValuesCareers />
            <BenefitsCareers />
            <JobCarees />
            <FrequentlyHome />
            <TodayHome />
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <LandingAbout />
            <MissionAbout />
            <PressAbout />
            <Footer />
          </>
        }
      />
      <Route
        path="/security"
        element={
          <>
            <Navbar />
            <LandingSecurity />
            <SectionSceurity />
            <FrequentlyHome />
            <Footer />
          </>
        }
      />
  </Route>
    
      <Route
        path="/signup"
        element={
          <>
            <Navbar />
            <Sigup />
            <SliderHome />
            <Footer />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
            <SliderHome />
            <Footer />
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <Navbar />
            <Profile />
            <SliderHome />
            <Footer />
          </>
        }
      />
      <Route
        path="/forgotPassword"
        element={
          <>
            <Navbar />
            <ForgotPassword />
            <Footer />
          </>
        }
      />
      <Route
        path="/verificationCode"
        element={
          <>
            <Navbar />
            <VerificationCode />
            <Footer />
          </>
        }
      />
      <Route
        path="/reset-password/:userId/:token"
        element={
          <>
            <Navbar />
            <ResetPassword />
            <Footer />
          </>
        }
      />
      </Routes>
    </>
  );
};
