import Footer from "./Footer.jsx";
import Section from "./Section.jsx";
import React,{ useState } from "react";
import Animation from "./Animation.jsx";
function App() 
{
  const [loadingComplete, setLoadingComplete] = useState(false); 
  return (
    <> 
      {!loadingComplete ? (
        <Animation setLoadingComplete={setLoadingComplete} />) : (
        <div>
          <Section />
          <Footer />
        </div>
      )}
    </>
  );
}
export default App;
