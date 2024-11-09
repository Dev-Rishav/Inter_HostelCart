
import Navbar from "./Navbar2"
import Footer from "./Footer";

const Layout=({children})=>{

    return(

        <div>
            <Navbar/>
            <div className="main-content ">
                {children}
            </div>
            <Footer/>

        </div>
    )
}

export default Layout;