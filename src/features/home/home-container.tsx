import {CTAPrimary, CTASecondary} from "../../components/buttons/cta-buttons";
import portrait from "../../assets/images/professional-portrait.jpg";

import Home from "./home";

const HomeContainer = () => {
    const buttons = (
        <>
            <CTAPrimary />
            <CTASecondary />
        </>
    );
    
    return (
        <Home
            buttons={buttons}
            imageUrl={portrait}
        />
    );
}

export default HomeContainer;