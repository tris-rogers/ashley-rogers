import "./testimonial.css";

const Testimonial = ({testimonials}) => {
    return (
        <div className="testimonials-container">
            <i className="fas fa-quote-left left-quote"></i>
            <p>{testimonials[0]}</p>
            <i className="fas fa-quote-right right-quote"></i>
        </div>
    )
}

export default Testimonial;