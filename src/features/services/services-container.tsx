import type { ServiceItem } from "./service-types";
import Services from "./services";

const ServicesContainer = () => {

    const servicesList: ServiceItem[] = [
        {
            icon: <i className="fa-solid fa-person"></i>,
            title: "Individual Therapy",
            text: "Personalized one-on-one counselling sessions to help you navigate life's challenges and promote mental well-being."
        },
        {
            icon: (
                <div>
                    <i className="fa-solid fa-person"></i>
                    <i className="fa-solid fa-person-dress"></i>
                </div>
            ),
            title: "Couples Counselling",
            text: "Supportive therapy sessions designed to improve communication, resolve conflicts, and strengthen relationships."
        },
        {
            icon: <i className="fa-solid fa-carrot"></i>,
            title: "Knobsquashery",
            text: "A unique therapeutic approach focusing on the art of knobsquashing to relieve stress and enhance emotional balance."
        }
    ];

    return (
        <Services services={servicesList} />
    )
}

export default ServicesContainer;