import DropdownContainer from "../../components/dropdown/dropdown-container";

import "./about.css";

type AboutProps = {
    qualificationsArr: string[];
}

const About = ({ qualificationsArr }: AboutProps) => {
    return (
        <>
            <div id="about" className="about-section section-container section-container-light">
                <div className="sections">
                    <div className="section-elements-container">
                        <h1 className="section-element main-title section-title">
                            About Me
                        </h1>

                        <p className="section-element about-paragraph">
                            I am an integrative counsellor with over ten years of experience supporting adults through difficult and complex life experiences.
                        </p>
                        <p className="section-element about-paragraph">
                            My work has often involved supporting individuals who are navigating the emotional impact of trauma, loss, domestic abuse, relationship breakdown and significant life transitions.
                        </p>
                        <p className="section-element about-paragraph">
                            I am particularly interested in working with issues relating to <strong>trauma, identity and self-esteem</strong>, and supporting people to develop greater self-understanding and compassion for themselves.
                        </p>
                        <p className="section-element about-paragraph">
                            Before establishing private practice, I worked for many years within specialist support services including
                            domestic abuse services, substance misuse support and crisis helplines.
                        </p>
                        <p className="section-element about-paragraph">
                            These roles involved supporting people through crisis, emotional distress and long-term recovery, and
                            have deeply informed my understanding of trauma-informed and ethical therapeutic practice.
                        </p>
                        <p className="section-element about-paragraph">
                            I hold an <strong>Advanced Diploma in Integrative Counselling</strong> and I am a <strong>registered member of the BACP</strong>,
                            working in accordance with the <strong>BACP Ethical Framework</strong>.
                        </p>
                    </div>

                    <div className="section-elements-container">
                        <div className="qualifications-container bubble-container section-element">
                            <div className="qualifications-title">Experience</div>
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
            <div className="section-container section-container-light" style={{flexDirection: "column", alignItems: "center"}}>
                <div className="sections" style={{width: "100%"}}>
                    <DropdownContainer
                        title={"What is counselling like?"}
                        content={
                                    <div>
                                        <p>
                                            Starting counselling can bring up many questions. You might wonder what sessions will be like, what you
                                            should talk about, or whether counselling will really help with what you are experiencing. It is completely
                                            normal to feel uncertain at the beginning.
                                        </p>
                                        <p>
                                            Counselling offers a confidential and supportive space where you can talk openly about your thoughts,
                                            feelings and experiences. Together we will begin by exploring what has brought you to therapy and what
                                            you hope to gain from the process. From there, we can gently shape an approach that feels helpful and
                                            supportive for you.
                                        </p>
                                        <p>
                                            There is no expectation to share everything straight away. Therapy moves at a pace that feels comfortable
                                            and safe for you. Some people arrive with a clear idea of what they want to talk about, while others
                                            simply know that something in their life feels difficult or overwhelming. Both are completely valid
                                            starting points.
                                        </p>
                                        <p>
                                            During sessions, I may ask questions that help you explore your thoughts and emotions more deeply,
                                            allowing space to reflect on your experiences and the meaning they hold for you. We will regularly check
                                            in about how the process is feeling, ensuring that the work remains supportive, collaborative and
                                            respectful of your boundaries.
                                        </p>
                                        <p>
                                            Some sessions may focus on challenges you are facing in the present, while others may involve reflecting
                                            on past experiences, emotions, or patterns that you are beginning to notice in your life. Through this
                                            process, many people begin to gain a clearer understanding of themselves, their relationships, and the
                                            experiences that have shaped them.
                                        </p>
                                        <p>
                                            Over time, counselling can support you in developing greater self-awareness, self-compassion and
                                            emotional resilience. This deeper understanding can help you recognise what is working in your life and
                                            what may no longer be serving you. It can also create space for meaningful change, allowing you to move
                                            forward with greater clarity, confidence and a stronger sense of who you are.
                                        </p>
                                    </div>
                                }
                    />
                </div>

                <div className="sections" style={{width: "100%", marginTop: "50px"}}>
                    <DropdownContainer
                        title={"How Online Counselling Works"}
                        content={
                                    <div>
                                        <p>
                                           Sessions take place online through a secure video platform. 
                                        </p>
                                        <p>
                                           Each session lasts <strong>1 hour</strong> and takes place at a regular agreed time. 
                                        </p>
                                        <p>
                                            Online counselling allows you to access therapy from the comfort of your own space, which many people
                                            find helps them feel more relaxed and able to talk.
                                        </p>
                                    </div>
                                }
                    />
                </div>

                <div className="sections" style={{width: "100%", marginTop: "50px"}}>
                    <DropdownContainer
                        title={"Your First Session"}
                        content={
                                    <div>
                                        <p>
                                           The first session is an opportunity for us to meet and begin to explore what has brought you to
                                            counselling.
                                        </p>
                                        <p>
                                           We may talk about:
                                        </p>
                                        <ul>
                                            <li>What you would like support with</li>
                                            <li>What is currently happening in your life</li>
                                            <li>Any questions or concerns you may have about counselling</li>
                                        </ul>
                                        <p>This session also gives you the chance to see whether you feel comfortable working with me.</p>
                                    </div>
                                }
                    />
                </div>
            </div>
        </>
    )
}

export default About;