
import type { ServiceItem } from "./service-types";

import "./services.css";

type ServicesProps = {
    services?: ServiceItem[];
}

const Services = ({ services = [] }: ServicesProps) => (
    <div className="services-container section-container" id="services">
        <h1 className="section-element main-title section-title">
            Services
        </h1>
        <p className="section-element services-blurb">
            I offer a range of counselling services designed to support your mental health and well-being
        </p>

        <div className="service-item-container">
            {
                services.map((service: ServiceItem, index: number) => (
                    <div key={index} className="bubble-container service-item section-element">
                        <div className="service-icon">
                            {service.icon}
                        </div>
                        <div className="service-body">
                            <div className="service-title">{service.title}</div>
                            <div className="service-text">
                                {service.text}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Services;