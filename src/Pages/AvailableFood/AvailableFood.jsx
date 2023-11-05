import { Helmet } from "react-helmet";

const AvailableFood = () => {
    return (
        <div className="container mx-auto px-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Available Food</title>
            </Helmet>
            <h2>Available Food</h2>
        </div>
    );
};

export default AvailableFood;