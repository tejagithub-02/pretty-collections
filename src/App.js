import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Banner from './components/Banner';
import CategoryCarousel from './components/CategoryCarousel';
import PopularProducts from './components/PopularProducts';
import TrendingProducts from './components/TrendingProducts';
import BrandedProducts from './components/BrandedProducts';
import ExploreMore from './components/ExploreMore';
import NewArrivals from './components/NewArrivals';
import EnquiryForm from './components/EnquriyForm';
import Footer from './components/Footer';
import FaqPage from './pages/FaqPage'; 
import TermsPage from './pages/TermsPage'; 
import Privacy from './pages/Privacy'; 
import Copyright from './pages/Copyright';
import Patents from './pages/Patents';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import AllProducts from './pages/AllProducts';
import BulkOrder from './pages/BulkOrder';
import UserSidebar from './userpages/UserSidebar';
import Dashboard from './userpages/DashBoard';
import Profile from './userpages/Profile';
import MyProjects from './userpages/MyProjects';
import Favorites from './userpages/Favorites';
import OrderHistory from './userpages/OrderHistory';
import Reorder from './userpages/Reorder';
import AccountSettings from './userpages/AccountSettings';
import PaymentDelivery from './userpages/PaymentDelivery';
import DeleteAccount from './userpages/DeleteAccount';
import Logout from './userpages/Logout';
import ChangePassword from './userpages/ChangePassword';
import AboutUs from './components/AboutUs';
import WhatsAppButton from './components/WhatsAppButton';

const HomePage = () => (
  <>
    <Banner />
    <CategoryCarousel />
    <PopularProducts />
    
    <TrendingProducts />
    <BrandedProducts />
    <ExploreMore />
    <NewArrivals />
    <AboutUs/>
    <EnquiryForm />
    <Footer />
    <WhatsAppButton/>
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/bulk-order" element={<BulkOrder />} />
      
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        <Route path="/user-sidebar" element={<UserSidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/order" element={<OrderHistory />} />
        <Route path="/reorder" element={<Reorder />} />
        <Route path="/settings" element={<AccountSettings />} />
        <Route path="/payment" element={<PaymentDelivery />} />
        <Route path="/delete" element={<DeleteAccount />} />
        <Route path="/password" element={<ChangePassword />} />
        
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
