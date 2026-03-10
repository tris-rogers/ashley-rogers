import About from "./about";

const AboutContainer = () => {

    const qualificationsArr = [
        "Integrative counsellor with over ten years of experience",
        "Advanced Diploma in Integrative Counselling",
        "Registered member of the BACP",
        "Working in accordance with the BACP Ethical Framework",
        "Supporting individuals through trauma, loss, domestic abuse, relationship breakdown and significant life transitions"
        
    ];
    return (
        <About
            qualificationsArr={qualificationsArr}
        />
    )
}

export default AboutContainer;