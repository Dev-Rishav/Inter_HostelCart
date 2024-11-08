import { useState } from "react";
import LandingPage from "../Components/LandingPage";
import Layout from "../Components/Layout";
import Animation from "../Components/Animation";
import Deal from "./Deal"
const Home = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete ? (
        <Animation setLoadingComplete={setLoadingComplete} />
      ) : (
          <Deal />     
      )}
    </>
  );
};

export default Home;
