import LandingPage from "../Components/LandingPage";
import Navbar from "../Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from "../Components/ProductPage";
import Footer from "../Components/Footer";
import ProductdetailsPage from "../Components/ProductdetailsPage";
import { useState } from "react";
import { items } from "../Data/ProductPageData";
import SearchProductPage from "../Components/SearchProductPage";



export default function App() {
  const [data, setData] = useState([...items])

  return (
    <>

      <Router>
        <Navbar setData={setData} />
        <Routes>


          <Route path="/" element={<LandingPage />} />
          <Route path="/productpage" element={<ProductPage items={data} />} />
          <Route path="/ProductdetailsPage/:id" element={<ProductdetailsPage />} />
          <Route path="/searchitempage/:term" element={<SearchProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
