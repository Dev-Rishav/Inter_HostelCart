import React,{ useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import loading from "../loading.json";

const Animation = ({ setLoadingComplete }) => 
{
   useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });

    const loadingTimeout = setTimeout(() => {
      setLoadingComplete(true); 
    }, 3000);     //3-second delay

    return () => clearTimeout(loadingTimeout); 
    }, [setLoadingComplete]);

    return (
     <div className="flex justify-center items-center h-screen">
       <h1 
        data-aos="zoom-out" 
        data-aos-duration="2000"  
        style={{marginLeft:600,marginTop:200}}> Loading... </h1>
       <Lottie animationData={loading} style={{ marginTop:-200,width: 700, height: 500 }} />
     </div>
  );
}

export default Animation;
