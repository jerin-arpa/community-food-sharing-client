import { Helmet } from "react-helmet";

const AddFood = () => {
    return (
        <div className="container mx-auto px-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Sharing | Add Food</title>
            </Helmet>
            <h2>Add Food</h2>
        </div>
    );
};

export default AddFood;