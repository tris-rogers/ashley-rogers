import "./pricing.css"

type PricingItem = {
    title: string;
    price: number;
    description: string;
    points: string[];
    button: React.ReactNode;
}

type PricingProps = {
    prices: PricingItem[];
}

const Pricing = ({ prices }: PricingProps) => (
    <div id="pricing" className="pricing-container section-container section-container-light">
        <h1 className="section-element main-title section-title">
            Pricing
        </h1>

        <p className="section-element pricing-blurb">Transparent pricing for professional counselling services.</p>

        <div className="pricing-item-container">
            {
                prices.map((priceItem: { title: string; price: number; description: string, points: string[] }, index: number) => (
                    <div key={index} className="bubble-container pricing-item section-element">
                        <div className="pricing-title">{priceItem.title}</div>
                        <div className="pricing-price"><span>£{priceItem.price}</span> / 60 minutes</div>
                        <p className="pricing-details">{priceItem.description}</p>

                        {
                            priceItem.points.map((point: string, pointIndex: number) => (
                                <div key={pointIndex} className="pricing-point-item">
                                    <i className="fa-regular fa-circle-check"></i> {point}
                                </div>
                            ))
                        }

                    </div>
                ))
            }
        </div>
    </div>
)

export default Pricing;