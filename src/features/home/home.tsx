import "./home.css"

type HomeProps = {
    buttons: React.ReactNode;
    imageUrl: string;
}

const Home = ({ buttons, imageUrl }: HomeProps) => (
    <div className="home-container section-container" id="home">
        <div className="sections">
            <div className="section-elements-container">
                <div className="section-element mini-title">
                    Professional Counselling Services
                </div>

                <h1 className="section-element main-title section-title">
                    A safe space for <span className="accentuate">Healing</span> and <span className="accentuate">Growth</span>
                </h1>

                <div className="section-element blurb">
                    I'm Ashley Rogers, a licensed counsellor dedicated to helping individuals navigate life's challenges with compassion, understanding, and evidence-based therapeutic approaches.
                </div>

                <div className="section-element cta-buttons-container">
                    {buttons}
                </div>
            </div>

            <div className="section-elements-container">
                <div className="section-element image-container">
                    <img src={imageUrl} alt="Ashley Rogers Professional Photo" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
)

export default Home;