// Home Page of the website
import { HomeNav } from "../components/home-nav"
import { HomeMain } from "../components/home-main"
import { HomeFooter } from "../components/home-footer"

export function Home() {
    return (
        <div className="page-wrapper">
            <HomeNav />
            <HomeMain />
            <HomeFooter />
        </div>
    )
}