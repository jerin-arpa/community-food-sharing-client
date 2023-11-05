import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import OurMission from "../OurMission/OurMission";
import Support from "../Support/Support";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Home</title>
            </Helmet>
            <Banner></Banner>

            <Team></Team>
            <Support></Support>
            <OurMission></OurMission>
        </div>
    );
};

export default Home;