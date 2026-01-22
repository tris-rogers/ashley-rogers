import { CTAPrimary } from "../../components/buttons/cta-buttons";
import Pricing from "./pricing"

type PricingContainerProps = {
    title: string;
    price: number;
    description: string;
    points: string[];
    button: React.ReactNode;
}

const PricingContainer = () => {
    const prices: PricingContainerProps[] = [
        {
            title: "Individual Therapy",
            price: 100,
            description: "Personalized one-on-one counselling sessions to help you navigate life's challenges and promote mental well-being.",
            points: ["Comprehensive assessment", "Personalized treatment plan", "Flexible scheduling"],
            button: <CTAPrimary />
        },
        {
            title: "KnobSquashing",
            price: 500,
            description: "Personalized one-on-one counselling sessions to help you navigate life's challenges and promote mental well-being.",
            points: ["Comprehensive assessment", "Personalized treatment plan", "Flexible scheduling"],
            button: <CTAPrimary />
        }
    ]
    return (
        <Pricing prices={prices} />
    )
}

export default PricingContainer;