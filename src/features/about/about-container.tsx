import About from "./about";

const AboutContainer = () => {
    const aboutMeTextArr = [
        "With over 5 years of experience in mental health counselling, I believe that everyone deserves a supportive space to explore their thoughts, feelings, and experiences without judgment.",
        "My approach is client-centered and integrative, drawing from evidence-based practices including Cognitive Behavioral Therapy (CBT), mindfulness techniques, and person-centered therapy. I work collaboratively with my clients to develop personalized strategies that promote lasting change.",
        "Whether you're dealing with anxiety, depression, relationship issues, or life transitions, I'm here to support you on your journey toward wellness and self-discovery."
    ];
    const qualificationsArr = [
        "Licensed Professional Counsellor",
        "5+ years of clinical experience",
        "Absolute KnobSquash"
        
    ];
    return (
        <About
            aboutMeTextArr={aboutMeTextArr}
            qualificationsArr={qualificationsArr}
        />
    )
}

export default AboutContainer;