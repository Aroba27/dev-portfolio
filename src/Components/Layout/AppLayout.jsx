import { Outlet } from "react-router-dom"
import { Headers } from "../UI/headers"
import { Footer } from "../UI/Footer"

export const AppLayout = () => {
    return(
        <>
       <Headers/>
       <Outlet/>
       <Footer/>
        </>
    )
}