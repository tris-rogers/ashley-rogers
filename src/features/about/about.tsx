import "./about.css"

type AboutProps = {
    aboutMeTextArr: string[];
    qualificationsArr: string[];
}

const About = ({ aboutMeTextArr, qualificationsArr }: AboutProps) => {
    return (
        <div id="about" className="about-section section-container section-container-light">
            <div className="sections">
                <div className="section-elements-container">
                    <h1 className="section-element main-title section-title">
                        About Me
                    </h1>

                    {
                        aboutMeTextArr.map((paragraph: string, index: number) => (
                            <p key={index} className="section-element about-paragraph">
                                {paragraph}
                            </p>
                        ))
                    }
                </div>

                <div className="section-elements-container">
                    <div className="qualifications-container bubble-container section-element">
                        <div className="qualifications-title">Qualifications</div>
                        <div className="qualifications-list">
                            {
                                qualificationsArr.map((qualification: string, index: number) => (
                                    <div key={index} className="list-item">
                                        <i className="fa-regular fa-circle-check"></i> {qualification}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;