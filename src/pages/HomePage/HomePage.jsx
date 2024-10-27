import { Accardeon } from "../../components/Accardeon/Accardeon";
import { Banner } from "../../components/Banner/Banner";
import ResponsiveSlider from "../../components/ResponsiveSlider/ResponsiveSlider";


export function HomePage() {
    return (
        <div className="main">
            <Banner />
            <div className="container">
                <ResponsiveSlider />
                <Accardeon />
            </div>
        </div>
    )
}