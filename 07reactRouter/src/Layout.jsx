import Header from "./components/header/header"
import Footer from "./components/footer/Footer"
import {Outlet} from "react-router"

export default function Layout(){
    return(<>
        <Header />
        <Outlet />
        <Footer />
    </>)
}