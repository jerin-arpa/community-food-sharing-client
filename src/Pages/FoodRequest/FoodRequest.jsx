import { Helmet } from "react-helmet";

const FoodRequest = () => {
    return (
        <div className="container mx-auto px-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Food Request</title>
            </Helmet>
            <h2>Food Request</h2>
        </div>
    );
};

export default FoodRequest;