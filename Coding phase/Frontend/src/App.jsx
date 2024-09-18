import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout'; // Correct the import statement
import UnifiedSection from './Components/UnifiedSection';
import MenBannerlist from './json/mensItems';
import WomenBannerlist from './json/womensItems';
import Home from './pages/Home'; // Ensure Home component is imported
import MyShop from './pages/MyShop'; // Ensure MyShop component is imported

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myShop" element={<MyShop />} />
          <Route path="/mens" element={<UnifiedSection items={MenBannerlist} sectionTitle="Men's Section" />} />
          <Route path="/womens" element={<UnifiedSection items={WomenBannerlist} sectionTitle="Women's Section" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;