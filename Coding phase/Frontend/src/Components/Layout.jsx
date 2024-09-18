
import Navbar from "./Navbar2"


const Layout=({children})=>{

    return(

        <div>
            <Navbar/>
            <div className="main-content ">
                {children}
            </div>
            

        </div>
    )
}

export default Layout