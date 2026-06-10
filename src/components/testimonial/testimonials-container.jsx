import Testimonial from "./testimonial";
const TestimonialsContainer = () => {
    const testimonials = ["Ashley was always calm and understanding. Patient and helped me process feelings, responses and helped me understand me. A fantastic listener who gave me space to speak without judgement, cry, a safe place to feel those painful feelings and memories. A professional counsellor through and through and is the only therapist I have seen that's been able to help me get real with myself. Forever gratful for the tools and kind of mindset shift I have learnt from Ashley. I still have a long way to go, yet I know the road will be bumpy and will always have Ashley as my kind self talk. So powerful. Thank you Ashley for helping me understand me."];
    return (
        <Testimonial testimonials={testimonials} />
    );
}

export default TestimonialsContainer;