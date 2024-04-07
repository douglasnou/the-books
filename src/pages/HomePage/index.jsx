import { BannerSection } from "../../Components/BannerSection"
import { BooksSection } from "../../Components/BooksSection"
import { DeafaultTemplate } from "../../Components/DefaultTemplate"

export const HomePage = ()=>{
    return(
    <DeafaultTemplate>
        <BannerSection/>
        <BooksSection/>
    </DeafaultTemplate>
    )
}