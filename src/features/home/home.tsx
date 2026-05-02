import DropdownContainer from "../../components/dropdown/dropdown-container";
import "./home.css";

type HomeProps = {
    buttons: React.ReactNode;
    imageUrl: string;
}

const Home = ({ buttons, imageUrl }: HomeProps) => (
    <>
        <div className="home-container section-container" id="home">
            <div className="sections">
                <div className="section-elements-container">
                    <div className="section-element mini-title">
                        Online counselling for adults across the UK
                    </div>

                    <h1 className="section-element main-title section-title">
                        A <span className="accentuate">safe</span> space to explore your experiences, rebuild your sense of self, and
                        move forward with greater <span className="accentuate">clarity</span> and <span className="accentuate">confidence</span>.
                    </h1>

                    <div className="section-element blurb">
                        At times life can feel overwhelming. You may be carrying difficult emotions such as grief, fear, shame or
                        self-doubt, or struggling with the effects of trauma, relationship difficulties, or significant life changes.
                        When things begin to feel heavy or confusing, having a supportive space to talk can make a real
                        difference.
                    </div>

                    <div className="section-element blurb">
                        Counselling offers a place where you can speak openly about what you are experiencing, without
                        judgement or pressure. Together we can gently explore your thoughts, feelings and experiences, helping
                        you begin to make sense of what is happening in your life.
                    </div>

                    <div className="section-element blurb">
                        I offer online counselling for adults, providing a calm and compassionate environment where you can
                        move at a pace that feels safe for you. You do not need to have everything figured out before starting.
                        Over time, counselling can help you develop greater self-understanding, strengthen your sense of self, and
                        begin to move forward with more clarity, confidence and self-compassion.
                    </div>

                    <div className="section-element cta-buttons-container">
                        {buttons}
                    </div>
                </div>

                <div className="section-elements-container" style={{display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "baseline"}}>
                    <div className="section-element image-container">
                        <img src={imageUrl} alt="Ashley Rogers Professional Photo" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>

        <div className="section-container" style={{flexDirection: "column", alignItems: "center"}}>
            <div className="sections" style={{width: "100%"}}>
                <DropdownContainer
                    title={"How Counselling May Help"}
                    content={
                        <div>
                            <p>
                                Many people come to counselling when life experiences begin to feel difficult to carry alone.
                                You may be feeling overwhelmed, stuck, or struggling to understand your thoughts and emotions. Perhaps
                                something in your life has changed, or past experiences are continuing to affect how you feel today.
                            </p>
                            <p>
                                Counselling can offer a space to:
                            </p>
                            <ul>
                                <li>Talk openly about what you are experiencing</li>
                                <li>Make sense of difficult emotions</li>
                                <li>Explore patterns or experiences that may be affecting you</li>
                                <li>Develop greater understanding, resilience and self-compassion</li>
                                <li>Begin to move forward with more clarity and confidence</li>
                            </ul>
                            <p>I have over ten years of experience supporting adults through complex and challenging life situations.</p>
                            <p>I commonly support people experiencing:</p>
                            <ul>
                                <li>Trauma and difficult past experiences</li>
                                <li>Low self-esteem and identity difficulties</li>
                                <li>Grief and loss</li>
                                <li>Relationship difficulties or separation</li>
                                <li>Recovery from domestic abuse</li>
                                <li>Major life transitions</li>
                                <li>Feelings of shame, guilt, fear or anxiety</li>
                                <li>Emotional distress or suicidal thoughts</li>
                            </ul>
                        </div>
                    }
                />
            </div>

            <div className="sections" style={{width: "100%", marginTop: "50px"}}>
                <DropdownContainer
                    title={"My Approach to Counselling"}
                    content={
                        <div>
                            <p>
                                I am an <strong>integrative</strong> counsellor, which means I draw on different therapeutic approaches to support each
                                person as an individual.
                            </p>

                            <p>
                                My work is influenced by <strong>person-centred, trauma-informed and relational approaches</strong>, allowing
                                therapy to be flexible and responsive to your experiences and needs.
                            </p>

                            <p>
                                I believe counselling should meet you where you are. My role is not to judge or direct your life, but to
                                offer a supportive space where you can explore your experiences safely and begin to understand yourself
                                more deeply with added compassion.
                            </p>

                            <p>
                                My approach is calm, grounded and collaborative. Together we can work at a pace that feels comfortable
                                for you and my hope is that you will feel more resourced and stronger in yourself following support.
                            </p>
                        </div>
                    }
                />
            </div>

            <div className="sections" style={{width: "100%", marginTop: "50px"}}>
                <DropdownContainer
                    title={"Experience and Professional Background"}
                    content={
                        <div>
                            <p>
                                I have spent many years working in specialist support services including <strong>domestic abuse services,
                                substance misuse support and crisis helplines</strong>.
                            </p>
                            <p>
                                Through this work I have supported people experiencing trauma, grief, identity change, crisis and
                                emotional distress.
                            </p>
                            <p>
                                These experiences have given me strong safeguarding awareness and extensive experience supporting
                                people through complex and sensitive situations.
                            </p>
                            <p>
                                I hold an <strong>Advanced Diploma in Integrative Counselling</strong> and I am a <strong>member of the BACP</strong>, working in
                                line with the <strong>BACP Ethical Framework</strong>.
                            </p>
                            <p>
                                Confidentiality, professional integrity and reflective practice are central to the way I work.
                                I offer <strong>online counselling</strong>, providing flexibility while maintaining a safe and confidential therapeutic
                                space.
                            </p>
                        </div>
                    }
                />
            </div>

            <div className="sections" style={{width: "100%", marginTop: "50px"}}>
                <DropdownContainer
                    title={"Taking the First Step"}
                    content={
                        <div>
                            <p>
                                Reaching out for counselling can feel like a big step, particularly if you are used to coping on your own.
                                You do not need to have everything figured out before getting in touch.
                            </p>
                            <p>
                                If you would like to contact me, we can begin with an initial free 30 min conversation to talk about what
                                has brought you to counselling and whether working together feels right for you.
                            </p>
                            
                        </div>
                    }
                />
            </div>
        </div>
    </>
)

export default Home;