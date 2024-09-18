import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout'; 
import UnifiedSection from './Components/UnifiedSection';
import MenBannerlist from './json/mensItems';
import WomenBannerlist from './json/womensItems';
import Home from './pages/Home'; 
import MyShop from './pages/MyShop'; 
import Orders from './pages/Orders';
import Deal from './pages/Deal';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/myShop" element={<MyShop />} />
          <Route path="/deal" element={<Deal />} />
          <Route path="/mens" element={<UnifiedSection items={MenBannerlist} sectionTitle="Men's Section" />} />
          <Route path="/womens" element={<UnifiedSection items={WomenBannerlist} sectionTitle="Women's Section" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;