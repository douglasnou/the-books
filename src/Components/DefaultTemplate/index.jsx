import { Footer } from "../Footer"
import { Header } from "../Header"

export const DeafaultTemplate = ({children})=>{
    return(
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}