
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import HomePage from "./pages/HomePage";
import Partners from "./layout/Partners/Partners";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import Profile from "./pages/Profile";



function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productId" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Partners />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
