import {CTAPrimary, CTASecondary} from "../../components/buttons/cta-buttons";

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
            imageUrl="\src\assets\images\professional-portrait.jpg"
        />
    );
}

export default HomeContainer;