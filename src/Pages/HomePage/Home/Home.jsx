import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import OurMission from "../OurMission/OurMission";
import Support from "../Support/Support";
import Team from "../Team/Team";
import LatestNews from "../LatestNews/LatestNews";
import Subscribe from "../Subscribe/Subscribe";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <Team></Team>
            <Support></Support>
            <OurMission></OurMission>
            <LatestNews></LatestNews>
            <Subscribe></Subscribe>
            <Review></Review>
        </div>
    );
};

export default Home;